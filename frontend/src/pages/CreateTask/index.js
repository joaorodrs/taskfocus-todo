import React, { useState, useEffect } from 'react'

// General imports
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar, AsyncStorage } from 'react-native'

import api from '../../services/api'

// Styled components
import {
    Container,
    Card,
    CardTitle,
    TitleInputText,
    TitleInput,
    DescriptionInputText,
    DescriptionInput,
    CardFooter,
    Pomodoros,
    PomodorosInput,
    Priority,
    PriorityInput,
    ExitIcon,
    AddContainer
} from './styles'

export default function CreateTask() {
    // Navigation functions ***START***
        const navigation = useNavigation()

        function navigateBack() {
            navigation.goBack()
        }
    // Navigation functions ***END***
    
    // Create tasks functions and states ***START***
        const [taskTitle, setTaskTitle] = useState('')
        const [taskPriority, setTaskPriority] = useState('0')
        const [pomodoros, setPomodoros] = useState('1')
        const [taskDescription, setTaskDescription] = useState('')

        // Rules that make the flag color change
            const [priorityFlagColor, setPriorityFlagColor] = useState('#a2a2a2')

            useEffect(() => {
                if (taskPriority === '0') {
                    setPriorityFlagColor('#a2a2a2')
                } else if (taskPriority === '1') {
                    setPriorityFlagColor('#35ce00')
                } else if (taskPriority === '2') {
                    setPriorityFlagColor('#ffdf03')
                } else {
                    setPriorityFlagColor('#ce1600')
                }
            }, [taskPriority])
        // Rules that make the flag color change

        async function createTask() {
            const username= await AsyncStorage.getItem('username')

            const data = {
                taskTitle,
                taskPriority,
                pomodoros,
                taskDescription
            }

            try {
                await api.post('tasks', data, {
                    headers: {
                        Authorization: username
                    }
                })

                navigation.navigate('Main')
            } catch (error) {
                Alert.alert('Error', "Couldn't create a new task")
            }
        }
    // Create tasks functions and states ***END***

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#6A75C2" />
            <Container>
                <Card>
                    <CardTitle>Create a task</CardTitle>
                    <TitleInputText>Title</TitleInputText>
                    <TitleInput
                        autoFocus={true}
                        value={taskTitle}
                        onChangeText={setTaskTitle}
                    />
                    <DescriptionInputText>Description</DescriptionInputText>
                    <DescriptionInput
                        value={taskDescription}
                        onChangeText={setTaskDescription}
                    />
                    <CardFooter>
                        <Pomodoros>
                            <Feather name="clock" size={20} color="#fda993" />
                            <PomodorosInput
                                selectedValue={pomodoros}
                                onValueChange={(itemValue, itemIndex) => setPomodoros(itemValue)}
                                mode="dropdown"
                            >
                                <PomodorosInput.Item color="#fda993" label="1" value="1" />
                                <PomodorosInput.Item color="#fda993" label="2" value="2" />
                                <PomodorosInput.Item color="#fda993" label="3" value="3" />
                                <PomodorosInput.Item color="#fda993" label="4" value="4" />
                                <PomodorosInput.Item color="#fda993" label="5" value="5" />
                                <PomodorosInput.Item color="#fda993" label="6" value="6" />
                            </PomodorosInput>
                        </Pomodoros>
                        <Priority>
                            <Feather name="flag" size={20} color={priorityFlagColor} />
                            <PriorityInput
                                selectedValue={taskPriority}
                                onValueChange={(itemValue, itemIndex) => setTaskPriority(itemValue)}
                                mode="dropdown"
                            >
                                <PriorityInput.Item color={priorityFlagColor} label="0" value="0" />
                                <PriorityInput.Item color={priorityFlagColor} label="1" value="1" />
                                <PriorityInput.Item color={priorityFlagColor} label="2" value="2" />
                                <PriorityInput.Item color={priorityFlagColor} label="3" value="3" />
                            </PriorityInput>
                        </Priority>
                    </CardFooter>
                    <ExitIcon onPress={navigateBack}>
                        <Feather name="x" size={25} color="#6A75C2" />
                    </ExitIcon>
                </Card>
                <AddContainer onPress={createTask}>
                    <Feather name="plus" size={40} color="#FFF" />
                </AddContainer>
            </Container>
        </>
    )
}