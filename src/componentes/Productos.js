import React from 'react';

const Productos = () => {
    return (
        <section className="productos" id="productos">
            <div className="wrap">
                <h2 className="productos__titulo">Productos</h2>
            </div>
            <div className="productos__item">
                <article className="categorias">
                    <div className="wrap">
                        <h2 className="categorias__titulo">Categorías</h2>
                    </div>
                    <div className="categorias__wrap wrap">
                        <div className="categorias__conjunto">
                            <a href="#"><i className="fas fa-caret-right"></i>Limpiadores</a>
                            <a href="#"><i className="fas fa-caret-right"></i>Desinfectantes</a>
                            <a href="#"><i className="fas fa-caret-right"></i>Detergentes</a>
                            <a href="#"><i className="fas fa-caret-right"></i>Disolventes</a>
                            <a href="#"><i className="fas fa-caret-right"></i>Limpiadores</a>
                            <a href="#"><i className="fas fa-caret-right"></i>Perfumadores</a>
                        </div>
                        <div className="categorias__info">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorum magni esse aspernatur
                                distinctio officia ipsam natus molestiae ut? Illo corporis sed eligendi dolorem vel eveniet
                                veniam voluptate ex amet.</p>
                        </div>
                    </div>
                </article>
                <article className="limpiadores">
                    <div className="wrap">
                        <h2 className="limpiadores__titulo">Limpiadores</h2>
                    </div>
                    <div className="limpiadores__wrap wrap">
                        <div className="limpiadores__item">
                            <h3>Limpia vidrios en galón medio</h3>
                            <div className="limpiadores__item__caja">
                                <div className="limpiadores__item__producto">
                                    <img src="../imagenes/limpiadores/DSC_6885.JPG" alt="" />
                                    <a className="boton" href="">Ver detalle</a>
                                </div>
                                <div className="limpiadores__item__info">
                                    <p><span>Nombre del producto: </span> amonio cuaternario 5ta generación desinfectante batctericida</p>
                                    <p><span>Descripción: </span> Es un potente desinfectante formulado a base de amonio cuaternario de 5ta
                                        generación y biguiandina polimérica los cuales ofrecen acción germicida frente a un
                                        amplio
                                        espectro de bacteria gram positivas y gram negativas, hongos y virus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="limpiadores__item">
                            <h3>Limpia vidrios en galón medio</h3>
                            <div className="limpiadores__item__caja">
                                <div className="limpiadores__item__producto">
                                    <img src="../imagenes/limpiadores/DSC_6885.JPG" alt="" />
                                    <a className="boton" href="">Ver detalle</a>
                                </div>
                                <div className="limpiadores__item__info">
                                    <p><span>Nombre del producto: </span> amonio cuaternario 5ta generación desinfectante batctericida</p>
                                    <p><span>Descripción: </span> Es un potente desinfectante formulado a base de amonio cuaternario de 5ta
                                        generación y biguiandina polimérica los cuales ofrecen acción germicida frente a un
                                        amplio
                                        espectro de bacteria gram positivas y gram negativas, hongos y virus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="limpiadores__item">
                            <h3>Limpia vidrios en galón medio</h3>
                            <div className="limpiadores__item__caja">
                                <div className="limpiadores__item__producto">
                                    <img src="../imagenes/limpiadores/DSC_6885.JPG" alt="" />
                                    <a className="boton" href="">Ver detalle</a>
                                </div>
                                <div className="limpiadores__item__info">
                                    <p><span>Nombre del producto: </span> amonio cuaternario 5ta generación desinfectante batctericida</p>
                                    <p><span>Descripción: </span> Es un potente desinfectante formulado a base de amonio cuaternario de 5ta
                                        generación y biguiandina polimérica los cuales ofrecen acción germicida frente a un
                                        amplio
                                        espectro de bacteria gram positivas y gram negativas, hongos y virus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Productos;