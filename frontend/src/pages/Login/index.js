import React, { useState } from 'react'

// General imports
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar, Text, Alert, AsyncStorage } from 'react-native'

import api from '../../services/api'

// Styled components
import {
    Container,
    LoginCard,
    CardForm,
    CardTitle,
    UsernameInputText,
    UsernameInput,
    PasswordInputText,
    PasswordInput,
    SubmitButton,
    RegisterContainer,
    RegisterText
} from './styles'

export default function Login() {
    // Navigation functions START
        const navigation = useNavigation()

        function navigateToRegister() {
            navigation.navigate('Register')
        }
    // Navigation functions END
    
    // User login functions and states ***START***
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')

        async function login(e) {
            e.preventDefault()

            const data = {
                username,
                password
            }

            console.log(data)

            try {
                const response = await api.post('session', data)

                console.log(response.data)

                await AsyncStorage.setItem('username', response.data)

                navigation.navigate('Main')
            } catch(error) {
                Alert.alert('Falha no login', 'Tente novamente!')
            }
        }
    // User login functions and states ***START***

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#6A75C2" />
            <LoginCard>
                <CardTitle>Login</CardTitle>
                <CardForm>
                    <UsernameInputText>Username</UsernameInputText>
                    <UsernameInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={true}
                        value={username}
                        onChangeText={setUsername}
                    />
                    <PasswordInputText>Password</PasswordInputText>
                    <PasswordInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <SubmitButton onPress={login}>
                        <Text style={{ fontSize: 20, color: "#FFF", fontWeight: "bold" }}>Enter</Text>
                    </SubmitButton>
                </CardForm>
                <RegisterContainer onPress={navigateToRegister}>
                    <Feather name="arrow-left" size={20} color="#6A75C2" />
                    <RegisterText>Don´t have an account?</RegisterText>
                </RegisterContainer>
            </LoginCard>
        </Container>
    )
}