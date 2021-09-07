import { faArrowRight, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Imagenes from './Imagenes';

const Caracteristicas = () => {
    return (
        <>
            <section className="caracteristicas">
                <article className="informacion contenedor">
                    <div className="informacion__imagen">
                        <img src={Imagenes.informacionCuadrado1} />
                    </div>
                    <div className="informacion__texto">
                        <p>La familia de Química Rodríguez desarrollo producto que te ayudaran a mantener tu hogar libre de virus, gérmenes y bacterias. Te traemos 3 tips que te ayudaran a mantener tu hogar limpio y ordenado.</p>
                        <p><FontAwesomeIcon icon={faCheckSquare} />Limpia adecuadamente retirando la suciedad visible de las superficies que toques y/o habites frecuentemente (habitaciones, cocina, sala, baños, etc) concentrándonos en (puertas, ventanas, escaleras, muebles, artículos sanitarios, etc.)</p>
                        <p><FontAwesomeIcon icon={faCheckSquare} />Aplica con un paño de microfibra, esponja o trapo los productos que te brinda Química Rodríguez a una dilución de 1:50 (20 ml de producto por cada 1 Litro de agua) y dejar actuar por 8 minutos. Enjuagar si es necesario y lo requiere. (El producto no es tóxico ni corrosivo y no daña las superficies donde es aplicada esta solución desinfectante)</p>
                        <p><FontAwesomeIcon icon={faCheckSquare} />Deje actuar el producto correctamente según lo indicado, para que la solución sea efectiva en la limpieza de dichos espacios.</p>
                        {/* <p>Si deseas mayor información antes de adquirir nuestros productos no dude en contactarnos.</p> */}
                    </div>
                </article>
                <article className="informacion contenedor">
                    <div className="informacion__imagen">
                        <img src={Imagenes.informacionCuadrado2} />
                    </div>
                    <div className="informacion__texto">
                        <p>Lo más importante actualmente es tomar conciencia de los cuidados adecuados de la salud e higiene en nuestro hogar, por tal motivo Química Rodríguez   te trae diversos productos y artículos de limpieza para tu hogar, los cuales cumplen miles de funciones necesarias para la buena y eficaz desinfección del hogar que tanto estás buscando.</p>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Caracteristicas;