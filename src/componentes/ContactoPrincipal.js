import React from 'react';
import ContactoConsultas from './ContactoConsultas';
import ContactoInfo from './ContactoInfo';
import Formulario from './Fomulario';

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