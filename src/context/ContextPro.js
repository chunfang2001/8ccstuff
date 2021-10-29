import { useState } from "react"
import React from "react"

export const Context = React.createContext({
    show : false,
    showRoger:(a)=>{}
})

const ContextPro = (props)=>{
    const [show, setShow] = useState(false)
    let timer
    const showRogerHandler = (a)=>{
        clearTimeout(timer)
        setShow(a)
        timer = setTimeout(()=>{setShow(false)},10000)
    }
    const context = {
        show: show,
        showRoger : showRogerHandler
    }
    return <Context.Provider value={context}>
        {props.children}
    </Context.Provider>
}

export default ContextPro