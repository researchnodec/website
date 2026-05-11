import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Header.css';

export const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
  };

  return (
    <motion.header 
      className="premium-header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="header-logo">
        <span className="logo-text">RN_</span>
      </div>

      <nav className="header-nav">
        <a href="#team">{t('header.team')}</a>
        <a href="#achievements">{t('header.achievements')}</a>
        <a href="#contact">{t('header.contact')}</a>
      </nav>

      <button className="lang-toggle" onClick={toggleLanguage}>
        {i18n.language.toUpperCase()}
      </button>
    </motion.header>
  );
};