<a id="dataset_iterator.dataset_iterator.fabrics"></a>

# dataset\_iterator.dataset\_iterator.fabrics

<a id="dataset_iterator.dataset_iterator.fabrics.IteratorFabric"></a>

## IteratorFabric Objects

```python
class IteratorFabric()
```

Фабрика для получения итератора и объекта для прогона модели по датасету.

Атрибуты:
    _VQAName (str): Название задачи VQA.
    _RPOName (str): Название задачи RPO.
    _iterators (dict): Словарь, сопоставляющий название задачи с классом итератора.
    _runers (dict): Словарь, сопоставляющий название задачи с классом для прогона.
    _tasks (set): Множество названий задач, для которых реализованы итераторы и прогоны.

<a id="dataset_iterator.dataset_iterator.fabrics.IteratorFabric.get_dataset_iterator"></a>

#### get\_dataset\_iterator

```python
@classmethod
def get_dataset_iterator(cls,
                         task_name: str,
                         dataset_name: str,
                         start: int = 0,
                         filter_doc_class: Optional[str] = None,
                         filter_question_type: Optional[str] = None,
                         dataset_dir_path: str = '/data',
                         csv_name: str = 'annotations.csv',
                         *args,
                         **kwargs) -> TIterator
```

Возвращает итератор по датасету для указанной задачи.

Аргументы:
    task_name (str): Название задачи (например, "VQA").
    dataset_name (str): Название датасета.
    start (int): Начальный индекс строки для итерации. По умолчанию 0.
    filter_doc_class (Optional[str]): Фильтр для класса документа. По умолчанию None.
    filter_question_type (Optional[str]): Фильтр для типа вопроса. По умолчанию None.
    dataset_dir_path (str): Путь к директории с датасетом. По умолчанию '/data'.
    csv_name (str): Имя CSV-файла с аннотацией данных. По умолчанию 'annotations.csv'.
    **kwargs: Дополнительные аргументы для инициализации итератора.

Возвращает:
    TIterator: Итератор по датасету.

Выбрасывает:
    ValueError: Если задача не реализована.

<a id="dataset_iterator.dataset_iterator.fabrics.IteratorFabric.get_runner"></a>

#### get\_runner

```python
@classmethod
def get_runner(cls, iterator: TIterator, model, **kwargs) -> TRunner
```

Возвращает объект для запуска прогона модели по датасету.

Аргументы:
    iterator (TIterator): Итератор по датасету.
    model (ModelInterface): Модель, которая будет использоваться для обработки данных.
    **kwargs: Дополнительные аргументы для инициализации объекта прогона.

Возвращает:
    AbstractDatasetRunner: Объект для прогона модели по датасету.

<a id="dataset_iterator.dataset_iterator.abstract_iterator"></a>

# dataset\_iterator.dataset\_iterator.abstract\_iterator

<a id="dataset_iterator.dataset_iterator.abstract_iterator.AbstractSample"></a>

## AbstractSample Objects

```python
@dataclass
class AbstractSample(ABC)
```

Абстрактный класс, представляющий один объект датасета.

Атрибуты:
    id (int): Уникальный идентификатор объекта датасета.

<a id="dataset_iterator.dataset_iterator.abstract_iterator.AbstractIterator"></a>

## AbstractIterator Objects

```python
class AbstractIterator(ABC)
```

Абстрактный класс итератора для получения сэмплов из датасета.

Атрибуты:
    dataset_name (str): Название датасета.
    row_index (int): Текущий индекс строки в данных. По умолчанию 0.
    task_name (str): Название задачи.
    filter_doc_class (Optional[str]): Фильтр для класса документа. По умолчанию None.
    filter_question_type (Optional[str]): Фильтр для типа вопроса. По умолчанию None.
    dataset_dir_path (str): Путь к директории с датасетом. По умолчанию '/data'.
    csv_name (str): Имя CSV-файла с аннотацией данных. По умолчанию 'annotation.csv'.

<a id="dataset_iterator.dataset_iterator.abstract_iterator.AbstractIterator.__init__"></a>

#### \_\_init\_\_

```python
def __init__(task_name: str,
             dataset_name: str,
             start: int = 0,
             filter_doc_class: Optional[str] = None,
             filter_question_type: Optional[str] = None,
             dataset_dir_path: str = '/data',
             csv_name: str = 'annotation.csv') -> None
```

Инициализирует экземпляр AbstractIterator.

Аргументы:
    task_name (str): Название задачи.
    dataset_name (str): Название датасета.
    start (int): Начальный индекс строки для итерации. По умолчанию 0.
    filter_doc_class (Optional[str]): Фильтр для класса документа. По умолчанию None.
    filter_question_type (Optional[str]): Фильтр для типа вопроса. По умолчанию None.
    dataset_dir_path (str): Путь к директории с датасетом. По умолчанию '/data'.
    csv_name (str): Имя CSV-файла с аннотацией данных. По умолчанию 'annotation.csv'.

<a id="dataset_iterator.dataset_iterator.abstract_iterator.AbstractIterator.__iter__"></a>

#### \_\_iter\_\_

```python
def __iter__() -> 'AbstractIterator'
```

Возвращает итератор для обхода датасета.

Возвращает:
    AbstractIterator: Текущий экземпляр итератора.

<a id="dataset_iterator.dataset_iterator.abstract_iterator.AbstractIterator.__next__"></a>

#### \_\_next\_\_

```python
@abstractmethod
def __next__() -> TSample
```

Возвращает следующий сэмпл из датасета.

Возвращает:
    TSample: Следующий сэмпл из датасета.

Выбрасывает:
    StopIteration: Если достигнут конец датасета.

Этот метод должен быть реализован в подклассах.

<a id="dataset_iterator.dataset_iterator"></a>

# dataset\_iterator.dataset\_iterator

<a id="dataset_iterator.dataset_iterator.vqa_iterator"></a>

# dataset\_iterator.dataset\_iterator.vqa\_iterator

<a id="dataset_iterator.dataset_iterator.vqa_iterator.VQASample"></a>

## VQASample Objects

```python
class VQASample(AbstractSample)
```

Dataclass для описания одного объекта датасета в задаче VQA.

Атрибуты:
    id (int): Уникальный идентификатор объекта датасета.
    image_path (str): Путь к изображению.
    question (str): Вопрос, связанный с изображением.
    answer (str): Ответ на вопрос.
    doc_class (str): Класс документа.
    question_type (str): Тип вопроса.

<a id="dataset_iterator.dataset_iterator.vqa_iterator.VQASample.__init__"></a>

#### \_\_init\_\_

```python
def __init__(id: int, image_path: str, question: str, answer: str,
             doc_class: str, question_type: str) -> None
```

Инициализирует экземпляр VQASample.

Аргументы:
    id (int): Уникальный идентификатор сэмпла.
    image_path (str): Путь к изображению.
    question (str): Вопрос, связанный с изображением.
    answer (str): Ответ на вопрос.
    doc_class (str): Класс документа.
    question_type (str): Тип вопроса.

<a id="dataset_iterator.dataset_iterator.vqa_iterator.VQADatasetIterator"></a>

## VQADatasetIterator Objects

```python
class VQADatasetIterator(AbstractIterator)
```

Класс итератора для работы с датасетом задачи VQA.

Атрибуты:
    prompt_adapter (Optional[PromptAdapter]): Адаптер для работы с промптами. Если не задан, равен None.

<a id="dataset_iterator.dataset_iterator.vqa_iterator.VQADatasetIterator.__init__"></a>

#### \_\_init\_\_

```python
def __init__(prompt_collection_filename: Optional[str] = None,
             *args,
             **kwargs) -> None
```

Инициализирует экземпляр VQADatasetIterator.

Аргументы:
    prompt_collection_filename (Optional[str]): Путь к файлу с коллекцией промптов. По умолчанию None.
    *args: Аргументы для базового класса.
    **kwargs: Ключевые аргументы для базового класса.

<a id="dataset_iterator.dataset_iterator.vqa_iterator.VQADatasetIterator.__next__"></a>

#### \_\_next\_\_

```python
def __next__() -> VQASample
```

Возвращает следующий сэмпл из датасета.

Возвращает:
    VQASample: Сэмпл, содержащий путь к изображению, вопрос, ответ, класс документа и тип вопроса.

Выбрасывает:
    StopIteration: Если достигнут конец датасета.

<a id="dataset_iterator.dataset_iterator.abstract_dataset_runner"></a>

# dataset\_iterator.dataset\_iterator.abstract\_dataset\_runner

<a id="dataset_iterator.dataset_iterator.abstract_dataset_runner.AbstractDatasetRunner"></a>

## AbstractDatasetRunner Objects

```python
class AbstractDatasetRunner(ABC)
```

Абстрактный класс, реализующий логику прогона модели по датасету.

Атрибуты:
    iterator (TIterator): Итератор, который предоставляет доступ к данным датасета.
    model (ModelInterface): VLM-модель, которая будет использоваться для получения ответа.
    model_answers (list): Список для хранения ответов модели.
    dataset_dir_path (str): Путь к директории с датасетом. По умолчанию "/workspace/data".
    answers_dir_path (str): Путь к директории для сохранения ответов. По умолчанию "/workspace/answers".
    csv_name (str): Имя CSV-файла для сохранения ответов. По умолчанию "annotation.csv".

<a id="dataset_iterator.dataset_iterator.abstract_dataset_runner.AbstractDatasetRunner.__init__"></a>

#### \_\_init\_\_

```python
def __init__(iterator: TIterator,
             model: Any,
             dataset_dir_path: str = "/workspace/data",
             answers_dir_path: str = "/workspace/answers",
             csv_name: str = "annotation.csv") -> None
```

Инициализирует экземпляр AbstractDatasetRunner.

Аргументы:
    iterator (TIterator): Итератор, который предоставляет доступ к данным датасета.
    model (ModelInterface): VLM-модель, которая будет использоваться для получения ответа.
    dataset_dir_path (str): Путь к директории с датасетом. По умолчанию "/workspace/data".
    answers_dir_path (str): Путь к директории для сохранения ответов. По умолчанию "/workspace/answers".
    csv_name (str): Имя CSV-файла для сохранения ответов. По умолчанию "annotation.csv".

<a id="dataset_iterator.dataset_iterator.abstract_dataset_runner.AbstractDatasetRunner.run"></a>

#### run

```python
@abstractmethod
def run() -> None
```

Осуществляет прогон модели по датасету, собирает ответы и записывает их на диск.

Этот метод должен быть реализован в подклассах.

<a id="dataset_iterator.dataset_iterator.abstract_dataset_runner.AbstractDatasetRunner.add_answer"></a>

#### add\_answer

```python
@abstractmethod
def add_answer(sample: TSample, answer: Any) -> None
```

Добавляет ответ модели в список ответов.

Аргументы:
    sample (TSample): Образец данных из датасета.
    answer (Any): Ответ модели на данный образец.

Этот метод должен быть реализован в подклассах.

<a id="dataset_iterator.dataset_iterator.abstract_dataset_runner.AbstractDatasetRunner.save_answers"></a>

#### save\_answers

```python
@abstractmethod
def save_answers() -> None
```

Сохраняет ответы в CSV-файл под названием csv_name по пути self.answers_dir_path.

Этот метод должен быть реализован в подклассах.

<a id="dataset_iterator.dataset_iterator.vqa_dataset_runner"></a>

# dataset\_iterator.dataset\_iterator.vqa\_dataset\_runner

<a id="dataset_iterator.dataset_iterator.vqa_dataset_runner.VQAModelAnswer"></a>

## VQAModelAnswer Objects

```python
@dataclass
class VQAModelAnswer()
```

Класс, представляющий один ответ модели для задачи VQA.

Атрибуты:
    id (int): Уникальный идентификатор ответа, соответствующий идентификатору сэмпла.
    answer (str): Текст ответа модели.

<a id="dataset_iterator.dataset_iterator.vqa_dataset_runner.VQADatasetRunner"></a>

## VQADatasetRunner Objects

```python
class VQADatasetRunner(AbstractDatasetRunner)
```

Класс, реализующий прогон модели по датасету задачи VQA.

Атрибуты:
    iterator (TIterator): Итератор, который предоставляет доступ к данным датасета.
    model (ModelInterface): VLM-модель, которая будет использоваться для получения ответа.
    model_answers (list[ModelAnswer]): Список ответов модели.
    dataset_dir_path (str): Путь к директории с датасетом. По умолчанию "/workspace/data".
    answers_dir_path (str): Путь к директории для сохранения ответов. По умолчанию "/workspace/answers".
    csv_name (str): Имя CSV-файла для сохранения ответов. По умолчанию "annotation.csv".

<a id="dataset_iterator.dataset_iterator.vqa_dataset_runner.VQADatasetRunner.run"></a>

#### run

```python
def run() -> None
```

Осуществляет прогон модели по датасету VQA и собирает ответы.

Проходит по всем сэмплам в итераторе, получает ответы модели и сохраняет их.

<a id="dataset_iterator.dataset_iterator.vqa_dataset_runner.VQADatasetRunner.add_answer"></a>

#### add\_answer

```python
def add_answer(sample: VQASample, answer: str) -> None
```

Добавляет ответ модели в список ответов.

Аргументы:
    sample (VQASample): Сэмпл из датасета VQA.
    answer (str): Ответ модели на вопрос из сэмпла.

<a id="dataset_iterator.dataset_iterator.vqa_dataset_runner.VQADatasetRunner.save_answers"></a>

#### save\_answers

```python
def save_answers() -> None
```

Сохраняет ответы в CSV-файл по пути self.answers_dir_path с добавлением timestamp в название файла.

Если список ответов пуст, выводит предупреждение и не сохраняет файл.

