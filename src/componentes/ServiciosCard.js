import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ServiciosCard = ({ icono, titulo, descripcion, cuentas }) => {
    return (
        <div className="servicios__card">
            <FontAwesomeIcon className="servicios__card__icono" icon={icono} />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            {(cuentas) ?
                <ul>
                    <li><b>Cuenta BCP :</b> 191-2580260-0-31</li>
                    <li><b>Cuenta BBVA  :</b> 03120100019538</li>
                    {/* <li><b>Cci:</b> 001131200010001953866</li> */}
                </ul>
                :
                <></>
            }
        </div>);
}

export default ServiciosCard;