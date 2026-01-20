# Быстрый старт

Запустите свой первый бенчмарк VLMHyperBench за несколько минут.

## 1. Установка
```bash
git clone https://github.com/VLMHyperBenchTeam/vlmhyperbench_playground.git
cd vlmhyperbench_playground
uv sync
```

## 2. Запуск платформы
Поднимите сервисы управления и мониторинга:
```bash
uv run python run_platform.py
```
После запуска Web UI будет доступен по адресу `http://localhost:8050`.

## 3. Создание эксперимента
1. Откройте Web UI.
2. Загрузите свой `user_config.csv` или используйте `demo_mini`.
3. Нажмите **Start Benchmark**.
4. Наблюдайте за процессом инференса и оценки в реальном времени на графиках Plotly.