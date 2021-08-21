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

    return (
        <header className="header">
            <article className="header__arriba">
                <a className="logo__principal" href="/"><img className="logo" src={imgLogo} alt="" /></a>
                {/* Buscador */}
                <div className="container__buscador__horario">
                    <div class="ctn-bars-search" id="ctn-bars-search">
                        <input type="text" className="input-search" id="inputSearch" placeholder="¿Qué desea buscar?" />
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    {/*  */}
                    <div className="horario">
                        <div className="horario__icono">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="horario__info">
                            <h6>Central</h6>
                            <p>Lunes - Viernes:</p>
                            <p>8:00 pm - 6:00 pm</p>
                            <p>Sábado:</p>
                            <p>8:00 pm - 12:00 pm</p>
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