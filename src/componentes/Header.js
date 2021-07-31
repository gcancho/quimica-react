import React from 'react';
import imgLogo from '../imagenes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
            <header className="header">
                <div className="header__wrap">
                    <a className="logo__container" href="/"><img className="logo" src={imgLogo} alt="" /></a>
                    <div className="toggle__container" id="toggle__container">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
                <nav className="menu">
                    <Link to="/">Inicio</Link>
                    <Link to="/Nosotros">Nosotros</Link>
                    <a href="/#productos">Productos</a>
                    <a href="/#contacto">Contacto</a>
                </nav>
            </header>
    );
}

export default Header;