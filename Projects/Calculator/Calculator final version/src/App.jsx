import style from './App.module.css'
import Display from './components/Display';
import './App.css'
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState('');
  const onButtonClick = (buttonText) => {
    if (buttonText === 'AC') {
      setCalVal('');
    } else if (buttonText === '⌫') {
      setCalVal(calVal.slice(0, -1));
    } else if (buttonText === '=') {
      setCalVal(eval(calVal));
    } else {
      setCalVal(calVal + buttonText);
    }
  }

  return (
    <div className={style.calculator}>
      <h2>Calculator</h2>
      <Display disVal={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App;
