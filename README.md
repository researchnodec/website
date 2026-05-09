# ResearchNode - CTF Team Website

> 🚀 Современный сайт для CTF команды ResearchNode с неоновыми эффектами и полной адаптивностью

## 📋 О проекте

**ResearchNode** - это профессиональная CTF команда из Киева, специализирующаяся на кибербезопасности, реверс-инжиниринге, криптографии и веб-эксплуатации. Сайт представляет собой современную визитную карточку команды с неоновым дизайном в стиле Cuberto.

### 🏆 Достижения
- **1 место** в онлайн-квалификации CTF Junior League 2026
- **4 участника** с уникальными навыками
- **Полный спектр** компетенций в кибербезопасности

## ✨ Особенности

### 🎨 Дизайн и UX
- **Черная цветовая схема** с неоновыми акцентами
- **Cuberto-стиль эффекты** и анимации
- **Полная адаптивность** для всех устройств (280px - 1400px+)
- **Анимированная сетка** и частицы на фоне
- **Hover-эффекты** и микро-анимации

### 🛠 Технологический стек
- **HTML5** - семантическая разметка
- **CSS3** - кастомные анимации и градиенты
- **Vanilla JavaScript** - интерактивность без зависимостей
- **Formspree** - обработка контактной формы
- **Responsive Design** - оптимизация под все экраны

### 📱 Адаптивность
- **Desktop** (1400px+) - расширенная версия
- **Laptop** (1200-1399px) - стандартная версия
- **Tablet** (768-1199px) - адаптированная версия
- **Mobile** (480-767px) - мобильная версия
- **Small** (280-479px) - компактная версия
- **Landscape** - оптимизация под горизонтальную ориентацию
- **High DPI** - поддержка Retina дисплеев
- **Reduced Motion** - уважение к предпочтениям пользователей

### 🎯 Функциональность
- **Hero секция** с информацией о команде
- **Команда** с фотографиями и навыками
- **Telegram ссылки** для связи с участниками
- **Контактная форма** через Formspree
- **GitHub организация** для просмотра проектов
- **Timeline** с историей достижений

## 🚀 Быстрый старт

### Просмотр сайта
```bash
# Клонирование репозитория
git clone https://github.com/researchnodec/website.git
cd website

# Открытие в браузере
open index.html
# или
python -m http.server 8000
```

### Развертывание на GitHub Pages
1. Загрузите файлы в репозиторий
2. В настройках репозитория → Pages
3. Выберите источник `Deploy from a branch`
4. Выберите ветку `main` и папку `/root`
5. Сайт будет доступен по адресу `https://username.github.io/repository`

## 📁 Структура проекта

```
website/
├── index.html          # Основная HTML страница
├── styles.css          # Стили с анимациями
├── script.js           # JavaScript интерактивности
├── README.md           # Документация
├── logo.jpg            # Логотип сайта
├── truemorgan.jpg      # Фото участника 1
├── arix.jpg            # Фото участника 2
├── liberty.jpg         # Фото участника 3
└── mrnothing.jpg       # Фото участника 4
```

## 🎨 Дизайн-система

### Цветовая палитра
```css
--primary-black: #000000      /* Основной фон */
--secondary-black: #0a0a0a   /* Вторичный фон */
--accent-black: #1a1a1a      /* Акцентный фон */
--accent-green: #00ff88      /* Основной акцент */
--accent-blue: #00aaff       /* Вторичный акцент */
--accent-purple: #ff00ff     /* Дополнительный акцент */
--text-primary: #ffffff       /* Основной текст */
--text-secondary: #b0b0b0    /* Вторичный текст */
```

### Типографика
- **Inter** - основной шрифт
- **Font Weight**: 300-900 для иерархии
- **Responsive**: clamp() для адаптивных размеров

## 🔧 Настройка

### Замена информации о команде
В файле `index.html` найдите секцию `team` и обновите:

```html
<div class="team-member" data-member="1">
    <div class="member-card">
        <div class="member-image-container">
            <img src="photo.jpg" alt="@username" class="member-image">
        </div>
        <div class="member-info">
            <h3 class="member-name">Имя</h3>
            <p class="member-role">Роль</p>
            <p class="member-description">Описание</p>
            <div class="member-skills">
                <span class="skill-tag">Skill</span>
            </div>
            <div class="member-social">
                <a href="https://t.me/username" target="_blank" class="social-link">@username</a>
            </div>
        </div>
    </div>
</div>
```

### Настройка Formspree
1. Создайте аккаунт на [formspree.io](https://formspree.io)
2. Создайте новую форму
3. Замените `mlgaydgr` в `index.html` на ваш Form ID
4. Обновите email в настройках Formspree

### Изменение цветовой схемы
В файле `styles.css` измените CSS переменные:

```css
:root {
    --accent-green: #your-color;
    --accent-blue: #your-color;
    /* и т.д. */
}
```

## 🌐 Развертывание

### GitHub Pages
```bash
# Пуш на GitHub
git add .
git commit -m "Deploy ResearchNode website"
git push origin main
```

### VPS хостинг
```bash
# Копирование файлов на сервер
scp -r ./* user@server:/var/www/html/

# Настройка прав доступа
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```

### Netlify/Vercel
1. Подключите репозиторий к платформе
2. Настройте build команду (если нужно)
3. Разверните сайт

## 🎯 Особенности реализации

### Анимации
- **Grid overlay** с движущейся сеткой
- **Particles** с плавающими элементами
- **Glow effects** для интерактивных элементов
- **Smooth transitions** для всех состояний

### Оптимизация
- **Lazy loading** для изображений
- **Minified CSS** без лишних зависимостей
- **Semantic HTML5** для SEO
- **Accessibility** поддержка

### Безопасность
- **Formspree** для защиты от спама
- **HTTPS ready** для безопасного соединения
- **XSS protection** в JavaScript

## 📞 Контакты

- **Email**: `team@researchnode.net`
- **GitHub**: [researchnodec](https://github.com/researchnodec)
- **Telegram**: [@truemorgan](https://t.me/truemorgan), [@a_r_i_x_x](https://t.me/a_r_i_x_x), [@MAIRY_LAY](https://t.me/MAIRY_LAY), [@nothing000exe](https://t.me/nothing000exe)

## 📄 Лицензия

MIT License - свободное использование с указанием авторства

---

**ResearchNode** © 2026 - Чемпионы CTF, эксперты в кибербезопасности

> ⚡ Built with passion for cybersecurity and modern web development
