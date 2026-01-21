# Структура проекта

VLMHyperBench организован как монорепозиторий автономных пакетов с динамической композицией.

## Директории

```
vlmhyperbench/
├── packages/                   # Актуальные пакеты v0.2.0
│   ├── dependency-injector/   # JIT установка пакетов в контейнеры
│   ├── prompt-manager/        # Динамическое управление промптами
│   ├── metric-registry/       # Реестр и динамическая загрузка метрик
│   └── dataset-factory/       # Фабрика итераторов датасетов
├── docs/                       # Техническая документация (ADR, черновики)
├── docs_site/                  # Сайт на Docusaurus
├── pyproject.toml              # Инструментарий Playground
└── uv.lock                     # Lock-файл Playground
```

## Пакеты (Packages)

Каждый модуль в `packages/` является независимым Python-пакетом и должен содержать собственный `README.md` и docstrings в формате Google Style.