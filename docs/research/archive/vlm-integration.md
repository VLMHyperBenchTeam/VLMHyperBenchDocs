# Исследование интеграции VLM: HuggingFace vs vLLM

## 1. HuggingFace Transformers
Стандартный способ работы с моделями. Подходит для экспериментов и отладки, но медленнее для production-нагрузок.

### Особенности:
*   **Универсальность**: Поддерживает практически все VLM "из коробки" (Qwen2-VL, LLaVA, Idefics и др.).
*   **API**: Использует классы `AutoModelForVision2Seq` или специфичные (например, `Qwen2VLForConditionalGeneration`) и `AutoProcessor`.
*   **Обработка изображений**: Требует явной обработки через `process_vision_info` (для Qwen2-VL) или `processor`.
*   **Инференс**: `model.generate()`.

### Пример (Qwen2-VL):
```python
from transformers import Qwen2VLForConditionalGeneration, AutoProcessor
from qwen_vl_utils import process_vision_info

model = Qwen2VLForConditionalGeneration.from_pretrained("Qwen/Qwen2-VL-7B-Instruct", device_map="auto")
processor = AutoProcessor.from_pretrained("Qwen/Qwen2-VL-7B-Instruct")

messages = [
    {"role": "user", "content": [
        {"type": "image", "image": "file:///path/to/image.jpg"},
        {"type": "text", "text": "Describe this image."}
    ]}
]

text = processor.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
image_inputs, video_inputs = process_vision_info(messages)
inputs = processor(text=[text], images=image_inputs, videos=video_inputs, return_tensors="pt").to("cuda")

generated_ids = model.generate(**inputs, max_new_tokens=128)
output_text = processor.batch_decode(generated_ids, skip_special_tokens=True)
```

## 2. vLLM (Vision Language Model Support)
Высокопроизводительный движок для инференса. Подходит для production и массовой обработки (batching).

### Особенности:
*   **Скорость**: Значительно быстрее HF за счет PagedAttention и оптимизированных ядер.
*   **Поддержка моделей**: Поддерживает популярные VLM (LLaVA-1.5/1.6, Qwen2-VL, MiniCPM-V, Phi-3-Vision).
*   **API**:
    *   **Offline Inference**: `LLM` класс.
    *   **OpenAI Compatible Server**: Стандартный API (chat completions).
*   **Мультимодальность**: Данные передаются через поле `multi_modal_data` или в формате OpenAI Chat API (список контента с `type: image_url`).

### Пример (vLLM Offline Inference):
```python
from vllm import LLM, SamplingParams
from vllm.assets.image import ImageAsset

model_name = "Qwen/Qwen2-VL-7B-Instruct"
llm = LLM(
    model=model_name,
    limit_mm_per_prompt={"image": 1}, # Лимит изображений на промпт
)

sampling_params = SamplingParams(temperature=0.2, max_tokens=64)

# Формат ввода может отличаться в зависимости от версии vLLM и модели
# Для Qwen2-VL vLLM поддерживает стандартный формат сообщений (как в HF/OpenAI)
inputs = [
    {
        "prompt": "Describe this image.",
        "multi_modal_data": {
            "image": ImageAsset("cherry_blossom").pil_image
        },
    }
]

outputs = llm.generate(inputs, sampling_params=sampling_params)

for o in outputs:
    print(o.outputs[0].text)
```

## 3. Стратегия унификации в VLMHyperBench

Чтобы фреймворк поддерживал оба бекенда, необходимо абстрагировать логику инференса через интерфейс `ModelInterface`.

### 3.1. Абстракция `ModelInterface`
```python
class ModelInterface(ABC):
    @abstractmethod
    def load(self, model_path: str, **kwargs):
        pass

    @abstractmethod
    def generate(self, prompts: List[str], images: List[Image], **kwargs) -> List[str]:
        pass
```

### 3.2. Реализация `HuggingFaceModel`
*   Использует `transformers`.
*   Реализует специфичную для модели предобработку (через `AutoProcessor` и `qwen_vl_utils` если нужно).
*   Управляет памятью GPU вручную (если нужно очищать кэш).

### 3.3. Реализация `VLLMModel`
*   Использует `vllm.LLM`.
*   Преобразует входные данные в формат, ожидаемый vLLM (`multi_modal_data`).
*   Эффективно обрабатывает батчи (vLLM делает это автоматически, но интерфейс должен позволять передавать список промптов).

### 3.4. Конфигурация
В `user_config.csv` или конфиге модели (`vlm_base.csv`) добавить поле `backend`:
*   `backend`: `hf` | `vllm` | `sglang`

Это позволит пользователю выбирать движок инференса без изменения кода эксперимента.