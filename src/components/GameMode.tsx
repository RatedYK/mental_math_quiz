type GameModeProps = {
    playQuizMode: () => void
    playInfiniteMode: () => void
}

const GameMode = ({playQuizMode, playInfiniteMode} : GameModeProps) => {
  return (
    <div className="gamemode--btn-container">
      <button onClick={playQuizMode} className="gamemode--btn">Quiz Mode</button>
      <button onClick={playInfiniteMode} className="gamemode--btn">Infinite</button>
    </div>
  )
}

export default GameMode