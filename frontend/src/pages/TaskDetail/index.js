import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StatusBar, AsyncStorage, Alert } from 'react-native'

import api from '../../services/api'

import {
    Container,
    Header,
    NavigateBackButton,
    HeaderTitle,
    Card,
    CardContent,
    TaskTitle,
    TaskDescription,
    CardFooter,
    Pomodoros,
    TrashIcon
} from './styles'

export default function TaskDetail() {
    // Navigation functions ***START***
        const navigation = useNavigation()
        const route = useRoute()

        const task = route.params.task

        function navigateBack() {
            navigation.goBack()
        }

        function navigateToHome() {
            navigation.navigate('Main')
        }
    // Navigation functions ***END***

    async function deleteTask(id) {
        const username = await AsyncStorage.getItem('username')

        try {
            await api.delete(`tasks/${id}`, {
                headers: {
                    Authorization: username
                }
            })
            
            navigation.goBack()
        } catch (error) {
            Alert.alert('Error', "Couldn't delete the task, please try again.")
        }
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#6A75C2" />
            <Container>
                <Header>
                    <NavigateBackButton onPress={navigateBack}>
                        <Feather name="arrow-left" size={35} color="#FFF" />
                    </NavigateBackButton>
                    <HeaderTitle>Task</HeaderTitle>
                    <Feather onPress={navigateToHome} name="home" size={30} color="#FFF" />
                </Header>
                <Card>
                    <CardContent>
                        <TaskTitle>{task.taskTitle}</TaskTitle>
                        <TaskDescription>{task.taskDescription}</TaskDescription>
                    </CardContent>
                    <CardFooter>
                        <Feather name="clock" size={20} color="#fda993" />
                        <Pomodoros>{task.pomodoros}</Pomodoros>
                    </CardFooter>
                    <TrashIcon onPress={() => deleteTask(task.id)}>
                        <Feather name="trash-2" size={30} color="#fda993" />
                    </TrashIcon>
                </Card>
            </Container>
        </>
    )
}