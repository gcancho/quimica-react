import React from 'react';
import imgLogo from '../imagenes/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="wrap-header">
                <label className="title"><img className="logo" src={imgLogo} alt="" /></label>
                <div className="menu-toggle" id="menu-toggle">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <label>Menu</label>
                </div>
                <nav className="list-menu" id="list-menu">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;