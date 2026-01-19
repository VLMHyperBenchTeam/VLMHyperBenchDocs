# Структура проекта

VLMHyperBench организован как монорепозиторий с использованием `uv workspaces`.

## Директории

```
vlmhyperbench/
├── packages/                   # Python-пакеты (git submodules)
│   ├── bench-utils/           # Общие утилиты и базовые метрики
│   ├── model-interface/       # Абстрактные классы для моделей
│   ├── prompt-handler/        # Логика формирования промптов
│   └── model-qwen2-5-vl/     # Пример реализации конкретной модели
├── docs/                       # Техническая документация (ADR, черновики)
├── docs_site/                  # Сайт на Docusaurus
├── docker/                     # Dockerfiles для различных сред
├── staging/                    # Конфигурация для предрелизного тестирования
├── prod/                       # Конфигурация для продакшена (фиксированные версии)
├── pyproject.toml              # Корневой конфиг uv workspace
└── uv.lock                     # Lock-файл зависимостей
```

## Пакеты (Packages)

Каждый модуль в `packages/` является независимым Python-пакетом и должен содержать собственный `README.md` и docstrings в формате Google Style.