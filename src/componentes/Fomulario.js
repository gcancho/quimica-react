import emailjs from 'emailjs-com';
import React from 'react';

const Formulario = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ljlvubo', 'template_jxzhcbq', e.target, 'user_rEBXxhLtAEhIicpXovAuE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      }
    return (
        <section className="contacto" id="contacto">
            {/* <article className="contacto__wrap wrap">
                <iframe className="contacto__mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31229.70803996122!2d-77.07922826370363!3d-11.925015334129105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x324cb0963ad24a25!2sQUIMICA%20RODRIGUEZ%20%26%20FLORES%20S.A.C.!5e0!3m2!1ses-419!2spe!4v1626996490782!5m2!1ses-419!2spe" loading="lazy">
                </iframe>
            </article> */}
            <div className="contacto__abajo">
                <div className="contacto__abajo__wrap">
                    <article className="contacto__formulario">
                        <div className="contacto__formulario__wrap wrap">
                            <form onSubmit={sendEmail} className="contacto__formulario" id="formulario">
                                <h3 className="contacto__formulario__titulo">
                                    Envíanos un mensaje
                                </h3>
                                {/* <input className="contacto__input contacto__caja" type="text" id="asunto" name="asunto" placeholder="Asunto" name="asunto" required /> */}
                                <input className="contacto__input contacto__caja" type="text" id="nombre" placeholder="Nombre y apellidos" name="nombre" required />
                                <input className="contacto__input contacto__caja" type="text" id="telefono" placeholder="Telefono" name="telefono" required />
                                <textarea className="contacto__textarea contacto__caja" id="mensaje" placeholder="Escribe aquí tu mensaje :" name="mensaje" required></textarea>
                                <input type="submit" value="Enviar" className="boton boton--formulario" />
                                <div className="contacto__mensajes">
                                    <p className="respuesta" id="respuesta">Mensaje enviado</p>
                                    <p className="msj-error" id="msj-error">Debe llenar los campos correctamente</p>
                                </div>
                            </form>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Formulario;