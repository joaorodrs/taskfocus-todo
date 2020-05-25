import styled from 'styled-components/native';
import Constants from 'expo-constants'

export const Container = styled.View`
    flex: 1;
    background: #FFF;
    padding-top: ${Constants.statusBarHeight}px - 20px;
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
