import React from 'react';

const CardProducto = ({tituloProducto,nombreProducto,descripcionProducto,imagenProducto}) => {
    return (
        <div className="limpiadores__item">
            <h3>{tituloProducto}</h3>
            <div className="limpiadores__item__caja">
                <div className="limpiadores__item__producto">
                    <img src={imagenProducto} alt="" />
                    <a className="boton" href="">Ver detalle</a>
                </div>
                <div className="limpiadores__item__info">
                    <p><span>Nombre del producto: </span> {nombreProducto} </p>
                    <p><span>Descripción: </span> {descripcionProducto}</p>
                </div>
            </div>
        </div>
    );
}

export default CardProducto;