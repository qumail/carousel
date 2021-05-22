import React, { useState } from 'react';
import '../components/Carousel.css';

const Carousel = () => {
    const [slideOne, setSlideOne] = useState(Boolean);
    const [slideTwo, setSlideTwo] = useState(Boolean);
    const [slideThree, setSlideThree] = useState(Boolean);
    const [display, setDisplay] = useState('block');


   const slideA = () => {
    setDisplay('block');
        setSlideOne(true);
        setSlideTwo(false);
        setSlideThree(false);
   };

   const slideB = () => {
   setDisplay('none');
    setSlideTwo(true);
    setSlideOne(false);
    setSlideThree(false);
}
const slideC = () => {
    setDisplay('none');
    setSlideThree(true);
    setSlideTwo(false);
    setSlideOne(false);
}
    return (
        <>
        <div className="slideshow-container">
            <div className={slideOne ? 'showSlide fade' : 'mySlides'} style={{display: `${display}`}}>
                <div class="numbertext">1 / 3</div>
                  <img src="/images/eagle.jpg" style={{width: '100%'}} alt=""/>
                <div className="text">Eagle</div>
           </div>

          <div className={slideTwo ? 'showSlide fade' : 'mySlides'}>
            <div className="numbertext">2 / 3</div>
            <img src="/images/magic.jpg"  style={{width: '100%'}} alt="" />
            <div className="text">Magic Hour</div>
          </div>

           <div className={slideThree ? 'showSlide fade' : 'mySlides'}>
             <div className="numbertext">3 / 3</div>
             <img src="/images/tokyo.jpg" style={{width: '100%'}} alt=""/>
             <div className="text">Tokyo</div>
           </div>
        </div>

           <div style={{textAlign: 'center', marginTop: '12px'}}>
             <span className="dot" onClick={() => {slideA()}}></span>
             <span className="dot" onClick={() => {slideB()}}></span>
             <span className="dot" onClick={() => {slideC()}}></span>
           </div>
     </>
    );
}

export default Carousel;