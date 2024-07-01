import React from 'react'
import { useQuiz } from './Context/QuizContext';

export default function NextButton() {
  const {dispatch, answer, index, numQuestions}=useQuiz();
    if(answer === null) return null;
  return (
    <button className='btn btn-ui' onClick={()=>dispatch({type: `${index < numQuestions -1 ? "nextQuestion": "finished"}`})}>
        {index < numQuestions -1 ? "Next": "Finish"}
    </button>
  )
}
