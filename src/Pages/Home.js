import {React, useState} from 'react'
import { Button, TextField } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../Components/ErrorMessage'

export const Home = ({name, setName,fetchQuestions}) => {
    const [error, setError] = useState(false);
    

    const navigate = useNavigate();

    const handleSubmit = () =>{
        if(!name){
           

            setError(true);
            return;

        }else{
            setError(false);
            fetchQuestions();
            navigate('/quiz');
            
        }
    }


    return (
        <div className="homeDiv">

            <h1>Welcome to the Quiz!</h1>
            {error && <ErrorMessage>Please Enter a Name to Continue!</ErrorMessage>}

            <TextField 
                label = " Enter your Name"
                variant = "outlined"
                onChange = {(e)=> setName(e.target.value)}
            />

            <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                Start Quiz
            </Button>
            
        </div>
    )
}
