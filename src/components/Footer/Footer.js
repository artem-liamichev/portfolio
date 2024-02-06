import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

  return (
    <footer className="footer">
        <p className="footer__info">{t('footer-info')}</p>
        <div className="footer__container">
            <span className="footer__copyright">&copy; 2024</span>
            <nav>
                <ul className='footer__list list'>
                    <li className='list-item'>
                        <a className="footer__link link" href="https://desafiolatam.com/incubadora/" target="_blank">Desafio Latam</a>
                    </li>
                    <li className='list-item'>
                        <a className="footer__link link" href="https://github.com/artem-liamichev" target="_blank">GitHub</a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>  );
}

export default Footer;
