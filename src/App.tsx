import { useState } from 'react'
import GameMode from './components/GameMode'
import Quiz from './components/Quiz'
import './App.css'

const App = () => {
  const [gameMode, setGamemode] = useState<string>('quiz')
  const [showBtnContainer, setShowBtnContainer] = useState<boolean>(true)
  const [showQuiz, setShowQuiz] = useState<boolean>(false)



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
  }

  return (
    <>
      {showBtnContainer && <GameMode playQuizMode={playQuizMode} playInfiniteMode={playInfiniteMode} />}
      {showQuiz && <Quiz gameMode={gameMode} />}
    </>
  )
}

export default App
