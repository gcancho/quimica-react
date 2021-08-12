import React from 'react';
import imgWsp from '../imagenes/wsp.png';

const Whatsapp = () => {
    return (
        <div className="container-wsp">
            <a href="https://wa.me/51994268798?text=Buen%20día%20Química%20Rodríguez" target="_blank">
                <img className="wsp" src={imgWsp} alt="" />                
            </a>
        </div>
    );
}

export default Whatsapp;