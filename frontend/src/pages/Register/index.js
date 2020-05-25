import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar, Text, Alert } from 'react-native'

import api from '../../services/api'

import {
    Container,
    RegisterCard,
    CardForm,
    CardTitle,
    UsernameInputText,
    UsernameInput,
    EmailInputText,
    EmailInput,
    PasswordInputText,
    PasswordInput,
    PasswordRepeatInputText,
    PasswordRepeatInput,
    SubmitButton,
    RegisterContainer,
    RegisterText
} from './styles'

export default function Login() {
    // Navigation functions START
        const navigation = useNavigation()

        function navigateToLogin() {
            navigation.navigate('Login')
        }
    // Navigation functions END

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function register(e) {
        e.preventDefault()

        const data = {
            username,
            email,
            password
        }

        console.log(data)

        try {
            await api.post('users', data)

            alert("Seu cadastro foi feito com sucesso!")

            navigation.navigate('Login')
        } catch(error) {
            alert("Erro no cadastro!")
        }
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#6A75C2" />
            <RegisterCard>
                <CardTitle>Register</CardTitle>
                <CardForm  >
                    <UsernameInputText>Create username</UsernameInputText>
                    <UsernameInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={true}
                        value={username}
                        onChangeText={setUsername}
                    />

                    <EmailInputText>Email</EmailInputText>
                    <EmailInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <PasswordInputText>Create password</PasswordInputText>
                    <PasswordInput
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <PasswordRepeatInputText>Repeat password</PasswordRepeatInputText>
                    <PasswordRepeatInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <SubmitButton onPress={register} >
                        <Text style={{ fontSize: 20, color: "#FFF", fontWeight: "bold" }}>Create</Text>
                    </SubmitButton>
                </CardForm>
                <RegisterContainer onPress={navigateToLogin}>
                    <Feather name="arrow-left" size={20} color="#6A75C2" />
                    <RegisterText>Already have an account?</RegisterText>
                </RegisterContainer>
            </RegisterCard>
        </Container>
    )
}