import style from './Display.module.css'
const Display = ({ disVal }) => {

    return (
        <>
            <input type="text" className={style.inputText} value={disVal} readOnly />
        </>
    );
}
export default Display;