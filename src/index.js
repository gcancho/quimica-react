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
          <ProductoDetalle />
          <Footer />
          <Whatsapp />

        </Route>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));