import { useState } from "react"
import React from "react"

export const Context = React.createContext({
    show : false,
    showRoger:()=>{}
})

const ContextPro = (props)=>{
    const [show, setShow] = useState(false)
    const showRogerHandler = ()=>{
        console.log("trigger")
        setShow(prev=>!prev)
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