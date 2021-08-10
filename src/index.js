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
import imgCloro2 from './imagenes/Desinfectantes/cloro/DSC_709763.jpg';

import imgLejia1 from './imagenes/Desinfectantes/lejia/DSC_698722.jpg';
import imgLejia2 from './imagenes/Desinfectantes/lejia/DSC_699025.jpg';
import imgLejia3 from './imagenes/Desinfectantes/lejia/DSC_708860.jpg';

import imgLimpiaTodoBebe1 from './imagenes/Desinfectantes/limpia-todo-aroma-bebe/DSC_686801.jpg';
import imgLimpiaTodoBebe2 from './imagenes/Desinfectantes/limpia-todo-aroma-bebe/DSC_705751.jpg';

import imgLimpiaTodoLavanda1 from './imagenes/Desinfectantes/limpia-todo-aroma-lavanda/DSC_687703.jpg';
import imgLimpiaTodoLavanda2 from './imagenes/Desinfectantes/limpia-todo-aroma-lavanda/DSC_705751.jpg';

import imgPino1 from './imagenes/Desinfectantes/pino/DSC_689506.jpg';
import imgPino2 from './imagenes/Desinfectantes/pino/DSC_706954.jpg';

import imgPotenteDesinfectante1 from './imagenes/Desinfectantes/potente-desinfectante/DSC_701638.jpg';
import imgPotenteDesinfectante2 from './imagenes/Desinfectantes/potente-desinfectante/DSC_701840.jpg';



import { SliderData1, SliderData10, SliderData11, SliderData12, SliderData13, SliderData14, SliderData15, SliderData16, SliderData17, SliderData18, SliderData19, SliderData20, SliderData21, SliderData22, SliderData23, SliderData24, SliderData25, SliderData26, SliderData27, SliderData28, SliderData29, SliderData30, SliderData31, SliderData2, SliderData3, SliderData4, SliderData5, SliderData6, SliderData7, SliderData8, SliderData9 } from './componentes/SliderData';
import Nosotros from './componentes/Nosotros';
import Servicios from './componentes/Servicios';
import { Helmet } from 'react-helmet';
import ScrollToTop from './componentes/ScrollToTop';



const App = () => {
  const TITLE = 'Quimica Rodriguez'

  return (

    <BrowserRouter>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <ScrollToTop/>
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
          urlPdf="https://drive.google.com/file/d/1IMvEv7gUPjJRbJLp6tEzBeKXkW9BdbeJ/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Ron-de-quemar">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Ron de quemar"
          imagenesSecundarias={[imgRonQuemar1, imgRonQuemar2]}
          hola={SliderData2}
          urlPdf="https://drive.google.com/file/d/1nTkfYMM1cVCwCI0iP7Ww13U9T2SwLPfz/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Jabon-liquido">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Jabón Líquido"
          imagenesSecundarias={[imgJabonLiquido1, imgJabonLiquido2, imgJabonLiquido3, imgJabonLiquido4, imgJabonLiquido5, imgJabonLiquido6, imgJabonLiquido7, imgJabonLiquido8, imgJabonLiquido9]}
          hola={SliderData3}
          urlPdf="https://drive.google.com/file/d/1WoL-vyuvYIvy2bK6OBelHiH9J4HzJ4gI/view?usp=sharing"
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
          urlPdf="https://drive.google.com/file/d/1jqXqSN-Y9C-dTFgxTka-7Ly1SI6V97uN/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Bencina">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Bencina"
          imagenesSecundarias={[imgBencina1, imgBencina2]}
          hola={SliderData7}
          urlPdf="https://drive.google.com/file/d/1TgTxi0HnbGUChNjr22N1bpRNCJ8_vv--/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Thinner-acrilico">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Thinner acrílico"
          imagenesSecundarias={[imgThinnerAcrilico1, imgThinnerAcrilico2, imgThinnerAcrilico3]}
          hola={SliderData8}
          urlPdf="https://drive.google.com/file/d/1rRJMe-xPKsoGmDGxO80GKgiqSkccVxjq/view?usp=sharing"
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
          urlPdf="https://drive.google.com/file/d/1zPyeeip7H0EHpUzPBH5aWKOEU_fbsrcv/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Renovador-de-llantas">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Renovador de llantas"
          imagenesSecundarias={[imgRenovadorLlanta1, imgRenovadorLlanta2, imgRenovadorLlanta3]}
          hola={SliderData12}
          urlPdf="https://drive.google.com/file/d/17A19IEn4dg2LQQaOeC1s3mdfwWdXuZv3/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Saca-grasa">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Saca grasa"
          imagenesSecundarias={[imgSacaGrasa1, imgSacaGrasa2]}
          hola={SliderData13}
          urlPdf="https://drive.google.com/file/d/1GZpT301PE2Kqhzpn9Ccdt3zOTkS2UoJ6/view?usp=sharing"
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
          urlPdf="https://drive.google.com/file/d/13FICjyMso7dHOkZ9WChXPFD4stqTgX21/view?usp=sharing"
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
          urlPdf="https://drive.google.com/file/d/18AElKiKcimwht1ChZfM0yzB0OT_bR2Uj/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Acidos">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Acidos"
          imagenesSecundarias={[imgAcido1, imgAcido2, imgAcido3, imgAcido4]}
          hola={SliderData20}
          urlPdf="https://drive.google.com/file/d/16uQ0YyWgDzk4fmJt2JDJymLzWi4JIyJK/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Agua-para-baterias">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Agua para baterias"
          imagenesSecundarias={[imgAguaBaterias1, imgAguaBaterias2]}
          hola={SliderData21}
          urlPdf="https://drive.google.com/file/d/1MtSOz9u-pF1fxksioW9vY4YY6o7DSrEM/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Kresso">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Kresso"
          imagenesSecundarias={[imgKresso1, imgKresso2, imgKresso3]}
          hola={SliderData22}
          urlPdf="https://drive.google.com/file/d/1TLMx1jVbKdPQlm-8XTUSL6oG7x1KLwub/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Quita-sarro">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Quita sarro"
          imagenesSecundarias={[imgQuitaSarro1, imgQuitaSarro2, imgQuitaSarro3, imgQuitaSarro4]}
          hola={SliderData23}
          urlPdf="https://drive.google.com/file/d/1a5eiixx8fpRGX74RCSXbpjsu5KRjTXEs/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Silicona-para-cristal">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Silicona cristal"
          imagenesSecundarias={[imgSiliconaCristal1, imgSiliconaCristal2]}
          hola={SliderData24}
          urlPdf="https://drive.google.com/file/d/1Tkhdjm8uiIDDN_xmc7TLi4FaAq0S_SXI/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Silicona-para-tablero">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Silicona cristal"
          imagenesSecundarias={[imgSiliconaTablero1, imgSiliconaTablero2]}
          hola={SliderData25}
          urlPdf="https://drive.google.com/file/d/1XNdU58v7mEeuNRiRZQl-SyWKYIxlx7bx/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Cloro">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Cloro"
          imagenesSecundarias={[imgCloro1, imgCloro2]}
          hola={SliderData26}
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Lejia">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Lejia"
          imagenesSecundarias={[imgLejia1, imgLejia2, imgLejia3]}
          hola={SliderData27}
          urlPdf="https://drive.google.com/file/d/1_9K1QklUygg3VeZvk5jyc4Ne8F43DFEG/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Limpia-todo-aroma-bebe">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Limpiatodo aroma bebe"
          imagenesSecundarias={[imgLimpiaTodoBebe1, imgLimpiaTodoBebe2]}
          hola={SliderData28}
          urlPdf="https://drive.google.com/file/d/1ih0MGeP49pZC_RpUBcWAKOZzJnw325RI/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Limpia-todo-aroma-lavanda">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Limpiatodo aroma lavanda"
          imagenesSecundarias={[imgLimpiaTodoLavanda1, imgLimpiaTodoLavanda2]}
          hola={SliderData29}
          urlPdf="https://drive.google.com/file/d/1ih0MGeP49pZC_RpUBcWAKOZzJnw325RI/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Pino">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Pino"
          imagenesSecundarias={[imgPino1, imgPino2]}
          hola={SliderData30}
          urlPdf="https://drive.google.com/file/d/1tU43CnLnuHjb-mCW-nPTvvLL1VqImgh0/view?usp=sharing"
        />
        <Footer />
        <Whatsapp />

      </Route>
      <Route path="/Potente-desinfectante">

        <Header />
        <ProductoDetalle tituloProductoDetalle="Potente desinfectante"
          imagenesSecundarias={[imgPotenteDesinfectante1, imgPotenteDesinfectante2]}
          hola={SliderData31}
        />
        <Footer />
        <Whatsapp />

      </Route>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));