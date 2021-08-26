import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Imagenes from './Imagenes';

import { Link } from 'react-router-dom';

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

    const mostrarProductos1 = () => {
        document.getElementById('producto1').classList.toggle('active');
        console.log(document.querySelectorAll('.producto'));
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');

    }
    const mostrarProductos2 = () => {
        document.getElementById('producto2').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }
    const mostrarProductos3 = () => {
        document.getElementById('producto3').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }
    const mostrarProductos4 = () => {
        document.getElementById('producto4').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }
    const mostrarProductos5 = () => {
        document.getElementById('producto5').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }
    const mostrarProductos6 = () => {
        document.getElementById('producto6').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }
    const mostrarProductos7 = () => {
        document.getElementById('producto7').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }
    const mostrarProductos8 = () => {
        document.getElementById('producto8').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }
    const mostrarProductos9 = () => {
        document.getElementById('producto9').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }
    const mostrarProductos10 = () => {
        document.getElementById('producto10').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }
    const mostrarProductos11 = () => {
        document.getElementById('producto11').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }
    const mostrarProductos12 = () => {
        document.getElementById('producto12').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
        document.getElementById('producto-default4').classList.add('oculto');
    }

    // const validarMarcado = () => {
    //     let inputs = document.getElementsByTagName('input');
    //     for (let i = 0; i < inputs.length; i++) {
    //         if (!inputs[i].checked) {
    //             console.log('ninguno checkeado');
    //         }
    //     }
    // }

    // validarMarcado();

    return (
        <>
            <div className="titulo contenedor">
                <h2>Productos</h2>
            </div>
            <section className="productos2 contenedor">
                <article className="productos2__categorias">
                    <a className="lista">
                        <div className="categoria" onClick={mostrarItems1}><span>{nombreCategoria1}</span><FontAwesomeIcon icon={faChevronDown} /></div>
                        <ul className="contenido active1" id="contenido-1">
                            <li><input type="checkbox" onClick={mostrarProductos1} /><label>{nombresProductosCategoria1[0]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos2} /><label>{nombresProductosCategoria1[1]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos3} /><label>{nombresProductosCategoria1[2]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos4} /><label>{nombresProductosCategoria1[3]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos5} /><label>{nombresProductosCategoria1[4]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos6} /><label>{nombresProductosCategoria1[5]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos7} /><label>{nombresProductosCategoria1[6]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos8} /><label>{nombresProductosCategoria1[7]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos9} /><label>{nombresProductosCategoria1[8]}</label></li>
                        </ul>
                    </a>
                    <a className="lista">
                        <div className="categoria" onClick={mostrarItems2}><span>{nombreCategoria2}</span><FontAwesomeIcon icon={faChevronDown} /></div>
                        <ul className="contenido" id="contenido-2">
                            <li><input type="checkbox" onClick={mostrarProductos10} /><label>{nombresProductosCategoria2[0]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos11} /><label>{nombresProductosCategoria2[1]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos12} /><label>{nombresProductosCategoria2[2]}</label></li>
                            {/* <li><input type="checkbox" onClick={mostrarProductos13} /><label>{nombresProductosCategoria2[3]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos14} /><label>{nombresProductosCategoria2[4]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos15} /><label>{nombresProductosCategoria2[5]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos16} /><label>{nombresProductosCategoria2[6]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos17} /><label>{nombresProductosCategoria2[7]}</label></li> */}
                        </ul>
                    </a>
                    <a className="lista">
                        <div className="categoria" onClick={mostrarItems3}><span>{nombreCategoria3}</span><FontAwesomeIcon icon={faChevronDown} /></div>
                        <ul className="contenido" id="contenido-3">
                            {nombresProductosCategoria3.map((n3, index) => <li><input type="checkbox" /><label key={index}>{n3}</label></li>)}
                        </ul>
                    </a>
                </article>
                <article className="productos2__productos">
                    {/* PRODUCTOS CATEGORIA 1 */}
                    <Link to="/Prueba1" className="producto" id="producto1">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria1[0]}</p>
                    </Link>
                    <Link to="/Prueba2" className="producto" id="producto2">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria1[1]}</p>
                    </Link>
                    <div className="producto" id="producto3">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria1[2]}</p>
                    </div>
                    <div className="producto" id="producto4">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria1[3]}</p>
                    </div>
                    <div className="producto" id="producto5">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria1[4]}</p>
                    </div>
                    <div className="producto" id="producto6">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria1[5]}</p>
                    </div>
                    <div className="producto" id="producto7">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria1[6]}</p>
                    </div>
                    <div className="producto" id="producto8">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria1[7]}</p>
                    </div>
                    <div className="producto" id="producto9">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria1[8]}</p>
                    </div>
                    {/* ----------------------------------- */}

                    {/* PRODUCTOS CATEGORIA 2 */}
                    <div className="producto" id="producto10">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria2[0]}</p>
                    </div>
                    <div className="producto" id="producto11">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria2[1]}</p>
                    </div>
                    <div className="producto" id="producto12">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria2[2]}</p>
                    </div>
                    <div className="producto" id="producto13">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria2[3]}</p>
                    </div>
                    <div className="producto" id="producto14">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria2[4]}</p>
                    </div>
                    <div className="producto" id="producto15">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria2[5]}</p>
                    </div>
                    <div className="producto" id="producto16">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria2[6]}</p>
                    </div>
                    <div className="producto" id="producto17">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria2[7]}</p>
                    </div>
                    <div className="producto" id="producto18">
                        <img src={Imagenes.imgJabonLiquido1} />
                        <p>{nombresProductosCategoria2[8]}</p>
                    </div>
                    {/* ----------------------------------- */}



                    <div className="producto default" id="producto-default1">
                        <img src={Imagenes.imgJabonLiquido2} />
                        <p>Producto Default</p>
                    </div>
                    <div className="producto default" id="producto-default2">
                        <img src={Imagenes.imgJabonLiquido2} />
                        <p>Producto Default</p>
                    </div>
                    <div className="producto default" id="producto-default3">
                        <img src={Imagenes.imgJabonLiquido2} />
                        <p>Producto Default</p>
                    </div>
                    <div className="producto default" id="producto-default4">
                        <img src={Imagenes.imgJabonLiquido2} />
                        <p>Producto Default</p>
                    </div>
                </article>

            </section >
        </>
    );
}

export default Productos2;