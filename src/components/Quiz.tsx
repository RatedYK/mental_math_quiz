import { useState, useEffect } from 'react';
import { generateQuestion } from '../helperFunctions'
import '../styles/Quiz.css'
import Question from './Question'
import Result from './Result'
import Timer from './Timer';

type QuizProps = {
    gameMode: string
    questionAmount: number
}

export type QuestionT = {
    question: string
    answer: number
}

export type SubmittedQuestionT = {
    question: string
    answer: number
    userAnswer: any
    correct: boolean
}

const Quiz = ({gameMode, questionAmount} : QuizProps) => {
    const [allQuestions, setAllQuestions] = useState<SubmittedQuestionT[]>([])
    const [questionCounter, setQuestionCounter] = useState<number>(1)
    const [currentQuestion, setCurrentQuestion] = useState<QuestionT>(generateQuestion())
    const [userAnswer, setUserAnswer] = useState<any>(undefined)
    const [answer, setAnswer] = useState<number>(0)
    const [gameFinished, setGameFinished] = useState<boolean>(false)
    const [time, setTime] = useState<string>("")

    useEffect(() => {
        setAnswer(currentQuestion.answer)
        if (gameMode === 'quiz') {
            checkIfGameFinished()
        }
    }, [currentQuestion])

    
    // HANDLER FUNCTIONS
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

    function checkIfGameFinished() {
        // Change this value to have longer/shorter games!
        if (questionCounter === questionAmount) {
            setGameFinished(true)
        }
    }

    function stopGame() {
        setGameFinished(true)
    }

    function updateTime(userMinute:number, userSecond:number) {
        let outputString = ""
        if (userMinute >= 1) {
            outputString = `${userMinute}:${userSecond >= 10 ? userSecond : `0${userSecond}`} minutes`
        } else {
            outputString = `${userSecond} seconds`
        }
        setTime(outputString)
    }

    console.log(time)

    return (
        <> 
            <Timer gameFinished={gameFinished} updateTime={updateTime}/>
            {gameFinished ?
                <Result 
                    allQuestions={allQuestions}
                    finishTime={time}
                />
                :
                <Question
                    questionCounter={questionCounter}
                    currentQuestion={currentQuestion} 
                    userAnswer={userAnswer}
                    onChange={onChange}
                    saveQuestionNextQuestion={saveQuestionNextQuestion}
                    gameMode={gameMode}
                    stopGame={stopGame}
                />
            }
        </>
    )
}
export default Quiz