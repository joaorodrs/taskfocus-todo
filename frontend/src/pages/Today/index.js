import React, { useState, useEffect } from 'react'

// General imports
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar, AsyncStorage } from 'react-native'

import api from '../../services/api'

// Styled components
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

export default function Today() {
    // Navigation functions ***START***
        const navigation = useNavigation()

        function navigateBack() {
            navigation.navigate('Main')
        }

        function navigateToTaskDetail(task) {
            navigation.navigate('TaskDetail', { task })
        }
    // Navigation functions ***END***

    // Load tasks functions ***START***
        const [tasks, setTasks] = useState([])

        async function loadTasks() {
            const username = await AsyncStorage.getItem('username')
            await api.get('taskstoday', {
                headers: {
                    Authorization: username,
                },
            }).then(response => {
                setTasks(response.data)
            })
        }

        useEffect(() => {
            loadTasks()
        }, [])
    // Load tasks functions ***END***

    // Delete task function ***START***
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
    // Delete task function ***START***

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <Header>
                <NavigateBackButton onPress={navigateBack}>
                    <Feather name="arrow-left" size={35} color="#6A75C2" />
                </NavigateBackButton>
                <HeaderTitle>Today</HeaderTitle>
                <Feather name="sun" size={30} color="#fda993" />
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