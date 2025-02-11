import list from '../data/events.json'
import Event from '../Components/Event';

export default function events(){
    return (
        <>
        <ul>
            {list.map((e,i)=>(<Event event={e}/>))}
        </ul>
        </>
    )
}