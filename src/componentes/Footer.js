import React from 'react';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

//Imagenes
import logo from './../imagenes/logo.png';
import FooterItem from './FooterItem';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrap wrap">
                <article className="footer__item footer__item--logo">
                    <img src={logo} />
                    <span><FontAwesomeIcon icon={faEnvelope} />informes@quimicarodriguez.com</span>
                    <div className="redes__sociales">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </article>
                <FooterItem titulo="Oficina Central" icono={faMapMarkedAlt} texto="Calle Los Cerezos Mz. J Lote 8B Lotización Chillon - Puente Piedra"/>
                <FooterItem titulo="Horario de Atención" icono={faClock} texto="L - V: 8:00 am - 5:15 pm"/>
                <FooterItem titulo="Teléfonos" icono={faPhone} texto="994 268 798 - 955 310 163"/>
            </div>
        </footer>
    );
}

export default Footer;