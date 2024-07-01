import React from 'react'
import { useQuiz } from './Context/QuizContext';

export default function FinishScreen() {
  const {points, maxPossiblePoints, highscore, dispatch}=useQuiz();
    const percentage= (points/maxPossiblePoints) * 100;
  return (
    <>
    <p className='result'>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
    </p>
    <p className='highscore'>(Highscore: {highscore} points)</p>

    <button className='btn btn-ui' onClick={()=> dispatch({type: "reset"})}>Resart Quiz!</button>
    </>
  )
}
