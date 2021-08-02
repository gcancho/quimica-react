import React from 'react';
import imgLogo from '../imagenes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [hola, cambiarMenu] = useState(true);

    const toogleMenu = () => cambiarMenu(!hola);

    return (
        <header className="header">
            <div className="header__wrap">
                <a className="logo__container" href="/"><img className="logo" src={imgLogo} alt="" /></a>
                <div onClick={toogleMenu} className="toggle__container" id="toggle__container">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <nav className={hola ? "menu" : "menu active"}>
                    <Link to="/">Inicio</Link>
                    <Link to="/Nosotros">Nosotros</Link>
                    <a href="/#productos">Productos</a>
                    <a href="/#contacto">Contacto</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;