import classes from './Header.module.css'
import logo from './static/logo.png'

const Header = ()=>{
    return <>
        <img src={logo} alt="logo" className={classes['logo']}></img>
        <div className={classes['header']}>
            <div className={classes['flexlogo']}>
                <div>霸舍容天下</div>
            </div>
        </div>
    </>
}

export default Header