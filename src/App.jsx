import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Search } from "./Ecmascript/fonction.js";
import ClassComponent from './Components/ClassComponent.jsx';
import FunctionalComponent from './Components/FunctionalComponent.jsx';
import Methods from'./CourseComponents/ClassComponentLifeCycle/Methods.jsx'
import Mounting from './CourseComponents/ClassComponentLifeCycle/Mounting.jsx'
import Unmouting from './CourseComponents/ClassComponentLifeCycle/Unmounting.jsx';
import  Update  from './CourseComponents/ClassComponentLifeCycle/Update.jsx';
import Counter from './ExercicePropsState/Counter.jsx';
import ListManger from './ExercicePropsState/ListManger.jsx';
import ColorBox from './ExercicePropsState/ColorBox.jsx';
import NotesManager from './ExercicePropsState/NotesManager.jsx';
import TodoList from './ExercicePropsState/TodoList.jsx';
import Events from './Components/Events'
import { Routes, Route } from 'react-router-dom';
import NotFound from "./Components/NotFound";
import React from 'react';
import NavigationBar from './Components/Navbar.jsx';
import EventDetails from './Components/EventDetails.jsx';

function App() {
  const [count, setCount] = useState(0)


  const listItems=["angular","react","node"]
  const initialColor = "#FF5733";
  const colorOptions = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF"];
  const initialNotes = [15, 18, 12]; // Notes initiales
  const initialTasks = [
      { name: "Faire les courses", priority: "Haute", completed: false },
      { name: "Préparer le dîner", priority: "Moyenne", completed: true },
      { name: "Lire un livre", priority: "Basse", completed: false },
  ];
 /* let somme = function(a,b){
    return a+b;
  }*/

  const[counter, setCounter] = useState(0);
  const [{color,background}, setcolor]= useState({color:'black',background:'white'});
  useEffect (()=>{ console.log('use effect')},[count])
    return (
      <>
      {/* <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <h2>  La couleur est {color} et le background est {background}</h2>
      <input type="text" onChange={e=>{setcolor(c=>({...c,color:e.target.value}))}} />
       */}
            {/* <Counter step = {1}></Counter>
            <ListManger l={listItems} placeHold={"ecrire..."} ></ListManger>
            <ColorBox initialColor={initialColor} colorOptions={colorOptions}></ColorBox>
            <NotesManager initialNotes={initialNotes}></NotesManager>
            <TodoList initialTasks={initialTasks}></TodoList> */}
          <NavigationBar></NavigationBar>

    <Routes>
      {/* Define specific routes */}
      <Route path="/" element={<Events />} />

      {/* Fallback route for undefined paths */}
      <Route path="*" element={<NotFound />} />
      <Route path="/myevents" element={<NotFound />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />

    </Routes>

    </>
    )

    

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
console.log(findLongestWord(words));

var initialValue=0;
const resSomme = tab.reduce((acc,curr)=>acc+curr,initialValue)
console.log(resSomme);


var p = {
  name: 'Balsem',
  prenom:'khouni',
  age : 22,
};
p={...p,classe:'4TWIN2'};
console.log(p);

// Input
const tableaux = [ ["a", "b", "c"],
["c", "d", "f"],
["d", "f", "g"],];

// Étape 1 : Aplatir le tableau
const elements = tableaux.flat();

// Étape 2 : Compter les occurrences
const occurrences = elements.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log("Occurrences :", occurrences);

let students = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "John", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

// Étape 1 : Ajouter 15 points aux étudiants ayant moins de 50
const updatedMarks = students.map(student =>
  student.marks < 50 ? { ...student, marks: student.marks + 15 } : student
);

// Étape 2 : Filtrer les étudiants ayant plus de 50 après ajout du bonus
const filteredStudents = updatedMarks.filter(student => student.marks > 50);

// Étape 3 : Calculer le total des notes
const totalMarks = filteredStudents.reduce((sum, student) => sum + student.marks, 0);

console.log(totalMarks); // Output : 233

// Déclaration du tableau et de la variable globale
let dernierID = 0;
const Tab = [];

// Fonction pour ajouter une entrée
function ajouterEntree(nom, age) {
  dernierID++;
  Tab.push({ ID: dernierID, nom, age });
}

// Ajouter des données
ajouterEntree("Alice", 25);
ajouterEntree("Bob", 30);

// Importer et utiliser la fonction Search

const resultat = Search(Tab, 1);
console.log("Résultat de la recherche :", resultat);

const name = "4TWIN2"
const Etudiant ={
  nom :"Balsem",
  prenom : "Khouni",
  age : 20
}

const tabs= [1,2,5,9,89,76]
  return (
    <>
   {/* <ClassComponent name="balsem"/>
    <FunctionalComponent name ="khouni" />
    <Methods/>
    <Mounting/>
       <Update></Update> 
*/}       <Unmouting/> 

    {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
     <h1>Hello from {name}</h1>
     <h2> le contenu de l'object est = {Etudiant.nom}</h2>
     <ul>
      {tabs.map((e) => {
        return <li>{e}</li>
      }
        )}
     </ul> */}
    </>
  )
}



export default App
