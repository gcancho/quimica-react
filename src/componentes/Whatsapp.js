import React from 'react';
import imgWsp from '../imagenes/wsp.png';

const Whatsapp = () => {
    return (
        <div className="container-wsp">
            <a href="https://wa.me/51921920359?text=Hola" >
                <img className="wsp" src={imgWsp} alt="" />
            </a>
        </div>
    );
}

export default Whatsapp;