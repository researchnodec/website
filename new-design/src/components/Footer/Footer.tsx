import { useTranslation } from 'react-i18next';
import './Footer.css';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="premium-footer">
      <div className="footer-content">
        <span className="footer-logo">RESEARCH_NODE</span>
        <span className="footer-rights">{t('footer.rights')}</span>
      </div>
    </footer>
  );
};