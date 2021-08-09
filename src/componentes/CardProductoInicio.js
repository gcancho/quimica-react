import React from 'react';
import { Link } from 'react-router-dom';

const CardProductoInicio = ({nombre,descripcion,presentacion,imagen, ruta}) => {
    return (
        
        <div className="producto-tab__item">
            <h3>{nombre}</h3>
            <div className="producto-tab__item__caja">
                <div className="producto-tab__item__producto">
                    <img loading="lazy" src={imagen} alt="" />
                    <Link className="boton" to={ruta}>Ver detalle</Link>
                </div>
                <div className="producto-tab__item__info">
                    <p><span>Descripción: </span> {descripcion}</p>
                    <p><span>Presentaciones: </span>
                        <ul>
                            {presentacion.map((p, index) => <li key={index}>{p}</li>)}
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardProductoInicio;