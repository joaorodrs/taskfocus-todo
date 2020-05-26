import styled from 'styled-components/native';
import Constants from 'expo-constants'

export const Container = styled.View`
    background-color: #6A75C2;
    flex: 1;
    padding-top: ${Constants.statusBarHeight}px;
    justify-content: center;
`

export const Card = styled.View`
    background: #FFF;
    margin: 0 20px;
    border-radius: 15px;
    padding: 20px;
    justify-content: space-between;
`

export const CardTitle = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin: 10px;
    margin-bottom: 0;
`

export const TitleInputText = styled.Text`
    background-color: #FFF;
    z-index: 5;
    padding-left: 5px;
    padding-right: 5px;
    position: absolute;
    left: 15%;
    top: 23%;
    color: #6A75C2;
`

export const TitleInput = styled.TextInput`
    margin: 10px;
    padding: 5px;
    border-width: 2px;
    border-color: #6A75C2;
    border-radius: 5px;
`

export const DescriptionInputText = styled.Text`
    background-color: #FFF;
    z-index: 5;
    padding-left: 5px;
    padding-right: 5px;
    position: absolute;
    left: 15%;
    top: 42%;
    color: #6A75C2;
`

export const DescriptionInput = styled.TextInput`
    margin: 10px;
    margin-top: 5px;
    padding: 5px;
    height: 150px;
    border-width: 2px;
    border-color: #6A75C2;
    border-radius: 5px;
`

export const CardFooter = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const Pomodoros = styled.View`
    flex-direction: row;
    align-items: center;
`

export const PomodorosInput = styled.Picker`
    height: 30px;
    width: 73px;
`

export const Priority = styled.View`
    flex-direction: row;
    align-items: center;
`

export const PriorityInput = styled.Picker`
    height: 30px;
    width: 73px;
`

export const ExitIcon = styled.TouchableOpacity`
    position: absolute;
    margin-top: 20px;
    margin-right: 20px;
    left: 98%;
`

export const AddContainer = styled.TouchableOpacity`
    background-color: #fda993;
    align-items: center;
    margin: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 10px;
`
