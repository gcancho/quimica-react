import React from 'react';
import imgWsp from '../imagenes/wsp.png';

const Whatsapp = ({rutaWsp}) => {
    return (
        <div className="container-wsp">
            <a href={rutaWsp} target="_blank">
                <img className="wsp" src={imgWsp} alt="" />                
            </a>
        </div>
    );
}

export default Whatsapp;