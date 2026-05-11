# ResearchNode - CTF Champions Website

## Опис
Сучасний веб-сайт для команди ResearchNode - переможців Всеукраїнського CTF змагання. Сайт виконаний у чорній кольоровій схемі з численними анімаційними ефектами в стилі Cuberto.

## Особливості
- **Сучасний дизайн**: Чорна кольорова схема з неоновими акцентами
- **Інтерактивність**: Кастомний курсор, паралакс-ефекти, анімації при скролі
- **Адаптивність**: Повністю респонсивний дизайн для всіх пристроїв
- **Секція команди**: Місця для фото та описів трьох учасників
- **Досягнення**: Таймлайн з перемогами команди
- **Контактна форма**: Функціональна форма з валідацією
- **Продуктивність**: Оптимізований для VPS хостингу

## Технології
- **HTML5**: Семантична розмітка
- **CSS3**: Сучасні стилі з анімаціями та ефектами
- **Vanilla JavaScript**: Інтерактивність без залежностей
- **Google Fonts**: Шрифт Inter для сучасного вигляду

## Структура файлів
```
/
├── index.html          # Головна HTML сторінка
├── styles.css          # Стилі з анімаціями
├── script.js           # JavaScript для інтерактивності
└── README.md           # Цей файл
```

## Встановлення на VPS

### 1. Підготовка сервера
```bash
# Оновлення системи
sudo apt update && sudo apt upgrade -y

# Встановлення веб-сервера (Nginx)
sudo apt install nginx -y

# Встановлення SSL (опційно)
sudo apt install certbot python3-certbot-nginx -y
```

### 2. Розгортання сайту
```bash
# Копіювання файлів на сервер
scp -r /path/to/ctf_kyiv-cite/* user@your-server:/var/www/html/

# Налаштування прав доступу
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```

### 3. Конфігурація Nginx
Створіть файл конфігурації `/etc/nginx/sites-available/researchnode`:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;
    
    # Оптимізація статичних файлів
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Стиснення gzip
    gzip on;
    gzip_types text/css application/javascript application/json;
    
    # Безпека
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
}
```

### 4. Активація сайту
```bash
sudo ln -s /etc/nginx/sites-available/researchnode /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Налаштування Formspree
Форма вже інтегрована з Formspree:
- Endpoint: `https://formspree.io/f/mlgaydgr`
- Всі листи надсилаються на email, налаштований в Formspree
- Не потребує PHP або налаштування mail-сервера

### 6. SSL сертифікат (опційно)
```bash
sudo certbot --nginx -d your-domain.com
```

## Налаштування

### Заміна фото учасників
Замініть плейсхолдери в `index.html`:
```html
<img src="path/to/member1-photo.jpg" alt="Member 1">
<img src="path/to/member2-photo.jpg" alt="Member 2">
<img src="path/to/member3-photo.jpg" alt="Member 3">
```

### Редагування інформації про команду
Змініть імена, ролі та описи в секції `.team-member`.

### Контактна інформація
Оновіть email та інші контакти в секції `#contact`.

## Оптимізація продуктивності

### Мінімізація файлів
```bash
# Мінімізація CSS
npx clean-css-cli -o styles.min.css styles.css

# Мінімізація JavaScript
npx terser script.js -o script.min.js
```

### Стиснення зображень
Використовуйте формати WebP для фото та оптимізуйте розміри зображень.

## Особливості дизайну

### Ефекти
- **Glitch анімація** для заголовка
- **Паралакс скролінг** для фону
- **Hover ефекти** для карток команди
- **Анімовані лічильники** статистики
- **Частинки** на фоні hero секції

### Кольорова схема
- Основний фон: `#000000` (чорний)
- Акцентний колір: `#00ff88` (неоновий зелений)
- Додаткові акценти: `#00aaff`, `#ff00ff`, `#ff0044`

## Браузерна сумісність
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Підтримка
Для будь-яких питань або модифікацій звертайтеся до команди розробки.

## Ліцензія
© 2024 ResearchNode. All rights reserved.
