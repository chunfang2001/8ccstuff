import { useEffect, useState } from "react"
import React from "react"

export const Context = React.createContext({
    show : false,
    showRoger:(a)=>{}
})

const ContextPro = (props)=>{
    const [show, setShow] = useState(false)
    const showRogerHandler = (a)=>{
        setShow(a)
    }

    useEffect(()=>{
        let timer
        if(show === true){
            timer = setTimeout(()=>{setShow(false)},30000)
        }
        return ()=>{
            clearTimeout(timer)
        }
    },[show])
    const context = {
        show: show,
        showRoger : showRogerHandler
    }
    return <Context.Provider value={context}>
        {props.children}
    </Context.Provider>
}

export default ContextPro