import classes from './Card.module.css'
import { useEffect, useState, useContext } from  'react'
import useSound from 'use-sound';
import flipsound from './static/cardflip.mp3'
import winsound from './static/win.wav'
import { Context } from '../context/ContextPro'

const Card = (props)=>{
    const [click,setClick] = useState(props.clicked)
    const ctx = useContext(Context)
    const [play] = useSound(flipsound)
    const [play2,{ stop }] = useSound(winsound)

    const clickHandler = ()=>{
        if(!click){
            if(props.win){
                stop()
                play2()
                ctx.showRoger()
            }else{
                play()
            }
        }else{
            play()
        }        
        setClick(prev=>!prev)
        
    }
    useEffect(()=>{
        localStorage.setItem(props.name,click)
    },[click,props.name])

    useEffect(()=>{
        if(props.clear){
            setClick(false)
        }
    },[props.clear])

    let c = `${classes['card']} ${classes['cover']}`
    if(click){
        c = `${classes['card']} ${classes['flip']} `
    }
    
    return <div>
        <div className={c} onClick={clickHandler}>
            {!click&&<div className={classes['text']}>{props.name}</div>}
            {click&&<div className={classes['con']}>{props.content}</div>}
        </div>
    </div>
    
}

export default Card