## SystemPromptAdapter Objects

```python
class SystemPromptAdapter()
```

Адаптер для работы с системными промптами, хранящимися в txt-файле.

**Attributes**:

- `_prompts` _dict_ - Словарь для хранения промптов.
- `file_path` _str_ - Путь к файлу с промптами.

<a id="system_prompt_adapter.system_prompt_adapter.system_prompt_adapter.SystemPromptAdapter.__init__"></a>

#### \_\_init\_\_

```python
def __init__(file_path: str, file_dir='system_prompt')
```

Инициализирует экземпляр SystemPromptAdapter.

**Arguments**:

- `file_path` _str_ - Имя файла с промптами, который находится в папке 'prompts'.

<a id="system_prompt_adapter.system_prompt_adapter.system_prompt_adapter.SystemPromptAdapter.get_prompt"></a>

#### get\_prompt

```python
def get_prompt() -> str
```