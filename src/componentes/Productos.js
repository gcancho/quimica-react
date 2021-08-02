import React from 'react';
import { useState } from 'react';
import { ProductosLimpiadores, ProductosDetergentes, ProductosDisolventes } from './ConjuntoProductos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
// Imagenes 
import imgLimpiaVidrios from './../imagenes/Limpiadores/limpia-vidrios/DSC_7060.JPG';
import imgRonQuemar from './../imagenes/Limpiadores/ron-de-quemar/DSC_6953.JPG';
import imgJabonLiquido from './../imagenes/Detergentes/jabon-liquido/DSC_6910.JPG';
import imgShampooAlfombra from './../imagenes/Detergentes/shampoo-para-alfonbras/DSC_6923.JPG';
import imgShampooAuto from './../imagenes/Detergentes/shampoo-para-auto/DSC_6904.JPG';
import imgAguarras from './../imagenes/Disolventes/aguarras/DSC_6945.JPG';
import imgBencina from './../imagenes/Disolventes/bencina/DSC_6976.JPG';
import imgThinnerAcrilico from './../imagenes/Disolventes/thinner-acrilico/DSC_6951.JPG';

const Productos = () => {

    const [toggleState, settoggleState] = useState(1);
    const toogleTab = (index) => {
        settoggleState(index);
    }
    return (
        <section className="productos" id="productos">
            <div className="wrap">
                <h2 className="productos__titulo">Productos</h2>
            </div>
            <div className="productos__item">
                <article className="categorias">
                    <div className="wrap">
                        <h2 className="categorias__titulo">Categorías</h2>
                    </div>
                    <div className="categorias__wrap wrap">
                        <div className="categorias__conjunto">
                            <a onClick={() => toogleTab(1)}><FontAwesomeIcon icon={faCaretRight} />Limpiadores</a>
                            <a onClick={() => toogleTab(2)}><FontAwesomeIcon icon={faCaretRight} />Detergentes</a>
                            <a onClick={() => toogleTab(3)}><FontAwesomeIcon icon={faCaretRight} />Disolventes</a>
                            <a href="#"><FontAwesomeIcon icon={faCaretRight} />Limpiadores</a>
                            <a href="#"><FontAwesomeIcon icon={faCaretRight} />Perfumadores</a>
                        </div>
                    </div>
                </article>
                <ProductosLimpiadores
                    nombre1="Limpia vidrios"
                    imagen1={imgLimpiaVidrios}
                    descripcion1="De forma segura limpie sus cristales y vidrios de su hogar e industria. Elimine la grasa, tizne, y demás agentes que opacan el brillo"
                    presentaciones1={['bidón', 'galón', 'litro']}

                    nombre2="Ron de quemar"
                    imagen2={imgRonQuemar}
                    descripcion2=" Líquido azulado y volátil, de olor etéreo y sabor picante, que tiene aplicaciones en la industria como disolvente para lacas, barnices, perfumes; como medio para reacciones químicas."
                    presentaciones2={['frasco de 1 L.', 'bidones', 'galón', 'clindro']}
                    clase={toggleState === 1 ? "producto-tab-active" : ""}
                />

                <ProductosDetergentes
                    nombre1="Jabón Líquido"
                    imagen1={imgJabonLiquido}
                    descripcion1="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre2="Shampoo para alfombras"
                    imagen2={imgShampooAlfombra}
                    descripcion2="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre3="Shampoo para autos"
                    imagen3={imgShampooAuto}
                    descripcion3="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    clase={toggleState === 2 ? "producto-tab-active" : ""}
                />
                <ProductosDisolventes
                    nombre1="Aguarras"
                    imagen1={imgAguarras}
                    descripcion1="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre2="Bencina"
                    imagen2={imgBencina}
                    descripcion2="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre3="Thinner Acrílico"
                    imagen3={imgThinnerAcrilico}
                    descripcion3="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    clase={toggleState === 3 ? "producto-tab-active" : ""}
                />
            </div>
        </section>
    );
}

export default Productos;