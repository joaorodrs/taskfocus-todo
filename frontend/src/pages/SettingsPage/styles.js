import styled from 'styled-components/native'
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
    flex: 1;
    background: #fda993;
    padding-top: ${Constants.statusBarHeight}px;
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 15px;
    justify-content: space-between;
`

export const NavigateBackButton = styled.TouchableOpacity``

export const HeaderTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`

export const SettingsCard = styled.View`
    background: #FFF;
    margin: 0 20px;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
`

export const LogAsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
`

export const LogAsText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #6A75C2;
`

export const LogOutButton = styled.TouchableOpacity``

export const Icon = styled.Image`
    max-height: 40px;
    max-width: 45px;
`

export const MenuContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 15px;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: #c5c5c5;
`

export const MenuButton = styled.View`
    flex-direction: row;
`

export const MenuText = styled.Text`
    margin-left: 10px;
    font-size: 15px;
    color: #333
`
