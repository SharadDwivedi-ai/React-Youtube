import style from './ButtonContainer.module.css'
const ButtonContainer = ({ onButtonClick }) => {
    const buttonNames = ['AC', '%', '⌫', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '=']
    return (
        <div className={style.buttonContainer}>
            {buttonNames.map(buttonName => <button className={style.button} onClick={() => onButtonClick(buttonName)}>{buttonName}

            </button>)
            }
        </div >
    );
}
export default ButtonContainer;