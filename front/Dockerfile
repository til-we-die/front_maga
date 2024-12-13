FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package.json package-lock.json ./

# Устанавливаем зависимос
RUN npm install

# Копируем весь проект
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем сервер для статических файлов
RUN npm install -g serve

# Открываем порт, на котором будет работать React
EXPOSE 3000

# Команда для запуска приложения
CMD ["serve", "-s", "build"]
