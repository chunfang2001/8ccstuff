import classes from './Card.module.css'
import { useState } from  'react'

const Card = (props)=>{
    const [click,setClick] = useState(false)
    const clickHandler = ()=>{
        setClick(prev=>!prev)
    }
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