import {React, useState} from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import { Route, Routes} from "react-router";
import { Home } from './Pages/Home';
import { Quiz } from './Pages/Quiz';
import { Results } from './Pages/Results';
import Questions from './api/multipleChoice.json'

function App() {

  const[questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  const fetchQuestions =  () => {
    const data = Questions;
  
    setQuestions(data.options);   
   
    
    
  }

  const handleCheck = (questionId, id) =>{
    // setSelected(id);
    const copyHist = [...history]
    if(!copyHist.find((i) => (i.qNo === questionId)))
    {
        
        copyHist.push({"qNo":questionId, "oId": id });

    }else{
        let idx  =  copyHist.findIndex(i=> (i.qNo === questionId));
        copyHist.splice(idx, 1);
        copyHist.push({"qNo":questionId, "oId": id })

    }
    console.log(copyHist, "app.js");   
    setHistory(copyHist)  
  }

 
  
 
  
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundImage:"url(./bi.jpeg)"}}>
       
          <Routes>
            <Route path="/"  element={
            <Home 

              name ={name}
              setName ={setName}
              fetchQuestions = {fetchQuestions}
            
            
            
            />} />
            <Route path="/quiz"  element={
              <Quiz
                name = {name}
                score = {score}
                setScore = {setScore}
                questions = {questions}
                setQuestions = {setQuestions}
                history = {history}
                setHistory = {setHistory}
                handleCheck={handleCheck}
              
              
              />} />

            <Route path="/results"  element={<Results 

                score = {score}
                setScore = {setScore}
                history = {history}
                setHistory = {setHistory}
                questions = {questions}
            
            
            
            
            />} />
            
            
            


          </Routes>
         


      </div>
    </BrowserRouter>
  );
}

export default App;
