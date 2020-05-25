import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Header,
    NavigateBackButton,
    HeaderTitle
} from './styles'

export default function SeeAll() {
    const navigation = useNavigation()

    function navigateBack() {
        navigation.navigate('Main')
    }

    return (
        <Container>
            <Header>
            <NavigateBackButton onPress={navigateBack}>
                <Feather name="arrow-left" size={35} color="#6A75C2" />
            </NavigateBackButton>
            <HeaderTitle>All tasks</HeaderTitle>
            <Feather name="check-circle" size={30} color="#fda993" />
        </Header>
        </Container>
    )
}