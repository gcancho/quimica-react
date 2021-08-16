import React from 'react';

const Contacto = () => {
    return (
        <section className="contacto" id="contacto">
            <h3 className="contacto__titulo">Contacto</h3>
            <article className="contacto__wrap wrap">
                <iframe className="contacto__mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31229.70803996122!2d-77.07922826370363!3d-11.925015334129105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x324cb0963ad24a25!2sQUIMICA%20RODRIGUEZ%20%26%20FLORES%20S.A.C.!5e0!3m2!1ses-419!2spe!4v1626996490782!5m2!1ses-419!2spe" loading="lazy">
                </iframe>
            </article>
            <div className="contacto__abajo">
                <div className="contacto__abajo__wrap wrap">
                    <article className="contacto__datos">
                        <div className="contacto__datos wrap">
                            <img className="contacto__logo" src="" />
                            <div className="contacto__datos__item">
                                <h5>Dirección</h5>
                                <p> Jr. los Cerezos Mza. J Lote. 8 Lotizacion Chillon</p>
                            </div>
                            <div className="contacto__datos__item">
                                <h5>Teléfono</h5>
                                <p>994 268 798</p>
                                <p>955 310 163</p>
                            </div>
                            <div className="contacto__datos__item">
                                <h5>Correo</h5>
                                <p> quimica_rodriguez@hotmail.com</p>
                            </div>
                        </div>
                    </article>
                    <article className="contacto__formulario">
                        <div className="contacto__formulario__wrap wrap">
                            <form action="Correo.php" method="post" className="contacto__formulario" id="formulario">
                                <h3 className="contacto__formulario__titulo">
                                    Envianos un mensaje
                                </h3>
                                <input className="contacto__input contacto__caja" type="text" id="nombre" name="nombre" placeholder="Nombre y apellidos" required />
                                <input className="contacto__input contacto__caja" type="email" id="correo" name="correo" placeholder="Correo de contacto" required />
                                <textarea className="contacto__textarea contacto__caja" id="mensaje" name="mensaje" placeholder="Escribe aquí tu mensaje :" required></textarea>
                                <input type="submit" value="enviar" className="boton boton--formulario" />
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

export default Contacto;