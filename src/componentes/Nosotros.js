import React from 'react';
import imgNosotros from './../imagenes/Banner/nosotros.jpg'
import imgNosotros1 from './../imagenes/nosotros-1.png'
import imgNosotros2 from './../imagenes/nosotros-2.png'

// import imgVision from './../imagenes/vision.png'
// import imgMision from './../imagenes/mision.png'
// import imgValores from './../imagenes/valores.svg'

const Nosotros = () => {
    return (
        <section className="nosotros">
            <div className="nosotros__container">
                <img className="banner__img" loading="lazy" src={imgNosotros}></img>
                <h2>Química Rodriguez</h2>
                <p>Expertos en productos para limpieza</p>
                <article className="nosotros__wrap contenedor">
                    <div className="container__img">
                        <img src={imgNosotros1} />
                    </div>
                    <div className="nosotros__sobre">
                        <h3>Sobre Nosotros</h3>
                        <p>Química rodríguez & flores SAC, es una empresa peruana que empieza en junio de 2009, dedicándose a la fabricación de productos de limpieza de uso industrial y doméstico.</p>
                        <p>en los siguientes años con esfuerzo y dedicación hemos incrementado nuestra variedad de productos, incluyendo una línea de productos de uso automotriz, para satisfacer las necesidades de nuestros clientes.</p>
                        <p>Hoy en día química Rodríguez & flores SAC con la finalidad de brindar oportunidad de trabajo contamos con personal capacitado para la producción de nuestros productos. Así mismo hemos ampliado nuestras instalaciones para una mejor capacidad en producción y brindar precios competitivos en el mercado de la industria de la limpieza.</p>
                    </div>
                </article>
                <article className="nosotros__wrap contenedor">
                    <div className="nosotros__vismis">
                        <h3>Visión</h3>
                        <p>QUÍMICA RODRÍGUEZ y FLORES SAC, será en el futuro una de las empresas reconocidas en el mercado de la fabricación de productos de limpieza industrial y doméstica por su calidad y excelencia. La visión de la empresa seguir creciendo nacional e internacionalmente, llegar a hacer que QR sea una marca reconocida por todos los peruanos.</p>
                        <h3>Misión</h3>
                        <p>La empresa es una de las mejores fabricando productos de limpieza de uso industrial y del hogar. Nuestra misión es seguir elaborando productos de calidad y dar una excelente atención para brindar un mejor servicio a nuestros clientes.</p>
                        <h3>Nuestros Valores</h3>
                        <ul>
                            <li>- Transparencia</li>
                            <li>- Puntualidad de entrega</li>
                            <li>- Excelencia</li>
                            <li>- Adaptabilidad</li>
                            <li>- Diligencia</li>
                            <li>- Constancia</li>
                        </ul>
                    </div>
                    <div className="container__img">
                        <img src={imgNosotros2} />
                    </div>
                </article>
                <div className="nosotros__certificado__container contenedor">
                    <div className="nosotros__certificado">
                        <h3>CERTIFICADO N° 00297864</h3>
                        <p>La Dirección de signos distintivos del Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual - INDECOPI, certifica que por mandato de la Resolución N° 017995-2020/DSD - INDECOPI de fecha 13 de octubre de 2020, ha quedado inscrito en el Registro de Marcas de Producto, el siguiente signo:</p>
                        <li><span>Signo : </span>QR QUIMICA RODRÍGUEZ & FLORES SAC</li>
                        <li><span>Distingue : </span>Preparaciones de productos de limpieza y disolventes</li>
                        <li><span>Clase : </span>03 de la Clasificación Internacional</li>
                        <li><span>Solicitud : </span>0857157-2020</li>
                    </div>
                </div>
                <div className="nosotros__tienda contenedor">
                    <h3>Visite nuestro local</h3>
                    <iframe class="contacto__mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4639967017565!2d-77.09337688518835!3d-11.942343291536956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU2JzMyLjQiUyA3N8KwMDUnMjguMyJX!5e0!3m2!1sen!2spe!4v1632174831007!5m2!1sen!2spe" loading="lazy"></iframe>
                    {/* <iframe class="contacto__mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31229.70803996122!2d-77.07922826370363!3d-11.925015334129105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x324cb0963ad24a25!2sQUIMICA%20RODRIGUEZ%20%26%20FLORES%20S.A.C.!5e0!3m2!1ses-419!2spe!4v1626996490782!5m2!1ses-419!2spe" loading="lazy"></iframe> */}
                </div>
            </div>
        </section>
    );
}

export default Nosotros;