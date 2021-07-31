import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'; 

const CategoriasProductos = () => {
    return (
        <article className="categorias">
            <div className="wrap">
                <h2 className="categorias__titulo">Categorías</h2>
            </div>
            <div className="categorias__wrap wrap">
                <div className="categorias__conjunto">
                    <a href="#"><FontAwesomeIcon icon={faCaretRight}/>Limpiadores</a>
                    <a href="#"><FontAwesomeIcon icon={faCaretRight}/>Desinfectantes</a>
                    <a href="#"><FontAwesomeIcon icon={faCaretRight}/>Detergentes</a>
                    <a href="#"><FontAwesomeIcon icon={faCaretRight}/>Disolventes</a>
                    <a href="#"><FontAwesomeIcon icon={faCaretRight}/>Limpiadores</a>
                    <a href="#"><FontAwesomeIcon icon={faCaretRight}/>Perfumadores</a>
                </div>
                <div className="categorias__info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorum magni esse aspernatur
                        distinctio officia ipsam natus molestiae ut? Illo corporis sed eligendi dolorem vel eveniet
                        veniam voluptate ex amet.</p>
                </div>
            </div>
        </article>
    );
}

export default CategoriasProductos;