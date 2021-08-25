import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactoConsultasItem = ({ titulo, listaDeseos, rutaWsp }) => {
    return (
        <article className="contacto__consultas__item">
            <h3>{titulo}</h3>
            <div className="container__consulta__boton">
                <a href={rutaWsp} target="_blank"><span>Realizar Consulta</span><FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
            {listaDeseos.map((l, index) => <p key={index}>{l}</p>)}
        </article>
    );
}

export default ContactoConsultasItem;