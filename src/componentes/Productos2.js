import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Productos2 = ({ nombreCategoria1, nombreCategoria2, nombreCategoria3, nombresProductosCategoria1, nombresProductosCategoria2, nombresProductosCategoria3 }) => {

    const mostrarItems1 = () => {
        document.getElementById('contenido-1').classList.toggle('active1');
    }
    const mostrarItems2 = () => {
        document.getElementById('contenido-2').classList.toggle('active2');
    }
    const mostrarItems3 = () => {
        document.getElementById('contenido-3').classList.toggle('active3');
    }

    return (
        <section className="productos2 contenedor">
            <h2>Productos</h2>
            <article className="productos2__categorias">
                <a className="lista">
                    <div className="categoria" onClick={mostrarItems1}><span>{nombreCategoria1}</span><FontAwesomeIcon icon={faChevronDown} /></div>
                    <ul className="contenido" id="contenido-1">
                        {nombresProductosCategoria1.map((n1, index) => <li><input type="checkbox" /><label key={index}>{n1}</label></li>)}
                    </ul>
                </a>
                <a className="lista">
                    <div className="categoria" onClick={mostrarItems2}><span>{nombreCategoria2}</span><FontAwesomeIcon icon={faChevronDown} /></div>
                    <ul className="contenido" id="contenido-2">
                        {nombresProductosCategoria2.map((n2, index) => <li><input type="checkbox" /><label key={index}>{n2}</label></li>)}
                    </ul>
                </a>
                <a className="lista">
                    <div className="categoria" onClick={mostrarItems3}><span>{nombreCategoria3}</span><FontAwesomeIcon icon={faChevronDown} /></div>
                    <ul className="contenido" id="contenido-3">
                        {nombresProductosCategoria3.map((n3, index) => <li><input type="checkbox" /><label key={index}>{n3}</label></li>)}
                    </ul>
                </a>
            </article>

        </section >
    );
}

export default Productos2;