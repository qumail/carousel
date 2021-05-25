import React, { useState, useEffect } from 'react';
import { Slides } from './Slides';
import './Carousel.css';


const Slideshow = ({ slides, interval=3000 }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;


  useEffect(() => {
        const loop = setInterval(()=> {
            if(current === length - 1) {
                setCurrent(0);
            } else {
                setCurrent(current + 1);
            }
        }, interval);
        return () => clearInterval(loop);
  }, [length, current, interval]);

 

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
      <>
    <section className='slider'>
      {Slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='image' />
            )}
          </div>
        );
      })}
    </section>
          <div style={{textAlign: 'center', marginTop: '12px', paddingBottom: '15px'}}>
             {Slides.map(( item, index) => {
                 return (<span className="dot" style={ index  === current ? {backgroundColor: '#2e2c2c'} : undefined}></span>)
             })}
         </div>
    </>
    
  );
};

export default Slideshow;