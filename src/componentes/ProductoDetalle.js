import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faHeadset, faLeaf, faTruck, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import iconoPdf from './../imagenes/iconos/ic-pdf.png';
import ImageSlider from './ImageSlider';
import { SliderData1, SliderData2 } from './SliderData';
import { Link } from 'react-router-dom';
import ServiciosCard from './ServiciosCard';
import Servicios from './Servicios';


const ProductoDetalle = ({ tituloProductoDetalle, tipoProducto, presentaciones, usos, apariencia, colores, imagenesSecundarias, hola, urlPdf, urlPdf2, urlPdf3 }) => {
    return (
        <div className="caracteristicas__producto__container">
            <div className="wrap">
                <h3>{tituloProductoDetalle}</h3>
            </div>
            <article className="caracteristicas__producto">
                <article className="caracteristicas__producto__item contenedor">
                    <div className="caracteristicas__producto__izq">
                        <div className="producto__principal">
                            <ImageSlider slides={imagenesSecundarias} tipoSlide={hola} />
                        </div>
                        <div className="caracteristicas__producto__der">
                    <h4>Características</h4>
                    <div className="caracteristicas__producto__der__info">
                        {(tipoProducto) ?
                            <div>
                                <p>Tipo de producto: <span>{tipoProducto}</span></p>
                            </div>
                            :
                            <></>
                        }
                        {(presentaciones) ?
                            <div>
                                <p>Presentaciones: <span>{presentaciones}</span></p>
                            </div>
                            :
                            <></>
                        }
                        {(usos) ?
                            <div className="usos">
                                <>
                                    <p>Usos</p>
                                    {usos.map((u, index) => <li key={index}>{u}</li>)}
                                </>
                            </div>
                            :
                            <></>
                        }
                        {(apariencia) ?
                            <div>
                                <p>Apariencia: <span>{apariencia}</span></p>
                            </div>
                            :
                            <></>
                        }
                        {(colores) ?
                            <div>
                                <p>Color: <span>{colores}</span></p>

                            </div>
                            :
                            <></>
                        }
                        {(urlPdf) ?
                            <a href={urlPdf} target="_blank" className="boton boton-pdf"><img className="ic-pdf" src={iconoPdf} />Descargar Ficha Técnica</a>
                            :
                            <></>
                        }
                        {(urlPdf2) ?
                            <a href={urlPdf2} target="_blank" className="boton boton-pdf"><img className="ic-pdf" src={iconoPdf} />Descargar Hoja de Seguridad</a>
                            :
                            <></>
                        }
                        {(urlPdf3) ?
                            <a href={urlPdf3} target="_blank" className="boton boton-pdf"><img className="ic-pdf" src={iconoPdf} />Descargar Registro Sanitario</a>
                            :
                            <></>
                        }
                    </div>
                </div>

                    </div>
                    <Servicios />
                </article>
   
            </article>
        </div>
    );
}

export default ProductoDetalle;