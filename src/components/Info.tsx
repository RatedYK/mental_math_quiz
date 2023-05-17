type InfoProps = {
    questionAmount: number
}

const Info = ({questionAmount} : InfoProps) => {
  return (
    <div className='app--info-container'>
        <h1 className='app--info-title'>MathWiz 🧙‍♂️</h1>
        <p className='app--info'>This is a simple math quiz game. <br></br>
          You can choose between two game modes:
          <br></br> Quiz Mode and Infinite Mode.
          <br></br> In Quiz Mode you have to answer {questionAmount - 1} questions.
          <br></br> In Infinite Mode you can answer as many questions as you want.
        </p>
      </div>
  )
}

export default Info