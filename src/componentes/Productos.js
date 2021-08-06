import React from 'react';
import { useState } from 'react';
import { ProductosLimpiadores, ProductosDetergentes, ProductosDisolventes, ProductosPerfumadores, ProductosAbrillantadores, ProductosCeras, ProductosRemovedores, ProductosDesincrustantes, ProductosDesinfectantes } from './ConjuntoProductos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
// Imagenes 
import imgLimpiaVidrios from './../imagenes/Limpiadores/limpia-vidrios/DSC_7060.JPG';
import imgRonQuemar from './../imagenes/Limpiadores/ron-de-quemar/DSC_6953.JPG';
import imgJabonLiquido from './../imagenes/Detergentes/jabon-liquido/DSC_6910.JPG';
import imgShampooAlfombra from './../imagenes/Detergentes/shampoo-para-alfonbras/DSC_6923.JPG';
import imgShampooAuto from './../imagenes/Detergentes/shampoo-para-auto/DSC_6904.JPG';
import imgAguarras from './../imagenes/Disolventes/aguarras/DSC_6945.JPG';
import imgBencina from './../imagenes/Disolventes/bencina/DSC_6976.jpg';
import imgThinnerAcrilico from './../imagenes/Disolventes/thinner-acrilico/DSC_6951.jpg';
import imgAmbientadorBebe from './../imagenes/Perfumadores/ambientador-bebe/DSC_6892.jpg';
import imgAmbientadorLavanda from './../imagenes/Perfumadores/ambientador-lavanda/DSC_6914.jpg';
import imgPreservanteMadera from './../imagenes/Abrillantadores/preservante-para-madera/DSC_6888.jpg';
import imgRenovadorLlantas from './../imagenes/Abrillantadores/renovador-de-llantas/DSC_6862.jpg';
import imgSacaGrasa from './../imagenes/Abrillantadores/sacagrasa/DSC_689807.jpg';
import imgCeraAguaAmarilla from './../imagenes/Ceras/cera-agua-amarilla/DSC_688107.jpg';
import imgCeraAguaBlanca from './../imagenes/Ceras/cera-agua-blanca/DSC_690110.jpg';
import imgCeraAguaNegra from './../imagenes/Ceras/cera-agua-negra/DSC_686501.jpg';
import imgCeraAguaRoja from './../imagenes/Ceras/cera-agua-roja/DSC_687404.jpg';
import imgSacaOxido from './../imagenes/Removedores/saca-oxido/DSC_7013.JPG';
import imgVaselinaLiquida from './../imagenes/Removedores/vaselina-liquida/DSC_6930.JPG';
import imgAcidos from './../imagenes/Desincrustantes/acido/DSC_6984.JPG';
import imgAguaBaterias from './../imagenes/Desincrustantes/agua-para-baterias/DSC_6968.JPG';
import imgKresso from './../imagenes/Desincrustantes/kresso/DSC_7063.JPG';
import imgQuitasarro from './../imagenes/Desincrustantes/quitasarro/DSC_6957.JPG';
import imgSiliconaCristal from './../imagenes/Desincrustantes/silicona-cristal/DSC_6920.JPG';
import imgSiliconaTablero from './../imagenes/Desincrustantes/silicona-para-tablero/DSC_6917.JPG';

import imgCloro from './../imagenes/Desinfectantes/cloro/DSC_7072.JPG';
import imgLejia from './../imagenes/Desinfectantes/lejia/DSC_6987.JPG';
import imgLimpiaTodoAromaBebe from './../imagenes/Desinfectantes/limpia-todo-aroma-bebe/DSC_6868.JPG';
import imgLimpiaTodoAromaLavanda from './../imagenes/Desinfectantes/limpia-todo-aroma-lavanda/DSC_6877.JPG';
import imgPino from './../imagenes/Desinfectantes/pino/DSC_6895.JPG';
import imgPotenteDesinfectante from './../imagenes/Desinfectantes/potente-desinfectante/DSC_7016.JPG';


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
                            <a onClick={() => toogleTab(4)}><FontAwesomeIcon icon={faCaretRight} />Perfumadores</a>
                            <a onClick={() => toogleTab(5)}><FontAwesomeIcon icon={faCaretRight} />Abrillantadores</a>
                            <a onClick={() => toogleTab(6)}><FontAwesomeIcon icon={faCaretRight} />Ceras</a>
                            <a onClick={() => toogleTab(7)}><FontAwesomeIcon icon={faCaretRight} />Removedores</a>
                            <a onClick={() => toogleTab(8)}><FontAwesomeIcon icon={faCaretRight} />Desincrustantes</a>
                            <a onClick={() => toogleTab(9)}><FontAwesomeIcon icon={faCaretRight} />Desinfectantes</a>
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
                    presentaciones1={['lorem']}
                    descripcion1="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre2="Shampoo para alfombras"
                    imagen2={imgShampooAlfombra}
                    presentaciones2={['lorem']}
                    descripcion2="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre3="Shampoo para autos"
                    imagen3={imgShampooAuto}
                    presentaciones3={['lorem']}
                    descripcion3="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    clase={toggleState === 2 ? "producto-tab-active" : ""}
                />
                <ProductosDisolventes
                    nombre1="Aguarras"
                    imagen1={imgAguarras}
                    presentaciones1={['lorem']}
                    descripcion1="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre2="Bencina"
                    imagen2={imgBencina}
                    presentaciones2={['lorem']}
                    descripcion2="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre3="Thinner Acrílico"
                    imagen3={imgThinnerAcrilico}
                    presentaciones3={['lorem']}
                    descripcion3="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    clase={toggleState === 3 ? "producto-tab-active" : ""}
                />
                <ProductosPerfumadores
                    nombre1="Ambientador Bebe"
                    imagen1={imgAmbientadorBebe}
                    presentaciones1={['lorem']}
                    descripcion1="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre2="Ambientador Lavanda"
                    imagen2={imgAmbientadorLavanda}
                    presentaciones2={['lorem']}
                    descripcion2="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    clase={toggleState === 4 ? "producto-tab-active" : ""}
                />
                <ProductosAbrillantadores
                    nombre1="Preservante de madera"
                    imagen1={imgPreservanteMadera}
                    presentaciones1={['lorem']}
                    descripcion1="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre2="Renovador de llantas"
                    imagen2={imgRenovadorLlantas}
                    presentaciones2={['lorem']}
                    descripcion2="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre3="Saca Grasa"
                    imagen3={imgSacaGrasa}
                    presentaciones3={['lorem']}
                    descripcion3="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    clase={toggleState === 5 ? "producto-tab-active" : ""}
                />
                <ProductosCeras
                    nombre1="Cera al agua marina"
                    imagen1={imgCeraAguaAmarilla}
                    presentaciones1={['lorem']}
                    descripcion1="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre2="Cera al agua blanca"
                    imagen2={imgCeraAguaBlanca}
                    presentaciones2={['lorem']}
                    descripcion2="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre3="Cera al agua negra"
                    imagen3={imgCeraAguaNegra}
                    presentaciones3={['lorem']}
                    descripcion3="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre4="Cera al agua roja"
                    imagen4={imgCeraAguaRoja}
                    presentaciones4={['lorem']}
                    descripcion4="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    clase={toggleState === 6 ? "producto-tab-active" : ""}
                />
                <ProductosRemovedores
                    nombre1="Saca Óxido"
                    imagen1={imgSacaOxido}
                    presentaciones1={['lorem']}
                    descripcion1="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre2="Vaselina Líquida"
                    imagen2={imgVaselinaLiquida}
                    presentaciones2={['lorem']}
                    descripcion2="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    clase={toggleState === 7 ? "producto-tab-active" : ""}
                />
                <ProductosDesincrustantes
                    nombre1="Ácidos"
                    imagen1={imgAcidos}
                    presentaciones1={['lorem']}
                    descripcion1="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre2="Agua para baterias"
                    imagen2={imgAguaBaterias}
                    presentaciones2={['lorem']}
                    descripcion2="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre3="Kresso"
                    imagen3={imgKresso}
                    presentaciones3={['lorem']}
                    descripcion3="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre4="Quitasarro"
                    imagen4={imgQuitasarro}
                    presentaciones4={['lorem']}
                    descripcion4="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre5="Silicona para cristal"
                    imagen5={imgSiliconaCristal}
                    presentaciones5={['lorem']}
                    descripcion5="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre6="Silicona para tablero"
                    imagen6={imgSiliconaTablero}
                    presentaciones6={['lorem']}
                    descripcion6="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."
                    clase={toggleState === 8 ? "producto-tab-active" : ""}
                />
                <ProductosDesinfectantes
                    nombre1="Cloro"
                    imagen1={imgCloro}
                    presentaciones1={['lorem']}
                    descripcion1="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre2="Lejía"
                    imagen2={imgLejia}
                    presentaciones2={['lorem']}
                    descripcion2="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre3="Limpiatodo aroma bebe"
                    imagen3={imgLimpiaTodoAromaBebe}
                    presentaciones3={['lorem']}
                    descripcion3="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre4="Limpiatodo aroma lavanda"
                    imagen4={imgLimpiaTodoAromaLavanda}
                    presentaciones4={['lorem']}
                    descripcion4="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre5="Pino"
                    imagen5={imgPino}
                    presentaciones5={['lorem']}
                    descripcion5="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."

                    nombre6="Potente Desinfectante"
                    imagen6={imgPotenteDesinfectante}
                    presentaciones6={['lorem']}
                    descripcion6="Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor ad leo ac facilisis, conubia netus sem velit malesuada."
                    clase={toggleState === 9 ? "producto-tab-active" : ""}
                />
            </div>
        </section>
    );
}

export default Productos;