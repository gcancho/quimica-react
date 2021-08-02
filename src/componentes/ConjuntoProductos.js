import React from 'react';
import CardProductoInicio from './CardProductoInicio';


const ProductosLimpiadores = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2 }) => {

    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Limpiadores</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} />
            </div>
        </article>
    );
}
const ProductosDetergentes = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3 }) => {
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Detergentes</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} />
                <CardProductoInicio nombre={nombre3} descripcion={descripcion3} presentacion={presentaciones3} imagen={imagen3} />
            </div>
        </article>
    );
}
const ProductosDisolventes = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3 }) => {
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Disolventes</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} />
                <CardProductoInicio nombre={nombre3} descripcion={descripcion3} presentacion={presentaciones3} imagen={imagen3} />
            </div>
        </article>
    );
}
const ProductosPerfumadores = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3 }) => {
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Perfumadores</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} />
            </div>
        </article>
    );
}
const ProductosAbrillantadores = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3 }) => {
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Abrillantadores</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} />
            </div>
        </article>
    );
}
const ProductosCeras = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3, nombre4, imagen4, descripcion4, presentaciones4 }) => {
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Ceras</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} />
                <CardProductoInicio nombre={nombre3} descripcion={descripcion3} presentacion={presentaciones3} imagen={imagen3} />
                <CardProductoInicio nombre={nombre4} descripcion={descripcion4} presentacion={presentaciones4} imagen={imagen4} />
            </div>
        </article>
    );
}
const ProductosRemovedores = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2 }) => {
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Removedores</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} />
            </div>
        </article>
    );
}

export { ProductosLimpiadores, ProductosDetergentes, ProductosDisolventes, ProductosPerfumadores, ProductosAbrillantadores, ProductosCeras, ProductosRemovedores };