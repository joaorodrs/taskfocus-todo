import styled from 'styled-components/native';
import Constants from 'expo-constants'

export const Container = styled.View`
    flex: 1;
    background: #6A75C2;
    padding-top: ${Constants.statusBarHeight}px;
    justify-content: flex-start;
`

export const Header = styled.View`
    background-color: #6A75C2;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 10px;
`
export const HeaderTitle = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`

export const NavigateBackButton = styled.TouchableOpacity``

export const Card = styled.View`
    background: #FFF;
    margin: 0 20px;
    height: 50%;
    border-radius: 15px;
    margin-top: 20px;
    padding: 20px;
    justify-content: space-between;
`

export const CardContent = styled.View``

export const TaskTitle = styled.Text`
    font-size: 35px;
    margin-top: 3px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`

export const TaskDescription = styled.Text`
    font-size: 20px;
`

export const CardFooter = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Pomodoros = styled.Text`
    margin-left: 5px;
    font-size: 20px;
    color: #fda993;
`

export const PencilIcon = styled.TouchableOpacity`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 98%;
    top: 6%;
`
