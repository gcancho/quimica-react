import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ContactoConsultasItem from './ContactoConsultasItem';

const ContactoConsultas = () => {
    return (
        <section className="contacto__consultas">
            <p>Hola, tenemos diferentes canales para brindarte una correcta atención. ¿Qué consulta tienes hoy?</p>
            <ContactoConsultasItem titulo="Servicio al cliente" listaDeseos={['- Tengo una consulta sobre el uso de un producto.','- Deseo presentar un reclamo.']}/> 
            <ContactoConsultasItem titulo="Deseo contactar a un asesor comercial" listaDeseos={['– Soy una empresa y requiero contactar la asesoría.']}/> 
            <ContactoConsultasItem titulo="Quiero ser parte de la red de distribuidores" listaDeseos={['– Deseo ser parte de la red de distribuidores.']}/> 
            
        </section>
    );
}

export default ContactoConsultas;