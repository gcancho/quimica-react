import React from 'react';
import CategoriasProductos from './CategoriasProductos';
import ConjuntoProductos from './ConjuntoProductos';

const Productos = () => {
    return (
        <section className="productos" id="productos">
            <div className="wrap">
                <h2 className="productos__titulo">Productos</h2>
            </div>
            <div className="productos__item">
                <CategoriasProductos/>
                <ConjuntoProductos/>
            </div>
        </section>
    );
}

export default Productos;