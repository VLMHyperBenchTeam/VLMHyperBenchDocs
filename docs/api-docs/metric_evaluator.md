## MetricEvaluator Objects

```python
class MetricEvaluator()
```

Класс для вычисления метрик качества предсказаний модели.

Атрибуты:
    true_csv (pd.DataFrame): DataFrame с правильными ответами.
    pred_csv (pd.DataFrame): DataFrame с предсказаниями модели.

<a id="metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.__init__"></a>

#### \_\_init\_\_

```python
def __init__(true_file: str, prediction_file: str) -> None
```

Инициализирует экземпляр MetricEvaluator.

Аргументы:
    true_file (str): Путь к файлу с правильными ответами (CSV или TSV).
    prediction_file (str): Путь к файлу с предсказаниями модели (CSV или TSV).

Исключения:
    ValueError: Если данные в файлах не совместимы.

<a id="metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.read_file"></a>

#### read\_file

```python
def read_file(file_path: str) -> pd.DataFrame
```

Читает файл с определением разделителя (CSV или TSV).

Аргументы:
    file_path (str): Путь к файлу.

Возвращает:
    pd.DataFrame: DataFrame с данными из файла.

Исключения:
    pd.errors.ParserError: Если файл не может быть прочитан как CSV или TSV.

<a id="metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.validate_data"></a>

#### validate\_data

```python
def validate_data() -> None
```

Проверяет совместимость данных в true_csv и pred_csv.

Исключения:
    ValueError: Если столбцы или количество строк не совпадают.

<a id="metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.calculate_metrics_by_id"></a>

#### evaluate\_item

```python
def evaluate_item(prediction: Any, target: Any, metrics: List[Dict[str, Any]], schema: Optional[Type[BaseModel]] = None, active_backend: Optional[str] = None) -> Dict[str, MetricResult]
```

Выполняет расчет метрик для одного объекта. Поддерживает фильтрацию по активному бэкенду для обеспечения изоляции зависимостей.

Аргументы:
    prediction (Any): Ответ модели (строка или десериализованный объект).
    target (Any): Эталонный ответ.
    metrics (List[Dict]): Список конфигураций метрик (например, `[{"name": "anls", "backend": "evalscope"}]`).
    schema (BaseModel, optional): Pydantic-модель для валидации структуры.
    active_backend (str, optional): Если указан, будут вычислены только метрики этого бэкенда.

Возвращает:
    Dict[str, MetricResult]: Словарь объектов MetricResult.

Метрики:
    - StructuralFidelity (валидность формата)
    - CER (Character Error Rate)
    - ANLS (Average Normalized Levenshtein Similarity)
    - Field-level F1 (для JSON)

<a id="metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.group_by_doc_question"></a>

#### group\_by\_doc\_question

```python
def group_by_doc_question(df: pd.DataFrame) -> pd.DataFrame
```

Группирует данные по типу документа и типу вопроса.

Аргументы:
    df (pd.DataFrame): Исходный DataFrame.

Возвращает:
    pd.DataFrame: Сгруппированный DataFrame с метриками.

<a id="metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.calculate_metrics_general"></a>

#### calculate\_metrics\_general

```python
def calculate_metrics_general() -> dict
```

Вычисляет общие метрики по всему корпусу данных.

Возвращает:
    dict: Словарь с метриками WER, CER и BLEU.

