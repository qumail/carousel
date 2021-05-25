import './App.css';
import { Slides } from './components/Slides';
//import Carousel from './components/Carousel';
import Slideshow from './components/Slideshow';

/// we can use array of images for slideshow, if we have to use Slideshow components in multiple pages

function App() {
  return (
    <div className="App">
      <h2 style={{fontSize: '42px', textAlign: 'center'}}>Slideshow Gallery</h2>
      <Slideshow slides={Slides}/>
    </div>
  );
}

export default App;
