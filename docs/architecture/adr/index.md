# Architecture Decision Records (ADR)

В этом разделе фиксируются ключевые архитектурные решения, принятые в процессе разработки VLMHyperBench.

## Список ADR

*   **[ADR-001: Изоляция через контейнеризацию](001-isolation.md)** — Почему мы используем Docker/Singularity для каждого этапа.
*   **[ADR-002: Динамические зависимости](002-dynamic-dependencies.md)** — Как мы устанавливаем пакеты "на лету" внутри контейнеров.
*   **[ADR-003: API Wrapper для инференса](003-api-wrapper.md)** — Зачем нужна прослойка между Оркестратором и моделью.
*   **[ADR-006: Монорепозиторий и uv workspaces](006-monorepo.md)** — Выбор стратегии управления кодом и зависимостями.
*   **[ADR-007: Валидация структурированного вывода](007-structured-output-validation.md)** — Внедрение Pydantic и метрики Structural Fidelity.
*   **[ADR-008: React Dashboard](008-react-dashboard-with-plotly.md)** — Использование React и Plotly для мониторинга.