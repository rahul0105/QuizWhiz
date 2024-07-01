import React from 'react'
import { useQuiz } from './Context/QuizContext';

export default function Questions() {
  const {questions,dispatch, answer,index}=useQuiz();
  const question=questions[index];
    const hadAnswered= answer !== null;
  return (
    <div>
        <h4>{question.question}</h4>
        <div className='options'>
            {question.options.map((option, i)=>{
                return <button 
                className={`btn btn-option 
                ${i === answer ? "answer" : ""} 
                ${hadAnswered ?
                     i===question.correctOption ? 
                     "correct": "wrong"
                    : ""}`} 
                key={i}
                disabled={hadAnswered}
                onClick={()=> dispatch({type: "newAnswer" , payload: i})}>{option}</button>
            })}
        </div>
    </div>
  )
}
