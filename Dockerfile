FROM node:18.0.0

WORKDIR /app

# Очистка кэша npm перед установкой зависимостей
RUN npm cache clean --force

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]