import React from 'react';
import imgLogo from '../imagenes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Imagenes from './Imagenes';

const Header = ({ nombreCategoria1, nombreCategoria2, nombreCategoria3, nombresProductosCategoria1, nombresProductosCategoria2, nombresProductosCategoria3 }) => {

    const [hola, cambiarMenu] = useState(true);
    const toogleMenu = () => cambiarMenu(!hola);

    const [hola2, cambiarMenu2] = useState(true);
    const toogleMenu2 = () => cambiarMenu2(!hola2);

    const buscador_interno = () => {
        let bars_search = document.getElementById("ctn-bars-search");
        let cover_ctn_search = document.getElementById("cover-ctn-search");
        let inputSearch = document.getElementById("inputSearch");
        let box_search = document.getElementById("box-search");

        // alert('ga');
        let filter = inputSearch.value.toUpperCase();
        let li = box_search.getElementsByTagName("li");

        //Recorriendo elementos a filtrar mediante los "li"
        for (let i = 0; i < li.length; i++) {

            let a = li[i].getElementsByTagName("a")[0];
            let textValue = a.textContent || a.innerText;

            if (textValue.toUpperCase().indexOf(filter) > -1) {

                li[i].style.display = "";
                box_search.style.display = "block";

                if (inputSearch.value === "") {
                    box_search.style.display = "none";
                }

            } else {
                li[i].style.display = "none";
            }

        }
    }

    return (
        <header className="header">
            <article className="header__barra__arriba">
                <p>Delivery Gratis por compras mínimas de 300 soles</p>
            </article>
            <article className="header__arriba contenedor">
                <a className="logo__principal" href="/"><img className="logo" src={imgLogo} alt="" /></a>
                {/* Buscador */}
                <div className="container__buscador__horario">
                    <div class="ctn-bars-search" id="ctn-bars-search">
                        <input type="text" className="input-search" id="inputSearch" placeholder="¿Qué desea buscar?" onKeyUp={buscador_interno} />
                        <FontAwesomeIcon icon={faSearch} />
                        <ul className="box-search" id="box-search">

                            <li><Link to="/Productos/Acido-el-fuerte" exact={true}><i class="fas fa-search"></i><img src={Imagenes.acidoFuerte1} />{nombresProductosCategoria1[0]}</Link></li>
                            <li><Link to="/Productos/Ambientadores" exact={true}><i class="fas fa-search"></i><img src={Imagenes.ambientador1} />{nombresProductosCategoria1[1]}</Link></li>
                            <li><Link to="/Productos/Cera-al-agua" exact={true}><i class="fas fa-search"></i><img src={Imagenes.cera1} />{nombresProductosCategoria1[2]}</Link></li>
                            <li><Link to="/Productos/Cloro" exact={true}><i class="fas fa-search"></i><img src={Imagenes.cloro1} />{nombresProductosCategoria1[3]}</Link></li>
                            <li><Link to="/Productos/Jabon-liquido" exact={true}><i class="fas fa-search"></i><img src={Imagenes.jabon1} />{nombresProductosCategoria1[4]}</Link></li>
                            <li><Link to="/Productos/Kresso" exact={true}><i class="fas fa-search"></i><img src={Imagenes.kresso1} />{nombresProductosCategoria1[5]}</Link></li>
                            <li><Link to="/Productos/Lejia" exact={true}><i class="fas fa-search"></i><img src={Imagenes.lejia1} />{nombresProductosCategoria1[6]}</Link></li>
                            <li><Link to="/Productos/Limpiatodo" exact={true}><i class="fas fa-search"></i><img src={Imagenes.limpiaTodo1} />{nombresProductosCategoria1[7]}</Link></li>
                            <li><Link to="/Productos/Pino" exact={true}><i class="fas fa-search"></i><img src={Imagenes.pino1} />{nombresProductosCategoria1[8]}</Link></li>
                            <li><Link to="/Productos/Potente-desinfectante" exact={true}><i class="fas fa-search"></i><img src={Imagenes.potenteDesinfectante1} />{nombresProductosCategoria1[9]}</Link></li>
                            <li><Link to="/Productos/Quita-sarro" exact={true}><i class="fas fa-search"></i><img src={Imagenes.quitaSarro1} />{nombresProductosCategoria1[10]}</Link></li>
                            <li><Link to="/Productos/Saca-grasa" exact={true}><i class="fas fa-search"></i><img src={Imagenes.sacaGrasa1} />{nombresProductosCategoria1[11]}</Link></li>

                            <li><Link to="/Productos/Aguarras" exact={true}><i class="fas fa-search"></i><img src={Imagenes.aguarras1} />{nombresProductosCategoria2[0]}</Link></li>
                            <li><Link to="/Productos/Alcohol-industrial" exact={true}><i class="fas fa-search"></i><img src={Imagenes.alcoholInd1} />{nombresProductosCategoria2[1]}</Link></li>
                            <li><Link to="/Productos/Alcohol-isopropilico-99" exact={true}><i class="fas fa-search"></i><img src={Imagenes.alcoholIso1} />{nombresProductosCategoria2[3]}</Link></li>
                            <li><Link to="/Productos/Alcohol-isopropilico-70" exact={true}><i class="fas fa-search"></i><img src={Imagenes.alcoholIsoNoventa1} />{nombresProductosCategoria2[2]}</Link></li>
                            <li><Link to="/Productos/Bencina" exact={true}><i class="fas fa-search"></i><img src={Imagenes.bencina1} />{nombresProductosCategoria2[4]}</Link></li>
                            <li><Link to="/Productos/Preservante-para-madera" exact={true}><i class="fas fa-search"></i><img src={Imagenes.preservanteMadera1} />{nombresProductosCategoria2[5]}</Link></li>
                            <li><Link to="/Productos/Ron-de-quemar" exact={true}><i class="fas fa-search"></i><img src={Imagenes.ron1} />{nombresProductosCategoria2[6]}</Link></li>
                            <li><Link to="/Productos/Saca-oxido" exact={true}><i class="fas fa-search"></i><img src={Imagenes.sacaOxido1} />{nombresProductosCategoria2[7]}</Link></li>
                            <li><Link to="/Productos/Thinner-acrilico" exact={true}><i class="fas fa-search"></i><img src={Imagenes.thinner1} />{nombresProductosCategoria2[8]}</Link></li>
                            <li><Link to="/Productos/Thinner-standar" exact={true}><i class="fas fa-search"></i><img src={Imagenes.thinnerSt1} />{nombresProductosCategoria2[9]}</Link></li>

                            <li><Link to="/Productos/Agua-para-baterias" exact={true}><i class="fas fa-search"></i><img src={Imagenes.aguaBateria1} />{nombresProductosCategoria3[0]}</Link></li>
                            <li><Link to="/Productos/Limpia-vidrios" exact={true}><i class="fas fa-search"></i><img src={Imagenes.limpiaVidrios1} />{nombresProductosCategoria3[1]}</Link></li>
                            <li><Link to="/Productos/Renovador-de-llantas" exact={true}><i class="fas fa-search"></i><img src={Imagenes.renovadorLlantas1} />{nombresProductosCategoria3[2]}</Link></li>
                            <li><Link to="/Productos/Shampoo-para-auto" exact={true}><i class="fas fa-search"></i><img src={Imagenes.shampooAuto1} />{nombresProductosCategoria3[3]}</Link></li>
                            <li><Link to="/Productos/Silicona-para-cristal" exact={true}><i class="fas fa-search"></i><img src={Imagenes.siliconaCristal1} />{nombresProductosCategoria3[4]}</Link></li>
                            <li><Link to="/Productos/Silicona-para-cristal-premium" exact={true}><i class="fas fa-search"></i><img src={Imagenes.siliconaCristalPremium1} />{nombresProductosCategoria3[5]}</Link></li>
                            <li><Link to="/Productos/Silicona-para-tablero" exact={true}><i class="fas fa-search"></i><img src={Imagenes.siliconaTablero1} />{nombresProductosCategoria3[6]}</Link></li>


                            {/* <li><Link to="/Productos/Renovadora-de-llantas" exact={true}><i class="fas fa-search"></i><img src={Imagenes.renovadorLlantas1} />{nombresProductosCategoria3[0]}</Link></li>
                            <li><Link to="/Productos/Silicona-para-tablero" exact={true}><i class="fas fa-search"></i><img src={Imagenes.siliconaTablero1} />{nombresProductosCategoria3[1]}</Link></li>
                            <li><Link to="/Productos/Silicona-para-cristal" exact={true}><i class="fas fa-search"></i><img src={Imagenes.siliconaCristal1} />{nombresProductosCategoria3[2]}</Link></li>
                            <li><Link to="/Productos/Agua-para-baterias" exact={true}><i class="fas fa-search"></i><img src={Imagenes.aguaBateria1} />{nombresProductosCategoria3[3]}</Link></li>
                            <li><Link to="/Productos/Limpia-vidrios" exact={true}><i class="fas fa-search"></i><img src={Imagenes.limpiaVidrios1} />{nombresProductosCategoria3[4]}</Link></li> */}
                        </ul>
                    </div>

                    {/* <div id="cover-ctn-search"></div> */}
                    {/*  */}
                    <div className="horario">
                        <div className="horario__icono">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </div>
                        <div className="horario__info">
                            <h6>Central</h6>
                            <div>
                                <p>L - V :</p>
                                <p>8:00 - 6:00 PM</p>
                            </div>
                            <div>
                                <p>S :</p>
                                <p>8:00 - 12:00 PM</p>
                            </div>
                            <p>(01) 315 3600</p>
                        </div>
                    </div>
                </div>
            </article>
            <div className="header__abajo">
                {/* <a className="logo__container" href="/"><img className="logo" src={imgLogo} alt="" /></a> */}
                <div onClick={toogleMenu} className="toggle__container" id="toggle__container">
                    <FontAwesomeIcon icon={faBars} />
                    <label>Menú</label>
                </div>
                <nav className={hola ? "menu" : "menu active"}>
                    <div className="boton__cerrar__menu" onClick={toogleMenu}><a>Cerrar</a><FontAwesomeIcon icon={faTimes} /></div>
                    <article className="menu__categorias">
                        <div className="menu__categorias__icono" onClick={toogleMenu2}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="menu__categorias__texto" onClick={toogleMenu2}>
                            <label>CATEGORÍAS</label>
                            <FontAwesomeIcon icon={hola2 ? faChevronDown : faChevronUp} />
                        </div>
                        <article className={hola2 ? "menu__raro" : "menu__raro active"}>
                            <div className="menu__raro__item">
                                <div className="menu1">
                                    <label>{nombreCategoria1}</label><FontAwesomeIcon icon={faChevronRight} />
                                </div>
                                <div className="menu2">
                                    <h6>Productos</h6>
                                    {/* {nombresProductosCategoria1.map((p1, index) => <li key={index}>{p1}</li>)} */}
                                    <li><Link to="/Productos/Acido-el-fuerte">{nombresProductosCategoria1[0]}</Link></li>
                                    <li><Link to="/Productos/Ambientadores">{nombresProductosCategoria1[1]}</Link></li>
                                    <li><Link to="/Productos/Cera-al-agua">{nombresProductosCategoria1[2]}</Link></li>
                                    <li><Link to="/Productos/Cloro">{nombresProductosCategoria1[3]}</Link></li>
                                    <li><Link to="/Productos/Jabon-liquido">{nombresProductosCategoria1[4]}</Link></li>
                                    <li><Link to="/Productos/Kresso">{nombresProductosCategoria1[5]}</Link></li>
                                    <li><Link to="/Productos/Lejia">{nombresProductosCategoria1[6]}</Link></li>
                                    <li><Link to="/Productos/Limpiatodo">{nombresProductosCategoria1[7]}</Link></li>
                                    <li><Link to="/Productos/Pino">{nombresProductosCategoria1[8]}</Link></li>
                                    <li><Link to="/Productos/Potente-desinfectante">{nombresProductosCategoria1[9]}</Link></li>
                                    <li><Link to="/Productos/Quita-sarro">{nombresProductosCategoria1[10]}</Link></li>
                                    <li><Link to="/Productos/Saca-grasa">{nombresProductosCategoria1[11]}</Link></li>
                                </div>
                            </div>
                            <div className="menu__raro__item">
                                <div className="menu1">
                                    <label>{nombreCategoria2}</label><FontAwesomeIcon icon={faChevronRight} />
                                </div>
                                <div className="menu2">
                                    <h6>Productos</h6>
                                    <li><Link to="/Productos/Aguarras">{nombresProductosCategoria2[0]}</Link></li>
                                    <li><Link to="/Productos/Alcohol-industrial">{nombresProductosCategoria2[1]}</Link></li>
                                    <li><Link to="/Productos/Alcohol-isopropilico-70">{nombresProductosCategoria2[2]}</Link></li>
                                    <li><Link to="/Productos/Alcohol-isopropilico-99">{nombresProductosCategoria2[3]}</Link></li>
                                    <li><Link to="/Productos/Bencina">{nombresProductosCategoria2[4]}</Link></li>
                                    <li><Link to="/Productos/Preservante-para-madera">{nombresProductosCategoria2[5]}</Link></li>
                                    <li><Link to="/Productos/Ron-de-quemar">{nombresProductosCategoria2[6]}</Link></li>
                                    <li><Link to="/Productos/Saca-oxido">{nombresProductosCategoria2[7]}</Link></li>
                                    <li><Link to="/Productos/Thinner-acrilico">{nombresProductosCategoria2[8]}</Link></li>
                                    <li><Link to="/Productos/Thinner-standar">{nombresProductosCategoria2[9]}</Link></li>
                                </div>
                            </div>
                            <div className="menu__raro__item">
                                <div className="menu1">
                                    <label>{nombreCategoria3}</label><FontAwesomeIcon icon={faChevronRight} />
                                </div>
                                <div className="menu2">
                                    <h6>Productos</h6>
                                    <li><Link to="/Productos/Agua-para-baterias">{nombresProductosCategoria3[0]}</Link></li>
                                    <li><Link to="/Productos/Limpia-vidrios">{nombresProductosCategoria3[1]}</Link></li>
                                    <li><Link to="/Productos/Renovador-de-llantas">{nombresProductosCategoria3[2]}</Link></li>
                                    <li><Link to="/Productos/Shampoo-para-auto">{nombresProductosCategoria3[3]}</Link></li>
                                    <li><Link to="/Productos/Silicona-para-cristal">{nombresProductosCategoria3[4]}</Link></li>
                                    <li><Link to="/Productos/Silicona-para-cristal-premium">{nombresProductosCategoria3[5]}</Link></li>
                                    <li><Link to="/Productos/Silicona-para-tablero">{nombresProductosCategoria3[6]}</Link></li>
                                </div>
                            </div>
                        </article>
                    </article>
                    <Link to="/">Inicio</Link>
                    <Link to="/Nosotros">Nosotros</Link>
                    <Link to="/Productos">Productos</Link>
                    <Link className="categoria__link" to="/Categoria1">{nombreCategoria1}</Link>
                    <Link className="categoria__link" to="/Categoria2">{nombreCategoria2}</Link>
                    <Link className="categoria__link" to="/Categoria3">{nombreCategoria3}</Link>
                    <Link to="/Contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;