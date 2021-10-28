import ReactDOM from 'react-dom';
import classes from './Modal.module.css'
import roger from '../static/roger.jpg'
import ability from '../static/ability.png'
import { useEffect,useState } from 'react';
import useSound from 'use-sound';
import rogervip from '../static/rogervip.mp3'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const ModalBackground = ()=>{
    return <div className={classes['background']}></div>
}
const Ability =()=>{
    return <img src={ability} alt="" className={classes['ability']}/>
}
const ModalContent = (props)=>{
    const [click,setClick] = useState(false)
    const [clicked,setClicked] = useState(false)
    const [vipsound,{ stop }] = useSound(rogervip,{interrupt:true})

    const soundHandler = ()=>{
        setClicked(true)
    }
    useEffect(()=>{
        if(clicked){
            vipsound()
            setTimeout(()=>setClick(true),10000)
        }
    },[clicked,vipsound])

    const stopSoundHandler = ()=>{
        stop()
        props.onProceed()
    }
    
    return <>
    <div className={classes['content']}>
        <h2 >Roger GIEGIE</h2>
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
        {!click&&<button className={classes['button']} onClick={soundHandler}>Sound On<VolumeUpIcon className={classes['voiceicon']}/></button>}
        {click&&<button className={classes['button']} onClick={stopSoundHandler}>Proceed to Main Page</button>}
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