import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Productos from './componentes/Productos';
import Banner from './componentes/Banner';
import './normalize.css';
import './scss/index.scss';
import Whatsapp from './componentes/Whatsapp';
import Experiencia from './componentes/Experiencia';
import Contacto from './componentes/Contacto';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductoDetalle from './componentes/ProductoDetalle';
// Rutas imagenes
import imgLimpiaVidrios1 from './imagenes/Limpiadores/limpia-vidrios/DSC_6908.JPG';
import imgLimpiaVidrios2 from './imagenes/Limpiadores/limpia-vidrios/DSC_6909.JPG';
import imgLimpiaVidrios3 from './imagenes/Limpiadores/limpia-vidrios/DSC_7060.JPG';
import imgLimpiaVidrios4 from './imagenes/Limpiadores/limpia-vidrios/DSC_7061.JPG';

import imgRonQuemar1 from './imagenes/Limpiadores/ron-de-quemar/DSC_6885.JPG';
import imgRonQuemar2 from './imagenes/Limpiadores/ron-de-quemar/DSC_6886.JPG';
import imgRonQuemar3 from './imagenes/Limpiadores/ron-de-quemar/DSC_6953.JPG';
import imgRonQuemar4 from './imagenes/Limpiadores/ron-de-quemar/DSC_6954.JPG';

import imgJabonLiquido1 from './imagenes/Detergentes/jabon-liquido/DSC_6910.JPG';
import imgJabonLiquido2 from './imagenes/Detergentes/jabon-liquido/DSC_6911.JPG';
import imgJabonLiquido3 from './imagenes/Detergentes/jabon-liquido/DSC_7117.JPG';
import imgJabonLiquido4 from './imagenes/Detergentes/jabon-liquido/DSC_7119.JPG';

import ImageSlider from './componentes/ImageSlider';
import { SliderData1, SliderData2 } from './componentes/SliderData';

const App = () => {
  return (
    <BrowserRouter>

      <Route path="/" exact={true}>

        <Header />
        <Banner />
        <Experiencia />
        <Productos />
        <Contacto />
        <Footer />
        <Whatsapp />
        {/* <ImageSlider slides={SliderData}/> */}
      </Route>
      <Route path="/Nosotros">

        <Header />
        <h2>Nosotros</h2>
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
          imagenesSecundarias={[imgLimpiaVidrios1, imgLimpiaVidrios2, imgLimpiaVidrios3, imgLimpiaVidrios4]}
          hola={SliderData1}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Ron-de-quemar">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Ron de quemar"
          imagenesSecundarias={[imgRonQuemar1, imgRonQuemar2, imgRonQuemar3, imgRonQuemar4]}
          hola={SliderData2}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Jabon-liquido">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Jabón Líquido"
          imagenesSecundarias={[imgRonQuemar1, imgRonQuemar2, imgRonQuemar3, imgRonQuemar4]} />
        <Footer />
        <Whatsapp />

      </Route>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));