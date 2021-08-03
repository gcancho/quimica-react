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
import imgPrincipalLimpiaVidrios from './imagenes/Limpiadores/limpia-vidrios/DSC_6908.JPG';
import imgSecundariaLimpiaVidrios1 from './imagenes/Limpiadores/limpia-vidrios/DSC_6909.JPG';
import imgSecundariaLimpiaVidrios2 from './imagenes/Limpiadores/limpia-vidrios/DSC_7060.JPG';
import imgSecundariaLimpiaVidrios3 from './imagenes/Limpiadores/limpia-vidrios/DSC_7061.JPG';

import imgPrincipalRonQuemar from './imagenes/Limpiadores/ron-de-quemar/DSC_6885.JPG';
import imgSecundariaRonQuemar1 from './imagenes/Limpiadores/ron-de-quemar/DSC_6886.JPG';
import imgSecundariaRonQuemar2 from './imagenes/Limpiadores/ron-de-quemar/DSC_6953.JPG';
import imgSecundariaRonQuemar3 from './imagenes/Limpiadores/ron-de-quemar/DSC_6954.JPG';

import imgPrincipalJabonLiquido from './imagenes/Detergentes/jabon-liquido/DSC_6910.JPG';
import imgSecundariaJabonLiquido1 from './imagenes/Detergentes/jabon-liquido/DSC_6911.JPG';
import imgSecundariaJabonLiquido2 from './imagenes/Detergentes/jabon-liquido/DSC_7117.JPG';
import imgSecundariaJabonLiquido3 from './imagenes/Detergentes/jabon-liquido/DSC_7119.JPG';

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

        </Route>
        <Route path="/Nosotros">

          <Header />
          <h2>Nosotros</h2>
          <Footer />
          <Whatsapp />

        </Route>
        <Route path="/Limpia-vidrios">

          <Header />
          <ProductoDetalle tituloProductoDetalle="Limpia vidrios"
            imagenPrincipal={imgPrincipalLimpiaVidrios}
            imagenesSecundarias={[imgSecundariaLimpiaVidrios1,imgSecundariaLimpiaVidrios2,imgSecundariaLimpiaVidrios3]}/>
          <Footer />
          <Whatsapp />

        </Route>
        <Route path="/Ron-de-quemar">

          <Header />
          <ProductoDetalle tituloProductoDetalle="Ron de quemar"
            imagenPrincipal={imgPrincipalRonQuemar}
            imagenesSecundarias={[imgSecundariaRonQuemar1,imgSecundariaRonQuemar2,imgSecundariaRonQuemar3]}/>
          <Footer />
          <Whatsapp />

        </Route>
        <Route path="/Jabon-liquido">

          <Header />
          <ProductoDetalle tituloProductoDetalle="Jabón Líquido"
            imagenPrincipal={imgPrincipalJabonLiquido}
            imagenesSecundarias={[imgSecundariaJabonLiquido1,imgSecundariaJabonLiquido2,imgSecundariaJabonLiquido3]}/>
          <Footer />
          <Whatsapp />

        </Route>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));