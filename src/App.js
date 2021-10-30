import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import CardUI from "./components/UI/CardUI";
import classes from './App.module.css';
import Modal from "./components/modal/Modal";
import { useContext, useState } from "react";
import { Context } from './context/ContextPro'
import PrizeModal from "./components/modal/PrizeModal";
import { Fireworks } from 'fireworks/lib/react'

function App() {
  const ctx = useContext(Context)
  let fxProps = {
    count: 3,
    interval: 200,
    colors: ['#cc3333', '#4CAF50', '#81C784'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }

  const closeModalHandler = ()=>{
    ctx.showRoger(false)
  }
  const [intro,setIntro] = useState(false)
  const proceedHandler =()=>{
    setIntro(true)
  }
  return (
    <div >
      {ctx.show&&<div className={classes['firework']} onClick={closeModalHandler}><Fireworks {...fxProps} /></div>}
      {ctx.show&&<div className={classes['congrats']} onClick={closeModalHandler}>恭喜中奖啦!!</div>}
      {/* {ctx.show&&<PrizeModal onProceed={proceedHandler}/>} */}
      {/* {!intro&&<Modal onProceed={proceedHandler}/>} */}
      <Header/>
      <CardUI>
        <CardContainer/>
      </CardUI>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={classes['design']}>
        <path fill="#f3f4f5"  d="M0,256L48,229.3C96,203,192,149,288,144C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>
  );
}

export default App;
