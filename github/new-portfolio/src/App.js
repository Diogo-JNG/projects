import './App.css';
import Content from './components/content';
import Slider from './components/slider';

function App() {
  return (
    <div className="flex flex-row">
    <Slider/>
    <Content/>
    </div>
  );
}

export default App;
