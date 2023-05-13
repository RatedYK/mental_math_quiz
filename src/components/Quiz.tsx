import { useState, useEffect } from 'react';
import { generateQuestion } from '../helperFunctions'
import '../styles/Quiz.css'

type QuizProps = {
    gameMode: string
}

type Question = {
    question: string
    answer: number
}

type SubmittedQuestion = {
    question: string
    answer: number
    userAnswer: any
    correct: boolean
}

const Quiz = ({gameMode} : QuizProps) => {
    const [allQuestions, setAllQuestions] = useState<SubmittedQuestion[]>([])
    const [questionCounter, setQuestionCounter] = useState<number>(1)
    const [currentQuestion, setCurrentQuestion] = useState<Question>(generateQuestion())
    const [userAnswer, setUserAnswer] = useState<any>(undefined)
    const [answer, setAnswer] = useState<number>(0)

    useEffect(() => {
        setAnswer(currentQuestion.answer)
        console.log(allQuestions)
    }, [currentQuestion])

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(parseFloat(event.target.value))
    }

    function saveQuestionNextQuestion(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setAllQuestions([...allQuestions,
            {
                question: currentQuestion.question,
                answer: answer,
                userAnswer: userAnswer,
                correct: userAnswer === answer
            }])
        setQuestionCounter(questionCounter + 1)
        nextQuestion()
    }

    function nextQuestion() {
        setCurrentQuestion(generateQuestion())
        setUserAnswer("")
    }

    return (
        <div className="quiz--container">
            <h1 className="quiz--question-number">Q{questionCounter}</h1>
            <div className='quiz--question'>{currentQuestion.question}</div>
            <form className='quiz--form' onSubmit={saveQuestionNextQuestion}>
                <input className='quiz--form-input' type="number" onChange={onChange} value={userAnswer}></input>
                <button className="quiz--form-submit-btn">Submit</button>
            </form>
            <p className='quiz--info'>you can also <br></br> press enter to submit</p>

        </div>
    )
}

export default Quiz