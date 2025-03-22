## PromptAdapter Objects

```python
class PromptAdapter()
```

Адаптер для работы с промптами, хранящимися в CSV-файле.

**Attributes**:

- `_prompts` _dict_ - Словарь для хранения промптов.
- `file_path` _str_ - Путь к файлу с промптами.

<a id="prompt_adapter.prompt_adapter.prompt_adapter.PromptAdapter.__init__"></a>

#### \_\_init\_\_

```python
def __init__(file_path: str, file_dir='prompts')
```

Инициализирует экземпляр PromptAdapter.

**Arguments**:

- `file_path` _str_ - Имя файла с промптами, который находится в папке 'prompts'.

<a id="prompt_adapter.prompt_adapter.prompt_adapter.PromptAdapter.get_prompt"></a>

#### get\_prompt

```python
def get_prompt(doc_class: str, question_type: str) -> str
```

Возвращает промпт для заданного класса документа и типа вопроса.

**Arguments**:

- `doc_class` _str_ - Класс документа.
- `question_type` _str_ - Тип вопроса.
  

**Returns**:

- `str` - Строка с промптом.
  

**Raises**:

- `ValueError` - Если промпт для заданного класса документа и типа вопроса не найден.

