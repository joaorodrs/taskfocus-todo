import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

import { Container, TabsContainer, TabItem, TabText } from './styles'

export default function Tabs({ translateY }) {

    // Navigation functions START
        const navigation = useNavigation()
    // Navigation functions END

    return(
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 50],
                    extrapolate: 'clamp',
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.3],
                extrapolate: 'clamp',
            })
        }}>
            <TabsContainer>
                <TabItem onPress={() => navigation.navigate('ForNow')}>
                    <Feather name="flag" size={24} color="#FFF" />
                    <TabText>For now</TabText>
                </TabItem>
                <TabItem onPress={() => navigation.navigate('Today')}>
                    <Feather name="sun" size={24} color="#FFF" />
                    <TabText>Today</TabText>
                </TabItem>
                <TabItem onPress={() => navigation.navigate('Tomorrow')}>
                    <Feather name="sunrise" size={24} color="#FFF" />
                    <TabText>Tomorrow</TabText>
                </TabItem>
                <TabItem onPress={() => navigation.navigate('ThisWeek')}>
                    <Feather name="calendar" size={24} color="#FFF" />
                    <TabText>This week</TabText>
                </TabItem>
                <TabItem onPress={() => navigation.navigate('TakeTime')}>
                    <Feather name="clock" size={24} color="#FFF" />
                    <TabText>Take Time</TabText>
                </TabItem>
                <TabItem onPress={() => navigation.navigate('Settings')}>
                    <Feather name="settings" size={24} color="#FFF" />
                    <TabText>Settings</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}