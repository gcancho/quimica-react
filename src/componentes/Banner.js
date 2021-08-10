import React from 'react';
import imgBanner from './../imagenes/Banner/banner-1.jpg';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__container">
                <img className="banner__img" loading="lazy" src={imgBanner}/>
            </div>
        </section>
    );
}

export default Banner;