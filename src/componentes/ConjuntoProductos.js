import React from 'react';
import CardProducto from './CardProducto';
import imgLimpiaVidrios from './../imagenes/limpiadores/DSC_6907.JPG';
import imgRonDeQuemar from './../imagenes/limpiadores/DSC_6885.JPG';

const ConjuntoProductos = () => {
    return (
        <article className="limpiadores">
            <div className="wrap">
                <h2 className="limpiadores__titulo">Limpiadores</h2>
            </div>
            <div className="limpiadores__wrap wrap">
                <CardProducto tituloProducto="Limpia vidrios"
                    nombreProducto="amonio cuaternario 5ta generación desinfectante batctericida"
                    descripcionProducto="Es un potente desinfectante formulado a base de amonio cuaternario de 5ta generación y biguiandina polimérica los cuales ofrecen acción germicida frente a un amplio espectro de bacteria gram positivas y gram negativas, hongos y virus."
                    imagenProducto={imgLimpiaVidrios} />
                <CardProducto tituloProducto="Ron de quemar"
                    nombreProducto="amonio cuaternario 5ta generación desinfectante batctericida"
                    descripcionProducto="Es un potente desinfectante formulado a base de amonio cuaternario de 5ta generación y biguiandina polimérica los cuales ofrecen acción germicida frente a un amplio espectro de bacteria gram positivas y gram negativas, hongos y virus."
                    imagenProducto={imgRonDeQuemar} />
            </div>
        </article>
    );
}

export default ConjuntoProductos;