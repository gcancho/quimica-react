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
                <div className="nosotros__wrap">
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
                            <img src={imgValores}/>
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
            </div>
        </section>
    );
}

export default Nosotros;