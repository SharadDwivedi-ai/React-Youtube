import style from './ButtonContainer.module.css'
const ButtonContainer = () => {
    const buttonNames = ['AC', '%', '⌫', '/', '7','8','9','X','4','5','6','-','1','2','3','+','00','0','.','=']
    return (
        <div className={style.buttonContainer}>
            {buttonNames.map (buttonName => <button className={style.button}>{buttonName}</button>)}
        </div>
    );
}
export default ButtonContainer;