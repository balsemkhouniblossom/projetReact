import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  
 /* let somme = function(a,b){
    return a+b;
  }*/


let somme = (a, b) => a + b;
console.log(somme(5,3));

//methode de map gerer les tableaux
const tab = [1, 4, 9, 16];
const newTab = tab.map((x) => x * 2);
console.log(newTab);

//methode de filter pour gerer less tableaux
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6)
console.log(result);

const findLongestWord=(x)=>{
  let longestWord=x.map(e => {
    return {"mot":e,"longeur":e.length};

  });

  return longestWord.reduce((acc,curr)=>{
    return acc.length >curr.length?acc:curr
  });
};


var initialValue=0;
const resSomme = tab.reduce((acc,curr)=>acc+curr,initialValue)
console.log(resSomme);


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


let p = {
  name: 'Balsem',
  prenom:'khouni',
  age : 22,
};
p={...p,classe:'4TWIN2'};
console.log(p);

console.log(findLongestWord(words));


export default App
