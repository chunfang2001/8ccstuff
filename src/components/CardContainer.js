import classes from './CardContainer.module.css'
import Card from './Card'
import {csv} from 'd3'
import { useEffect,useRef,useState } from 'react'
import csvfile from './static/form.csv'
import useSound from 'use-sound';
import flipsound from './static/cardflip.mp3'

const prize = [4,33,49]

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
            const arr = prize.map((num)=>{
                const obj = {
                    count : num,
                    'Timestamp' : '',
                    '名字（中）' :'恭喜中奖了!!!',
                    win:true
                }
                return obj
            })
            temp = temp.map((obj)=>{
                prize.map((num)=>{
                    if(countNum===num){
                        countNum++;
                    }
                    return ''
                })
                const newObj = {
                    count : countNum,
                    win:false,
                    ...obj
                }
                countNum++
                return newObj
            })
            temp = temp.concat(arr)
            temp = temp.sort((a,b)=>{
                if(a.count>b.count){
                    return 1
                }else if(a.count<b.count){
                    return -1
                }
                return 0
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
                return <Card name={obj.count} content={obj['名字（中）']} key={obj.count} clicked={clicked} clear={clear} win={obj.win}></Card>
            })}
        </div>
        <div className={classes['clearbutton']}>
            <button className={classes['clear']} onClick={clearHandler}>Clear all</button>
        </div>
    </>
}
export default CardContainer

