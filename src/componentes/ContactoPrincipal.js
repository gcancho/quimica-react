import React from 'react';
import ContactoConsultas from './ContactoConsultas';
import ContactoInfo from './ContactoInfo';

const ContactoPrincipal = () => {
    return (
        <section className="contacto__principal contenedor">
            <ContactoInfo />
            <ContactoConsultas />
        </section>
    );
}

export default ContactoPrincipal;