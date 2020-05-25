import React, { useState, useEffect } from 'react'
// General imports
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar, AsyncStorage } from 'react-native'

import api from '../../services/api'

// Styled Components
import {
    Container,
    Header,
    HeaderTitle,
    NavigateBackButton,
    BlocksContainer,
    BlockItem,
    BlockTitle,
    BlockDescription,
    BlockFooter,
    Pomodoros,
    TrashIcon
} from './styles.js'

export default function TakeTime() {
    // Navigation functions ***START***
        const navigation = useNavigation()

        function navigateBack() {
            navigation.navigate('Main')
        }
    // Navigation functions ***END***

    // Load tasks functions ***START***
        const [tasks, setTasks] = useState([])

        async function loadTasks() {
            const username = await AsyncStorage.getItem('username')
            await api.get('taskstaketime', {
                headers: {
                    Authorization: username
                }
            }).then(response => {
                setTasks(response.data)
            })
        }

        useEffect(() => {
            loadTasks()
        }, [])
    // Load tasks functions ***END***

    async function deleteTask(id) {
        const username = await AsyncStorage.getItem('username')

        try {
            await api.delete(`tasks/${id}`, {
                headers: {
                    Authorization: username
                }
            })
            
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            Alert.alert('Error', "Couldn't delete the task, please try again.")
        }
    }

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <Header>
                <NavigateBackButton onPress={navigateBack}>
                    <Feather name="arrow-left" size={35} color="#6A75C2" />
                </NavigateBackButton>
                <HeaderTitle>Take time</HeaderTitle>
                <Feather name="clock" size={30} color="#fda993" />
            </Header>
            <BlocksContainer
                keyExtractor={task => String(task.id)}
                data={tasks}
                renderItem={({ item: task }) => (
                    <BlockItem onPress={() => navigateToTaskDetail(task)} >
                    <BlockTitle>{task.taskTitle}</BlockTitle>
                    <BlockDescription>{task.taskDescription}</BlockDescription>
                    <BlockFooter>
                        <Feather name="clock" size={20} color="#fda993" />
                        <Pomodoros>{task.pomodoros}</Pomodoros>
                    </BlockFooter>
                    <TrashIcon onPress={() => deleteTask(task.id)}>
                        <Feather name="trash-2" size={30} color="#fda993" />
                    </TrashIcon>
                </BlockItem>
                )}
            />
        </Container>
    )
}