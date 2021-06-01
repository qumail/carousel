import './App.css';
//import { Slides } from './components/Slides';
//import Slideshow from './components/Slideshow';
import Slider from './components/Slider';


/// we can use array of images for slideshow, if we have to use Slideshow components in multiple pages

function App() {
  return (
    <>
    <h2 style={{fontSize: '42px', textAlign: 'center'}}>Slideshow Gallery</h2>
    <Slider>
    <img src="/images/eagle.jpg" style={{width: '60%'}} alt=""/>
      <h2 style={{color: 'red', position: 'relative', top: '5em'}}>United States of America</h2>
    <img src="/images/tokyo.jpg" style={{width: '60%'}} alt=""/>
    </Slider>
    </>
  );
}
// Add Prop types to to check the property types of parameter at runtime.
export default App;
