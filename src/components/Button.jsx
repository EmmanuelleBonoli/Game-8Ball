
// BOUTON PLAY qui :
// 1 / demande une la question (INPUT)
// 2 / lance la fonction random
// 3 / Donne une réponse (// consomme le talbeau de réponse (autre composant))

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

let historyTable = [];

function Button({ answers }) {// on a mis la props answers en paramètres de la fonction Button

    function historyID(id, savedQuestion, savedAnswer) {
        this.id = id;
        this.savedQuestion = savedQuestion;
        this.savedAnswer = savedAnswer;
    }

    let [random, setRandom] = useState(10);
    let [question, setQuestion] = useState(" ");
    let [savedQuestion, setSavedQuestion] = useState("");
    let [compteur, setCompteur] = useState(0);
    let [savedAnswer, setSavedAnswer] = useState("");

    const handleRandom = () => {
        setRandom(Math.floor(Math.random() * 8))
        setSavedQuestion(question)
        setSavedAnswer(answers[random].answer)
        // historyTable.push(savedQuestion)
        // historyTable.push(answers[random].answer)
        // console.log(historyTable)
        setCompteur(compteur + 1)
        const history = new historyID(compteur, question, savedAnswer)
        console.log(history)
        historyTable.push(history)

        setQuestion("")
        return setRandom
    }

    const handleChange = event => {
        setQuestion(event.target.value);
    }

    // On appelle la fonction Random au click et la valeur de notre state prend ra valeur retournée par la fonction Randometurn 
    return (
        <>
        <h1>WCS Magic 8 Ball </h1>
        <div className="game">
            
                {/* <img src="src/images/ball8.png" alt="magicball" /> */}
            
            
            <div className="buttonComponent">
                
                <div className="submit">
                    <input onChange={handleChange} name="myInput" value={question} />
                    <button onClick={handleRandom}> SOUMETTRE </button>
                    {/* rappel fonction handleRandom lors du Onclick */}
                </div>
                <div className='firstAnswer'>
                    <p>Question : {savedQuestion}</p>
                    <p>Réponse : {answers[random].answer}</p>
                    <img src={answers[random].img} alt="" />
                </div>
            </div>
            <div>
                <h2>Historique des questions posées</h2>
                {historyTable.map((element) => {
                    return (<div key={element.id}>
                        <p>{element.savedQuestion}</p>
                        <p>{element.savedAnswer}</p>

                    </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Button;