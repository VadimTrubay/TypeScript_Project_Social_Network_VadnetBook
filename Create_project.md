# Create_project

git branch — показує лише локальні гілки
git branch -r — показує лише віддалені гілки
git branch -a — показує усі гілки, як локальні так і віддалені
git switch -c name-your-branch — створює нову гілку
git switch name-branch — переключає на іншу гілку
git fetch — завантажує останні зміни з віддаленого репозиторію, але не вносить їх у поточні гілки
git pull — одночасно і завантажує, і вносить у локальний репозиторій усі останні зміни (на усіх гілках), які були зроблені у віддаленому репозиторію
git pull origin footer — завантажить і застосує усі зміни з віддаленої (origin ) гілки footer до локальної
git commit — застосує коміти до поточної гілки
git merge page-header — зливає у поточну гілку код з гілки page-header
git push origin main — віддаленої гілки main
git branch -d page-header — видаляє локальну гілку page-header

npm create vite@latest - Для створення нового проекту
npm install - Встановіть залежності проекту командою
npm run dev - Запустіть проект командою 

"react/prop-types": 0 - змінити ним вміст файлу .eslintrc.cjs в rules

Відкрий файл vite.config.js та заміни його вміст на наступний код.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
build: {
sourcemap: true,
}
});  

Пакет prop-types надає низку валідаторів для перевірки коректності отриманих 
типів даних під час виконання коду, повідомляючи про невідповідності в консолі.
npm install --save-dev prop-types

Ми використаєм сучасну бібліотеку modern-normalize 
для додавання стилів нормалізації до проекту.
npm install modern-normalize
import "modern-normalize";
/* src/index.css */

body {
font-family: sans-serif;
line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
margin: 0;
}

ul,
ol {
margin: 0;
padding: 0;
}

img {
display: block;
max-width: 100%;
}

React Icons - це набір іконок, спеціально створений для використання в React-додатках. 
Вона дозволяє легко та зручно вбудовувати іконки в компоненти React, 
спрощуючи використання векторних графічних символів.
npm install react-icons







