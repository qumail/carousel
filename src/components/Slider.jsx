import React, {useState,useEffect } from 'react';

const Slider = ( props ) => {
    const [current, setCurrent] = useState(0);
    const length = props.children.length;
    const interval = 3000;
    console.log(interval);

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


   

   


    return (
        <>
           <div style={{textAlign: 'center'}}>
               {props.children.map((item, index) => (
                   <div>{index === current && item}</div>
               ))}
           </div>
        </>
    );
};

export default Slider;