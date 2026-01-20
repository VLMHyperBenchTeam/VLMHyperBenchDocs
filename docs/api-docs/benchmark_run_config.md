## BenchmarkRunConfig Objects

```python
@dataclass
class BenchmarkRunConfig()
```

Dataclass для хранения всех параметров запуска бенчмарка для одной модели в рамках одной структуры с полями.

**Attributes**:

- `dataset` _str_ - Название датасета, на котором будем оценивать работу модели.
- `framework` _str_ - Название фреймворка для инференса VLM-моделей (например, "Hugging Face", "vLLM", "SGLang").
- `model_name` _str_ - Название VLM-модели, которую будем оценивать на бенчмарке (например, "Qwen3-VL-4B").
- `model_params` _dict_ - Словарь специфичных настроек инференса (например, `ngram_size`, `response_format`).
- `task_name` _str_ - Название типа задачи, на которой оцениваем VLM-модель (например, "VQA", "OCR").
- `prompt_config` _dict_ - Конфигурация промптов, включая системные промпты и маппинг по типам документов.
- `docker_image` _str_ - Название Docker image, в котором будем проводить бенчмарк модели.
  Если None, то будет использован Docker image из `vlmhyperbench/vlm_base.csv`,
  для запуска указанной модели в указанном фреймворке инференса.
- `python_package` _str_ - Название python-пакета с классом нужной VLM-модели.
- `module` _str_ - Название модуля в python-пакете с классом нужной VLM-модели.
- `class_name` _str_ - Название класса нужной VLM-модели в указанном python-пакете.
- `system_prompt` _str | None_ - Название текстового файла, содержащего system prompt,
  который будет передан VLM-модели при ее инициализации. Optional.
  Defaults to None.
- `metrics` _list[str] | None_ - Список метрик, которые будем оценивать по ответам модели
  (например, ['WER', 'CER', 'BLEU']). Optional. Defaults to None.
  Если None, то метрики оцениваться не будут и этап 2 будет пропущен.
- `only_evaluate_metrics` _bool_ - Если True, то пропускаем этап 1 оценки VLM-модели на датасете
  и сразу переходим к этапу оценки метрик. Optional.
  Defaults to False.
- `metrics_aggregators` _list[str] | None_ - Список типов агрегаторов, используя которые рассчитываем метрики
  (например, ["by_id", "by_doc_type", "overall"]). Optional. Defaults to None.
  Если None, то метрики оцениваться не будут и этап 2 будет пропущен.
- `filter_doc_class` _str | None_ - Разметка датасета annotation.csv, будет отфильтрована, так чтобы
  в датасете в столбце "doc_class" остались только значения равные заданному. Optional. Defaults to None.
- `filter_question_type` _str | None_ - Разметка датасета annotation.csv, будет отфильтрована, так чтобы
  в датасете в столбце "question_type" остались только значения равные заданному. Optional. Defaults to None.

<a id="benchmark_run_config.benchmark_run_config.benchmark_run_config.BenchmarkRunConfig.to_json"></a>

#### to\_json

```python
def to_json(file_path: str) -> None
```

Сериализует объект в JSON и сохраняет его в файл.

**Arguments**:

- `file_path` _str_ - Путь к файлу, в который будет сохранён JSON.

<a id="benchmark_run_config.benchmark_run_config.benchmark_run_config.BenchmarkRunConfig.from_json"></a>

#### from\_json

```python
@classmethod
def from_json(cls, file_path: str) -> "BenchmarkRunConfig"
```

Десериализует объект из JSON-файла.

**Arguments**:

- `file_path` _str_ - Путь к JSON-файлу, из которого будет загружен объект.
  

**Returns**:

- `BenchmarkRunConfig` - Экземпляр класса BenchmarkRunConfig, созданный из JSON-файла.

