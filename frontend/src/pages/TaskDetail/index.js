import React, { useEffect, useState } from 'react'

// General imports
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native'
import { StatusBar, AsyncStorage, Alert } from 'react-native'

import api from '../../services/api'

// Styled components
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
    PencilIcon
} from './styles'

export default function TaskDetail() {
    // Navigation functions ***START***
        const navigation = useNavigation()
        const route = useRoute()
        
        const isFocused = useIsFocused()
        
        const taskId = route.params.taskId

        function navigateBack() {
            navigation.goBack()
        }

        function navigateToHome() {
            navigation.navigate('Main')
        }

        function navigateToAlterateTask(task, id) {
            navigation.navigate('AlterateTask', { task, id })
        }
    // Navigation functions ***END***

    const [tasks, setTasks] = useState([])

    async function loadDetail() {
        const username = await AsyncStorage.getItem('username')

        try {
            api.get('taskdetail', {
                headers: {
                    Authorization: username,
                    taskId: taskId
                }
            }).then(response => {
                setTasks(response.data)
                console.log(taskId)
            })
        } catch(error) {
            Alert.alert('Error', 'Not possible do this action, try later.')
        }
    }

    useEffect(() => {
        loadDetail()

        console.log('taskdetail')
    }, [isFocused])

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
                    {tasks.map(task => (
                        <React.Fragment key={task.id}>
                            <CardContent>
                                <TaskTitle>{task.taskTitle}</TaskTitle>
                                <TaskDescription>{task.taskDescription}</TaskDescription>
                            </CardContent>
                            <CardFooter>
                                <Feather name="clock" size={20} color="#fda993" />
                                <Pomodoros>{task.pomodoros}</Pomodoros>
                            </CardFooter>
                            <PencilIcon onPress={() => navigateToAlterateTask(task, task.id)}>
                                <Feather name="edit-2" size={30} color="#fda993" />
                            </PencilIcon>
                        </React.Fragment>
                    ))}
                </Card>
            </Container>
        </>
    )
}