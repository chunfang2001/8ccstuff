import classes from './CardContainer.module.css'
import Card from './Card'
import {csv} from 'd3'
import { useEffect,useRef,useState } from 'react'
import csvfile from './static/form.csv'
import useSound from 'use-sound';
import flipsound from './static/cardflip.mp3'

const CardContainer = ()=>{
    const nameForm = useRef()
    const [play] = useSound(flipsound)
    const [clear, setClear] = useState(false)
    const [person,setPerson] = useState([])
    const [count,setCount] = useState(1)
    const addPersonHandler = ()=>{
        if(nameForm.current.value.trim()===''){
            return
        }else{
            setPerson([...person,{
                count :count,
                '名字（中）':nameForm.current.value
            }])
            localStorage.setItem(count,false)
            setCount(prev=>prev+1)
        }
        nameForm.current.value=''
    }

    const clearHandler = ()=>{
        setClear(true)
        play()
    }

    useEffect(()=>{
        if(clear){
            setClear(false)
        }
    },[clear])

    useEffect(()=>{
        const sendRequest = async ()=>{
            let temp = []
            await csv(csvfile).then((data)=>{
                temp = data
            })   
            temp = temp.filter((obj)=>{
                return obj.Timestamp !== ''
            })
            let countNum =1
            temp = temp.map((obj)=>{
                const newObj = {
                    count : countNum,
                    ...obj
                }
                countNum++
                return newObj
            })
            setCount(countNum)
            setPerson(temp)
        }
        sendRequest()
    },[])
    return <>
        <div className={classes['inputContainer']}>
            <div className={classes['inputSide']}>
                <div className={classes['formContainer']}>
                    <input type="text" className={classes['input']} ref={nameForm}/>
                </div>
                <button className={classes['inputBtn']} onClick={addPersonHandler}>Add new</button>
            </div>
        </div>
        <div className={classes['cardcontainer']}>
            {person.map((obj)=>{
                let clicked = false
                if(localStorage.getItem(obj.count)==='true'){
                    clicked = true
                }
                return <Card name={obj.count} content={obj['名字（中）']} key={obj.count} clicked={clicked} clear={clear}></Card>
            })}
        </div>
        <div className={classes['clearbutton']}>
            <button className={classes['clear']} onClick={clearHandler}>Clear all</button>
        </div>
    </>
}
export default CardContainer

