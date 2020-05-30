import React, { useEffect, useState } from 'react'

// General imports
import { Feather } from '@expo/vector-icons'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { AsyncStorage, StatusBar } from 'react-native'

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

export default function ForNow() {
    // Navigation functions *START*
        const navigation = useNavigation()

        function navigateBack() {
            navigation.navigate('Main')
        }

        function navigateToTaskDetail(taskId) {
            navigation.navigate('TaskDetail', { taskId }) // passing the task.id for the detail screen shows the task that the user clicked
        }

        const isFocused = useIsFocused()
    // Navigation functions *END*

    // Load tasks functions *START*
        const [tasks, setTasks] = useState([])
            
        async function loadTasks() {
            const username = await AsyncStorage.getItem('username')

            await api.get('tasksfornow', {
                headers: {
                    Authorization: username,
                },
            }).then(response => {
                setTasks(response.data)
            })
        }

        useEffect(() => {
            loadTasks()
        }, [isFocused])
    // Load tasks functions *END*

    // Delete tasks functions *START*
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
    // Delete tasks functions *END*

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <Header>
                <NavigateBackButton onPress={navigateBack}>
                    <Feather name="arrow-left" size={35} color="#6A75C2" />
                </NavigateBackButton>
                <HeaderTitle>For Now</HeaderTitle>
                <Feather name="flag" size={30} color="#Ff0f0f" />
            </Header>
            <BlocksContainer
                keyExtractor={task => String(task.id)}
                data={tasks}
                renderItem={({ item: task }) => (
                    <BlockItem onPress={() => navigateToTaskDetail(task.id)} >
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
            >
            </BlocksContainer>
        </Container>
    )
}