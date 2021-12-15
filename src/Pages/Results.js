import React from 'react'

import { Link } from 'react-router-dom';


export const Results = ({score, setScore, history, setHistory, questions}) => {

    let scoreHere = 0;
    const ans = questions.map(i => 
        {let x = {"qId":i.questionID, "oId":i.correctAnswerID}

        return x;

    
    
    });

  
    
    
    console.log(ans);
    history.sort((a,b) => (a.qNo>b.qNo)?1:(b.qNo>a.qNo)?-1:0)
    console.log(history);

    history.forEach(i=>{
        ans.forEach(e=>{
            if( (i.qNo === e.qId ) && Number(e.oId) === Number(i.oId) ){

                scoreHere++;
                console.log(scoreHere);

            }
        })
    })

    setScore(scoreHere);


    return (
        <div>
            Results

            <h2>Your score: {score} of {ans.length}</h2>

            <h3>
                <Link to="/">BACK TO HOME</Link>
            </h3>

        </div>
    )
}
