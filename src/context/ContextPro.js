import { useState } from "react"
import React from "react"

export const Context = React.createContext({
    show : false,
    showRoger:(a)=>{}
})

const ContextPro = (props)=>{
    const [show, setShow] = useState(false)
    const showRogerHandler = (a)=>{
        console.log("trigger")
        setShow(a)
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