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

import { SliderData1, SliderData2, SliderData3, SliderData4, SliderData5 } from './componentes/SliderData';
import Nosotros from './componentes/Nosotros';
import Servicios from './componentes/Servicios';


const App = () => {
  return (
    <BrowserRouter>

      <Route path="/" exact={true}>

        <Header />
        <Banner />
        <Servicios/>
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
          imagenesSecundarias={[imgJabonLiquido1, imgJabonLiquido2,imgJabonLiquido3,imgJabonLiquido4,imgJabonLiquido5,imgJabonLiquido6,imgJabonLiquido7,imgJabonLiquido8,imgJabonLiquido9]}
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
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));