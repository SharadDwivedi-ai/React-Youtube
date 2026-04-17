import style from './App.module.css'
import Display from './components/Display';
import './App.css'
import ButtonContainer from './components/ButtonContainer';

function App() {

  return (
    <div className={style.calculator}>
      <h2>Calculator</h2>
      <Display />
      <ButtonContainer />
     </div>
  )
}

export default App;
