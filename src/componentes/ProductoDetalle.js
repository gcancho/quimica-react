import React from 'react';

const ProductoDetalle = () => {
    return (
        <div className="caracteristicas__producto__container">
            <div className="wrap">
                <h3>Limpia vidrios</h3>
            </div>
            <article className="caracteristicas__producto">
                <div className="caracteristicas__producto__wrap wrap">
                    <div className="caracteristicas__producto__izq">
                        <div className="producto__principal">
                            <img src="../imagenes/limpiadores/DSC_6885.JPG" alt="" />
                            <i className="fas fa-angle-left"></i>
                            <i className="fas fa-angle-right"></i>
                        </div>
                        <div className="producto__secundario">
                            <img src="../imagenes/limpiadores/DSC_6885.JPG" alt="" />
                            <img src="../imagenes/limpiadores/DSC_6885.JPG" alt="" />
                            <img src="../imagenes/limpiadores/DSC_6885.JPG" alt="" />
                        </div>
                    </div>
                    <div className="caracteristicas__producto__der">
                        <h4>Catacterísticas</h4>
                        <div className="caracteristicas__producto__der__info">
                            <div>
                                <p>Tipo de producto: <span>Desinfectante</span></p>
                            </div>
                            <div>
                                <p>Presentaciones: <span>Frasco de 1L., bidones y galón</span></p>
                            </div>
                            <div>
                                <p>Usos</p>
                                <span>Desinfección: dilución de 1.5 20ml de desinfectante por cada litro de agua.</span>
                                <span>Santificación: dilución de 1.100 10ml de desinfectante por cada litro de agua.</span>
                            </div>
                            <div>
                                <p>Aspecto: <span>Liquido traslucido</span></p>
                            </div>
                            <div>
                                <p>Color: <span>Morado bajo</span></p>
                            </div>
                            <a href="#" className="boton boton-pdf"><img className="ic-pdf" src="../imagenes/iconos/ic-pdf.png" />Descargar ficha técnica</a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default ProductoDetalle;