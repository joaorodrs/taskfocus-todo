import styled from 'styled-components/native';
import Constants from 'expo-constants'

export const Container = styled.View`
    flex: 1;
    background: #FFF;
    padding-top: ${Constants.statusBarHeight}px;
    justify-content: space-between;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 10px;
`

export const HeaderTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

export const NavigateBackButton = styled.TouchableOpacity``

export const BlocksContainer = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    padding-left: 20px;
    padding-right: 20px;
`

export const BlockItem = styled.TouchableOpacity`
    width: 100%;
    align-self: center;
    height: 150px;
    background: rgba(106,117, 194, 1);
    border-radius: 30px;
    margin: 5px;
    padding: 20px;
    justify-content: space-between;
`

export const BlockTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #FFF;
`

export const BlockDescription = styled.Text`
    font-size: 15px;
    color: #FFF;
`

export const BlockFooter = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Pomodoros = styled.Text`
    font-size: 18px;
    color: #fda993;
    margin-left: 5px;
`

export const TrashIcon = styled.TouchableOpacity`
    position: absolute;
    left: 97%;
    top: 15%;
`
