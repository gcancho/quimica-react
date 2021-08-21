import React from 'react';
import imgLogo from '../imagenes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [hola, cambiarMenu] = useState(true);

    const toogleMenu = () => cambiarMenu(!hola);

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
            <article className="header__arriba">
                <a className="logo__principal" href="/"><img className="logo" src={imgLogo} alt="" /></a>
                {/* Buscador */}
                <div className="container__buscador__horario">
                    <div class="ctn-bars-search" id="ctn-bars-search">
                        <input type="text" className="input-search" id="inputSearch" placeholder="¿Qué desea buscar?" onKeyUp={buscador_interno} />
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <ul className="box-search" id="box-search">
                        <li><a href="articulo.html"><i class="fas fa-search"></i><img src="img/img4.jpg" width="20px" />REACT</a></li>
                        <li><a href="articulo.html"><i class="fas fa-search"></i>CSS</a></li>
                        <li><a href="articulo.html"><i class="fas fa-search"></i>JavaScript</a></li>
                        <li><a href="articulo.html"><i class="fas fa-search"></i>PHP</a></li>
                        <li><a href="articulo.html"><i class="fas fa-search"></i>NODEJS</a></li>
                        <li><a href="articulo.html"><i class="fas fa-search"></i>VUEJS</a></li>
                        <li><a href="articulo.html"><i class="fas fa-search"></i>Como hacer</a></li>
                        <li><a href="articulo.html"><i class="fas fa-search"></i>Como crear</a></li>
                        <li><a href="articulo.html"><i class="fas fa-search"></i>Cloro</a></li>
                        <li><a href="articulo.html"><i class="fas fa-search"></i>Limpia Vidrios</a></li>
                    </ul>

                    <div id="cover-ctn-search"></div>
                    {/*  */}
                    <div className="horario">
                        <div className="horario__icono">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="horario__info">
                            <h6>Central</h6>
                            <div>
                                <p>Lunes - Viernes:</p>
                                <p>8:00 pm - 6:00 pm</p>
                            </div>
                            <div>
                                <p>Sábado:</p>
                                <p>8:00 pm - 12:00 pm</p>
                            </div>
                            <p>994 268 798</p>
                            <p>955 310 163</p>
                        </div>
                    </div>
                </div>
            </article>
            <div className="header__abajo">
                {/* <a className="logo__container" href="/"><img className="logo" src={imgLogo} alt="" /></a> */}
                <div onClick={toogleMenu} className="toggle__container" id="toggle__container">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <nav className={hola ? "menu" : "menu active"}>
                    <Link to="/">Inicio</Link>
                    <Link to="/Nosotros">Nosotros</Link>
                    <Link to="/Productos">Productos</Link>
                    <a onClick={toogleMenu} href="/#contacto">Contacto</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;