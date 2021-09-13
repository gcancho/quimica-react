import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactoInfo = ({nombreCorreo}) => {
    const direccionEmpresa = "Calle Los Cerezos Mz. J Lote 8B Lotización Chillon - Puente Piedra";
    const horarioEmpresa = ['L - V: 8:00 am - 6:00 pm', 'S: 8:00 am - 12:00 pm'];
    const telefonoEmpresa = "(01) 315 3600";
    return (
        <section className="contacto__info">
            <h2>Información de contacto</h2>
            <h3><FontAwesomeIcon icon={faMapMarkedAlt} />Oficina central</h3>
            <p>{direccionEmpresa}</p>
            <h5>Horario de atención</h5>
            {horarioEmpresa.map((h, index) => <p key={index}>{h}</p>)}
            <p>Teléfono: {telefonoEmpresa}</p>
            <p>Envíenos un mensaje de correo electrónico a:</p>
            <p>{nombreCorreo}</p>
            {/* <h3>Síguenos en</h3>
            <div className="contacto__redes">
                <a><FontAwesomeIcon icon={faFacebook} /></a>
                <a><FontAwesomeIcon icon={faInstagram} /></a>
                <a><FontAwesomeIcon icon={faLink} /></a>
                <a><FontAwesomeIcon icon={faYoutube} /></a>
            </div> */}
        </section>
    );
}

export default ContactoInfo;