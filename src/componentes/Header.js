import React from 'react';
import imgLogo from '../imagenes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
    return (
        <header className="header">
            <div className="wrap-header">
                <label className="title"><img className="logo" src={imgLogo} alt="" /></label>
                <div className="menu-toggle" id="menu-toggle">
                    {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
                    <FontAwesomeIcon icon={faBars}/>
                    <label>Menu</label>
                </div>
                <nav className="list-menu" id="list-menu">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#productos">Productos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;