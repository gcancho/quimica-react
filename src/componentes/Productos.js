// import React from 'react';
// import { useState } from 'react';
// import { ProductosLimpiadores, ProductosDetergentes, ProductosDisolventes, ProductosPerfumadores, ProductosAbrillantadores, ProductosCeras, ProductosRemovedores, ProductosDesincrustantes, ProductosDesinfectantes } from './ConjuntoProductos';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
// // Imagenes 
// // import imgLimpiaVidrios from './../imagenes/Limpiadores/limpia-vidrios/DSC_6907.JPG';
// // import imgRonQuemar from './../imagenes/Limpiadores/ron-de-quemar/DSC_6953.JPG';
// // import imgJabonLiquido from './../imagenes/Detergentes/jabon-liquido/DSC_6910.JPG';
// // import imgShampooAlfombra from './../imagenes/Detergentes/shampoo-para-alfonbras/DSC_6923.JPG';
// // import imgShampooAuto from './../imagenes/Detergentes/shampoo-para-auto/DSC_6904.JPG';
// // import imgAguarras from './../imagenes/Disolventes/aguarras/DSC_6966.JPG';
// // import imgBencina from './../imagenes/Disolventes/bencina/DSC_6976.jpg';
// // import imgThinnerAcrilico from './../imagenes/Disolventes/thinner-acrilico/DSC_6951.jpg';
// // import imgAlcoholIndustrial from './../imagenes/Disolventes/alcohol-industrial/DSC_693610.jpg';
// // import imgAmbientadorBebe from './../imagenes/Perfumadores/ambientador-bebe/DSC_6892.jpg';
// // import imgAmbientadorLavanda from './../imagenes/Perfumadores/ambientador-lavanda/DSC_6914.jpg';
// // // import imgRenovadorLlantas from './../imagenes/Abrillantadores/renovador-de-llantas/DSC_6862.jpg';
// // // import imgSacaGrasa from './../imagenes/Abrillantadores/sacagrasa/DSC_689807.jpg';
// // import imgCeraAguaAmarilla from './../imagenes/Ceras/cera-agua-amarilla/DSC_688107.jpg';
// // import imgCeraAguaBlanca from './../imagenes/Ceras/cera-agua-blanca/DSC_690110.jpg';
// // import imgCeraAguaNegra from './../imagenes/Ceras/cera-agua-negra/DSC_686501.jpg';
// // import imgCeraAguaRoja from './../imagenes/Ceras/cera-agua-roja/DSC_687404.jpg';
// // import imgSacaOxido from './../imagenes/Removedores/saca-oxido/DSC_701305.jpg';
// // import imgVaselinaLiquida from './../imagenes/Removedores/vaselina-liquida/DSC_693001.jpg';
// // import imgAcidos from './../imagenes/Desincrustantes/acido/DSC_698416.jpg';
// // import imgAguaBaterias from './../imagenes/Desincrustantes/agua-para-baterias/DSC_696813.jpg';
// // import imgKresso from './../imagenes/Desincrustantes/kresso/DSC_7063.JPG';
// // import imgQuitasarro from './../imagenes/Desincrustantes/quitasarro/DSC_695709.jpg';
// // import imgSiliconaCristal from './../imagenes/Desincrustantes/silicona-cristal/DSC_692004.jpg';
// // import imgSiliconaTablero from './../imagenes/Desincrustantes/silicona-para-tablero/DSC_691701.jpg';

// // import imgCloro from './../imagenes/Desinfectantes/cloro/DSC_707257.jpg';
// // import imgLejia from './../imagenes/Desinfectantes/lejia/DSC_698722.jpg';
// // import imgLimpiaTodoAromaBebe from './../imagenes/Desinfectantes/limpia-todo-aroma-bebe/DSC_686801.jpg';
// // import imgLimpiaTodoAromaLavanda from './../imagenes/Desinfectantes/limpia-todo-aroma-lavanda/DSC_687703.jpg';
// // import imgPino from './../imagenes/Desinfectantes/pino/DSC_689506.jpg';
// // import imgAlcoholIso from './../imagenes/Desinfectantes/alcohol-isopropilico/DSC_701638.jpg';
// import imgProductos from './../imagenes/Banner/productos.jpg';

// const Productos = () => {

//     const [toggleState, settoggleState] = useState(1);
//     const toogleTab = (index) => {
//         settoggleState(index);
//     }
//     return (
//         <section className="productos" id="productos">
//             <div className="productos__container">
//                 <img className="banner__img" loading="lazy" src={imgProductos} />
//             </div>
//             <div className="wrap">
//                 <h2 className="productos__titulo">Productos</h2>
//             </div>
//             <div className="productos__item">
//                 <article className="categorias">
//                     <div className="wrap">
//                         <h2 className="categorias__titulo">Categorías</h2>
//                     </div>
//                     <div className="categorias__wrap wrap">
//                         <div className="categorias__conjunto">
//                             <div>
//                                 <a onClick={() => toogleTab(1)}><FontAwesomeIcon icon={faCaretRight} />Limpiadores</a>
//                                 <a onClick={() => toogleTab(2)}><FontAwesomeIcon icon={faCaretRight} />Detergentes</a>
//                                 <a onClick={() => toogleTab(3)}><FontAwesomeIcon icon={faCaretRight} />Disolventes</a>
//                                 <a onClick={() => toogleTab(4)}><FontAwesomeIcon icon={faCaretRight} />Perfumadores</a>
//                                 <a onClick={() => toogleTab(5)}><FontAwesomeIcon icon={faCaretRight} />Abrillantadores</a>
//                             </div>
//                             <div>
//                                 <a onClick={() => toogleTab(6)}><FontAwesomeIcon icon={faCaretRight} />Ceras</a>
//                                 <a onClick={() => toogleTab(7)}><FontAwesomeIcon icon={faCaretRight} />Removedores</a>
//                                 <a onClick={() => toogleTab(8)}><FontAwesomeIcon icon={faCaretRight} />Desincrustantes</a>
//                                 <a onClick={() => toogleTab(9)}><FontAwesomeIcon icon={faCaretRight} />Desinfectantes</a>
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//                 <ProductosLimpiadores
//                     nombre1="Limpia vidrios"
//                     imagen1={imgLimpiaVidrios}
//                     descripcion1="De forma segura limpie sus cristales y vidrios de su hogar e industria."
//                     presentaciones1={['Bidón', 'Galón', 'Litro']}

//                     nombre2="Ron de quemar"
//                     imagen2={imgRonQuemar}
//                     descripcion2=" Líquido azulado y volátil, que tiene aplicaciones en la industria como disolvente para lacas, barnices, perfumes; como medio para reacciones químicas."
//                     presentaciones2={['Frasco de 1 L.', 'Bidones', 'Galón', 'Cilindro']}
//                     clase={toggleState === 1 ? "producto-tab-active" : ""}
//                 />

//                 <ProductosDetergentes
//                     nombre1="Jabón Líquido"
//                     imagen1={imgJabonLiquido}
//                     presentaciones1={['1Lt', 'Frasco x 480 ML', 'Galón', 'Bidón', 'Cilindro']}
//                     descripcion1="Los jabones líquidos mantienen mejor el equilibrio del ph de la piel"

//                     nombre2="Shampoo para alfombras"
//                     imagen2={imgShampooAlfombra}
//                     presentaciones2={['Galón', 'Bidón']}
//                     descripcion2="Limpia y renueva tus alfombras y cortinas con el shampoo para alfombras, ideal para todo tu hogar."

//                     nombre3="Shampoo para autos"
//                     imagen3={imgShampooAuto}
//                     presentaciones3={['Galón', 'Bidón']}
//                     descripcion3="Lave y brille su auto en un solo paso, sin esfuerzo o la necesidad de recurrir a mas productos."

//                     clase={toggleState === 2 ? "producto-tab-active" : ""}
//                 />
//                 <ProductosDisolventes
//                     nombre1="Aguarras"
//                     imagen1={imgAguarras}
//                     presentaciones1={['Galón', 'Litro', 'Medio litro', 'Bidón']}
//                     descripcion1="Disolvente a base de hidrocarburos alifáticos desaromatizados y terpenos."

//                     nombre2="Bencina"
//                     imagen2={imgBencina}
//                     presentaciones2={['Frasco de 1Lt', 'Bidón', 'Galón', 'Cilindro']}
//                     descripcion2="Líquido claro o débilmente coloreado. Mezcla de hidrocarburos del petróleo."

//                     nombre3="Thinner Acrílico"
//                     imagen3={imgThinnerAcrilico}
//                     presentaciones3={['Galón', 'Litro', 'Medio Litro', 'Bidón']}
//                     descripcion3="Liquido combustible puede acumular cargas estáticas. El vapor es más pesado que el aire y puede dispersarse distancias largas y acumularse en zonas bajas alta mente inflamable."

//                     nombre4="Alcohol industrial"
//                     imagen4={imgAlcoholIndustrial}
//                     presentaciones4={['Litro', 'Medio litro', 'Galón', 'Bidón', 'Cilindro.']}
//                     descripcion4="Producto con concentrado de con genéricos o impurezas por lo que es orientado para usos
//                     industriales, como solventes, anticongelantes, agentes de extracción y como intermedio
//                     en la síntesis de otros productos orgánicos."

//                     clase={toggleState === 3 ? "producto-tab-active" : ""}
//                 />
//                 <ProductosPerfumadores
//                     nombre1="Ambientador Bebe"
//                     imagen1={imgAmbientadorBebe}
//                     presentaciones1={['Galón', 'Bidón']}
//                     descripcion1="Crea ambientes agradables y con olores frescos gracias a los ambientadores para hogar y coche más buscados, diferentes formas, perfrumes y cantidades al alcance de todos"

//                     nombre2="Ambientador Lavanda"
//                     imagen2={imgAmbientadorLavanda}
//                     presentaciones2={['Galón', 'Bidón']}
//                     descripcion2="Crea ambientes agradables y con olores frescos gracias a los ambientadores para hogar y coche más buscados, diferentes formas, perfrumes y cantidades al alcance de todos"

//                     clase={toggleState === 4 ? "producto-tab-active" : ""}
//                 />
//                 <ProductosAbrillantadores
//                     nombre1="Preservante de madera"
//                     imagen1={imgPreservanteMadera}
//                     presentaciones1={['Galón', 'Litro', 'Medio Litro', 'Bidón']}
//                     descripcion1="Es un protector y repelente de insectos desarrollado con ingredientes activos que
//                     además previenen el crecimiento de hongos."

//                     nombre2="Renovador de llantas"
//                     imagen2={imgRenovadorLlantas}
//                     presentaciones2={['Envase de litro', 'Medio Litro', 'Galón', 'Bidón']}
//                     descripcion2="Siliconas, emulsionantes, humectantes, preservante, agua. No posee
//                     ingredientes de riesgo."

//                     nombre3="Saca Grasa"
//                     imagen3={imgSacaGrasa}
//                     presentaciones3={['Litro', 'Medio Litro', 'Bidón']}
//                     descripcion3="Anti-grasa máximo poder desengrasante, en cocina, microondas,
//                     electrodomésticos."

//                     clase={toggleState === 5 ? "producto-tab-active" : ""}
//                 />
//                 <ProductosCeras
//                     nombre1="Cera al agua marina"
//                     imagen1={imgCeraAguaAmarilla}
//                     presentaciones1={['Galón', 'Bidón']}
//                     descripcion1="Por su
//                     durabilidad y resistencia al agua, este producto está especialmente diseñado para
//                     áreas de tráfico pesado, tales como escuelas, salones de clase, vestíbulos de hotel,
//                     restaurantes y el hogar."

//                     nombre2="Cera al agua blanca"
//                     imagen2={imgCeraAguaBlanca}
//                     presentaciones2={['Galón', 'Bidón']}
//                     descripcion2="Por su
//                     durabilidad y resistencia al agua, este producto está especialmente diseñado para
//                     áreas de tráfico pesado, tales como escuelas, salones de clase, vestíbulos de hotel,
//                     restaurantes y el hogar."

//                     nombre3="Cera al agua negra"
//                     imagen3={imgCeraAguaNegra}
//                     presentaciones3={['Galón', 'Bidón']}
//                     descripcion3="Por su
//                     durabilidad y resistencia al agua, este producto está especialmente diseñado para
//                     áreas de tráfico pesado, tales como escuelas, salones de clase, vestíbulos de hotel,
//                     restaurantes y el hogar."

//                     nombre4="Cera al agua roja"
//                     imagen4={imgCeraAguaRoja}
//                     presentaciones4={['Galón', 'Bidón']}
//                     descripcion4="Por su
//                     durabilidad y resistencia al agua, este producto está especialmente diseñado para
//                     áreas de tráfico pesado, tales como escuelas, salones de clase, vestíbulos de hotel,
//                     restaurantes y el hogar."

//                     clase={toggleState === 6 ? "producto-tab-active" : ""}
//                 />
//                 <ProductosRemovedores
//                     nombre1="Saca Óxido"
//                     imagen1={imgSacaOxido}
//                     presentaciones1={['Galón']}
//                     descripcion1="Ácido fuerte que se utiliza para facilitar la remoción de las partes oxidadas de elementos metálicos, sean estos decorativos o estructurales."

//                     nombre2="Vaselina Líquida"
//                     imagen2={imgVaselinaLiquida}
//                     presentaciones2={['Galón', 'Litro']}
//                     descripcion2="Liquido viscoso, transparente, más liviano que el agua. Insoluble
//                     en agua."

//                     clase={toggleState === 7 ? "producto-tab-active" : ""}
//                 />
//                 <ProductosDesincrustantes
//                     nombre1="Ácidos"
//                     imagen1={imgAcidos}
//                     presentaciones1={['Botella', 'Galón', 'Bidón', 'Cilindro', 'Toten']}
//                     descripcion1="Es un potente limpiador que destruye el sarro, desmancha y desinfecta, ideal
//                     para baños, pisos, inodoros, etc."

//                     nombre2="Agua para baterias"
//                     imagen2={imgAguaBaterias}
//                     presentaciones2={['Frasco de 1 L.', 'Frasco 1⁄2 L.', 'Galón', 'Cilindro', 'Bidón']}
//                     descripcion2="Es un producto que resulta de un eficiente tratamiento químico que
//                     elimina el contenido de minerales e impurezas."

//                     nombre3="Kresso"
//                     imagen3={imgKresso}
//                     presentaciones3={['Frasco de 1 L.', 'Bidones', 'Galón']}
//                     descripcion3="Desinfectante para limpieza y desinfección de instalaciones
//                     pecuarias, limpieza doméstica, baños públicos, restaurantes, hoteles, hospitales."

//                     nombre4="Quitasarro"
//                     imagen4={imgQuitasarro}
//                     presentaciones4={['Frasco de 1L.', 'Frasco 1⁄2 L.', 'Bidón', 'Galón', 'Cilindro']}
//                     descripcion4="Desinfectante para limpieza y desinfección de instalaciones
//                     pecuarias, limpieza doméstica, baños públicos, restaurantes, hoteles, hospitales."

//                     nombre5="Silicona para cristal"
//                     imagen5={imgSiliconaCristal}
//                     presentaciones5={['Frasco de 1 Lt', 'Medio Litro', 'Bidón', 'Galón']}
//                     descripcion5="Producto formulado específicamente para remover la suciedad,
//                     dar brillo, proteger y humectar la superficie donde es aplicado."

//                     nombre6="Silicona para tablero"
//                     imagen6={imgSiliconaTablero}
//                     presentaciones6={['Frasco de 1 Lt', 'Medio Litro', 'Bidón', 'Galón']}
//                     descripcion6="La formula premium de nuestra silicona perfumada penetra y
//                     se adhiere a la superficie para mejorar la apariencia del vinílico, caucho, plástico,
//                     renueva el lustre y remueva la suciedad."
//                     clase={toggleState === 8 ? "producto-tab-active" : ""}
//                 />
//                 <ProductosDesinfectantes
//                     nombre1="Cloro"
//                     imagen1={imgCloro}
//                     presentaciones1={['Galón', 'Bidón']}
//                     descripcion1="Destruye los gérmenes que causan enfermedades y permite que el agua sea segura. Ayuda a reducir los gustos y olores desagradables en el agua"

//                     nombre2="Lejía"
//                     imagen2={imgLejia}
//                     presentaciones2={['Botella', 'Galón', 'Bidón', 'Cilindro']}
//                     descripcion2="Eficaz frente a los
//                     microorganismos más comunes, es usada para limpieza y desinfección de superficies inertes,
//                     como: pisos, mesas, paredes, baños, duchas. etc"

//                     nombre3="Limpiatodo aroma bebe"
//                     imagen3={imgLimpiaTodoAromaBebe}
//                     presentaciones3={['Frasco de 1 L.', 'Bidones', 'Galón']}
//                     descripcion3="Una pequeña cantidad
//                     en un balde con agua, bastan para dejar todo el hogar, oficina o local comercial
//                     impecablemente limpios y deliciosamente perfumados."

//                     nombre4="Limpiatodo aroma lavanda"
//                     imagen4={imgLimpiaTodoAromaLavanda}
//                     presentaciones4={['Frasco de 1 L.', 'Bidones', 'Galón']}
//                     descripcion4="Una pequeña cantidad
//                     en un balde con agua, bastan para dejar todo el hogar, oficina o local comercial
//                     impecablemente limpios y deliciosamente perfumados."

//                     nombre5="Pino"
//                     imagen5={imgPino}
//                     presentaciones5={['1 L.', 'Galón', 'Bidón', 'Cilindro']}
//                     descripcion5="Puede ser utilizado en pisos, baños, vidrios y paredes."

//                     nombre6="Alcohol Isopropilicoco"
//                     imagen6={imgAlcoholIso}
//                     presentaciones6={['Frascos', 'Galón', 'Bidón', 'Cilindro', 'Tanque']}
//                     descripcion6="Este alcohol sirve como antiséptico, disolvente y tiene propiedades limpiadoras particulares."
//                     clase={toggleState === 9 ? "producto-tab-active" : ""}
//                 />
//             </div>
//         </section>
//     );
// }

// export default Productos;