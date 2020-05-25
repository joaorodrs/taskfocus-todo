import React from 'react'
import { Animated } from 'react-native'
import { Feather } from '@expo/vector-icons'

import LogoImg from '../../assets/TaskFocusOF.png'

import { Container, Top, Logo, Title } from './styles' 

export default function Header() {
    return(
        <Container>
            <Top>
                <Logo source={LogoImg} resizeMode="contain" />
                <Title>Sunday, 15</Title>
            </Top>
            <Feather name="chevron-down" size={20} color="#6A75C2" />
        </Container>
    )
}