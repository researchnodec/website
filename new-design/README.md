# ResearchNode - Modern CTF Team Website

> 🚀 Современный React-сайт для CTF команды ResearchNode с премиум дизайном

## 📋 О проекте

**ResearchNode** - профессиональная CTF команда из Киева, специализирующаяся на кибербезопасности, реверс-инжиниринге, криптографии и веб-эксплуатации. Сайт построен на React с современным дизайном и анимациями.

### 🏆 Достижения
- **1 место** в онлайн-квалификации CTF Junior League 2026
- **4 участника** с уникальными навыками
- **Полный спектр** компетенций в кибербезопасности

## ✨ Особенности

### 🎨 Дизайн и UX
- **Премиальный дизайн** с неоновыми акцентами
- **Framer Motion** анимации и переходы
- **Полная адаптивность** для всех устройств
- **Многоязычность** (Украинский/Английский)
- **Современная типографика** и микровзаимодействия

### 🛠 Технологический стек
- **React 19** - современный фреймворк
- **TypeScript** - типизация и надежность
- **Vite** - быстрая сборка и разработка
- **Framer Motion** - премиальные анимации
- **React i18next** - интернационализация
- **Express.js** - бэкенд для контактной формы
- **Nodemailer** - отправка email

### 📱 Адаптивность
- **Desktop** - полная версия с анимациями
- **Tablet** - адаптированная версия
- **Mobile** - оптимизированная версия
- **Landscape** - поддержка горизонтальной ориентации

### 🎯 Функциональность
- **Hero секция** с информацией о команде
- **Команда** с фотографиями и навыками
- **Telegram ссылки** для связи с участниками
- **Контактная форма** с бэкендом
- **Timeline** с историей достижений
- **Многоязычность** с переключателем

## 🚀 Быстрый старт

### Установка зависимостей
```bash
# Клонирование репозитория
git clone https://github.com/researchnodec/website.git
cd website/new-design

# Установка зависимостей
npm install

# Настройка переменных окружения
cp .env.example .env
# Отредактируйте .env с вашими данными
```

### Разработка
```bash
# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен сервера
npm start
```

## 📁 Структура проекта

```
new-design/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   └── Footer/
│   ├── pages/
│   │   └── home/
│   ├── assets/
│   ├── i18n.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── img/
│   ├── favicon.svg
│   └── icons.svg
├── dist/                 # Сборка для продакшена
├── server.js              # Бэкенд для контактной формы
├── package.json
├── vite.config.ts
└── README.md
```

## 🔧 Настройка

### Переменные окружения (.env)
```bash
# Email конфигурация
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# Конфигурация сервера
PORT=3000
```

### Замена информации о команде
В файле `src/pages/home/Home.tsx` обновите массив `TEAM_DATA`:

```typescript
const TEAM_DATA = [
  { 
    id: 'member1', 
    num: '01', 
    name: 'Имя', 
    img: '/img/photo.jpg', 
    handle: '@username', 
    tg: 'https://t.me/username', 
    tags: ['Skill1', 'Skill2'] 
  },
  // ... другие участники
];
```

### Настройка i18n
В файле `src/i18n.ts` добавьте переводы:

```typescript
const resources = {
  en: {
    translation: {
      header: { team: "Team", achievements: "Achievements", contact: "Contact" },
      // ... другие переводы
    }
  },
  uk: {
    translation: {
      header: { team: "Команда", achievements: "Досягнення", contact: "Контакти" },
      // ... другие переводы
    }
  }
};
```

## 🌐 Развертывание

### VPS хостинг
```bash
# Сборка проекта
npm run build

# Копирование файлов на сервер
scp -r dist/* user@server:/var/www/html/

# Установка зависимостей на сервере
npm install --production

# Запуск сервера
npm start
```

### Docker (рекомендуется)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
COPY server.js .
EXPOSE 3000
CMD ["npm", "start"]
```

### GitHub Pages
```bash
# Сборка
npm run build

# Пуш в репозиторий
git add dist/
git commit -m "Deploy new design"
git push origin main
```

## 🎯 Особенности реализации

### Анимации
- **Framer Motion** для плавных переходов
- **Viewport detection** для анимаций при скролле
- **Premium easing** для естественного движения
- **Stagger effects** для последовательных анимаций

### Производительность
- **Lazy loading** для изображений
- **Code splitting** через Vite
- **Tree shaking** для неиспользуемого кода
- **Optimized build** для продакшена

### Безопасность
- **Rate limiting** для контактной формы
- **Input validation** на бэкенде
- **XSS protection** в React
- **HTTPS ready** для продакшена

## 📞 Контакты

- **Email**: `team@researchnode.net`
- **GitHub**: [researchnodec](https://github.com/researchnodec)
- **Telegram**: [@truemorgan](https://t.me/truemorgan), [@a_r_i_x_x](https://t.me/a_r_i_x_x), [@MAIRY_LAY](https://t.me/MAIRY_LAY), [@nothing000exe](https://t.me/nothing000exe)

## 📄 Лицензия

MIT License - свободное использование с указанием авторства

---

**ResearchNode** © 2026 - Чемпионы CTF, эксперты в кибербезопасности

> ⚡ Built with React, TypeScript, and passion for cybersecurity
