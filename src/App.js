import Rect from 'components/Rect';
import { useState } from 'react';
import 'App.css';

const App = () => {
  const [red, setRed] = useState({left: 0, top: 0});
  const [blue, setBlue] = useState({left: 50, top: 0});

  const shuffle = () => {
    const redStyle = random();
    
    let blueStyle = {};
    do {
      blueStyle = random();
    } while (redStyle.left === blueStyle.left && redStyle.top === blueStyle.top)
    setRed(redStyle);
    setBlue(blueStyle);
  }

  const random = () => {
    return {
      left: 50 * (Math.round(Math.random() * 5)),
      top: 50 * (Math.round(Math.random() * 5))
    };
  }
  return (
    <div className="container">
      <div className="box-container">
        <Rect color="red" style={red}/>
        <Rect color="blue" style={blue}/>
      </div>
      <button
        className="button shuffle"
        onClick={() => shuffle()}>
        Shuffle!
      </button>
    </div>
  );
}

export default App;
