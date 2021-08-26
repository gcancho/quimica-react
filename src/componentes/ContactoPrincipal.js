import React from 'react';
import ContactoConsultas from './ContactoConsultas';
import ContactoInfo from './ContactoInfo';

const ContactoPrincipal = ({rutaWsp}) => {
    return (
        <>
            <section className="contacto__principal contenedor">
                <ContactoInfo />
                <ContactoConsultas rutaWsp={rutaWsp}/>
            </section>
        </>
    );
}

export default ContactoPrincipal;