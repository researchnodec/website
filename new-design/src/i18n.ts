import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      header: { team: "Team", achievements: "Achievements", contact: "Contact" },
      home: { title: "ResearchNode", subtitle: "Security & Development Team" },
      team: {
        title: "Our Team",
        subtitle: "Four champions, one goal",
        members: {
          truemorgan: { role: "Web Security / Web Exploitation", desc: "Working with web applications, logic, vulnerabilities, APIs" },
          arix: { role: "Cryptography Lead", desc: "Cryptography, ciphers, math part. Coordination of crypto tasks" },
          liberty: { role: "OSINT / Recon", desc: "Information gathering, data analysis, reconnaissance. Open sources and non-standard tasks" },
          mrnothing: { role: "Reverse Engineering / Pwn / Hardware", desc: "Binary analysis, exploitation, low-level. Software, memory, and hardware" }
        }
      },
      achievements: {
        title: "Achievements",
        subtitle: "Our path to victory",
        items: {
          1: { title: "Online stage CTF Junior League 2026", date: "April 2026", desc: "First place in online qualification" },
          2: { title: "Official ResearchNode formation", date: "April 2026", desc: "Final team roster formed" },
          3: { title: "Second offline stage CTF Junior League", date: "June 2026", desc: "To be continued..." }
        }
      },
      contact: {
        title: "Contact Us",
        subtitle: "Ready for new challenges",
        form: { name: "Your Name", email: "Your Email", message: "Message", send: "Send" }
      },
      footer: { rights: "© 2026 ResearchNode. All rights reserved." }
    }
  },
  uk: {
    translation: {
      header: { team: "Команда", achievements: "Досягнення", contact: "Контакти" },
      home: { title: "ResearchNode", subtitle: "Security & Development Team" },
      team: {
        title: "Наша Команда",
        subtitle: "Четверо чемпіонів, одна мета",
        members: {
          truemorgan: { role: "Web Security / Web Exploitation", desc: "Робота з веб-додатками, логікою, вразливостями, API" },
          arix: { role: "Cryptography Lead", desc: "Криптографія, шифри, математична частина. Координація завдань у crypto-напрямку" },
          liberty: { role: "OSINT / Recon", desc: "Пошук інформації, аналіз даних, розвідка. Робота з відкритими джерелами та нестандартними завданнями" },
          mrnothing: { role: "Reverse Engineering / Pwn / Hardware", desc: "Аналіз бінарників, експлуатація, низький рівень. Робота з програмами, пам'яттю та залізом" }
        }
      },
      achievements: {
        title: "Досягнення",
        subtitle: "Наш шлях до перемоги",
        items: {
          1: { title: "Онлайн-етап CTF Junior League 2026", date: "Квітень 2026", desc: "Перше місце в онлайн-кваліфікації" },
          2: { title: "Створення офіційної команди ResearchNode", date: "Квітень 2026", desc: "Формування остаточного складу команди" },
          3: { title: "Другий офлайн етап CTF Junior League", date: "Червень 2026", desc: "To be continued..." }
        }
      },
      contact: {
        title: "Зв'язок з нами",
        subtitle: "Готові до нових викликів",
        form: { name: "Ваше Ім'я", email: "Ваш Email", message: "Повідомлення", send: "Надіслати" }
      },
      footer: { rights: "© 2026 ResearchNode. Всі права захищені." }
    }
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources, fallbackLng: 'en', interpolation: { escapeValue: false }
});

export default i18n;