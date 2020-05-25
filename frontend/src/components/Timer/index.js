import React, { useState } from 'react'
// General imports
import { Feather } from '@expo/vector-icons'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

// Styled components
import {
    Container,
    RenderTimeContainer,
    TimerContainer,
    Title,
    TimerTitle,
    PomodoroContainer,
    PlayButton,
    CountdownContainer,
} from './styles'

export default function Timer({ translateY }) {
    // Timing variables are used in the countdown circle timer

    // Timing variables ***START***
        const minuteSeconds = 60
        const hourSeconds = 3600
        const timerDuration = 1800

        const renderTime = (time) => {
            if (isPlaying === false) {
                time = ' ' // setting time value to ' ' when timer is not running
            } // setting time to ' ', the remaining time will not show when timer is stopped
            
            return (
            <RenderTimeContainer className="time-wrapper">
                <TimerTitle className="time">{time}</TimerTitle>
            </RenderTimeContainer>
            )
        }

        const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0

        const [isPlaying, setIsPlaying] = useState(false) // if false, the timer will not run

        const timerProps = { // some props from 'react-native-countdown-circle-timer'
            isPlaying: isPlaying,
            strokeWidth: 10
        }
    // Timing variables ***END***

    // Timer functions ***START***
    const [playOrPause, setPlayOrPause] = useState('play')

    function startTimer() {
        setPlayOrPause('pause')
        setIsPlaying(true)
    }

    function stopTimer() {
        setPlayOrPause('play')
        setIsPlaying(false)
    }
    // Timer functions ***START***

    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [200, 0],
                    extrapolate: 'clamp'
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 300],
                outputRange: [0, 1],
            })
        }}>
            <PomodoroContainer>
                <Title>Timer</Title>
                <TimerContainer>
                    <CountdownContainer>
                        <CountdownCircleTimer
                            {...timerProps}
                            colors={[["#6A75C2"]]}
                            size={250}
                            trailColor='rgba(106,117,194,0.49)'
                            duration={1800}
                        >
                            {({ elapsedTime }) =>
                                renderTime(
                                    getTimeMinutes(timerDuration - elapsedTime / 1000)
                                )
                            }
                        </CountdownCircleTimer>
                    </CountdownContainer>
                </TimerContainer>
                <PlayButton onPress={startTimer}>
                    <Feather name={playOrPause} size={35} color="#FFF" />
                </PlayButton>
            </PomodoroContainer>
        </Container>
    )
}