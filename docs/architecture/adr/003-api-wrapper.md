# ADR-003: API Wrapper для инференса

## Контекст
Разные бэкенды (vLLM, HuggingFace, SGLang) имеют разные программные интерфейсы. Также необходимо централизованно замерять метрики производительности (TTFT, TPOT), что сложно сделать, используя только стандартные API инференс-движков.

## Решение
Внутри контейнера модели запускается легковесный FastAPI прокси-сервер (**API Wrapper**), разделенный на **Control Plane** (управление) и **Data Plane** (инференс).

### Архитектура Wrapper'а

1.  **Control Plane (Lifecycle Management)**:
    *   `POST /v1/model/load`: Динамическая загрузка адаптера и инициализация движка.
    *   `POST /v1/model/unload`: Освобождение ресурсов GPU.
    *   **Безопасность**: Авторизация через `X-API-Key` и безопасная передача секретов (`env`) с маскировкой в логах.

2.  **Data Plane (Inference)**:
    *   `POST /v1/chat/completions`: Унифицированный OpenAI-совместимый интерфейс.
    *   **Backend Adapters**: Модульные пакеты (`vllm-adapter`, `deepseek-adapter`), загружаемые JIT.

3.  **Metrics & Telemetry**:
    *   `TelemetryManager`: Замер Latency и VRAM Delta.
    *   `ResourceWatchdog`: Фоновый мониторинг системных ресурсов (CPU, RAM, GPU Util).

### Псевдокод реализации (lifespan & dynamic load)

```python
@asynccontextmanager
async def lifespan(app: FastAPI):
    await watchdog.start()
    yield
    await watchdog.stop()

@app.post("/v1/model/load")
async def load_model(request: ModelLoadRequest, x_api_key: str = Header(...)):
    verify(x_api_key)
    os.environ.update(request.env) # Inject secrets like HF_TOKEN
    module = importlib.import_module(request.backend_module)
    global backend
    backend = module.Adapter(request.engine_params)
    return {"status": "loaded"}
```

## Последствия
*   **Плюсы**:
    *   Единый код Оркестратора для всех моделей.
    *   Автоматический сбор метрик производительности (TTFT, TPOT, Latency, Peak Memory) без внешнего мониторинга.
    *   Возможность добавления кастомной логики (валидация, логирование) без изменения кода оркестратора.
*   **Минусы**:
    *   Дополнительный слой абстракции.
    *   Небольшие накладные расходы на HTTP-запросы внутри контейнера (микросекунды).