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
// import imgLimpiaVidrios1 from './imagenes/Limpiadores/limpia-vidrios/DSC_6907.JPG';
// import imgLimpiaVidrios2 from './imagenes/Limpiadores/limpia-vidrios/DSC_7060.JPG';

// import imgRonQuemar1 from './imagenes/Limpiadores/ron-de-quemar/DSC_6885.JPG';
// import imgRonQuemar2 from './imagenes/Limpiadores/ron-de-quemar/DSC_6953.JPG';

// import imgJabonLiquido1 from './imagenes/Detergentes/jabon-liquido/DSC_6910.JPG';
// import imgJabonLiquido2 from './imagenes/Detergentes/jabon-liquido/DSC_7117.JPG';
// import imgJabonLiquido3 from './imagenes/Detergentes/jabon-liquido/DSC_7120.JPG';
// import imgJabonLiquido4 from './imagenes/Detergentes/jabon-liquido/JBLavanda14.JPG';
// import imgJabonLiquido5 from './imagenes/Detergentes/jabon-liquido/JBLimon15.JPG';
// import imgJabonLiquido6 from './imagenes/Detergentes/jabon-liquido/JBNaranja16.JPG';
// import imgJabonLiquido7 from './imagenes/Detergentes/jabon-liquido/JBNaranja16.JPG';
// import imgJabonLiquido8 from './imagenes/Detergentes/jabon-liquido/JBPetalosDeRosa17.JPG';
// import imgJabonLiquido9 from './imagenes/Detergentes/jabon-liquido/JLG_grande18.JPG';

// import imgShampooAlfombra1 from './imagenes/Detergentes/shampoo-para-alfonbras/DSC_6923.JPG';
// import imgShampooAlfombra2 from './imagenes/Detergentes/shampoo-para-alfonbras/DSC_6924.JPG';

// import imgShampooAuto1 from './imagenes/Detergentes/shampoo-para-auto/DSC_6904.JPG';
// import imgShampooAuto2 from './imagenes/Detergentes/shampoo-para-auto/DSC_7082.JPG';

// import imgAguarras1 from './imagenes/Disolventes/aguarras/DSC_6966.JPG';
// import imgAguarras2 from './imagenes/Disolventes/aguarras/DSC_7094.JPG';

// import imgAlcoholIndustrial1 from './imagenes/Disolventes/alcohol-industrial/DSC_693610.jpg';
// import imgAlcoholIndustrial2 from './imagenes/Disolventes/alcohol-industrial/DSC_707532.jpg';
// import imgAlcoholIndustrial3 from './imagenes/Disolventes/alcohol-industrial/alcohol21.jpg';

// import imgBencina1 from './imagenes/Disolventes/bencina/DSC_6976.jpg';
// import imgBencina2 from './imagenes/Disolventes/bencina/DSC_7100.jpg';

// import imgThinnerAcrilico1 from './imagenes/Disolventes/thinner-acrilico/DSC_6951.jpg';
// import imgThinnerAcrilico2 from './imagenes/Disolventes/thinner-acrilico/DSC_6971.jpg';
// import imgThinnerAcrilico3 from './imagenes/Disolventes/thinner-acrilico/DSC_6975.jpg';

// import imgAmbientadorBebe1 from './imagenes/Perfumadores/ambientador-bebe/DSC_6892.jpg';
// import imgAmbientadorBebe2 from './imagenes/Perfumadores/ambientador-bebe/DSC_7085.jpg';

// import imgAmbientadorLavanda1 from './imagenes/Perfumadores/ambientador-lavanda/DSC_6914.jpg';
// import imgAmbientadorLavanda2 from './imagenes/Perfumadores/ambientador-lavanda/DSC_7066.jpg';

// import imgPreservanteMadera1 from './imagenes/Abrillantadores/preservante-para-madera/DSC_6888.jpg';
// import imgPreservanteMadera2 from './imagenes/Abrillantadores/preservante-para-madera/DSC_6949.jpg';

// import imgRenovadorLlanta1 from './imagenes/Abrillantadores/renovador-de-llantas/DSC_6862.jpg';
// import imgRenovadorLlanta2 from './imagenes/Abrillantadores/renovador-de-llantas/DSC_6963.jpg';
// import imgRenovadorLlanta3 from './imagenes/Abrillantadores/renovador-de-llantas/DSC_6965.jpg';

// import imgSacaGrasa1 from './imagenes/Abrillantadores/sacagrasa/DSC_689807.jpg';
// import imgSacaGrasa2 from './imagenes/Abrillantadores/sacagrasa/DSC_690009.jpg';

// import imgCeraAguaAmarilla1 from './imagenes/Ceras/cera-agua-amarilla/DSC_688107.jpg';
// import imgCeraAguaAmarilla2 from './imagenes/Ceras/cera-agua-amarilla/DSC_707913.jpg';

// import imgCeraAguaBlanca1 from './imagenes/Ceras/cera-agua-blanca/DSC_690110.jpg';
// import imgCeraAguaBlanca2 from './imagenes/Ceras/cera-agua-blanca/DSC_707913.jpg';

// import imgCeraAguaNegra1 from './imagenes/Ceras/cera-agua-negra/DSC_686501.jpg';
// import imgCeraAguaNegra2 from './imagenes/Ceras/cera-agua-negra/DSC_707913.jpg';

// import imgCeraAguaRoja1 from './imagenes/Ceras/cera-agua-roja/DSC_687404.jpg';
// import imgCeraAguaRoja2 from './imagenes/Ceras/cera-agua-roja/DSC_707913.jpg';

// import imgSacaOxido1 from './imagenes/Removedores/saca-oxido/DSC_701305.jpg';
// import imgSacaOxido2 from './imagenes/Removedores/saca-oxido/DSC_701507.jpg';

// import imgVaselinaLiquida1 from './imagenes/Removedores/vaselina-liquida/DSC_693001.jpg';
// import imgVaselinaLiquida2 from './imagenes/Removedores/vaselina-liquida/DSC_698203.jpg';

// import imgAcido1 from './imagenes/Desincrustantes/acido/DSC_698416.jpg';
// import imgAcido2 from './imagenes/Desincrustantes/acido/DSC_702225.jpg';
// import imgAcido3 from './imagenes/Desincrustantes/acido/DSC_702528.jpg';
// import imgAcido4 from './imagenes/Desincrustantes/acido/DSC_709136.jpg';

// import imgAguaBaterias1 from './imagenes/Desincrustantes/agua-para-baterias/DSC_696813.jpg';
// import imgAguaBaterias2 from './imagenes/Desincrustantes/agua-para-baterias/DSC_697015.jpg';

// import imgKresso1 from './imagenes/Desincrustantes/kresso/DSC_7063.JPG';
// import imgKresso2 from './imagenes/Desincrustantes/kresso/DSC_710439.jpg';
// import imgKresso3 from './imagenes/Desincrustantes/kresso/DSC_710742.jpg';

// import imgQuitaSarro1 from './imagenes/Desincrustantes/quitasarro/DSC_695709.jpg';
// import imgQuitaSarro2 from './imagenes/Desincrustantes/quitasarro/DSC_699319.jpg';
// import imgQuitaSarro3 from './imagenes/Desincrustantes/quitasarro/DSC_701922.jpg';
// import imgQuitaSarro4 from './imagenes/Desincrustantes/quitasarro/DSC_705431.jpg';

// import imgSiliconaCristal1 from './imagenes/Desincrustantes/silicona-cristal/DSC_692004.jpg';
// import imgSiliconaCristal2 from './imagenes/Desincrustantes/silicona-cristal/DSC_696111.jpg';

// import imgSiliconaTablero1 from './imagenes/Desincrustantes/silicona-para-tablero/DSC_691701.jpg';
// import imgSiliconaTablero2 from './imagenes/Desincrustantes/silicona-para-tablero/DSC_695507.jpg';

// import imgCloro1 from './imagenes/Desinfectantes/cloro/DSC_707257.jpg';
// import imgCloro2 from './imagenes/Desinfectantes/cloro/Cloro0001.jpg';

// import imgLejia1 from './imagenes/Desinfectantes/lejia/DSC_698722.jpg';
// import imgLejia2 from './imagenes/Desinfectantes/lejia/DSC_699025.jpg';
// import imgLejia3 from './imagenes/Desinfectantes/lejia/DSC_708860.jpg';

// import imgLimpiaTodoBebe1 from './imagenes/Desinfectantes/limpia-todo-aroma-bebe/DSC_686801.jpg';
// import imgLimpiaTodoBebe2 from './imagenes/Desinfectantes/limpia-todo-aroma-bebe/DSC_705751.jpg';

// import imgLimpiaTodoLavanda1 from './imagenes/Desinfectantes/limpia-todo-aroma-lavanda/DSC_687703.jpg';
// import imgLimpiaTodoLavanda2 from './imagenes/Desinfectantes/limpia-todo-aroma-lavanda/DSC_705751.jpg';

// import imgPino1 from './imagenes/Desinfectantes/pino/DSC_689506.jpg';
// import imgPino2 from './imagenes/Desinfectantes/pino/DSC_706954.jpg';

// import imgAlcoholIso1 from './imagenes/Desinfectantes/alcohol-isopropilico/DSC_701638.jpg';
// import imgAlcoholIso2 from './imagenes/Desinfectantes/alcohol-isopropilico/DSC_701840.jpg';

// import watchImg300 from './imagenes/imagenPruebaPequena.jpg';
// import watchImg1200 from './imagenes/imagenPruebaGrande.jpg';

import { SliderData1, SliderData10, SliderData11, SliderData12, SliderData2, SliderData3, SliderData4, SliderData5, SliderData6, SliderData7, SliderData8, SliderData9, SliderData101, SliderData102, SliderData103, SliderData104, SliderData105, SliderData106, SliderData107, SliderData108, SliderData109, SliderData110, SliderData201, SliderData202, SliderData203, SliderData204, SliderData205, SliderData206, SliderData207 } from './componentes/SliderData';
import Nosotros from './componentes/Nosotros';
import Servicios from './componentes/Servicios';
import { Helmet } from 'react-helmet';
import ScrollToTop from './componentes/ScrollToTop';
import ContactoPrincipal from './componentes/ContactoPrincipal';
import Productos2 from './componentes/Productos2';

import ReactImageMagnify from 'react-image-magnify';
import Imagenes from './componentes/Imagenes';
import Marcas from './componentes/Marcas';
import Caracteristicas from './componentes/Caracteristicas';
import { Carousel } from 'reactstrap';
import Example from './componentes/CarouselContainer';
import CarouselContainer from './componentes/CarouselContainer';

const App = () => {
  const TITLE = 'Quimica Rodriguez'
  const nombreCategoria1 = "Limpieza y desinfección";
  const nombreCategoria2 = "Disolventes y uso industrial";
  const nombreCategoria3 = "Línea Automotriz";

  // 12 productos
  const nombresProductosCategoria1 = ['Ácido el fuerte', 'Ambientadores', 'Cera al agua', 'Cloro', 'Jabón Líquido', 'Kresso',
    'Lejia', 'Limpiatodo', 'Pino', 'Potente Desinfectante', 'Quita Sarro', 'Saca grasa'];
  // 10 productos
  const nombresProductosCategoria2 = ['Aguarras', 'Alcohol industrial', 'Alcohol isopropilico', 'Alcohol isopropilico 70%', 'Alcohol isopropilico 90%', 'Bencina', 'Preservante para madera',
    'Ron de quemar', 'Saca oxido', 'Thinner acrílico', 'Thinner Standar']
  // 7 productos
  const nombresProductosCategoria3 = ['Agua para baterias', 'Limpia Vidrios', 'Renovador de llanta', 'Shampoo para auto',
    'Silicona para cristal', 'Silicona para cristal Premium', 'Silicona para tablero']

  const rutaWsp = "https://wa.me/51994268798?text=Deseo%20mayor%20información%20";

  const rutaAcidoFuerte1 = "https://drive.google.com/file/d/16uQ0YyWgDzk4fmJt2JDJymLzWi4JIyJK/view?usp=sharing";
  const rutaAcidoFuerte2 = "https://drive.google.com/file/d/1Bk36a-Ve0gj0M8tnbm3znqhHC6ZXAZKQ/view?usp=sharing";
  const rutaAmbientadoresPdf1 = "https://drive.google.com/file/d/1j5MiMaKOwlVwZw4cU77BV6oEQ8QptzBC/view?usp=sharing";
  const rutaCeraAguaPdf1 = "https://drive.google.com/file/d/13FICjyMso7dHOkZ9WChXPFD4stqTgX21/view?usp=sharing";
  const rutaCeraAguaPdf2 = "https://drive.google.com/file/d/1jAaVqe-8HKXAvUTGHee8brQezB5Jf4IU/view?usp=sharing";
  const rutaCloroPdf1 = "https://drive.google.com/file/d/1445lrGhVMOXwV7gFwYqiqA3SmCXQhJ_v/view?usp=sharing";
  const rutaCloroPdf2 = "https://drive.google.com/file/d/1445lrGhVMOXwV7gFwYqiqA3SmCXQhJ_v/view?usp=sharing";
  const rutaLejiaPdf1 = "https://drive.google.com/file/d/1_9K1QklUygg3VeZvk5jyc4Ne8F43DFEG/view?usp=sharing";
  const rutaLejiaPdf2 = "https://drive.google.com/file/d/1TwdUNv8Rv-FqEBAjx2zvWshrFnPiUIiN/view?usp=sharing";
  const rutaLejiaPdf3 = "https://drive.google.com/file/d/1wen8m27eXo3A_INgVvgSxycz1xvu3H-c/view?usp=sharing";
  const rutaJabonLiquidoPdf1 = "https://drive.google.com/file/d/1WoL-vyuvYIvy2bK6OBelHiH9J4HzJ4gI/view?usp=sharing";
  const rutaJabonLiquidoPdf2 = "https://drive.google.com/file/d/1we2XtF8KO3kN9vdBuZRyUobPhT8Brt9N/view?usp=sharing";
  const rutaJabonLiquidoPdf3 = "https://drive.google.com/file/d/1QlQYXHNOAB9ey1f6CZemz8siPtLAj1Vh/view?usp=sharing";
  const rutaKressoPdf1 = "https://drive.google.com/file/d/1TLMx1jVbKdPQlm-8XTUSL6oG7x1KLwub/view?usp=sharing";
  const rutaKressoPdf2 = "https://drive.google.com/file/d/1w0fkstIdYv65ZW3UTcFOi5RLh4WVo3no/view?usp=sharing";
  const rutaLimpiatodoPdf1 = "https://drive.google.com/file/d/1ih0MGeP49pZC_RpUBcWAKOZzJnw325RI/view?usp=sharing";
  const rutaLimpiatodoPdf2 = "https://drive.google.com/file/d/1WebfKCbC9d6yH49uTPNmDZuV8v1U7MPj/view?usp=sharing";
  const rutaPinoPdf1 = "https://drive.google.com/file/d/1tU43CnLnuHjb-mCW-nPTvvLL1VqImgh0/view?usp=sharing";
  const rutaPinoPdf2 = "https://drive.google.com/file/d/1sHPuK28odYcpc2lb3FPlYCpZsgecCmBM/view?usp=sharing";
  const rutaPinoPdf3 = "https://drive.google.com/file/d/1QlQYXHNOAB9ey1f6CZemz8siPtLAj1Vh/view?usp=sharing";
  const rutaPotenteDesinfPdf1 = "https://drive.google.com/file/d/1pHy26SFL1_PAgXyGUSq-m6jtc_nRYay2/view?usp=sharing";
  const rutaQuitaSarroPdf1 = "https://drive.google.com/file/d/1a5eiixx8fpRGX74RCSXbpjsu5KRjTXEs/view?usp=sharing";
  const rutaQuitaSarroPdf2 = "https://drive.google.com/file/d/1lG-sE9gRnDubo7N6dU5LOujd3XCdd_jP/view?usp=sharing";
  const rutaSacaGrasaPdf1 = "https://drive.google.com/file/d/1GZpT301PE2Kqhzpn9Ccdt3zOTkS2UoJ6/view?usp=sharing";
  const rutaSacaGrasaPdf2 = "https://drive.google.com/file/d/1FEQ9VaZeBMBnd9OLtsG6YsqdT76RE1D_/view?usp=sharing";

  const rutaAguarrasPdf1 = "https://drive.google.com/file/d/1jqXqSN-Y9C-dTFgxTka-7Ly1SI6V97uN/view?usp=sharing";
  const rutaAguarrasPdf2 = "https://drive.google.com/file/d/1SPIjCzqOosRL3QN6rWG2-4vGc3CYvGip/view?usp=sharing";
  const rutaAlcoholIndustrialPdf1 = "https://drive.google.com/file/d/1cnO2VOAAtw_mP93N0-xk1aH4AKvge_3V/view?usp=sharing";
  const rutaAlcoholIndustrialPdf2 = "https://drive.google.com/file/d/10g3s_OkQ5AiwP39h24Gxy4rZdawcLubY/view?usp=sharing";
  const rutaAlcoholIsopropiplicoPdf1 = "https://drive.google.com/file/d/1xeme2x7vJTl8Jnno_pH-leWlf8II9zEu/view?usp=sharing";
  const rutaAlcoholIsopropiplicoPdf2 = "https://drive.google.com/file/d/1qf1an1k5XfUOjcjTDcJhUQoWDIBfnkUR/view?usp=sharing";
  const rutaAlcoholIsopropiplicoPdf3 = "https://drive.google.com/file/d/19rIacTacI9ThASeWLqqiUtdL4xF7xU3F/view?usp=sharing";
  const rutaAlcoholIsopropiplicoSetentaPdf1 = "https://drive.google.com/file/d/1CyLWZrh81pWl6f7jkZto-hfOlkP_1y4n/view?usp=sharing";
  const rutaAlcoholIsopropiplicoSetentaPdf2 = "https://drive.google.com/file/d/1wE06u9rnEdJPg_MDEKw1p_E30TLJ7nY1/view?usp=sharing";
  const rutaBencinaPdf1 = "https://drive.google.com/file/d/1TgTxi0HnbGUChNjr22N1bpRNCJ8_vv--/view?usp=sharing";
  const rutaBencinaPdf2 = "https://drive.google.com/file/d/17Nz3Iou1FD95E3zyn39wDrnvvcGqpype/view?usp=sharing";
  const rutaPreservanteMaderaPdf1 = "https://drive.google.com/file/d/1zPyeeip7H0EHpUzPBH5aWKOEU_fbsrcv/view?usp=sharing";
  const rutaPreservanteMaderaPdf2 = "https://drive.google.com/file/d/1c-rH6oLcLuD274kW1tb2snXzt8HxXzEY/view?usp=sharing";
  const rutaRonQuemarPdf1 = "https://drive.google.com/file/d/1nTkfYMM1cVCwCI0iP7Ww13U9T2SwLPfz/view?usp=sharing";
  const rutaRonQuemarPdf2 = "https://drive.google.com/file/d/179iASaQK2ahA0cSgHQLioHzLUuleufhR/view?usp=sharing";
  const rutaSacaOxidoPdf1 = "https://drive.google.com/file/d/1iKSHsKhVFw7dEru7nTJh0TF-j2hiR6KU/view?usp=sharing";
  const rutaSacaOxidoPdf2 = "https://drive.google.com/file/d/10dtIvW8AfKHiiPxh-hjovUNGo6JSMFLR/view?usp=sharing";
  const rutaThinnerAcrilicoPdf1 = "https://drive.google.com/file/d/1rRJMe-xPKsoGmDGxO80GKgiqSkccVxjq/view?usp=sharing"
  const rutaThinnerAcrilicoPdf2 = "https://drive.google.com/file/d/1KLKeRzgnUWfVhEq7DFd4R48yIZX2tDKv/view?usp=sharing"

  const rutaAguaBateriasPdf1 = "https://drive.google.com/file/d/1MtSOz9u-pF1fxksioW9vY4YY6o7DSrEM/view?usp=sharing";
  const rutaAguaBateriasPdf2 = "https://drive.google.com/file/d/1ZekA216URPntE27mb24I-ZsYw2bB0nI-/view?usp=sharing";
  const rutaLimpiaVidrios1 = "https://drive.google.com/file/d/1IMvEv7gUPjJRbJLp6tEzBeKXkW9BdbeJ/view?usp=sharing";
  const rutaLimpiaVidrios2 = "https://drive.google.com/file/d/1f3HEJd-s9Wc4qioZhTrxmiW2MAp4bgAp/view?usp=sharing";
  const rutaRenovadorLlantaPdf1 = "https://drive.google.com/file/d/17A19IEn4dg2LQQaOeC1s3mdfwWdXuZv3/view?usp=sharing";
  const rutaRenovadorLlantaPdf2 = "https://drive.google.com/file/d/16y-8kp5THCI-DCkzIS-lc6a6GzwqW8NA/view?usp=sharing";
  const rutaShampooAutoPdf1 = "https://drive.google.com/file/d/1vNFt9FvkJB90-It0x4daHspyEMiewfAt/view?usp=sharing";
  const rutaShampooAutoPdf2 = "https://drive.google.com/file/d/1vJbe02te5ew-dauvkGKIC8qLccmZMKMS/view?usp=sharing";
  const rutaSiliconaTablerPdf1 = "https://drive.google.com/file/d/1XNdU58v7mEeuNRiRZQl-SyWKYIxlx7bx/view?usp=sharing";
  const rutaSiliconaTablerPdf2 = "https://drive.google.com/file/d/1OGxG08zs-yDEDpCq0nnymnNC-nMzdQmP/view?usp=sharing";
  const rutaSiliconaCristalPdf1 = "https://drive.google.com/file/d/1Tkhdjm8uiIDDN_xmc7TLi4FaAq0S_SXI/view?usp=sharing";
  const rutaSiliconaCristalPdf2 = "https://drive.google.com/file/d/1uknsgyPla7tRqfmWPaMOP8stXCd3bc32/view?usp=sharing";
  const rutaSiliconaCristalPremiumPdf1 = "https://drive.google.com/file/d/1VXlt764ztHm07bq9lJ8Ck0nj-5bNWCCV/view?usp=sharing";
  const rutaSiliconaCristalPremiumPdf2 = "https://drive.google.com/file/d/1QK3sB3J6Uw4eMARR11f7wLPfRD7FotcW/view?usp=sharing";

  const nombreCorreo = "ventas@quimicarodriguez.com";

  return (

    <BrowserRouter>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <ScrollToTop />
      <Route path="/" exact={true}>

        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        {/* <Banner /> */}
        <CarouselContainer />
        <Servicios />
        <Caracteristicas />
        <Marcas />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>
      <Route path="/Nosotros">

        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <Nosotros />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Productos" exact={true}>

        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />

        {/* <Productos /> */}
        <Productos2 nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      <Route path="/Contacto">

        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />

        <ContactoPrincipal rutaWsp={rutaWsp} nombreCorreo={nombreCorreo} />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />

      </Route>
      {/* Categoria 1 */}
      <Route path="/Productos/Acido-el-fuerte" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Ácido el fuerte"
          imagenesSecundarias={[Imagenes.acidoFuerte1, Imagenes.acidoFuerte2, Imagenes.acidoFuerte3, Imagenes.acidoFuerte4, Imagenes.acidoFuerte5, Imagenes.acidoFuerte6]}
          hola={SliderData1}
          tipoProducto="Limpieza y desinfección"
          descripcion="Es un potente limpiador, destruye el sarro, desmancha Y desinfecta, ideal para baños, pisos, inodoros, Elimima bacterias(escherihia, coli, pseudomonas aeruginosa staphylococcus aureus y salmonella sp)."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON Y CILINDRO"
          urlPdf={rutaAcidoFuerte1}
          urlPdf2={rutaAcidoFuerte2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Ambientadores" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Ambientadores"
          imagenesSecundarias={[Imagenes.ambientador1, Imagenes.ambientador2, Imagenes.ambientador3, Imagenes.ambientador4]}
          hola={SliderData2}
          tipoProducto="Limpieza y desinfección"
          descripcion="se utiliza para limpiar todo tipo de superficies y generar un aroma agradable, para obtener una fragancia más duradera aplique sobre superficies absorbentes que no sean afectadas por el agua."
          presentaciones="LITRO, GALON Y BIDON."
          urlPdf={rutaAmbientadoresPdf1}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Cera-al-agua" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Cera al agua"
          imagenesSecundarias={[Imagenes.cera1, Imagenes.cera2, Imagenes.cera3, Imagenes.cera4, Imagenes.cera5]}
          hola={SliderData3}
          tipoProducto="Limpieza y desinfección"
          descripcion="Es una emulsión a base de poliméricas y otras resinas reforzadas con carnauba. este producto está especialmente diseñado para dar brillo en áreas de tráfico pesado, tales como escuelas, salones de clase, vestíbulos de hotel, restaurantes y el hogar."
          presentaciones="GALON Y BIDON."
          urlPdf={rutaCeraAguaPdf1}
          urlPdf2={rutaCeraAguaPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Cloro" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Cloro"
          imagenesSecundarias={[Imagenes.cloro1, Imagenes.cloro2, Imagenes.cloro3]}
          hola={SliderData4}
          tipoProducto="Limpieza y desinfección"
          descripcion="potente blanqueador y desinfectante, No es inflamable, pero se puede descomponer con el calor, al contacto con material férrico o la luz solar."
          presentaciones="LITRO, GALON Y BIDON."
          urlPdf={rutaCloroPdf1}
          urlPdf2={rutaCloroPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Jabon-liquido" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Jabon líquido"
          imagenesSecundarias={[Imagenes.jabon1, Imagenes.jabon2, Imagenes.jabon3, Imagenes.jabon4, Imagenes.jabon5, Imagenes.jabon6, Imagenes.jabon7]}
          hola={SliderData5}
          tipoProducto="Limpieza y desinfección"
          descripcion="El jabón líquido por el tipo de componentes que contiene no genera resequedad piel, mantienen mejor el equilibrio del ph de la piel Y eficaz  bactericida."
          presentaciones="LITRO, FRASCO POR 480 ML, GALON Y BIDON."
          urlPdf={rutaJabonLiquidoPdf1}
          urlPdf2={rutaJabonLiquidoPdf2}
          urlPdf3={rutaJabonLiquidoPdf3}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Kresso" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Kresso"
          imagenesSecundarias={[Imagenes.kresso1, Imagenes.kresso2, Imagenes.kresso3, Imagenes.kresso4, Imagenes.kresso5]}
          hola={SliderData6}
          tipoProducto="Limpieza y desinfección"
          descripcion="Desinfectante para limpieza y desinfección de instalaciones pecuarias, limpieza doméstica, baños públicos, restaurantes, hoteles, hospitales. Uso Industrial, principalmente en pozas de desinfección, granjas, pozos sépticos"
          presentaciones="MEDIO LITRO,  LITRO, GALON Y BIDON."
          urlPdf={rutaKressoPdf1}
          urlPdf2={rutaKressoPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Lejia" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Lejía"
          imagenesSecundarias={[Imagenes.lejia1, Imagenes.lejia2, Imagenes.lejia3, Imagenes.lejia4, Imagenes.lejia5]}
          hola={SliderData7}
          tipoProducto="Limpieza y desinfección"
          descripcion="Potente blanqueador y desinfectante, No es inflamable, pero se puede descomponer con el calor, al contacto con material férrico o la luz solar."
          presentaciones="LITRO, GALON, BIDON."
          urlPdf={rutaLejiaPdf1}
          urlPdf2={rutaLejiaPdf2}
          urlPdf3={rutaLejiaPdf3}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Limpiatodo" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Limpiatodo"
          imagenesSecundarias={[Imagenes.limpiaTodo1, Imagenes.limpiaTodo2, Imagenes.limpiaTodo3, Imagenes.limpiaTodo4, Imagenes.limpiaTodo5]}
          hola={SliderData8}
          tipoProducto="Limpieza y desinfección"
          descripcion="Modo más moderno de limpiar y perfumar cualquier tipo de superficies lavables, en un instante y sin necesidad de enjuagar.  Una pequeña cantidad en un balde con agua, bastan para dejar todo el hogar, oficina o local comercial impecablemente limpios y deliciosamente perfumados."
          presentaciones="LITRO, GALON, BIDON."
          urlPdf={rutaLimpiatodoPdf1}
          urlPdf2={rutaLimpiatodoPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Pino" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Pino"
          imagenesSecundarias={[Imagenes.pino1, Imagenes.pino2, Imagenes.pino3, Imagenes.pino4]}
          hola={SliderData9}
          tipoProducto="Limpieza y desinfección"
          descripcion="Pino Desinfectante y su fórmula mejorada, limpia y desinfecta tu hogar dejando un agradable aroma. Eficaz contra Escherichia coli, Staphylococcus aureus, Salmonella typhimurium."
          presentaciones="GALON Y BIDON."
          urlPdf={rutaPinoPdf1}
          urlPdf2={rutaPinoPdf2}
          urlPdf3={rutaPinoPdf3}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Potente-desinfectante" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Potente Desinfectante"
          imagenesSecundarias={[Imagenes.potenteDesinfectante1, Imagenes.potenteDesinfectante2, Imagenes.potenteDesinfectante3]}
          hola={SliderData10}
          tipoProducto="Limpieza y desinfección"
          descripcion="Es un potente desinfectante formulado a base de amonio cuaternario de 5ta generación y biguanidina polimérica los cuales ofrecen acción germicida frente a un amplio espectro de bacteria gram positivas y gram negativas, hongos y virus."
          presentaciones="GALON."
          urlPdf={rutaPotenteDesinfPdf1}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Quita-sarro" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Quita Sarro"
          imagenesSecundarias={[Imagenes.quitaSarro1, Imagenes.quitaSarro2, Imagenes.quitaSarro3, Imagenes.quitaSarro4, Imagenes.quitaSarro5]}
          hola={SliderData11}
          tipoProducto="Limpieza y desinfección"
          descripcion="Es un potente limpiador, destruye el sarro, desmancha Y desinfecta, ideal para baños, pisos, inodoros. Elimima bacterias(escherihia, coli, pseudomonas aeruginosa staphylococcus aureus y salmonella sp)."
          presentaciones="GALON."
          urlPdf={rutaQuitaSarroPdf1}
          urlPdf2={rutaQuitaSarroPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Saca-grasa" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3}
        />
        <ProductoDetalle tituloProductoDetalle="Saca Grasa"
          imagenesSecundarias={[Imagenes.sacaGrasa1, Imagenes.sacaGrasa2]}
          hola={SliderData12}
          tipoProducto="Limpieza y desinfección"
          descripcion="Anti-grasa máximo poder desengrasante, en cocina, microondas, electrodomésticos. Elimina fácilmente la grasa sin restregar, ni enjuagar. Deja la superficie limpia y con un agradable aroma."
          presentaciones="LITRO Y GALON."
          urlPdf={rutaSacaGrasaPdf1}
          urlPdf2={rutaSacaGrasaPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>


      {/* Categoria 2 */}

      <Route path="/Productos/Aguarras" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />

        <ProductoDetalle tituloProductoDetalle="Aguarras"
          imagenesSecundarias={[Imagenes.aguarras1, Imagenes.aguarras2, Imagenes.aguarras3, Imagenes.aguarras4]}
          hola={SliderData101}
          tipoProducto="Disolventes y uso industrial"
          descripcion="Disolvente a base de hidrocarburos alifáticos desaromatizados y terpenos. Dilución y limpieza de pinturas sintéticas."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON."
          urlPdf={rutaAguarrasPdf1}
          urlPdf2={rutaAguarrasPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Alcohol-industrial" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Alcohol industrial"
          imagenesSecundarias={[Imagenes.alcoholInd1, Imagenes.alcoholInd2, Imagenes.alcoholInd3, Imagenes.alcoholInd4]}
          hola={SliderData102}
          tipoProducto="Disolventes y uso industrial"
          descripcion="Para usos industriales, como solventes, anticongelantes, agentes de extracción y como intermedio en la síntesis de otros productos orgánicos. El término involucra el alcohol etílico obtenido por fermentación o síntesis química, con un amplio rango de impurezas comúnmente también se le denomina alcohol etílico de segunda o cabezas y colas."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON Y CILINDRO."
          urlPdf={rutaAlcoholIndustrialPdf1}
          urlPdf2={rutaAlcoholIndustrialPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Alcohol-isopropilico" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Alcohol Isopropilico"
          imagenesSecundarias={[Imagenes.alcoholIso1, Imagenes.alcoholIso2, Imagenes.alcoholIso3, Imagenes.alcoholIso4]}
          hola={SliderData103}
          tipoProducto="Disolventes y uso industrial"
          descripcion="Para usos de laboratorio, análisis, investigación y química fina. Tambien de uso en desinfeccion al tener una concentracion mas baja."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON Y CILINDRO."
          urlPdf={rutaAlcoholIsopropiplicoPdf1}
          urlPdf2={rutaAlcoholIsopropiplicoPdf2}
          urlPdf3={rutaAlcoholIsopropiplicoPdf3}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Alcohol-isopropilico-70" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Alcohol Isopropilico 70%"
          imagenesSecundarias={[Imagenes.alcoholIsoSetenta1]}
          hola={SliderData104}
          tipoProducto="Disolventes y uso industrial"
          descripcion="Para usos de laboratorio, análisis, investigación y química fina. Tambien de uso en desinfeccion al tener una concentracion mas baja. "
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON Y CILINDRO."
          urlPdf={rutaAlcoholIsopropiplicoSetentaPdf1}
          urlPdf2={rutaAlcoholIsopropiplicoSetentaPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Alcohol-isopropilico-90" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Alcohol Isopropilico 70%"
          imagenesSecundarias={[Imagenes.alcoholIsoNoventa1, Imagenes.alcoholIsoNoventa2, Imagenes.alcoholIsoNoventa3, Imagenes.alcoholIsoNoventa4]}
          hola={SliderData105}
          tipoProducto="Disolventes y uso industrial"
          descripcion="Para usos de laboratorio, análisis, investigación y química fina. almacenar en  Recipientes bien cerrados. En local bien ventilado. Alejado de fuentes de ignición y Calor. Temperatura ambiente. No almacenar en recipientes de metales ligeros."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON Y CILINDRO."
          urlPdf={rutaAlcoholIsopropiplicoPdf1}
          urlPdf2={rutaAlcoholIsopropiplicoPdf2}
          urlPdf3={rutaAlcoholIsopropiplicoPdf3}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Bencina" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Bencina"
          imagenesSecundarias={[Imagenes.bencina1, Imagenes.bencina2, Imagenes.bencina3, Imagenes.bencina4]}
          hola={SliderData106}
          tipoProducto="Disolventes y uso industrial"
          descripcion="Líquido claro o débilmente coloreado. Mezcla de hidrocarburos del petróleo. Su uso principal está en actividades de limpieza y desengrasado. En la industria de pinturas se usa como componente de diluyentes."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON Y CILINDRO."
          urlPdf={rutaBencinaPdf1}
          urlPdf2={rutaBencinaPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Preservante-para-madera" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Preservante para madera"
          imagenesSecundarias={[Imagenes.preservanteMadera1, Imagenes.preservanteMadera2, Imagenes.preservanteMadera3]}
          hola={SliderData107}
          tipoProducto="Disolventes y uso industrial"
          descripcion="Es un protector y repelente de insectos como el comején que atacan la madera y aglomerados, desarrollado con ingredientes activos que además previenen el crecimiento de hongos, ofreciendo una protección de larga duración. Mantienen estable la forma de la madera porque no transfiere humedad."
          presentaciones="LITRO, GALON."
          urlPdf={rutaPreservanteMaderaPdf1}
          urlPdf2={rutaPreservanteMaderaPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>
      <Route path="/Productos/Ron-de-quemar" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Ron de quemar"
          imagenesSecundarias={[Imagenes.ron1, Imagenes.ron2, Imagenes.ron3, Imagenes.ron4]}
          hola={SliderData108}
          tipoProducto="Disolventes y uso industrial"
          descripcion="Líquido azulado y volátil, de olor etéreo y sabor picante, que tiene aplicaciones en la industria como disolvente para lacas, barnices, perfumes; como medio para reacciones químicas."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON Y CILINDRO"
          urlPdf={rutaRonQuemarPdf1}
          urlPdf2={rutaRonQuemarPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>
      <Route path="/Productos/Saca-oxido" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Saca óxido"
          imagenesSecundarias={[Imagenes.sacaOxido1, Imagenes.sacaOxido2]}
          hola={SliderData109}
          tipoProducto="Disolventes y uso industrial"
          descripcion="Excelente producto para remover el óxido biodegradable, duro con el óxido suave con el metal."
          presentaciones="GALON."
          urlPdf={rutaSacaOxidoPdf1}
          urlPdf2={rutaSacaOxidoPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>
      <Route path="/Productos/Thinner-acrilico" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Thinner acrílico"
          imagenesSecundarias={[Imagenes.thinner1, Imagenes.thinner2, Imagenes.thinner3]}
          hola={SliderData110}
          tipoProducto="Disolventes y uso industrial"
          descripcion="Liquido combustible puede acumular cargas estáticas. El vapor es más pesado que el aire y puede dispersarse distancias largas y acumularse en zonas bajas alta mente inflamable. uso prinipal como disolvente de pinturas esmalte, al duco."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON Y CILINDRO."
          urlPdf={rutaThinnerAcrilicoPdf1}
          urlPdf2={rutaThinnerAcrilicoPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      {/*----- Fin de Categoria 2 ----*/}

      {/* Categoria 3 */}

      <Route path="/Productos/Agua-para-baterias" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Agua para baterias"
          imagenesSecundarias={[Imagenes.aguaBateria1, Imagenes.aguaBateria2]}
          hola={SliderData201}
          tipoProducto="Línea Automotriz"
          descripcion="Es un producto que resulta de un eficiente tratamiento químico que elimina el contenido de minerales e impurezas. Alto grado de pureza obtenido mediante el proceso de desmineralización. Baja conductividad, por lo cual es aplicable en soluciones electrolíticas de su batería."
          presentaciones="GALON, BIDON."
          urlPdf={rutaAguaBateriasPdf1}
          urlPdf2={rutaAguaBateriasPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Limpia-vidrios" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Limpia vidrios"
          imagenesSecundarias={[Imagenes.limpiaVidrios1, Imagenes.limpiaVidrios2, Imagenes.limpiaVidrios3, Imagenes.limpiaVidrios4]}
          hola={SliderData202}
          tipoProducto="Línea Automotriz"
          descripcion="De forma segura limpie sus cristales y vidrios de su hogar e industria. Elimine la grasa,
          tizne, y demás agentes que opacan el brillo. Da transparencia de manera fácil, rápida y con un secado instantáneo evitando la alta humedad. Protege la adherencia de nuevas suciedades. "
          presentaciones="LITRO, GALON, BIDON."
          urlPdf={rutaLimpiaVidrios1}
          urlPdf2={rutaLimpiaVidrios2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Renovador-de-llantas" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Limpia vidrios"
          imagenesSecundarias={[Imagenes.renovadorLlantas1, Imagenes.renovadorLlantas2, Imagenes.renovadorLlantas3, Imagenes.renovadorLlantas4]}
          hola={SliderData203}
          tipoProducto="Línea Automotriz"
          descripcion="Limpiador y renovador de llantas, No posee ingredientes de riesgo. Lave y limpie la superficie de la llanta, aplique en la parte lateral de las llantas esparcirlo de forma homogénea, evitando aplicarlo en zonas de contacto con el suelo, frote con un paño limpio y seco."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON."
          urlPdf={rutaRenovadorLlantaPdf1}
          urlPdf2={rutaRenovadorLlantaPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Shampoo-para-auto" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Shampoo para auto"
          imagenesSecundarias={[Imagenes.shampooAuto1, Imagenes.shampooAuto2, Imagenes.shampooAuto3]}
          hola={SliderData204}
          tipoProducto="Línea Automotriz"
          descripcion="Limpia todo el polvo, suciedad acumulado en el vehículo. Se recomienda colocar directo el producto o combinarlo con agua de tal manera que frote con el paño y remueva las impurezas. enjuague el vehículo con abundante agua removiendo los restos del producto. "
          presentaciones="GALON, BIDON."
          urlPdf={rutaShampooAutoPdf1}
          urlPdf2={rutaShampooAutoPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Silicona-para-cristal" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Silicona para cristal"
          imagenesSecundarias={[Imagenes.siliconaCristal1, Imagenes.siliconaCristal2, Imagenes.siliconaCristal3]}
          hola={SliderData205}
          tipoProducto="Línea Automotriz"
          descripcion="Producto formulado específicamente para remover la suciedad, dar brillo, proteger y humectar la superficie donde es aplicado."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON."
          urlPdf={rutaSiliconaCristalPdf1}
          urlPdf2={rutaSiliconaCristalPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Silicona-para-cristal-premium" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Silicona para cristal premium"
          imagenesSecundarias={[Imagenes.siliconaCristalPremium1]}
          hola={SliderData206}
          tipoProducto="Línea Automotriz"
          descripcion="Es un producto versátil, útil tanto para el cuidado y mantenimiento de su vehículo como en el hogar. Por su alto contenido en silicona limpia, protege y lubrica a la vez que proporciona el brillo que destaca a este producto."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON."
          urlPdf={rutaSiliconaCristalPremiumPdf1}
          urlPdf2={rutaSiliconaCristalPremiumPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>

      <Route path="/Productos/Silicona-para-tablero" exact={true}>
        <Header nombreCategoria1={nombreCategoria1} nombreCategoria2={nombreCategoria2} nombreCategoria3={nombreCategoria3}
          nombresProductosCategoria1={nombresProductosCategoria1} nombresProductosCategoria2={nombresProductosCategoria2} nombresProductosCategoria3={nombresProductosCategoria3} />
        <ProductoDetalle tituloProductoDetalle="Silicona para tablero"
          imagenesSecundarias={[Imagenes.siliconaTablero1, Imagenes.siliconaTablero2, Imagenes.siliconaTablero3]}
          hola={SliderData207}
          tipoProducto="Línea Automotriz"
          descripcion="La formula de nuestra silicona perfumada penetra y se adhiere a la superficie para mejorar la apariencia del vinílico, caucho, plástico, renueva el lustre y remueva la suciedad. Aplíquese en tableros de autos, equipos de sonido, computadoras y otros."
          presentaciones="MEDIO LITRO, LITRO, GALON, BIDON."
          urlPdf={rutaSiliconaTablerPdf1}
          urlPdf2={rutaSiliconaTablerPdf2}
        />
        <Footer nombreCorreo={nombreCorreo} />
        <Whatsapp rutaWsp={rutaWsp} />
      </Route>
      {/*----- Fin de Categoria 3 ----*/}

    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));