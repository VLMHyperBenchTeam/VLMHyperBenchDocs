# ADR-003: API Wrapper для инференса

## Контекст
Разные бэкенды (vLLM, HuggingFace, SGLang) имеют разные программные интерфейсы. Также необходимо централизованно замерять метрики производительности (TTFT, TPOT), что сложно сделать, используя только стандартные API инференс-движков.

## Решение
Внутри контейнера модели запускается легковесный FastAPI прокси-сервер (**API Wrapper**), который унифицирует интерфейс до стандарта OpenAI-совместимого API (`/v1/chat/completions`) и собирает телеметрию.

### Архитектура Wrapper'а

1.  **Proxy Layer**: Принимает запрос `/v1/chat/completions`.
2.  **Metrics Collector**:
    *   Засекает `start_time` и `mem_start` (через `pynvml`).
    *   Засекает `ttft` (при стриминге) и `end_time`.
    *   Считает метрики (Latency, Peak Memory Delta).
3.  **Backend Adapter**: Проксирует запрос в реальный движок (vLLM/SGLang) локально или по сети.
4.  **Response Enricher**: Возвращает клиенту расширенный ответ, добавляя метрики в поле `usage` или кастомный хедер.

### Псевдокод реализации

```python
@app.post("/v1/chat/completions")
async def proxy_generate(request: Request):
    # 1. Start Metrics
    start_time = time.perf_counter()
    mem_start = get_gpu_memory()

    # 2. Forward Request
    response = await backend.generate(request)
    
    # 3. End Metrics
    end_time = time.perf_counter()
    mem_end = get_gpu_memory()
    
    # 4. Enrich Response
    result = response.json()
    result["performance"] = {
        "latency_ms": (end_time - start_time) * 1000,
        "peak_memory_mb": mem_end / 1024**2
    }
    return result
```

## Последствия
*   **Плюсы**:
    *   Единый код Оркестратора для всех моделей.
    *   Автоматический сбор метрик производительности (TTFT, TPOT, Latency, Peak Memory) без внешнего мониторинга.
    *   Возможность добавления кастомной логики (валидация, логирование) без изменения кода оркестратора.
*   **Минусы**:
    *   Дополнительный слой абстракции.
    *   Небольшие накладные расходы на HTTP-запросы внутри контейнера (микросекунды).