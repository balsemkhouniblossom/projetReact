import { useState,useEffect } from 'react'

export default function Counter(props) {
    const [Conter,setCounter]=useState(0)
    return(
        <div>
            <h1>cle conter {Conter}</h1>
        <button onClick={()=>{setCounter(Conter-props.step)}}>Increment-{props.step}</button>
        <button onClick={()=>{setCounter(Conter+props.step)}}>decrement+{props.step}</button>
        <button onClick={()=>{setCounter(0)}}>Rest</button>

        </div>
    );

}