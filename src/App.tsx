import { useState } from 'react'
import GameMode from './components/GameMode'
import Quiz from './components/Quiz'
import Info from './components/Info'
import Copyright from './components/Copyright'
import './App.css'

const App = () => {
  const [gameMode, setGamemode] = useState<string>('quiz')
  const [questionAmount, setQuestionAmount] = useState<number>(21)
  const [showBtnContainer, setShowBtnContainer] = useState<boolean>(true)
  const [showQuiz, setShowQuiz] = useState<boolean>(false)
  const [showInfo, setShowInfo] = useState<boolean>(true)



  // NOTE TO SELF combine these two functions into one
  function playQuizMode() {
    setGamemode('quiz')
    startGame();
  }

  function playInfiniteMode() {
    setGamemode('infinite')
    startGame();
  }

  function startGame() {
    setShowBtnContainer(false)
    setShowQuiz(true)
    setShowInfo(false)
  }

  return (
    <>
      {showInfo && <Info questionAmount={questionAmount} />}
      {showBtnContainer && <GameMode playQuizMode={playQuizMode} playInfiniteMode={playInfiniteMode}/>}
      {showQuiz && <Quiz questionAmount={questionAmount}  gameMode={gameMode} />}
      <Copyright name={"RatedYK"} color={"white"} fontsize={'0.8rem'}/>
    </>
  )
}

export default App
