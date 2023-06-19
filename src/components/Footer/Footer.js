import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
        const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="containerFooter">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__section-title">About Us</h3>
            <p className="footer__section-text">{t('Traveldes')}</p>
          </div>
          <div className="footer__section">
            <h3 className="footer__section-title">Contact Us</h3>
            <p className="footer__section-text">123 Street, City Name</p>
            <p className="footer__section-text">Email: info@example.com</p>
            <p className="footer__section-text">Phone: +1 123-456-7890</p>
          </div>
          <div className="footer__section">
            <h3 className="footer__section-title">Follow Us</h3>
            <div className="footer__social-icons">
              <a href="#" className="footer__social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="footer__social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="footer__social-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom-text">© 2023 Your Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
