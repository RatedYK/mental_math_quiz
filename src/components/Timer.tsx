import { useStopwatch } from 'react-timer-hook'
import { useEffect } from 'react'

type TimerProps = {
    gameFinished: boolean
    updateTime: (userMinute:number, userSecond:number) => void
}

const Timer = ({gameFinished, updateTime} : TimerProps) => {
    
    useEffect(() => {
        if (gameFinished) {
            updateTime(minutes, seconds)
        }
    }, [gameFinished])

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        reset,
      } = useStopwatch({ autoStart: true });
 
  return (
    <div className='timer--container' style={gameFinished ? {display: "none"} : {display: "block"} }>
        <div className='timer--time'>{minutes >= 10 ? minutes: `0${minutes}`} : {seconds >= 10 ? seconds : `0${seconds}`}</div>
    </div>
  )
}

export default Timer