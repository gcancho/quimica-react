import React from 'react';
import imgNosotros from './../imagenes/Banner/nosotros.jpg'
import imgVision from './../imagenes/vision.png'
import imgMision from './../imagenes/mision.png'
import imgValores from './../imagenes/valores.svg'

const Nosotros = () => {
    return (
        <section className="nosotros">
            <div className="nosotros__container">
                <img className="banner__img" loading="lazy" src={imgNosotros}></img>
                <div className="nosotros__wrap contenedor">
                    <div className="nosotros__izq">
                        <div className="vision wrap">
                            <img src={imgVision} />
                            <p>QUÍMICA RODRÍGUEZ y FLORES SAC, será en el futuro una de las empresas reconocidas en el mercado de la fabricación de productos de limpieza industrial y doméstica por su calidad y excelencia. La visión de la empresa seguir creciendo nacional e internacionalmente, llegar a hacer que QR sea una marca reconocida por todos los peruanos.</p>
                        </div>
                        <div className="mision wrap">
                            <img src={imgMision} />
                            <p>La empresa es una de las mejores fabricando productos de limpieza de uso industrial y del hogar. Nuestra misión es seguir elaborando productos de calidad y dar una excelente atención para brindar un mejor servicio a nuestros clientes.</p>
                        </div>
                    </div>
                    <div className="nosotros__der">
                        <div className="wrap">
                            <img src={imgValores} />
                            <h5>Nuestros Valores</h5>
                            <ul>
                                <li>Transparencia</li>
                                <li>Puntualidad de entrega</li>
                                <li>Excelencia</li>
                                <li>Adaptabilidad</li>
                                <li>Diligencia</li>
                                <li>Constancia</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="nosotros__certificado__container">
                    <div className="wrap">
                        <div className="nosotros__certificado">
                            <h3>CERTIFICADO N° 00297864</h3>
                            <p>La Dirección de signos distintivos del Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual - INDECOPI, certifica que por mandato de la Resolución N° 017995-2020/DSD - INDECOPI de fecha 13 de octubre de 2020, ha quedado inscrito en el Registro de Marcas de Producto, el siguiente signo:</p>
                            <li><span>Signo : </span>QR QUIMICA RODRÍGUEZ & FLORES SAC</li>
                            <li><span>Distingue : </span>Preparaciones de productos de limpieza y disolventes</li>
                            <li><span>Clase : </span>03 de la Clasificación Internacional</li>
                            <li><span>Solicitud : </span>0857157-2020</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;