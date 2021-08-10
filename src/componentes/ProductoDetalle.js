import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import iconoPdf from './../imagenes/iconos/ic-pdf.png';
import ImageSlider from './ImageSlider';
import { SliderData1, SliderData2 } from './SliderData';
import { Link } from 'react-router-dom';


const ProductoDetalle = ({ tituloProductoDetalle, imagenesSecundarias, hola, urlPdf, urlPdf2 }) => {
    return (
        <div className="caracteristicas__producto__container">
            <div className="wrap">
                <h3>{tituloProductoDetalle}</h3>
            </div>
            <article className="caracteristicas__producto">
                <div className="caracteristicas__producto__wrap wrap">
                    <div className="caracteristicas__producto__izq">
                        <div className="producto__principal">
                            <ImageSlider slides={imagenesSecundarias} tipoSlide={hola} />
                        </div>
                    </div>
                    <div className="caracteristicas__producto__der">
                        <h4>Catacterísticas</h4>
                        <div className="caracteristicas__producto__der__info">
                            <div>
                                <p>Tipo de producto: <span>Desinfectante</span></p>
                            </div>
                            <div>
                                <p>Presentaciones: <span>Frasco de 1L., bidones y galón</span></p>
                            </div>
                            <div>
                                <p>Usos</p>
                                <span>Desinfección: dilución de 1.5 20ml de desinfectante por cada litro de agua.</span>
                                <span>Santificación: dilución de 1.100 10ml de desinfectante por cada litro de agua.</span>
                            </div>
                            <div>
                                <p>Aspecto: <span>Liquido traslucido</span></p>
                            </div>
                            <div>
                                <p>Color: <span>Morado bajo</span></p>
                            </div>
                            {(urlPdf) ?
                                <a href={urlPdf} target="_blank" className="boton boton-pdf"><img className="ic-pdf" src={iconoPdf} />Descargar Ficha Técnica</a>
                                :
                                <></>
                            }
                            {(urlPdf2) ?
                                <a href={urlPdf} target="_blank" className="boton boton-pdf"><img className="ic-pdf" src={iconoPdf} />Descargar Hoja de Seguridad</a>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default ProductoDetalle;