import React from 'react';
import Imagenes from './Imagenes';

const Marcas = () => {
    return (
        <>
            <section className="marcas contenedor">
                <h2>Confian en nosotros:</h2>
                <div className="marcas__imagenes">
                    <img src={Imagenes.marca1} />
                    <img src={Imagenes.marca2} />
                    <img src={Imagenes.marca3} />
                    <img src={Imagenes.marca4} />
                    <img src={Imagenes.marca5} />
                </div>
            </section>
        </>
    );
}

export default Marcas;