import React from 'react';
import { useState } from 'react';
import { ProductosDesinfectantes, ProductosLimpiadores, ProductosDetergentes } from './ConjuntoProductos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import imgLimpiaVidrios from './../imagenes/limpiadores/DSC_6907.JPG';
import imgRonDeQuemar from './../imagenes/limpiadores/DSC_6885.JPG';

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
                            <a onClick={() => toogleTab(2)}><FontAwesomeIcon icon={faCaretRight} />Desinfectantes</a>
                            <a onClick={() => toogleTab(3)}><FontAwesomeIcon icon={faCaretRight} />Detergentes</a>
                            <a href="#"><FontAwesomeIcon icon={faCaretRight} />Disolventes</a>
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
                    imagen2={imgRonDeQuemar}
                    descripcion2=" Líquido azulado y volátil, de olor etéreo y sabor picante, que tiene aplicaciones en la industria como disolvente para lacas, barnices, perfumes; como medio para reacciones químicas."
                    presentaciones2={['frasco de 1 L.', 'bidones', 'galón','clindro']}
                    clase={toggleState === 1 ? "producto-tab-active" : ""}
                />
                <ProductosDesinfectantes clase={toggleState === 2 ? "producto-tab-active" : ""} />
                <ProductosDetergentes clase={toggleState === 3 ? "producto-tab-active" : ""} />
            </div>
        </section>
    );
}

export default Productos;