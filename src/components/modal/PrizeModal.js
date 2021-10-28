import ReactDOM from 'react-dom';
import classes from './PrizeModal.module.css'
import roger from '../static/rogerPrize.jpeg'
import ability from '../static/ability.png'
import { useContext } from 'react';
import { Context } from '../../context/ContextPro';

const ModalBackground = ()=>{
    return <div className={classes['background']}></div>
}
const Ability =()=>{
    return <img src={ability} alt="" className={classes['ability']}/>
}
const ModalContent = ()=>{
    const ctx = useContext(Context)
    const closeRogerHandler = ()=>{
        ctx.showRoger()
    }
    return <>
    <div className={classes['content']}>
        <h2 >Roger GIEGIE</h2>
        <div className={classes['roger-info']}>
            <img src={roger} alt="roger" className={classes['roger']}/>
            <div className={classes['roger-prize']}>
                <div>ROGER GIEGIE 送礼啦</div>
                <Ability/>
            </div>
        </div>
        <div className={classes['button']} onClick={closeRogerHandler}>CLOSE</div>
    </div>
    </>
}

const PrizeModal = (props)=>{
    return <>
        {ReactDOM.createPortal(<ModalBackground></ModalBackground>,document.getElementById('modal'))}
        {ReactDOM.createPortal(<ModalContent onProceed={props.onProceed}/>,document.getElementById('modal'))}
    </>
}

export default PrizeModal