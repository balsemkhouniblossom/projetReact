import { Component } from "react"; // ou import React from 'react';  avec extends React.Component

 export default class ClassComponent extends Component{
    constructor(prpos){
        super(prpos);
        console.log(this)
        this.state = {
            etat1: 3,
            etat2: {
                etat21:"test",
            }
        }
    }
//state = {
//    etat1:"test",
//    etat2: 3
//}
    render(){
        return <> <h1>Hello {this.props.name} from class component </h1>
        <p>contenu d'un element p</p>
        <p>affichage de l'etat = {this.state.etat1} </p>
        <p>affichage de l'etat = {this.state.etat2.etat21} </p>


        </>
    }

}