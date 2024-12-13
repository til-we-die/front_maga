FROM node:20.18.0

# Устанавливаем рабочую директорию
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install
COPY . .

RUN npm run build
RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "build"]
