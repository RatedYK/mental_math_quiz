import { type } from 'os'
import { QuestionT } from './Quiz'    

type QuestionProps = {
    questionCounter: number
    currentQuestion: QuestionT
    userAnswer: any
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    saveQuestionNextQuestion: (event: React.FormEvent<HTMLFormElement>) => void
    stopGame: () => void
    gameMode: string
}

const Question = ({questionCounter, currentQuestion, userAnswer, onChange, saveQuestionNextQuestion, stopGame, gameMode} : QuestionProps) => {

  return (
    <div className="quiz--container">
        <h1 className="quiz--question-number">Q{questionCounter}</h1>
        <div className='quiz--question'>{currentQuestion.question}</div>
        <form className='quiz--form' onSubmit={saveQuestionNextQuestion}>
            <input className='quiz--form-input' type="number" onChange={onChange} value={userAnswer}></input>
            <button className="quiz--form-submit-btn">Submit</button>
            {gameMode==="infinite" && <button className="quiz--form-stop-btn" onClick={stopGame} type="button">Stop</button>}
        </form>
        <p className='quiz--info' style={{visibility: questionCounter === 1 ? 'visible' : 'hidden'}}>you can also <br></br> press enter to submit</p>
    </div>
  )
}

export default Question