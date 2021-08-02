import React from 'react';


const ProductosLimpiadores = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2 }) => {

    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Limpiadores</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <div className="producto-tab__item">
                    <h3>{nombre1}</h3>
                    <div className="producto-tab__item__caja">
                        <div className="producto-tab__item__producto">
                            <img src={imagen1} alt="" />
                            <a className="boton" href="">Ver detalle</a>
                        </div>
                        <div className="producto-tab__item__info">
                            <p><span>Descripción: </span> {descripcion1}</p>
                            <p><span>Presentaciones: </span>
                                <ul>
                                    {presentaciones1.map((presentacion, index) => <li key={index}>{presentacion}</li>)}
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="producto-tab__item">
                    <h3>{nombre2}</h3>
                    <div className="producto-tab__item__caja">
                        <div className="producto-tab__item__producto">
                            <img src={imagen2} alt="" />
                            <a className="boton" href="">Ver detalle</a>
                        </div>
                        <div className="producto-tab__item__info">
                            <p><span>Descripción: </span> {descripcion2}</p>
                            <p><span>Presentaciones: </span>
                                <ul>
                                    {presentaciones2.map((presentacion, index) => <li key={index}>{presentacion}</li>)}
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
const ProductosDetergentes = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3,}) => {
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Detergentes</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <div className="producto-tab__item">
                    <h3>{nombre1}</h3>
                    <div className="producto-tab__item__caja">
                        <div className="producto-tab__item__producto">
                            <img src={imagen1} alt="" />
                            <a className="boton" href="">Ver detalle</a>
                        </div>
                        <div className="producto-tab__item__info">
                            <p><span>Descripción: </span> {descripcion1}</p>
                            <p><span>Presentaciones: </span>
                                <ul>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="producto-tab__item">
                    <h3>{nombre2}</h3>
                    <div className="producto-tab__item__caja">
                        <div className="producto-tab__item__producto">
                            <img src={imagen2} alt="" />
                            <a className="boton" href="">Ver detalle</a>
                        </div>
                        <div className="producto-tab__item__info">
                            <p><span>Descripción: </span> {descripcion2}</p>
                            <p><span>Presentaciones: </span>
                                <ul>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="producto-tab__item">
                    <h3>{nombre3}</h3>
                    <div className="producto-tab__item__caja">
                        <div className="producto-tab__item__producto">
                            <img src={imagen3} alt="" />
                            <a className="boton" href="">Ver detalle</a>
                        </div>
                        <div className="producto-tab__item__info">
                            <p><span>Descripción: </span> {descripcion3}</p>
                            <p><span>Presentaciones: </span>
                                <ul>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
const ProductosDisolventes = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3,}) => {
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Detergentes</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <div className="producto-tab__item">
                    <h3>{nombre1}</h3>
                    <div className="producto-tab__item__caja">
                        <div className="producto-tab__item__producto">
                            <img src={imagen1} alt="" />
                            <a className="boton" href="">Ver detalle</a>
                        </div>
                        <div className="producto-tab__item__info">
                            <p><span>Descripción: </span> {descripcion1}</p>
                            <p><span>Presentaciones: </span>
                                <ul>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="producto-tab__item">
                    <h3>{nombre2}</h3>
                    <div className="producto-tab__item__caja">
                        <div className="producto-tab__item__producto">
                            <img src={imagen2} alt="" />
                            <a className="boton" href="">Ver detalle</a>
                        </div>
                        <div className="producto-tab__item__info">
                            <p><span>Descripción: </span> {descripcion2}</p>
                            <p><span>Presentaciones: </span>
                                <ul>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="producto-tab__item">
                    <h3>{nombre3}</h3>
                    <div className="producto-tab__item__caja">
                        <div className="producto-tab__item__producto">
                            <img src={imagen3} alt="" />
                            <a className="boton" href="">Ver detalle</a>
                        </div>
                        <div className="producto-tab__item__info">
                            <p><span>Descripción: </span> {descripcion3}</p>
                            <p><span>Presentaciones: </span>
                                <ul>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export { ProductosLimpiadores, ProductosDetergentes, ProductosDisolventes };