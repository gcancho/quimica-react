import React from 'react';
import CardProductoInicio from './CardProductoInicio';


const ProductosLimpiadores = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2 }) => {
    const rutaLimpiaVidrios = "/Limpia-vidrios";
    const rutaRonDeQuemar = "/Ron-de-quemar";
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Limpiadores</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} ruta={rutaLimpiaVidrios} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} ruta={rutaRonDeQuemar} />
            </div>
        </article>
    );
}
const ProductosDetergentes = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3 }) => {
    const rutaJabonLiquido = "/Jabon-liquido";
    const rutaShampooAlfombras = "/Shampoo-para-alfombras";
    const rutaShampooAutos = "/Shampoo-para-autos";
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Detergentes</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} ruta={rutaJabonLiquido} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} ruta={rutaShampooAlfombras} />
                <CardProductoInicio nombre={nombre3} descripcion={descripcion3} presentacion={presentaciones3} imagen={imagen3} ruta={rutaShampooAutos} />
            </div>
        </article>
    );
}
const ProductosDisolventes = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3, nombre4, imagen4, descripcion4, presentaciones4 }) => {
    const rutaAguarras = "/Aguarras";
    const rutaBencina = "/Bencina";
    const rutaThinnerAcrilico = "/Thinner-acrilico";
    const rutaAlcoholIndustrial = "/Alcohol-industrial";

    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Disolventes</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} ruta={rutaAguarras} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} ruta={rutaBencina} />
                <CardProductoInicio nombre={nombre3} descripcion={descripcion3} presentacion={presentaciones3} imagen={imagen3} ruta={rutaThinnerAcrilico} />
                <CardProductoInicio nombre={nombre4} descripcion={descripcion4} presentacion={presentaciones4} imagen={imagen4} ruta={rutaAlcoholIndustrial} />
            </div>
        </article>
    );
}
const ProductosPerfumadores = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3 }) => {
    const rutaAmbientadorBebe = "/Ambientador-bebe";
    const rutaAmbientadorLavanda = "/Ambientador-lavanda";
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Perfumadores</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} ruta={rutaAmbientadorBebe} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} ruta={rutaAmbientadorLavanda} />
            </div>
        </article>
    );
}
const ProductosAbrillantadores = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3 }) => {
    const rutaPreservanteMadera = "/Preservante-para-madera";
    const rutaRenovadorLlanta = "/Renovador-de-llantas";
    const rutaSacaGrasa = "/Saca-grasa";
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Abrillantadores</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} ruta={rutaPreservanteMadera} />
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} ruta={rutaRenovadorLlanta} />
                <CardProductoInicio nombre={nombre3} descripcion={descripcion3} presentacion={presentaciones3} imagen={imagen3} ruta={rutaSacaGrasa} />
            </div>
        </article>
    );
}
const ProductosCeras = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3, nombre4, imagen4, descripcion4, presentaciones4 }) => {
    const rutaCeraAguaAmarilla = "/Cera-agua-amarilla";
    const rutaCeraAguaBlanca = "/Cera-agua-blanca";
    const rutaCeraAguaNegra = "/Cera-agua-negra";
    const rutaCeraAguaRoja = "/Cera-agua-roja";
    
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Ceras</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} ruta={rutaCeraAguaAmarilla}/>
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} ruta={rutaCeraAguaBlanca}/>
                <CardProductoInicio nombre={nombre3} descripcion={descripcion3} presentacion={presentaciones3} imagen={imagen3} ruta={rutaCeraAguaNegra}/>
                <CardProductoInicio nombre={nombre4} descripcion={descripcion4} presentacion={presentaciones4} imagen={imagen4} ruta={rutaCeraAguaRoja}/>
            </div>
        </article>
    );
}
const ProductosRemovedores = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2 }) => {
    const rutaSacaOxido = "/Saca-oxido";
    const rutaVaselinaLiquida = "/Vaselina-liquida";
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Removedores</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} ruta={rutaSacaOxido}/>
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} ruta={rutaVaselinaLiquida}/>
            </div>
        </article>
    );
}
const ProductosDesincrustantes = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3, nombre4, imagen4, descripcion4, presentaciones4, nombre5, imagen5, descripcion5, presentaciones5, nombre6, imagen6, descripcion6, presentaciones6 }) => {
    const rutaAcidos = "/Acidos";
    const rutaAguaBaterias = "/Agua-para-baterias";
    const rutaKresso = "/Kresso";
    const rutaQuitaSarro = "/Quita-sarro";
    const rutaSiliconaCristal = "/Silicona-para-cristal";
    const rutaSiliconaTablero = "/Silicona-para-tablero";
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Desincrustantes</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} ruta={rutaAcidos}/>
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} ruta={rutaAguaBaterias}/>
                <CardProductoInicio nombre={nombre3} descripcion={descripcion3} presentacion={presentaciones3} imagen={imagen3} ruta={rutaKresso}/>
                <CardProductoInicio nombre={nombre4} descripcion={descripcion4} presentacion={presentaciones4} imagen={imagen4} ruta={rutaQuitaSarro}/>
                <CardProductoInicio nombre={nombre5} descripcion={descripcion5} presentacion={presentaciones5} imagen={imagen5} ruta={rutaSiliconaCristal}/>
                <CardProductoInicio nombre={nombre6} descripcion={descripcion6} presentacion={presentaciones6} imagen={imagen6} ruta={rutaSiliconaTablero}/>
            </div>
        </article>
    );
}
const ProductosDesinfectantes = ({ clase, nombre1, imagen1, descripcion1, presentaciones1, nombre2, imagen2, descripcion2, presentaciones2, nombre3, imagen3, descripcion3, presentaciones3, nombre4, imagen4, descripcion4, presentaciones4, nombre5, imagen5, descripcion5, presentaciones5, nombre6, imagen6, descripcion6, presentaciones6 }) => {
    const rutaCloro = "/Cloro";
    const rutaLejia = "/Lejia";
    const rutaLimpiaTodoAromaBebe = "/Limpia-todo-aroma-bebe";
    const rutaLimpiaTodoAromaLavanda = "/Limpia-todo-aroma-lavanda";
    const rutaPino = "/Pino";
    const rutaAlcoholIso = "/Alcohol-isopropilico";
    
    return (
        <article className={`producto-tab ${clase}`}>
            <div className="wrap">
                <h2 className="producto-tab__titulo">Desinfectantes</h2>
            </div>
            <div className="producto-tab__wrap wrap">
                <CardProductoInicio nombre={nombre1} descripcion={descripcion1} presentacion={presentaciones1} imagen={imagen1} ruta={rutaCloro}/>
                <CardProductoInicio nombre={nombre2} descripcion={descripcion2} presentacion={presentaciones2} imagen={imagen2} ruta={rutaLejia}/>
                <CardProductoInicio nombre={nombre3} descripcion={descripcion3} presentacion={presentaciones3} imagen={imagen3} ruta={rutaLimpiaTodoAromaBebe}/>
                <CardProductoInicio nombre={nombre4} descripcion={descripcion4} presentacion={presentaciones4} imagen={imagen4} ruta={rutaLimpiaTodoAromaLavanda}/>
                <CardProductoInicio nombre={nombre5} descripcion={descripcion5} presentacion={presentaciones5} imagen={imagen5} ruta={rutaPino}/>
                <CardProductoInicio nombre={nombre6} descripcion={descripcion6} presentacion={presentaciones6} imagen={imagen6} ruta={rutaAlcoholIso}/>
            </div>
        </article>
    );
}

export { ProductosLimpiadores, ProductosDetergentes, ProductosDisolventes, ProductosPerfumadores, ProductosAbrillantadores, ProductosCeras, ProductosRemovedores, ProductosDesincrustantes, ProductosDesinfectantes };