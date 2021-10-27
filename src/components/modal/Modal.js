import ReactDOM from 'react-dom';
import classes from './Modal.module.css'
import roger from '../static/roger.jpg'
import ability from '../static/ability.png'

const ModalBackground = ()=>{
    return <div className={classes['background']}></div>
}
const Ability =()=>{
    return <img src={ability} alt="" className={classes['ability']}/>
}
const ModalContent = (props)=>{
    return <>
    
    <div className={classes['content']}>
        <h2>Roger GIEGIE</h2>
        <div className={classes['roger-info']}>
            <img src={roger} alt="roger" className={classes['roger']}/>
            <div>
                <div className={classes['grid-box']}>
                    <div>姓名</div>
                    <div>:</div>
                    <div>裸哥黄泄阳</div>
                    <div>身高</div>
                    <div>:</div>
                    <div>175 + 15 cm</div>
                    <div>爱好</div>
                    <div>:</div>
                    <div>等大家自己探索啦~~</div>
                    <div>IG id</div>
                    <div>:</div>
                    <div>roger_wsy</div>
                    <div>称号</div>
                    <div>:</div>
                    <div>Sibu一条街房东</div>
                    <div>特点</div>
                    <div>:</div>
                    <div>等大家自己探索啦~~</div>
                </div>
                <Ability/>
            </div>
        </div>
        <button className={classes['button']} onClick={props.onProceed}>Proceed to Main Page</button>
    </div>
    </>
}

const Modal = (props)=>{
    return <>
        {ReactDOM.createPortal(<ModalBackground></ModalBackground>,document.getElementById('modal'))}
        {ReactDOM.createPortal(<ModalContent onProceed={props.onProceed}/>,document.getElementById('modal'))}
    </>
}

export default Modal