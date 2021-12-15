import {React, useState} from 'react'
import {Question} from '../Components/Question'

export const Quiz = ({name, questions, score, setScore, setQuestions, history, setHistory,handleCheck}) => {
    const [currQues, setCurrQues ] = useState(0);
  
    const options = questions[currQues].answers;

    




    return (
        <div>
            Quiz Page
            <h1> Welcome {name} !</h1>
            <Question

            currQues = {currQues}
            setCurrQues = {setCurrQues}
            questions = {questions}
            setQuestions= {setQuestions}
            score = {score}
            setScore = {setScore}
            options = {options}
            correct = {questions[currQues].correctAnswerID}
            history = {history}
            setHistory = {setHistory}
            handleCheck={handleCheck}

            
            
            
            />
        </div>
    )
}
