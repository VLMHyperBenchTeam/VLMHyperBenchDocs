## Qwen2VLModel Objects

```python
class Qwen2VLModel(ModelInterface)
```

<a id="model_qwen2-vl.model_qwen2_vl.models.Qwen2VLModel.predict_on_images"></a>

#### predict\_on\_images

```python
def predict_on_images(images: List[Any], question: str) -> str
```

Реализация метода для предсказания на основе нескольких изображений.

**Arguments**:

- `images` _List[Any]_ - Список изображений, на основе которых делается предсказание.
  Тип элементов списка может быть специфичным для реализации.
- `question` _str_ - Промпт-вопрос по изображениям.
  

**Returns**:

- `str` - Строка с ответом от модели.

