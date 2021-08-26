import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Productos from './componentes/Productos';
import Banner from './componentes/Banner';
import './normalize.css';
import './scss/index.scss';
import Whatsapp from './componentes/Whatsapp';
import Contacto from './componentes/Fomulario';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductoDetalle from './componentes/ProductoDetalle';
// Rutas imagenes, pero las esta jalando de SliderData 
import imgLimpiaVidrios1 from './imagenes/Limpiadores/limpia-vidrios/DSC_6907.JPG';
import imgLimpiaVidrios2 from './imagenes/Limpiadores/limpia-vidrios/DSC_7060.JPG';

import imgRonQuemar1 from './imagenes/Limpiadores/ron-de-quemar/DSC_6885.JPG';
import imgRonQuemar2 from './imagenes/Limpiadores/ron-de-quemar/DSC_6953.JPG';

import imgJabonLiquido1 from './imagenes/Detergentes/jabon-liquido/DSC_6910.JPG';
import imgJabonLiquido2 from './imagenes/Detergentes/jabon-liquido/DSC_7117.JPG';
import imgJabonLiquido3 from './imagenes/Detergentes/jabon-liquido/DSC_7120.JPG';
import imgJabonLiquido4 from './imagenes/Detergentes/jabon-liquido/JBLavanda14.JPG';
import imgJabonLiquido5 from './imagenes/Detergentes/jabon-liquido/JBLimon15.JPG';
import imgJabonLiquido6 from './imagenes/Detergentes/jabon-liquido/JBNaranja16.JPG';
import imgJabonLiquido7 from './imagenes/Detergentes/jabon-liquido/JBNaranja16.JPG';
import imgJabonLiquido8 from './imagenes/Detergentes/jabon-liquido/JBPetalosDeRosa17.JPG';
import imgJabonLiquido9 from './imagenes/Detergentes/jabon-liquido/JLG_grande18.JPG';

import imgShampooAlfombra1 from './imagenes/Detergentes/shampoo-para-alfonbras/DSC_6923.JPG';
import imgShampooAlfombra2 from './imagenes/Detergentes/shampoo-para-alfonbras/DSC_6924.JPG';

import imgShampooAuto1 from './imagenes/Detergentes/shampoo-para-auto/DSC_6904.JPG';
import imgShampooAuto2 from './imagenes/Detergentes/shampoo-para-auto/DSC_7082.JPG';

import imgAguarras1 from './imagenes/Disolventes/aguarras/DSC_6966.JPG';
import imgAguarras2 from './imagenes/Disolventes/aguarras/DSC_7094.JPG';

import imgAlcoholIndustrial1 from './imagenes/Disolventes/alcohol-industrial/DSC_693610.jpg';
import imgAlcoholIndustrial2 from './imagenes/Disolventes/alcohol-industrial/DSC_707532.jpg';
import imgAlcoholIndustrial3 from './imagenes/Disolventes/alcohol-industrial/alcohol21.jpg';

import imgBencina1 from './imagenes/Disolventes/bencina/DSC_6976.jpg';
import imgBencina2 from './imagenes/Disolventes/bencina/DSC_7100.jpg';

import imgThinnerAcrilico1 from './imagenes/Disolventes/thinner-acrilico/DSC_6951.jpg';
import imgThinnerAcrilico2 from './imagenes/Disolventes/thinner-acrilico/DSC_6971.jpg';
import imgThinnerAcrilico3 from './imagenes/Disolventes/thinner-acrilico/DSC_6975.jpg';

import imgAmbientadorBebe1 from './imagenes/Perfumadores/ambientador-bebe/DSC_6892.jpg';
import imgAmbientadorBebe2 from './imagenes/Perfumadores/ambientador-bebe/DSC_7085.jpg';

import imgAmbientadorLavanda1 from './imagenes/Perfumadores/ambientador-lavanda/DSC_6914.jpg';
import imgAmbientadorLavanda2 from './imagenes/Perfumadores/ambientador-lavanda/DSC_7066.jpg';

import imgPreservanteMadera1 from './imagenes/Abrillantadores/preservante-para-madera/DSC_6888.jpg';
import imgPreservanteMadera2 from './imagenes/Abrillantadores/preservante-para-madera/DSC_6949.jpg';

import imgRenovadorLlanta1 from './imagenes/Abrillantadores/renovador-de-llantas/DSC_6862.jpg';
import imgRenovadorLlanta2 from './imagenes/Abrillantadores/renovador-de-llantas/DSC_6963.jpg';
import imgRenovadorLlanta3 from './imagenes/Abrillantadores/renovador-de-llantas/DSC_6965.jpg';

import imgSacaGrasa1 from './imagenes/Abrillantadores/sacagrasa/DSC_689807.jpg';
import imgSacaGrasa2 from './imagenes/Abrillantadores/sacagrasa/DSC_690009.jpg';

import imgCeraAguaAmarilla1 from './imagenes/Ceras/cera-agua-amarilla/DSC_688107.jpg';
import imgCeraAguaAmarilla2 from './imagenes/Ceras/cera-agua-amarilla/DSC_707913.jpg';

import imgCeraAguaBlanca1 from './imagenes/Ceras/cera-agua-blanca/DSC_690110.jpg';
import imgCeraAguaBlanca2 from './imagenes/Ceras/cera-agua-blanca/DSC_707913.jpg';

import imgCeraAguaNegra1 from './imagenes/Ceras/cera-agua-negra/DSC_686501.jpg';
import imgCeraAguaNegra2 from './imagenes/Ceras/cera-agua-negra/DSC_707913.jpg';

import imgCeraAguaRoja1 from './imagenes/Ceras/cera-agua-roja/DSC_687404.jpg';
import imgCeraAguaRoja2 from './imagenes/Ceras/cera-agua-roja/DSC_707913.jpg';

import imgSacaOxido1 from './imagenes/Removedores/saca-oxido/DSC_701305.jpg';
import imgSacaOxido2 from './imagenes/Removedores/saca-oxido/DSC_701507.jpg';

import imgVaselinaLiquida1 from './imagenes/Removedores/vaselina-liquida/DSC_693001.jpg';
import imgVaselinaLiquida2 from './imagenes/Removedores/vaselina-liquida/DSC_698203.jpg';

import imgAcido1 from './imagenes/Desincrustantes/acido/DSC_698416.jpg';
import imgAcido2 from './imagenes/Desincrustantes/acido/DSC_702225.jpg';
import imgAcido3 from './imagenes/Desincrustantes/acido/DSC_702528.jpg';
import imgAcido4 from './imagenes/Desincrustantes/acido/DSC_709136.jpg';

import imgAguaBaterias1 from './imagenes/Desincrustantes/agua-para-baterias/DSC_696813.jpg';
import imgAguaBaterias2 from './imagenes/Desincrustantes/agua-para-baterias/DSC_697015.jpg';

import imgKresso1 from './imagenes/Desincrustantes/kresso/DSC_7063.JPG';
import imgKresso2 from './imagenes/Desincrustantes/kresso/DSC_710439.jpg';
import imgKresso3 from './imagenes/Desincrustantes/kresso/DSC_710742.jpg';

import imgQuitaSarro1 from './imagenes/Desincrustantes/quitasarro/DSC_695709.jpg';
import imgQuitaSarro2 from './imagenes/Desincrustantes/quitasarro/DSC_699319.jpg';
import imgQuitaSarro3 from './imagenes/Desincrustantes/quitasarro/DSC_701922.jpg';
import imgQuitaSarro4 from './imagenes/Desincrustantes/quitasarro/DSC_705431.jpg';

import imgSiliconaCristal1 from './imagenes/Desincrustantes/silicona-cristal/DSC_692004.jpg';
import imgSiliconaCristal2 from './imagenes/Desincrustantes/silicona-cristal/DSC_696111.jpg';

import imgSiliconaTablero1 from './imagenes/Desincrustantes/silicona-para-tablero/DSC_691701.jpg';
import imgSiliconaTablero2 from './imagenes/Desincrustantes/silicona-para-tablero/DSC_695507.jpg';

import imgCloro1 from './imagenes/Desinfectantes/cloro/DSC_707257.jpg';
import imgCloro2 from './imagenes/Desinfectantes/cloro/Cloro0001.jpg';

import imgLejia1 from './imagenes/Desinfectantes/lejia/DSC_698722.jpg';
import imgLejia2 from './imagenes/Desinfectantes/lejia/DSC_699025.jpg';
import imgLejia3 from './imagenes/Desinfectantes/lejia/DSC_708860.jpg';

import imgLimpiaTodoBebe1 from './imagenes/Desinfectantes/limpia-todo-aroma-bebe/DSC_686801.jpg';
import imgLimpiaTodoBebe2 from './imagenes/Desinfectantes/limpia-todo-aroma-bebe/DSC_705751.jpg';

import imgLimpiaTodoLavanda1 from './imagenes/Desinfectantes/limpia-todo-aroma-lavanda/DSC_687703.jpg';
import imgLimpiaTodoLavanda2 from './imagenes/Desinfectantes/limpia-todo-aroma-lavanda/DSC_705751.jpg';

import imgPino1 from './imagenes/Desinfectantes/pino/DSC_689506.jpg';
import imgPino2 from './imagenes/Desinfectantes/pino/DSC_706954.jpg';

import imgAlcoholIso1 from './imagenes/Desinfectantes/alcohol-isopropilico/DSC_701638.jpg';
import imgAlcoholIso2 from './imagenes/Desinfectantes/alcohol-isopropilico/DSC_701840.jpg';



import { SliderData1, SliderData10, SliderData11, SliderData12, SliderData13, SliderData14, SliderData15, SliderData16, SliderData17, SliderData18, SliderData19, SliderData20, SliderData21, SliderData22, SliderData23, SliderData24, SliderData25, SliderData26, SliderData27, SliderData28, SliderData29, SliderData30, SliderData31, SliderData32, SliderData2, SliderData3, SliderData4, SliderData5, SliderData6, SliderData7, SliderData8, SliderData9 } from './componentes/SliderData';
import Nosotros from './componentes/Nosotros';
import Servicios from './componentes/Servicios';
import { Helmet } from 'react-helmet';
import ScrollToTop from './componentes/ScrollToTop';
import ContactoPrincipal from './componentes/ContactoPrincipal';
import Productos2 from './componentes/Productos2';



const App = () => {
  const TITLE = 'Quimica Rodriguez'
  const nombreCategoria1 = "Limpieza y desinfección";
  const nombreCategoria2 = "Disolventes y uso industrial";
  const nombreCategoria3 = "Línea Automotriz";

  const nombresProductosCategoria1 = ['Ambientadores', 'Desinfectante pino', 'Lejía', 'Quita Sarro',
    'Ácido el fuerte', 'Ácido el fuerte', 'Jabón Líquido', 'Saca grasa', 'Kresso', 'Cera al agua'];
  const nombresProductosCategoria2 = ['Bencina', 'Thinner acrílico', 'Alcohol industrial',
    'Alcohol isopropilico', 'Alcohol isopropilico 70%', 'Ron de quemar', 'Preservante de madera', 'Saca óxido']
  const nombresProductosCategoria3 = ['Renovador de llanta', 'Silicona para tablero', 'Silicona cristal',
    'Agua para radiador', 'Thinner automotriz', 'Shampoo para auto', 'Vaselina líquida']

  const rutaWsp = "https://wa.me/51994268798?text=Deseo%20mayor%20información%20";

  return (

    <BrowserRouter>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <ScrollToTop />
      <Route path="/" exact={true}>

        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <Banner />
        <Servicios />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>
      <Route path="/Nosotros">

        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <Nosotros />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Productos">

        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />

        {/* <Productos /> */}
        <Productos2 nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Contacto">

        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />

        <ContactoPrincipal rutaWsp={rutaWsp} />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Limpia-vidrios">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Limpia vidrios"
          imagenesSecundarias={[imgLimpiaVidrios1, imgLimpiaVidrios2]}
          hola={SliderData1}
          tipoProducto="Limpiadores"
          presentaciones="Bidón, Galón, Litro"
          apariencia="Líquido Transparente azulado"
          usos={['Aplique en forma uniforme con la ayuda de una esponja para paredes o con un trapeador para pisos, y deje secar durante cinco minutos.',
            'Para los lugares más grasosos aplique directamente.',
            'Puede ser utilizado en pisos, baños, vidrios y paredes.']}
          urlPdf="https://drive.google.com/file/d/1IMvEv7gUPjJRbJLp6tEzBeKXkW9BdbeJ/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1f3HEJd-s9Wc4qioZhTrxmiW2MAp4bgAp/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Ron-de-quemar">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Ron de quemar"
          imagenesSecundarias={[imgRonQuemar1, imgRonQuemar2]}
          hola={SliderData2}
          tipoProducto="Limpiadores"
          presentaciones="Frasco de 1 L, Bidón, Galón, Cilindro"
          apariencia="Líquido"
          colores="Azul"
          usos={['Usar de acuerdo a las necesidades, se utiliza mayoritariamente a nivel industrial, como disolvente de resinas, lacas y pinturas.',
            'Combustible de mecheros, para encendido de cocinas a Kerosenes industriales, en algunos casos para limpieza de vidrios, etc.',
            'No es necesario diluir, se puede usar puro.']}
          urlPdf="https://drive.google.com/file/d/1nTkfYMM1cVCwCI0iP7Ww13U9T2SwLPfz/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/179iASaQK2ahA0cSgHQLioHzLUuleufhR/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Jabon-liquido">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Jabón Líquido"
          imagenesSecundarias={[imgJabonLiquido1, imgJabonLiquido2, imgJabonLiquido3, imgJabonLiquido4, imgJabonLiquido5, imgJabonLiquido6, imgJabonLiquido7, imgJabonLiquido8, imgJabonLiquido9]}
          hola={SliderData3}
          tipoProducto="Detergente"
          presentaciones="Bidón, Galón, Litro"
          colores="Morado, Verde, Naranja, Rosa"
          usos={['Por el tipo de envase en el que viene el jabón líquido la persona apenas está en contacto con él y de esta manera se evita estar en contacto alguna bacteria que pudiera quedar en el jabón en barra.',
            'El jabón líquido por el tipo de componentes que contiene no genera resequedad piel.',
            'La espuma es menor y es más fácil evitar que queden residuos en la piel.',
            'Los jabones líquidos mantienen mejor el equilibrio del ph de la piel.']}
          urlPdf="https://drive.google.com/file/d/1WoL-vyuvYIvy2bK6OBelHiH9J4HzJ4gI/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1we2XtF8KO3kN9vdBuZRyUobPhT8Brt9N/view?usp=sharing"
          urlPdf3="https://drive.google.com/file/d/1QlQYXHNOAB9ey1f6CZemz8siPtLAj1Vh/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Shampoo-para-alfombras">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Shampoo para alfombras"
          imagenesSecundarias={[imgShampooAlfombra1, imgShampooAlfombra2]}
          hola={SliderData4}
          tipoProducto="Detergente"
          presentaciones="Galón, Bidón"
          usos={['Aspire la alfombra, retire todo el polvo de la superficie.', 'Diluya el producto de acuerdo al tipo de limpieza que va a emplear.']}
          urlPdf="https://drive.google.com/file/d/1dNg8eEnerajK1hQWmxYkKW71JuP3PiHU/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1IN3HF1uIsxJ2kpLJM5bDxYpVpHlz1t6V/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Shampoo-para-autos">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Shampoo para autos"
          imagenesSecundarias={[imgShampooAuto1, imgShampooAuto2]}
          hola={SliderData5}
          tipoProducto="Detergente"
          presentaciones="Galón, Bidón"
          usos={['Limpie todo el polvo acumulado en el vehículo con una manguera a presión.',
            'Se recomienda colocar directo el producto o combinarlo con agua de tal manera que frote con el paño y remueva las impurezas.',
            'Enjuague el vehículo con abundante agua removiendo los restos del producto.',
            'Lava el vehículo usando el paño de microfibra o un trapo tipo franela.']}
          urlPdf="https://drive.google.com/file/d/1vNFt9FvkJB90-It0x4daHspyEMiewfAt/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1vJbe02te5ew-dauvkGKIC8qLccmZMKMS/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Aguarras">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Aguarras"
          imagenesSecundarias={[imgAguarras1, imgAguarras2]}
          hola={SliderData6}
          tipoProducto="Disolventes"
          presentaciones="Galón, Litro, Medio litro, Bidón"
          usos={['Dilución y limpieza de pinturas sintéticas.']}
          urlPdf="https://drive.google.com/file/d/1jqXqSN-Y9C-dTFgxTka-7Ly1SI6V97uN/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1SPIjCzqOosRL3QN6rWG2-4vGc3CYvGip/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>

      <Route path="/Bencina">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Bencina"
          imagenesSecundarias={[imgBencina1, imgBencina2]}
          hola={SliderData7}
          tipoProducto="Disolventes"
          presentaciones="Frasco de 1Lt, Bidón, Galón, Cilindro"
          usos={['Su uso principal está en actividades de limpieza y desengrasado.',
            'En la industria de pinturas se usa como componente de diluyentes.',
            'En la industria química se usa como medio de extracción, y también como diluyente de breas y Alquitranes.']}
          urlPdf="https://drive.google.com/file/d/1TgTxi0HnbGUChNjr22N1bpRNCJ8_vv--/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/17Nz3Iou1FD95E3zyn39wDrnvvcGqpype/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Thinner-acrilico">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Thinner acrílico"
          imagenesSecundarias={[imgThinnerAcrilico1, imgThinnerAcrilico2, imgThinnerAcrilico3]}
          hola={SliderData8}
          tipoProducto="Disolventes"
          presentaciones="Galón, Litro, Medio Litro, Bidón"
          usos={['Como disolvente de pinturas al duco',
            'Como disolvente de pinturas esmalte',
            'Como limpiador de algunos equipos',
            'Como limpiador y desmanchado']}
          urlPdf="https://drive.google.com/file/d/1rRJMe-xPKsoGmDGxO80GKgiqSkccVxjq/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1KLKeRzgnUWfVhEq7DFd4R48yIZX2tDKv/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Alcohol-industrial">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Alcohol industrial"
          imagenesSecundarias={[imgAlcoholIndustrial1, imgAlcoholIndustrial2, imgAlcoholIndustrial3]}
          hola={SliderData9}
          tipoProducto="Disolventes"
          presentaciones="Litro, Medio litro, Galón, Bidón, Cilindro."
          usos={['De gran aplicación en muchos sectores industriales y otras aplicaciones químicas.']}
          urlPdf="https://drive.google.com/file/d/1cnO2VOAAtw_mP93N0-xk1aH4AKvge_3V/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/10g3s_OkQ5AiwP39h24Gxy4rZdawcLubY/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Ambientador-bebe">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Ambientador Bebe"
          imagenesSecundarias={[imgAmbientadorBebe1, imgAmbientadorBebe2]}
          hola={SliderData10}
          tipoProducto="Perfumadores"
          presentaciones="Galón, Bidón"
          usos={['Se recomienda, sobre todo, para utilizar en baños y lavabos',
            'Existen diferentes aromas del mismo producto, donde cada uno de ellos se puede recomendar para una zona del negocio o un tipo de profesión en concreto']}
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Ambientador-lavanda">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Ambientador Lavanda"
          imagenesSecundarias={[imgAmbientadorLavanda1, imgAmbientadorLavanda2]}
          hola={SliderData11}
          tipoProducto="Perfumadores"
          presentaciones="Galón, Bidón"
          usos={['Se recomienda, sobre todo, para utilizar en baños y lavabos',
            'Existen diferentes aromas del mismo producto, donde cada uno de ellos se puede recomendar para una zona del negocio o un tipo de profesión en concreto']}
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Preservante-para-madera">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Preservante para madera"
          imagenesSecundarias={[imgPreservanteMadera1, imgPreservanteMadera2]}
          hola={SliderData12}
          tipoProducto="Abrillantadores"
          presentaciones="Galón, Litro, Medio Litro, Bidón"
          usos={['Se recomienda para ser usada como prevante para madera nueva y aglomerados utilizados en la fabricación de muebles.',
            'Aplique preservante sobre madera nueva sólida y aglomerados.',
            'Por ser tóxico a la vegetación y alimentos este producto no debe usarse en áreas que estén en contacto directo con alimentos y bebidas, plantas, animales, invernaderos, etc.',
            'Durante la aplicación, debe mantenerse en constante agitación para mantener el balance de los componentes  Aplique con brocha o inmersión.',
          ]}
          urlPdf="https://drive.google.com/file/d/1zPyeeip7H0EHpUzPBH5aWKOEU_fbsrcv/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1c-rH6oLcLuD274kW1tb2snXzt8HxXzEY/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Renovador-de-llantas">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Renovador de llantas"
          imagenesSecundarias={[imgRenovadorLlanta1, imgRenovadorLlanta2, imgRenovadorLlanta3]}
          hola={SliderData13}
          tipoProducto="Abrillantadores"
          presentaciones="Envase de litro, Medio Litro, Galón, Bidón"
          usos={['Lave y limpie la superficie de la llanta.',
            'Aplique en la parte lateral de las llantas esparcirlo de forma homogénea, evitando aplicarlo en zonas de contacto con el suelo.',
            'Frote con un paño limpio y seco.',
            'Úselo para mejorar el brillo y limpieza en accesorios de caucho, metal, plástico.']}
          urlPdf="https://drive.google.com/file/d/17A19IEn4dg2LQQaOeC1s3mdfwWdXuZv3/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/16y-8kp5THCI-DCkzIS-lc6a6GzwqW8NA/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Saca-grasa">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Saca grasa"
          imagenesSecundarias={[imgSacaGrasa1, imgSacaGrasa2]}
          hola={SliderData14}
          tipoProducto="Abrillantadores"
          presentaciones="Litro, Medio Litro, Bidón"
          usos={['Elimina fácilmente la grasa sin restregar, ni enjuagar.',
            'Deja la superficie limpia y con un agradable aroma.']}
          urlPdf="https://drive.google.com/file/d/1GZpT301PE2Kqhzpn9Ccdt3zOTkS2UoJ6/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1FEQ9VaZeBMBnd9OLtsG6YsqdT76RE1D_/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Cera-agua-amarilla">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Cera al agua amarilla"
          imagenesSecundarias={[imgCeraAguaAmarilla1, imgCeraAguaAmarilla2]}
          hola={SliderData15}
          tipoProducto="Ceras"
          presentaciones="Galón, Bidón"
          usos={['Aplicable sobre vinilo, losetas, pisos cerámicos, cemento pulido, terrazos y mármol.']}
          urlPdf="https://drive.google.com/file/d/13FICjyMso7dHOkZ9WChXPFD4stqTgX21/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1jAaVqe-8HKXAvUTGHee8brQezB5Jf4IU/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Cera-agua-blanca">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Cera al agua blanca"
          imagenesSecundarias={[imgCeraAguaBlanca1, imgCeraAguaBlanca2]}
          hola={SliderData16}
          tipoProducto="Ceras"
          presentaciones="Galón, Bidón"
          usos={['Aplicable sobre vinilo, losetas, pisos cerámicos, cemento pulido, terrazos y mármol.']}
          urlPdf="https://drive.google.com/file/d/13FICjyMso7dHOkZ9WChXPFD4stqTgX21/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1jAaVqe-8HKXAvUTGHee8brQezB5Jf4IU/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Cera-agua-negra">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Cera al agua negra"
          imagenesSecundarias={[imgCeraAguaNegra1, imgCeraAguaNegra2]}
          hola={SliderData17}
          tipoProducto="Ceras"
          presentaciones="Galón, Bidón"
          usos={['Aplicable sobre vinilo, losetas, pisos cerámicos, cemento pulido, terrazos y mármol.']}
          urlPdf="https://drive.google.com/file/d/13FICjyMso7dHOkZ9WChXPFD4stqTgX21/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1jAaVqe-8HKXAvUTGHee8brQezB5Jf4IU/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Cera-agua-roja">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Cera al agua roja"
          imagenesSecundarias={[imgCeraAguaRoja1, imgCeraAguaRoja2]}
          hola={SliderData18}
          tipoProducto="Ceras"
          presentaciones="Galón, Bidón"
          usos={['Aplicable sobre vinilo, losetas, pisos cerámicos, cemento pulido, terrazos y mármol.']}
          urlPdf="https://drive.google.com/file/d/13FICjyMso7dHOkZ9WChXPFD4stqTgX21/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1jAaVqe-8HKXAvUTGHee8brQezB5Jf4IU/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Saca-oxido">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Saca óxido"
          imagenesSecundarias={[imgSacaOxido1, imgSacaOxido2]}
          hola={SliderData19}
          tipoProducto="Removedores"
          presentaciones="Galón"
          usos={['Ácido fuerte que se utiliza para facilitar la remoción de las partes oxidadas de elementos metálicos, sean estos decorativos o estructurales.']}
          urlPdf="https://drive.google.com/file/d/1iKSHsKhVFw7dEru7nTJh0TF-j2hiR6KU/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/10dtIvW8AfKHiiPxh-hjovUNGo6JSMFLR/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Vaselina-liquida">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Vaselina liquida"
          imagenesSecundarias={[imgVaselinaLiquida1, imgVaselinaLiquida2]}
          hola={SliderData20}
          tipoProducto="Removedores"
          presentaciones="Galón, Litro"
          usos={['En Lubricante industrial la vaselina liquida es utilizada en el aflojamiento de tornillos, remoción de herrumbre, desmoldaste para aplicaciones plásticas-yeso.',
            'Esta vaselina es de grado muy refinado.',
            'Por su característica repelencia al agua, puedeser utilizado como protección en la penetración de humedad en superficies lavables.',
            'Por su particular composición, también puede ser utilizado en el abrillantamiento de superficies lavables como: Acero inoxidable, plástico, entre otros.']}
          urlPdf="https://drive.google.com/file/d/18AElKiKcimwht1ChZfM0yzB0OT_bR2Uj/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1ap7VtIaDcayII4kfqGGMvLFKvX9vR-C7/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Acidos">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Acidos"
          imagenesSecundarias={[imgAcido1, imgAcido2, imgAcido3, imgAcido4]}
          hola={SliderData21}
          tipoProducto="Desincrustantes"
          presentaciones="Botella, Galón, Bidón, Cilindro, Toten"
          usos={['Producto de limpieza y desinfección (baños, mayólicas, tinas, lavatorios, etc.), capaz de remover manchas de sarro y caliche.',
            'Se usa también en mantenimiento de aguas y piscinas (regula pH, elimina    algas y limpia mayólicas)',
            'No usar en baldosas a base de cemento ni mármol.']}
          urlPdf="https://drive.google.com/file/d/16uQ0YyWgDzk4fmJt2JDJymLzWi4JIyJK/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1ap7VtIaDcayII4kfqGGMvLFKvX9vR-C7/view?usp=sharing"
          urlPdf3="https://drive.google.com/file/d/1GsAOLC9-lmBCp2cGOZAZ13BJnOMTl71E/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Agua-para-baterias">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Agua para baterias"
          imagenesSecundarias={[imgAguaBaterias1, imgAguaBaterias2]}
          hola={SliderData22}
          tipoProducto="Desincrustantes"
          presentaciones="Frasco de 1 L., 1⁄2 L., Galón, Cilindro, Bidón"
          usos={['Uso automotriz e industrial.',
            'Uso farmacéutico y doméstico (planchas a vapor, dilución de pinturas de cerámicas, etc.).']}
          urlPdf="https://drive.google.com/file/d/1MtSOz9u-pF1fxksioW9vY4YY6o7DSrEM/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1ZekA216URPntE27mb24I-ZsYw2bB0nI-/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Kresso">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Kresso"
          imagenesSecundarias={[imgKresso1, imgKresso2, imgKresso3]}
          hola={SliderData23}
          tipoProducto="Desincrustantes"
          presentaciones="Frasco de 1 L., Bidones, Galón"
          usos={['Uso Industrial, principalmente en pozas de desinfección, granjas, pozos sépticos.']}
          urlPdf="https://drive.google.com/file/d/1TLMx1jVbKdPQlm-8XTUSL6oG7x1KLwub/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1w0fkstIdYv65ZW3UTcFOi5RLh4WVo3no/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Quita-sarro">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Quita sarro"
          imagenesSecundarias={[imgQuitaSarro1, imgQuitaSarro2, imgQuitaSarro3, imgQuitaSarro4]}
          hola={SliderData24}
          tipoProducto="Desincrustantes"
          presentaciones="Frasco de 1L., 1⁄2 L., Bidón, Galón, Cilindro"
          usos={['Aplique una pequeña cantidad en el sanitario, deje actuar unos minutos, refriegue y enjuague.',
            'No se recomienda aplicar sobre partes cromadas, aluminio y fierro.',
            'No se use en superficies sensibles a los ácidos.',
            'Lo mejor es si el sarricida se usa frecuentemente.']}
          urlPdf="https://drive.google.com/file/d/1a5eiixx8fpRGX74RCSXbpjsu5KRjTXEs/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1lG-sE9gRnDubo7N6dU5LOujd3XCdd_jP/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Silicona-para-cristal">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Silicona cristal"
          imagenesSecundarias={[imgSiliconaCristal1, imgSiliconaCristal2]}
          hola={SliderData25}
          tipoProducto="Desincrustantes"
          presentaciones="Frasco de 1L., Medio Litro, Bidón, Galón"
          usos={['Es un producto versátil, útil tanto para el cuidado y mantenimiento de su vehículo como en el hogar.',
            'Es un producto versátil, útil tanto para el cuidado y mantenimiento de su vehículo como en el hogar.',
            'Puede ser usado sobre superficies de fórmica, metales, vinilos, lonas, tableros de auto, etc.'
          ]}
          urlPdf="https://drive.google.com/file/d/1Tkhdjm8uiIDDN_xmc7TLi4FaAq0S_SXI/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1uknsgyPla7tRqfmWPaMOP8stXCd3bc32/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Silicona-para-tablero">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Silicona tablero"
          imagenesSecundarias={[imgSiliconaTablero1, imgSiliconaTablero2]}
          hola={SliderData26}
          tipoProducto="Desincrustantes"
          presentaciones="Frasco de 1 Lt, Medio Litro, Bidón, Galón"
          usos={['Es un producto versátil, útil tanto para el cuidado y mantenimiento de su vehículo como en el hogar.',
            'Puede ser usado sobre superficies de fórmica, metales, vinilos, lonas, tableros de auto, etc.',
            'Aplíquese en tableros de autos, equipos de sonido, computadoras y otros.']}
          urlPdf="https://drive.google.com/file/d/1XNdU58v7mEeuNRiRZQl-SyWKYIxlx7bx/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1OGxG08zs-yDEDpCq0nnymnNC-nMzdQmP/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Cloro">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Cloro"
          imagenesSecundarias={[imgCloro1, imgCloro2]}
          hola={SliderData27}
          tipoProducto="Desinfectantes"
          presentaciones="Galón, Bidón"
          usos={['El cloro destruye los gérmenes que causan enfermedades y permite que el agua sea segura',
            'Además de matar gérmenes peligrosos como bacterias, virus y parásitos, el cloro ayuda a reducir los gustos y olores desagradables en el agua']}
          urlPdf="https://drive.google.com/file/d/1445lrGhVMOXwV7gFwYqiqA3SmCXQhJ_v/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1AJagXy4IMMFBiGzcn6dETqlh6NInOned/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Lejia">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Lejia"
          imagenesSecundarias={[imgLejia1, imgLejia2, imgLejia3]}
          hola={SliderData28}
          tipoProducto="Desinfectantes"
          presentaciones="Botella, Galón, Bidón, Cilindro"
          usos={['Lejía Concentrada, es usada para limpieza y desinfección de superficies inertes, como: pisos, mesas, paredes, baños, duchas. etc.',
            'Es utilizado como desinfectante de uso de Salud Pública, ya que elimina eficazmente los microorganismos más comunes.']}
          apariencia="Liquido"
          urlPdf="https://drive.google.com/file/d/1_9K1QklUygg3VeZvk5jyc4Ne8F43DFEG/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1TwdUNv8Rv-FqEBAjx2zvWshrFnPiUIiN/view?usp=sharing"
          urlPdf3="https://drive.google.com/file/d/1wen8m27eXo3A_INgVvgSxycz1xvu3H-c/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Limpia-todo-aroma-bebe">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Limpiatodo aroma bebe"
          imagenesSecundarias={[imgLimpiaTodoBebe1, imgLimpiaTodoBebe2]}
          hola={SliderData29}
          tipoProducto="Desinfectantes"
          presentaciones="Frasco de 1 L., Bidones, Galón"
          usos={['Diluya 1/4 de taza en un balde con 3 litros de agua',
            ' No necesita enjuagar.']}
          urlPdf="https://drive.google.com/file/d/1ih0MGeP49pZC_RpUBcWAKOZzJnw325RI/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1WebfKCbC9d6yH49uTPNmDZuV8v1U7MPj/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Limpia-todo-aroma-lavanda">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Limpiatodo aroma lavanda"
          imagenesSecundarias={[imgLimpiaTodoLavanda1, imgLimpiaTodoLavanda2]}
          hola={SliderData30}
          tipoProducto="Desinfectantes"
          presentaciones="Frasco de 1 L., Bidones, Galón"
          usos={['Diluya 1/4 de taza en un balde con 3 litros de agua',
            ' No necesita enjuagar.']}
          urlPdf="https://drive.google.com/file/d/1ih0MGeP49pZC_RpUBcWAKOZzJnw325RI/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1WebfKCbC9d6yH49uTPNmDZuV8v1U7MPj/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Pino">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Pino"
          imagenesSecundarias={[imgPino1, imgPino2]}
          hola={SliderData31}
          tipoProducto="Desinfectantes"
          presentaciones="1 L., Galón, Bidón, Cilindro"
          usos={['Aplique en forma uniforme con la ayuda de una esponja para paredes o con un trapeador para pisos, y deje secar durante cinco minutos',
            'Para los lugares más grasosos aplique directamente.',
            'Puede ser utilizado en pisos, baños, vidrios y paredes.']}
          apariencia="Liquido"
          colores="Verde"
          urlPdf="https://drive.google.com/file/d/1tU43CnLnuHjb-mCW-nPTvvLL1VqImgh0/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1sHPuK28odYcpc2lb3FPlYCpZsgecCmBM/view?usp=sharing"
          urlPdf3="https://drive.google.com/file/d/1QlQYXHNOAB9ey1f6CZemz8siPtLAj1Vh/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Alcohol-isopropilico">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Alcohol Isopropilicoco"
          imagenesSecundarias={[imgAlcoholIso1, imgAlcoholIso2]}
          hola={SliderData32}
          tipoProducto="Desinfectantes"
          presentaciones="Frascos, Galón, Bidón, Cilindro, Tanque"
          usos={['Humedezca un paño limpio con Alcohol Isopropílico Multiusos, luego aplique sobre la superficie a tratar.',
            'Frote y deje secar.']}
          urlPdf="https://drive.google.com/file/d/1xeme2x7vJTl8Jnno_pH-leWlf8II9zEu/view?usp=sharing"
          urlPdf2="https://drive.google.com/file/d/1qf1an1k5XfUOjcjTDcJhUQoWDIBfnkUR/view?usp=sharing"
          urlPdf3="https://drive.google.com/file/d/19rIacTacI9ThASeWLqqiUtdL4xF7xU3F/view?usp=sharing"
        />
        <Footer />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));