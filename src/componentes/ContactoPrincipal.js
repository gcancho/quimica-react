import React from 'react';
import ContactoConsultas from './ContactoConsultas';
import ContactoInfo from './ContactoInfo';

const ContactoPrincipal = ({rutaWsp, nombreCorreo}) => {
    return (
        <>
            <section className="contacto__principal contenedor">
                <ContactoInfo nombreCorreo={nombreCorreo}/>
                <ContactoConsultas rutaWsp={rutaWsp}/>
            </section>
        </>
    );
}

export default ContactoPrincipal;