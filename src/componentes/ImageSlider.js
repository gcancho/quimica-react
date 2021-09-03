import React, { useState } from 'react';
import { SliderData1, SliderData2 } from './SliderData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ReactImageMagnify from 'react-image-magnify';

import watchImg300 from './../imagenes/imagenPruebaPequena.jpg';
import watchImg1200 from './../imagenes/imagenPruebaGrande.jpg';
import Imagenes from './Imagenes';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides, tipoSlide }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className='slider'>
        <FontAwesomeIcon icon={faAngleLeft} className='left-arrow' onClick={prevSlide} />
        <FontAwesomeIcon icon={faAngleRight} className='right-arrow' onClick={nextSlide} />
        {tipoSlide.map((slide, index) => {
          return (
            <>
              {/* <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                  <img src={slide.image} alt='travel image' className='image' />
                )}
              </div> */}
              {/* <div>
                {index === current && (
                  <img src={slide.image} alt='travel image' className='image' />
                )}
              </div> */}
              <div className="libreria" style={{ width: '480px', height: '720px' }} className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                  <ReactImageMagnify {...{

                    smallImage: {
                      alt: 'Wristwatch by Ted Baker London',
                      isFluidWidth: true,
                      src: slide.image
                    },
                    largeImage: {
                      src: slide.image,
                      width: 1200,
                      height: 1800
                    }
                  }

                  } />
                )}

              </div>

            </>
          );
        })}
      </section>
      {/* <div style={{ background: 'red', width: '80px', height: '80px' }}></div> */}


    </>
  );
};

export default ImageSlider;
