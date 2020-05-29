import React, { useState } from 'react'

// General imports
import { Feather } from '@expo/vector-icons'
import { AsyncStorage, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/TaskFocusOF.png'

// Styled components
import {
    Container,
    Header,
    HeaderTitle,
    NavigateBackButton,
    SettingsCard,
    LogAsContainer,
    LogAsText,
    LogOutButton,
    Icon,
    MenuContainer,
    MenuButton,
    MenuText
} from './styles'

export default function SettingsPage() {
    // Navigation functions ***START***
        const navigation = useNavigation()

        function navigateBack() {
            navigation.navigate('Main')
        }
    // Navigation functions ***START***

    // Get username functions and states ***START***
        const [loggedAs, setLoggedAs] = useState('')

        async function getUsername() {
            const username = await AsyncStorage.getItem('username')

            setLoggedAs(username)
        }

        getUsername()
    // Get username functions and states ***START***

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#fda993" />
            <Header>
                <NavigateBackButton onPress={navigateBack}>
                    <Feather name="arrow-left" size={35} color="#6A75C2" />
                </NavigateBackButton>
                <HeaderTitle>Settings</HeaderTitle>
                <Icon source={logoImg} resizeMode="contain" />
            </Header>
            <SettingsCard>
                <LogAsContainer>
                    <LogAsText>You've logged as {loggedAs}</LogAsText>
                    <LogOutButton>
                        <Feather name="log-out" size={25} color="#fda993" />
                    </LogOutButton>
                </LogAsContainer>
            </SettingsCard>
            <SettingsCard>
                <MenuContainer>
                    <MenuButton>
                        <Feather name="star" size={20} color="#6A75C2" />
                        <MenuText>Liked the app?</MenuText>
                    </MenuButton>
                </MenuContainer>
                <MenuContainer>
                    <MenuButton>
                        <Feather name="code" size={20} color="#6A75C2" style />
                        <MenuText>Help our open source code!</MenuText>
                    </MenuButton>
                </MenuContainer>
                <MenuContainer>
                    <MenuButton>
                        <Feather name="message-circle" size={20} color="#6A75C2" />
                        <MenuText>Talk with us</MenuText>
                    </MenuButton>
                </MenuContainer>
                <MenuContainer>
                    <MenuButton>
                        <Feather name="share-2" size={20} color="#6A75C2" />
                        <MenuText>Share the app to your friends!</MenuText>
                    </MenuButton>
                </MenuContainer>
                <MenuContainer>
                    <MenuButton>
                        <Feather name="help-circle" size={20} color="#6A75C2" />
                        <MenuText>Help me</MenuText>
                    </MenuButton>
                </MenuContainer>
            </SettingsCard>
        </Container>
    )
}