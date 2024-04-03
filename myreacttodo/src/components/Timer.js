import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hours, setHours] = useState(0)
    const [active, setActive] = useState(false)

    useEffect(() => {
        let intervalId
        if (active) {
            intervalId = setInterval(() => {
                setSeconds((prev) => prev + 1)
                if (seconds === 10) {
                    setSeconds(0)
                    setMinute(minute + 1)
                }
                if (minute === 10) {
                    setMinute(0)
                    setHours(hours + 1)
                }
            }, 1000)


        }
        return (() => {
            clearInterval(intervalId)
        })

    }, [seconds, active])

    const formatTime = (time) => {
        if (time < 10) {
            return `0${time}`
        }
        else {
            return `${time}`
        }

    }
    return (
        <>
            <div>Timer</div>
            <h1>Time: {formatTime(hours)} : {formatTime(minute)} : {formatTime(seconds)} </h1>
            <button onClick={() => { setActive(true) }}>Start</button>
            <button onClick={() => { setActive(false) }}>Stop</button>
            <button onClick={() => { setActive(false) }}>Clear</button>
        </>

    )
}

export default Timer