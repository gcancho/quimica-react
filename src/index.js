import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Productos from './componentes/Productos';
import Banner from './componentes/Banner';
import './normalize.css';
import './scss/index.scss';
import Whatsapp from './componentes/Whatsapp';
import Contacto from './componentes/Contacto';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductoDetalle from './componentes/ProductoDetalle';
// Rutas imagenes, pero las esta jalando de SliderData 
import imgLimpiaVidrios1 from './imagenes/Limpiadores/limpia-vidrios/DSC_6908.JPG';
import imgLimpiaVidrios2 from './imagenes/Limpiadores/limpia-vidrios/DSC_7060.JPG';

import imgRonQuemar1 from './imagenes/Limpiadores/ron-de-quemar/DSC_6885.JPG';
import imgRonQuemar2 from './imagenes/Limpiadores/ron-de-quemar/DSC_6954.JPG';

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

import imgAguarras1 from './imagenes/Disolventes/aguarras/DSC_6945.JPG';
import imgAguarras2 from './imagenes/Disolventes/aguarras/DSC_6966.JPG';
import imgAguarras3 from './imagenes/Disolventes/aguarras/DSC_7094.JPG';

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


import { SliderData1, SliderData10, SliderData11, SliderData12, SliderData13, SliderData14, SliderData15, SliderData16, SliderData17, SliderData18, SliderData19, SliderData20, SliderData2, SliderData3, SliderData4, SliderData5, SliderData6, SliderData7, SliderData8, SliderData9 } from './componentes/SliderData';
import Nosotros from './componentes/Nosotros';
import Servicios from './componentes/Servicios';
import { Helmet } from 'react-helmet';



const App = () => {
  const TITLE = 'Quimica Rodriguez'

  return (

    <BrowserRouter>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Route path="/" exact={true}>

        <Header />
        <Banner />
        <Servicios />
        <Contacto />
        <Footer />
        <Whatsapp />
      </Route>
      <Route path="/Nosotros">

        <Header />
        <Nosotros />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Productos">

        <Header />
        <Productos />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Limpia-vidrios">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Limpia vidrios"
          imagenesSecundarias={[imgLimpiaVidrios1, imgLimpiaVidrios2]}
          hola={SliderData1}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Ron-de-quemar">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Ron de quemar"
          imagenesSecundarias={[imgRonQuemar1, imgRonQuemar2]}
          hola={SliderData2}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Jabon-liquido">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Jabón Líquido"
          imagenesSecundarias={[imgJabonLiquido1, imgJabonLiquido2, imgJabonLiquido3, imgJabonLiquido4, imgJabonLiquido5, imgJabonLiquido6, imgJabonLiquido7, imgJabonLiquido8, imgJabonLiquido9]}
          hola={SliderData3}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Shampoo-para-alfombras">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Shampoo para alfombras"
          imagenesSecundarias={[imgShampooAlfombra1, imgShampooAlfombra2]}
          hola={SliderData4}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Shampoo-para-autos">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Shampoo para alfombras"
          imagenesSecundarias={[imgShampooAuto1, imgShampooAuto2]}
          hola={SliderData5}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Aguarras">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Aguarras"
          imagenesSecundarias={[imgAguarras1, imgAguarras2, imgAguarras3]}
          hola={SliderData6}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Bencina">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Bencina"
          imagenesSecundarias={[imgBencina1, imgBencina2]}
          hola={SliderData7}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Thinner-acrilico">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Thinner acrílico"
          imagenesSecundarias={[imgThinnerAcrilico1, imgThinnerAcrilico2, imgThinnerAcrilico3]}
          hola={SliderData8}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Ambientador-bebe">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Ambientador Bebe"
          imagenesSecundarias={[imgAmbientadorBebe1, imgAmbientadorBebe2]}
          hola={SliderData9}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Ambientador-lavanda">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Ambientador Lavanda"
          imagenesSecundarias={[imgAmbientadorLavanda1, imgAmbientadorLavanda2]}
          hola={SliderData10}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Preservante-para-madera">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Preservante para madera"
          imagenesSecundarias={[imgPreservanteMadera1, imgPreservanteMadera2]}
          hola={SliderData11}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Renovador-de-llantas">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Renovador de llantas"
          imagenesSecundarias={[imgRenovadorLlanta1, imgRenovadorLlanta2, imgRenovadorLlanta3]}
          hola={SliderData12}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Saca-grasa">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Saca grasa"
          imagenesSecundarias={[imgSacaGrasa1, imgSacaGrasa2]}
          hola={SliderData13}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Cera-agua-amarilla">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Cera al agua amarilla"
          imagenesSecundarias={[imgCeraAguaAmarilla1, imgCeraAguaAmarilla2]}
          hola={SliderData14}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Cera-agua-blanca">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Cera al agua blanca"
          imagenesSecundarias={[imgCeraAguaBlanca1, imgCeraAguaBlanca2]}
          hola={SliderData15}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Cera-agua-negra">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Cera al agua negra"
          imagenesSecundarias={[imgCeraAguaNegra1, imgCeraAguaNegra2]}
          hola={SliderData16}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Cera-agua-roja">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Cera al agua roja"
          imagenesSecundarias={[imgCeraAguaRoja1, imgCeraAguaRoja2]}
          hola={SliderData17}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Saca-oxido">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Saca óxido"
          imagenesSecundarias={[imgSacaOxido1, imgSacaOxido2]}
          hola={SliderData18}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Vaselina-liquida">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Vaselina liquida"
          imagenesSecundarias={[imgVaselinaLiquida1, imgVaselinaLiquida2]}
          hola={SliderData19}
        />
        <Footer />
        <Whatsapp />

      </Route>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));