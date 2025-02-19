
## Описание
Приложение предоставляет функционал для управления фильтрами
и отображения билетов с возможностью переключения валют и фильтрации по количеству пересадок.

## Требования

Перед запуском приложения убедитесь, что на вашем компьютере установлены следующие программы:

- [Node.js](https://nodejs.org/) версии 16.x или выше
- [npm](https://www.npmjs.com/) или [yarn](https://yarnpkg.com/)

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/Aw4ken1ngs/idea-platform.git
   ```

2. Перейдите в директорию проекта:

   ```bash
   cd idea-platform
   ```

3. Установите зависимости:

   ```bash
   npm install
   # или
   yarn install
   ```

## Запуск приложения

### В режиме разработки

1. Запустите локальный сервер разработки:

   ```bash
   npm start
   # или
   yarn start
   ```

2. Откройте (http://localhost:3000) в браузере, если не отрылось автоматически.

### В режиме продакшена

Соберите приложение:

   ```bash
   npm run build
   # или
   yarn build
   ```

Для запуска тестов используйте следующую команду:

```bash
npm test
# или
yarn test
```

Чтобы увидеть отчёт о покрытии тестами, выполните:

```bash
npm test -- --coverage
# или
yarn test --coverage
```

## Структура проекта

src/
├── components/       # Компоненты приложения
├── constants/        # Константы
├── store/            # Redux store и слайсы
├── types.tsx         # Типы TypeScript
├── utils/            # Утилиты
├── App.tsx           # Корневой компонент
├── index.tsx         # Точка входа
├── styles.css        # Стили
├── icons/            # иконки валют
└── tickets.json      # Данные для отображения билетов
