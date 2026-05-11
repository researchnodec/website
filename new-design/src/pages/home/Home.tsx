import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import './Home.css';

const TEAM_DATA = [
  { id: 'truemorgan', num: '01', name: 'Truemorgan', img: '/img/truemorgan.jpg', handle: '@truemorgan', tg: 'https://t.me/truemorgan', tags: ['Web', 'XSS', 'SQLi', 'Crypto'] },
  { id: 'arix', num: '02', name: 'Arix_X', img: '/img/arix.jpg', handle: '@a_r_i_x_x', tg: 'https://t.me/a_r_i_x_x', tags: ['Crypto', 'Math', 'Lead'] },
  { id: 'liberty', num: '03', name: 'Liberty', img: '/img/liberty.jpg', handle: '@MAIRY_LAY', tg: 'https://t.me/MAIRY_LAY', tags: ['OSINT', 'Recon', 'Analysis'] },
  { id: 'mrnothing', num: '04', name: 'Mr.Nothing', img: '/img/mrnothing.jpg', handle: '@nothing000exe', tg: 'https://t.me/nothing000exe', tags: ['Reverse', 'Pwn', 'Hardware', 'Crypto'] }
];

const premiumEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: premiumEasing }}
          className="hero-content"
        >
          <div className="hero-tags-top">
            <span>CTF</span> <span className="dot">•</span> <span>Reverse Engineering</span>
          </div>
          <h1 className="hero-title">
            Research<br className="mobile-break" /><span className="accent">Node</span>
          </h1>
          <p className="hero-subtitle">{t('home.subtitle')}</p>
          
          <div className="hero-stats-minimal">
            <span>4 Members</span>
            <span className="divider"></span>
            <span>Kyiv, UA</span>
            <span className="divider"></span>
            <span>Since 2026</span>
          </div>
        </motion.div>
      </section>

      <section id="team" className="team-section">
        <div className="section-header-minimal">
          <h2 className="section-title">{t('team.title')}</h2>
          <p className="section-subtitle">{t('team.subtitle')}</p>
        </div>
        <div className="team-grid">
          {TEAM_DATA.map((member, index) => (
            <motion.div 
              key={member.id} 
              className="team-item"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: premiumEasing }}
            >
              <div className="team-image-container">
                <img src={member.img} alt={member.name} className="team-image" />
                <div className="image-overlay"></div>
                <span className="team-number">{member.num}</span>
              </div>
              <div className="team-info">
                <div className="team-info-header">
                  <h3 className="team-name">{member.name}</h3>
                  <a href={member.tg} target="_blank" rel="noreferrer" className="team-tg-link">
                    <MessageSquare size={16} />
                  </a>
                </div>
                <p className="team-role">{t(`team.members.${member.id}.role`)}</p>
                <p className="team-desc">{t(`team.members.${member.id}.desc`)}</p>
                <div className="team-tags-minimal">
                  {member.tags.map(tag => <span key={tag} className="minimal-tag">{tag}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="achievements" className="achievements-section">
        <div className="section-header-minimal">
          <h2 className="section-title">{t('achievements.title')}</h2>
          <p className="section-subtitle">{t('achievements.subtitle')}</p>
        </div>
        <div className="timeline-minimal">
          {[1, 2, 3].map((item, index) => (
            <motion.div 
              key={item} 
              className="timeline-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: premiumEasing }}
            >
              <div className="timeline-date-minimal">{t(`achievements.items.${item}.date`)}</div>
              <div className="timeline-content-minimal">
                <h4 className="timeline-title-minimal">{t(`achievements.items.${item}.title`)}</h4>
                <p className="timeline-desc-minimal">{t(`achievements.items.${item}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-header-minimal">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>
        
        <div className="contact-layout">
          <div className="contact-list">
            {TEAM_DATA.map((member, index) => (
              <motion.a 
                key={member.id}
                href={`mailto:${member.id === 'arix' ? 'arix' : member.id === 'truemorgan' ? 'truemorgan' : member.id === 'liberty' ? 'liberty' : 'mrnothing'}@researchnode.net`}
                className="contact-row"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: premiumEasing }}
              >
                <span className="contact-row-name">{member.name}</span>
                <span className="contact-row-email">
                  {member.id === 'arix' ? 'arix' : member.id === 'truemorgan' ? 'truemorgan' : member.id === 'liberty' ? 'liberty' : 'mrnothing'}@researchnode.net
                </span>
                <Mail className="contact-row-icon" size={18} />
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: premiumEasing }}
          >
            <form className="premium-form" onSubmit={async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'), 
    message: formData.get('message')
  };
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    if (result.success) {
      alert('Message sent successfully!');
      e.target.reset();
    } else {
      alert('Failed to send message: ' + result.message);
    }
  } catch (error) {
    alert('Error sending message. Please try again.');
  }
}}>
              <div className="input-row">
                <input type="text" name="name" required placeholder={t('contact.form.name')} />
              </div>
              <div className="input-row">
                <input type="email" name="email" required placeholder={t('contact.form.email')} />
              </div>
              <div className="input-row">
                <textarea name="message" required placeholder={t('contact.form.message')} rows={1}></textarea>
              </div>
              <button type="submit" className="premium-submit">
                {t('contact.form.send')} <span className="submit-arrow">&gt;</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};