# Сайт документации

Сайт документации ([ссылка](https://vlmhyperbenchteam.github.io/VLMHyperBenchDocs/)) для проекта `VLMHyperBench`создан с помощью [Docusaurus](https://docusaurus.io/), современного генератора статичных сайтов.

### Локальная разработка

Клонируем данный репозиторий к себе. Открываем его в своей IDE (например, `Vs code`).

Находясь в корне репозитория выполняем команду:
```
npm install
```
будет создано окружение для работы над проектом в `Docusaurus` внутри.

Выполняем команду:
```
npm start
```

Эта команда поднимет локальный сервер для разработки статичного сайта и откроет его в вашем браузере.

Большинство изменений в исходных файлах сразу же будет отображаться на вашем статичном сайте в режиме `live` без необходимои перезапускать сервер.

### Сборка статичного сайта

Выполняем команду:
```
npm run build
```

Эта команда сгенерирует статичный сайт в папке `build` репозитория.

Статичный сайт расположенный в данной папке может быть размещен на любом сервисе хостинга статичных сайтов.

Данный репозиторий настроен на публикацию статичного сайта документации на сервисе `GitHub Pages` по адресу:
```
https://vlmhyperbenchteam.github.io/VLMHyperBenchDocs/
```

### Локальная проверка собранного статичного сайта

Выполняем команду:
```
npm run serve
```

Команда запустит локальный сервер, обычно доступный по адресу:
```
http://localhost:3000
```

Откройте этот URL в браузере, чтобы увидеть ваш сайт.

### Публикация новой версии статичного сайта

Docusaurus предоставляет команду для публикации новой версии сайта `npm run deploy`.

Поскольку мы разместили его на сервисе `GitHub Pages`, для публикации новой версии необходимо войти в свой аккаунт GitHub для подтверждения доступа к подобной возможности.

Все участники нашей команды имеют такой доступ.

Авторизоваться на GitHub можно:

используя SSH-доступ:

для этого выполняем команду:

* На Linux / MacOs
```
USE_SSH=true && npm run deploy
```

* На Windows CMD
```
cmd /C "set "USE_SSH=true" && npm run deploy"
```

* На Windows PowerShell
```
cmd /C 'set "USE_SSH=true" && yarn deploy'
```

не используя SSH-доступ:

* На Linux / MacOs
```
$ GIT_USER=<Your GitHub username> npm run deploy
```

* На Windows CMD
```
cmd /C "set "GIT_USER=<Your GitHub username>" && npm run deploy"
```

* На Windows PowerShell
```
cmd /C 'set "GIT_USER=<Your GitHub username>" && yarn deploy'
```

Эта команда автоматически опубликует версию сайта документации на `GitHub Pages` осуществив `push` собранной в папке `build` версии сайта в ветку `gh-pages`.
