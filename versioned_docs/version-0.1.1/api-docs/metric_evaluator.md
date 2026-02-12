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

#### calculate\_metrics\_by\_id

```python
def calculate_metrics_by_id() -> pd.DataFrame
```

Вычисляет метрики для каждого ID.

Возвращает:
    pd.DataFrame: DataFrame с метриками для каждого ID.

Метрики:
    - WER (Word Error Rate)
    - CER (Character Error Rate)
    - BLEU (Bilingual Evaluation Understudy)

<a id="metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.calculate_metrics_by_doc_type"></a>

#### calculate\_metrics\_by\_doc\_type

```python
def calculate_metrics_by_doc_type(df: pd.DataFrame) -> pd.DataFrame
```

Вычисляет метрики для каждого типа документа.

Аргументы:
    df (pd.DataFrame): DataFrame из метода calculate_metrics_by_id.

Возвращает:
    pd.DataFrame: DataFrame с метриками для каждого типа документа.

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

