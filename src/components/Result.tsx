import { SubmittedQuestionT } from "./Quiz"
import '../styles/Result.css'

type ResultProps = {
    allQuestions: SubmittedQuestionT[]
}

const Result = ({allQuestions} : ResultProps) => {
    
    const redFont = {
        color: '#C11700'
    }

    const greenFont = {
        color: '#63B20E'
    }


    return (
        <div className="result--container">
            <h1 className="result--title">Result</h1>
            <div className="result--score">You scored {allQuestions.filter(question => question.correct).length} out of {allQuestions.length}</div>
            <div className="result--questions-container">
                {allQuestions.map((question, index) => {
                    return (
                        <div className="result--question" key={index} style={question.correct ? greenFont : redFont}>
                            <h3>Q{index+1}</h3>
                            <div className="result--question-text">{question.question}</div>
                            <div className="result--question-answer">Answer: {question.answer}</div>
                            <div className="result--question-user-answer">Your answer: {question.userAnswer}</div>
                        </div>
                    )
                })}
            </div>
            <button className="result--play-again-btn" onClick={() => window.location.reload()}>Play Again</button>
        </div>
        )
}

export default Result