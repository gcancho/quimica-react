import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Productos2 = ({nombreCategoria1,nombreCategoria2,nombreCategoria3}) => {
    return ( 
        <section className="productos2 contenedor">
            <h2>Productos</h2>
            <article className="productos2__categorias">
                <div><span>{nombreCategoria1}</span><FontAwesomeIcon icon={faChevronDown}/></div>
                <div><span>{nombreCategoria2}</span><FontAwesomeIcon icon={faChevronDown}/></div>
                <div><span>{nombreCategoria3}</span><FontAwesomeIcon icon={faChevronDown}/></div>
            </article>
            <article className="productos2__productos">

            </article>

        </section>
     );
}

export default Productos2;