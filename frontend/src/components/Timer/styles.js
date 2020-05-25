import styled from 'styled-components/native';
import{ StyleSheet, Animated } from 'react-native'

export const Container = styled(Animated.View)`
    margin: 0 30px;
`

export const PomodoroContainer = styled.View`
    padding: 10px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: #6A75C2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CountdownContainer = styled.View`
    margin-bottom: 30px;
`

export const RenderTimeContainer = styled.View`
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
    align-self: center;
    margin-bottom: 20px;
`

export const TimerTitle = styled.Text`
    font-size: 45px;
    margin-top: 10px;
    font-weight: bold;
    align-self: center;
`

export const TimerContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    text-align: center;
`

export const TimerDescription = styled.Text`
    font-size: 20px;
`

export const PlayButton = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: #FDA993;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-right: 10px;
    border-radius: 30px;
    position: absolute;
    top: 80%;
    left: 43%;
    right: 0;
    bottom: 0;
`