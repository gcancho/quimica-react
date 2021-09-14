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
    }

    const mostrarProductos2 = () => {
        document.getElementById('producto2').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos3 = () => {
        document.getElementById('producto3').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos4 = () => {
        document.getElementById('producto4').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos5 = () => {
        document.getElementById('producto5').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos6 = () => {
        document.getElementById('producto6').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos7 = () => {
        document.getElementById('producto7').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos8 = () => {
        document.getElementById('producto8').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos9 = () => {
        document.getElementById('producto9').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos10 = () => {
        document.getElementById('producto10').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos11 = () => {
        document.getElementById('producto11').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos12 = () => {
        document.getElementById('producto12').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos101 = () => {
        document.getElementById('producto101').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos102 = () => {
        document.getElementById('producto102').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos103 = () => {
        document.getElementById('producto103').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos104 = () => {
        document.getElementById('producto104').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos105 = () => {
        document.getElementById('producto105').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos106 = () => {
        document.getElementById('producto106').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos107 = () => {
        document.getElementById('producto107').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos108 = () => {
        document.getElementById('producto108').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos109 = () => {
        document.getElementById('producto109').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos110 = () => {
        document.getElementById('producto110').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos111 = () => {
        document.getElementById('producto111').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos201 = () => {
        document.getElementById('producto201').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos202 = () => {
        document.getElementById('producto202').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos203 = () => {
        document.getElementById('producto203').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos204 = () => {
        document.getElementById('producto204').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos205 = () => {
        document.getElementById('producto205').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos206 = () => {
        document.getElementById('producto206').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
    }
    const mostrarProductos207 = () => {
        document.getElementById('producto207').classList.toggle('active');
        document.getElementById('producto-default1').classList.add('oculto');
        document.getElementById('producto-default2').classList.add('oculto');
        document.getElementById('producto-default3').classList.add('oculto');
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
                            <li><input type="checkbox" onClick={mostrarProductos10} /><label>{nombresProductosCategoria1[9]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos11} /><label>{nombresProductosCategoria1[10]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos12} /><label>{nombresProductosCategoria1[11]}</label></li>
                        </ul>
                    </a>
                    <a className="lista">
                        <div className="categoria" onClick={mostrarItems2}><span>{nombreCategoria2}</span><FontAwesomeIcon icon={faChevronDown} /></div>
                        <ul className="contenido" id="contenido-2">
                            <li><input type="checkbox" onClick={mostrarProductos101} /><label>{nombresProductosCategoria2[0]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos102} /><label>{nombresProductosCategoria2[1]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos103} /><label>{nombresProductosCategoria2[2]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos104} /><label>{nombresProductosCategoria2[3]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos105} /><label>{nombresProductosCategoria2[4]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos106} /><label>{nombresProductosCategoria2[5]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos107} /><label>{nombresProductosCategoria2[6]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos108} /><label>{nombresProductosCategoria2[7]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos109} /><label>{nombresProductosCategoria2[8]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos110} /><label>{nombresProductosCategoria2[9]}</label></li>
                            {/* <li><input type="checkbox" onClick={mostrarProductos111} /><label>{nombresProductosCategoria2[10]}</label></li> */}
                        </ul>
                    </a>
                    <a className="lista">
                        <div className="categoria" onClick={mostrarItems3}><span>{nombreCategoria3}</span><FontAwesomeIcon icon={faChevronDown} /></div>
                        <ul className="contenido" id="contenido-3">
                            <li><input type="checkbox" onClick={mostrarProductos201} /><label>{nombresProductosCategoria3[0]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos202} /><label>{nombresProductosCategoria3[1]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos203} /><label>{nombresProductosCategoria3[2]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos204} /><label>{nombresProductosCategoria3[3]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos205} /><label>{nombresProductosCategoria3[4]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos206} /><label>{nombresProductosCategoria3[5]}</label></li>
                            <li><input type="checkbox" onClick={mostrarProductos207} /><label>{nombresProductosCategoria3[6]}</label></li>
                        </ul>
                    </a>
                </article>
                <article className="productos2__productos">
                    {/* PRODUCTOS CATEGORIA 1 */}
                    <Link to="/Productos/Acido-el-fuerte" className="producto" id="producto1">
                        <img src={Imagenes.acidoFuerte1} />
                        <p>{nombresProductosCategoria1[0]}</p>
                    </Link>
                    <Link to="/Productos/Ambientadores" className="producto" id="producto2">
                        <img src={Imagenes.ambientador1} />
                        <p>{nombresProductosCategoria1[1]}</p>
                    </Link>
                    <Link to="/Productos/Cera-al-agua" className="producto" id="producto3">
                        <img src={Imagenes.cera1} />
                        <p>{nombresProductosCategoria1[2]}</p>
                    </Link>
                    <Link to="/Productos/Cloro" className="producto" id="producto4">
                        <img src={Imagenes.cloro1} />
                        <p>{nombresProductosCategoria1[3]}</p>
                    </Link>
                    <Link to="/Productos/Jabon-liquido" className="producto" id="producto5">
                        <img src={Imagenes.jabon1} />
                        <p>{nombresProductosCategoria1[4]}</p>
                    </Link>
                    <Link to="/Productos/Kresso" className="producto" id="producto6">
                        <img src={Imagenes.kresso1} />
                        <p>{nombresProductosCategoria1[5]}</p>
                    </Link>
                    <Link to="/Productos/Lejia" className="producto" id="producto7">
                        <img src={Imagenes.lejia1} />
                        <p>{nombresProductosCategoria1[6]}</p>
                    </Link>
                    <Link to="/Productos/Limpiatodo" className="producto" id="producto8">
                        <img src={Imagenes.limpiaTodo1} />
                        <p>{nombresProductosCategoria1[7]}</p>
                    </Link>
                    <Link to="/Productos/Pino" className="producto" id="producto9">
                        <img src={Imagenes.pino1} />
                        <p>{nombresProductosCategoria1[8]}</p>
                    </Link>
                    <Link to="/Productos/Potente-desinfectante" className="producto" id="producto10">
                        <img src={Imagenes.potenteDesinfectante1} />
                        <p>{nombresProductosCategoria1[9]}</p>
                    </Link>
                    <Link to="/Productos/Quita-sarro" className="producto" id="producto11">
                        <img src={Imagenes.quitaSarro1} />
                        <p>{nombresProductosCategoria1[10]}</p>
                    </Link>
                    <Link to="/Productos/Saca-grasa" className="producto" id="producto12">
                        <img src={Imagenes.sacaGrasa1} />
                        <p>{nombresProductosCategoria1[11]}</p>
                    </Link>
                    {/* ----------------------------------- */}

                    {/* PRODUCTOS CATEGORIA 2 */}
                    <Link to="/Productos/Aguarras" className="producto" id="producto101">
                        <img src={Imagenes.aguarras1} />
                        <p>{nombresProductosCategoria2[0]}</p>
                    </Link>
                    <Link to="/Productos/Alcohol-industrial" className="producto" id="producto102">
                        <img src={Imagenes.alcoholInd1} />
                        <p>{nombresProductosCategoria2[1]}</p>
                    </Link>
                    {/* <Link to="/Productos/Alcohol-isopropilico" className="producto" id="producto103">
                        <img src={Imagenes.alcoholIso1} />
                        <p>{nombresProductosCategoria2[2]}</p>
                    </Link> */}
                    <Link to="/Productos/Alcohol-isopropilico-70" className="producto" id="producto103">
                        <img src={Imagenes.alcoholIsoSetenta1} />
                        <p>{nombresProductosCategoria2[2]}</p>
                    </Link>
                    <Link to="/Productos/Alcohol-isopropilico-99" className="producto" id="producto104">
                        <img src={Imagenes.alcoholIsoNoventa1} />
                        <p>{nombresProductosCategoria2[3]}</p>
                    </Link>
                    <Link to="/Productos/Bencina" className="producto" id="producto105">
                        <img src={Imagenes.bencina1} />
                        <p>{nombresProductosCategoria2[4]}</p>
                    </Link>
                    <Link to="/Productos/Preservante-para-madera" className="producto" id="producto106">
                        <img src={Imagenes.preservanteMadera1} />
                        <p>{nombresProductosCategoria2[5]}</p>
                    </Link>
                    <Link to="/Productos/Ron-de-quemar" className="producto" id="producto107">
                        <img src={Imagenes.ron1} />
                        <p>{nombresProductosCategoria2[6]}</p>
                    </Link>
                    <Link to="/Productos/Saca-oxido" className="producto" id="producto108">
                        <img src={Imagenes.sacaOxido1} />
                        <p>{nombresProductosCategoria2[7]}</p>
                    </Link>
                    <Link to="/Productos/Thinner-acrilico" className="producto" id="producto109">
                        <img src={Imagenes.thinner1} />
                        <p>{nombresProductosCategoria2[8]}</p>
                    </Link>
                    <Link to="/Productos/Thinner-standar" className="producto" id="producto110">
                        <img src={Imagenes.thinnerSt1} />
                        <p>{nombresProductosCategoria2[9]}</p>
                    </Link>
                    {/* ----------------------------------- */}

                    {/* PRODUCTOS CATEGORIA 3 */}
                    <Link to="/Productos/Agua-para-baterias" className="producto" id="producto201">
                        <img src={Imagenes.aguaBateria1} />
                        <p>{nombresProductosCategoria3[0]}</p>
                    </Link>
                    <Link to="/Productos/Limpia-vidrios" className="producto" id="producto202">
                        <img src={Imagenes.limpiaVidrios1} />
                        <p>{nombresProductosCategoria3[1]}</p>
                    </Link>
                    <Link to="/Productos/Renovador-de-llantas" className="producto" id="producto203">
                        <img src={Imagenes.renovadorLlantas1} />
                        <p>{nombresProductosCategoria3[2]}</p>
                    </Link>
                    <Link to="/Productos/Shampoo-para-auto" className="producto" id="producto204">
                        <img src={Imagenes.shampooAuto1} />
                        <p>{nombresProductosCategoria3[3]}</p>
                    </Link>
                    <Link to="/Productos/Silicona-para-cristal" className="producto" id="producto205">
                        <img src={Imagenes.siliconaCristal1} />
                        <p>{nombresProductosCategoria3[4]}</p>
                    </Link>
                    <Link to="/Productos/Silicona-para-cristal-premium" className="producto" id="producto206">
                        <img src={Imagenes.siliconaCristalPremium1} />
                        <p>{nombresProductosCategoria3[5]}</p>
                    </Link>
                    <Link to="/Productos/Silicona-para-tablero" className="producto" id="producto207">
                        <img src={Imagenes.siliconaTablero1} />
                        <p>{nombresProductosCategoria3[6]}</p>
                    </Link>
                    {/* ----------------------------------- */}
                    <Link to="/Productos/Alcohol-industrial" className="producto default" id="producto-default1">
                        <img src={Imagenes.alcoholInd1} />
                        <p>{nombresProductosCategoria2[1]}</p>
                    </Link>
                    <Link to="/Productos/Limpia-vidrios" className="producto default" id="producto-default2">
                        <img src={Imagenes.limpiaVidrios1} />
                        <p>{nombresProductosCategoria3[1]}</p>
                    </Link>
                    <Link to="/Productos/Limpia-vidrios" className="producto default" id="producto-default3">
                        <img src={Imagenes.sacaOxido1} />
                        <p>{nombresProductosCategoria2[7]}</p>
                    </Link>

{/* 
                    <Link to="/Productos/Silicona-para-cristal" >
                        <div className="producto default" id="producto-default1">
                            <img src={Imagenes.siliconaCristal1} />
                            <p>Silicona para cristal</p>
                        </div>
                    </Link>
                    <Link to="/Productos/Limpia-vidrios" >
                        <div className="producto default" id="producto-default2">
                            <img src={Imagenes.limpiaVidrios1} />
                            <p>Limpia vidrios</p>
                        </div>
                    </Link>
                    <Link to="/Productos/Saca-oxido" >
                        <div className="producto default" id="producto-default3">
                            <img src={Imagenes.sacaOxido1} />
                            <p>Saca oxido</p>
                        </div>
                    </Link> */}
                </article>

            </section >
        </>
    );
}

export default Productos2;