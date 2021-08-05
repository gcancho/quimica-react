import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ServiciosCard = ({icono,titulo,descripcion}) => {
    return (
        <div className="servicios__card">
            <FontAwesomeIcon className="servicios__card__icono" icon={icono}/>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
        </div>);
}

export default ServiciosCard;