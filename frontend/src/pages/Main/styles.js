import { Animated } from 'react-native'
import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.View`
  flex: 1;
  background: #FFF;
  padding-top: ${Constants.statusBarHeight}px;
  justify-content: center;
`

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
  border-color: #6A75C2;
`

export const Card = styled(Animated.View)`
  flex: 1;
  background: #FFF;
  margin: 0 20px;
  height: 100%;
  border-width: 2px;
  border-radius: 15px;
  border-color: #6A75C2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`

export const CardHeader = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 5px;
  margin: 15px;
  margin-bottom: 0;
  border-radius: 10px;
`

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
`

export const CardFooter = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #fda993;
`

export const CardTitle = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  font-weight: bold;
  color: #333;
  text-align: center;
`

export const CardDescription = styled.Text`
  font-size: 13px;
  text-align: center;
`

export const Pomodoros = styled.Text`
  margin-left: 5px;
  font-size: 24px;
  color: #fda993;
  margin-right: 40%;
`

export const Priority = styled.Text`
  margin-left: 5px;
  font-size: 24px;
  color: #fda993;
`

export const AllTasksButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20px;
  padding: 10px;
  border-width: 2px;
  border-color: #fda993;
  height: 50px;
  border-radius: 25px;
`

export const AllTasksText = styled.Text`
  font-size: 20px;
  color: #fda993;
`
