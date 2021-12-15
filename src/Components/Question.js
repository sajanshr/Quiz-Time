import { Button } from '@material-ui/core';
import {React, useState} from 'react';
import './questions.css';
import { useNavigate } from 'react-router';
import { ErrorMessage } from './ErrorMessage';

export const Question = ({
    currQues,
    setCurrQues, 
    score,
    setScore,
    questions,
    setQuestions,
    correct,
    options,
    history, 
    setHistory, 
    handleCheck

    
    
    
}) => {
    // const[selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

  

    

    function handleNext(){
        console.log(currQues);
        if(currQues==4){
            navigate('/results')
        }
        setCurrQues(currQues+1);
           
        
        // else{
        //     setError(true);
        // }

    }

    function handlePrevious(){
        setCurrQues(currQues-1);
      

    }

    function highlightSelected(id){
       const x =history.find((i) => i.qNo === questions[currQues].questionID && id === i.oId) 
       if(x){
            return "select";
        }

        return '';

    }







    return (
        <div className="questions">
            <h4>{questions[currQues].questionID} of {questions.length} </h4>
            <h2>{questions[currQues].question}</h2>
            <h2>{questions[currQues].subQuestion}</h2>
            <div className="options">
                
                {options.map((i)=>{

                    return(<button 
                        onClick={ () => handleCheck(questions[currQues].questionID, i.id) }
                        
                        className = {highlightSelected(i.id)}
                    
                    >
                    {i.answer}
                    </button>

                    
                    )
                   

                })}



            </div>

            {/* {error && <ErrorMessage> Please select a option to continue! </ErrorMessage>} */}

            <div className="controls">
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style = {{width: 185}}
                    onClick = {handlePrevious}
                    
                
                
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style = {{width: 185}}
                    onClick = {handleNext}
                
                
                >
                    Next
                </Button>


            </div>




            
        </div>
    )
}
