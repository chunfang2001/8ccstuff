import classes from './Card.module.css'
import { useEffect, useState } from  'react'
import useSound from 'use-sound';
import flipsound from './static/cardflip.mp3'

const Card = (props)=>{
    const [click,setClick] = useState(props.clicked)
    const [play] = useSound(flipsound)

    const clickHandler = ()=>{
        setClick(prev=>!prev)
        play()
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