import React from 'react';

const CardProducto = ({ tituloProducto, descripcionProducto, imagenProducto }) => {

    return (
        <div className="producto-tab__item">
            <h3>{tituloProducto}</h3>
            <div className="producto-tab__item__caja">
                <div className="producto-tab__item__producto">
                    <img src={imagenProducto} alt="" />
                    <a className="boton" href="">Ver detalle</a>
                </div>
                <div className="producto-tab__item__info">
                    <p><span>Descripción: </span> {descripcionProducto}</p>
                    <p><span>Presentaciones: </span>
                        <ul>
                            <li></li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardProducto;