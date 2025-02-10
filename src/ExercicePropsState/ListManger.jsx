import { useState,useEffect, use } from 'react'


export default function ListManger(props){
    
    const [list,setlist]=useState(props.l)
    console.table(props.l)
    const [newItems,setnewItems]=useState('')
    return (
        <>
        <input type="text" placeHold={props.placeHold} value={newItems} onChange={(e=>setnewItems(e.target.value))}/>
        <button onClick={()=>setlist([...list,newItems])}>ajouter</button>

        <ul>
        {list.map((item, index)=>(
        <li key={index}>{item} <button onClick={()=>setlist(list.filter((_,i)=>i!==index))}>delete</button>  </li>
    ) )}

            
        </ul>


        </>
    )
    

}