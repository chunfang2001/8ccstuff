import classes from './CardUI.module.css'

const CardUI = (props)=>{
    return <div className={classes['UI']}>{props.children}</div>
}

export default CardUI