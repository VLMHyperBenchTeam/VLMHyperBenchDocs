<a id="model_interface.model_interface"></a>

# model\_interface.model\_interface

<a id="model_interface.model_interface.model_factory"></a>

# model\_interface.model\_interface.model\_factory

<a id="model_interface.model_interface.model_factory.ModelFactory"></a>

## ModelFactory Objects

```python
class ModelFactory()
```

Фабрика для создания моделей.

Класс предоставляет методы для регистрации моделей и создания их экземпляров.
Модели регистрируются по имени и пути к классу в Python-пакете.

**Attributes**:

- `_models` _Dict[str, Type[Any]]_ - Словарь для хранения зарегистрированных моделей,
  где ключ — имя модели, а значение — класс модели.

<a id="model_interface.model_interface.model_factory.ModelFactory.register_model"></a>

#### register\_model

```python
@classmethod
def register_model(cls, model_name: str, model_path: str) -> None
```

Регистрирует класс модели по её пути в python-пакете.

**Arguments**:

- `model_name` _str_ - Имя модели, под которым она будет зарегистрирована.
- `model_path` _str_ - Путь к классу модели в формате 'module_path:class_name'.
  

**Raises**:

- `ImportError` - Если модуль не может быть импортирован.
- `AttributeError` - Если класс не найден в указанном модуле.

<a id="model_interface.model_interface.model_factory.ModelFactory.get_model"></a>

#### get\_model

```python
@classmethod
def get_model(cls,
              model_name: str,
              model_init_params: Optional[Dict[str, Any]] = None) -> Any
```

Создает и возвращает экземпляр модели по её имени.

**Arguments**:

- `model_name` _str_ - Имя зарегистрированной модели.
- `model_init_params` _Optional[Dict[str, Any]]_ - Параметры для инициализации модели.
  Если None, передается пустой словарь.
  

**Returns**:

- `Any` - Экземпляр модели.
  

**Raises**:

- `ValueError` - Если модель с указанным именем не зарегистрирована.

<a id="model_interface.model_interface.model_interface"></a>

# model\_interface.model\_interface.model\_interface

<a id="model_interface.model_interface.model_interface.ModelInterface"></a>

## ModelInterface Objects

```python
class ModelInterface(ABC)
```

Абстрактный базовый класс для всех моделей.

Этот класс определяет интерфейс, который должны реализовывать все модели.
Он включает методы для предсказания на основе одного или нескольких изображений.

**Attributes**:

- `model_name` _str_ - Название модели как у разработчика (например, "Qwen2-VL-2B").
- `system_prompt` _str_ - Системный промпт, используемый моделью.
- `cache_dir` _str_ - Директория для кэширования данных модели.

<a id="model_interface.model_interface.model_interface.ModelInterface.__init__"></a>

#### \_\_init\_\_

```python
def __init__(model_name: str, system_prompt: str, cache_dir: str) -> None
```

Инициализирует экземпляр Фабрики моделей.

**Arguments**:

- `model_name` _str_ - Название модели как у разработчика (например, "Qwen2-VL-2B").
- `system_prompt` _str_ - Системный промпт, используемый моделью.
- `cache_dir` _str_ - Директория для кэширования данных модели.

<a id="model_interface.model_interface.model_interface.ModelInterface.predict_on_image"></a>

#### predict\_on\_image

```python
@abstractmethod
def predict_on_image(image: Any, question: str) -> str
```

Абстрактный метод для предсказания на основе одного изображения.

**Arguments**:

- `image` _Any_ - Изображение, на основе которого делается предсказание.
  Тип может быть специфичным для реализации (например, PIL.Image, np.array и т.д.).
- `question` _str_ - промпт-вопрос по изображению изображению.
  

**Returns**:

- `str` - строка с ответом от модели.

<a id="model_interface.model_interface.model_interface.ModelInterface.predict_on_images"></a>

#### predict\_on\_images

```python
@abstractmethod
def predict_on_images(images: List[Any], question: str) -> str
```

Абстрактный метод для предсказания на основе нескольких изображений.

**Arguments**:

- `images` _List[Any]_ - Список изображений, на основе которых делается предсказание.
  Тип элементов списка может быть специфичным для реализации.
- `question` _str_ - промпт-вопрос по изображению изображению.
  

**Returns**:

- `str` - строка с ответом от модели.

<a id="model_interface.model_interface.model_utils"></a>

# model\_interface.model\_interface.model\_utils

<a id="model_interface.model_interface.model_utils.measure_inference_time"></a>

#### measure\_inference\_time

```python
def measure_inference_time(model_callable: Callable[..., Any], *args,
                           **kwargs) -> float
```

Измеряет время выполнения (inference time) программы или функции.

**Arguments**:

- `model_callable` - Функция или метод модели, который нужно измерить.
- `*args` - Аргументы для передачи в model_callable.
- `**kwargs` - Ключевые аргументы для передачи в model_callable.
  

**Returns**:

  Время выполнения в секундах.
  
  Использование:
  ```
  model = MyModel()
  input_data = "Пример входных данных"
  inference_time = measure_inference_time(model.predict, input_data)
  print(f"Время выполнения: {inference_time:.4f} секунд")
  ```

