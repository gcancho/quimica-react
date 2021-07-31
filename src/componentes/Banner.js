import React from 'react';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__mensaje">
                <p className="banner__mensaje__texto">Trabajamos bajo los mas estrictos controles de calidad, brindando el mejor
                    servicio</p>
                <div className="banner__mensaje__puntos" href="#">
                    <a className="banner__mensaje__puntos__item"><i className="fas fa-dot-circle"></i></a>
                    <a className="banner__mensaje__puntos__item"><i className="fas fa-dot-circle"></i></a>
                    <a className="banner__mensaje__puntos__item"><i className="fas fa-dot-circle"></i></a>
                    <a className="banner__mensaje__puntos__item"><i className="fas fa-dot-circle"></i></a>
                </div>
            </div>
        </section>
    );
}

export default Banner;