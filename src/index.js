import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Productos from './componentes/Productos';
import Banner from './componentes/Banner';
import './normalize.css';
import './index.css';
import Whatsapp from './componentes/Whatsapp';
import Experiencia from './componentes/Experiencia';
import Contacto from './componentes/Contacto';


const App = () =>{
  return(
    <>
      <Header/>
      <Banner/>
      <Experiencia/>
      <Productos/>
      <Contacto/>      
      <Footer/>
      <Whatsapp/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));