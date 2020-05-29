import React, { useState, useEffect } from 'react'

// General imports
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StatusBar, AsyncStorage, Alert } from 'react-native'

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

export default function AlterateTask() {
    // Navigation functions ***START***
        const navigation = useNavigation()
        const route = useRoute()

        const [task, setTask] = useState(route.params.task) // it catches the task data from the previous screen

        const id = route.params.id // it catches the task id from the previous screen

        function navigateBack() {
            navigation.goBack()
        }
    // Navigation functions ***END***
    
    // Alterate tasks functions and states ***START***
        // the inputs with "<==" are going to be filled initialy with the previous value (all them)
            const [taskTitle, setTaskTitle] = useState(task.taskTitle) // <==
            const [taskPriority, setTaskPriority] = useState(task.taskPriority) // <==
            const [pomodoros, setPomodoros] = useState(task.pomodoros) // <==
            const [taskDescription, setTaskDescription] = useState(task.taskDescription) // <==
        //

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
        
        async function alterate() {
            const username = await AsyncStorage.getItem('username')

            const data = {
                taskTitle,
                taskPriority,
                pomodoros,
                taskDescription
            }

            try {
                await api.put(`tasks/${id}`, data, {
                    headers: {
                        Authorization: username
                    }
                })

                setTask(data)

                console.log(data)
                console.log(task)

                navigation.navigate('TaskDetail', { task })
            } catch (error) {
                Alert.alert('Error', "Couldn't alterate the task")
            }
        }
    // Alterate tasks functions and states ***END***

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#6A75C2" />
            <Container>
                <Card>
                    <CardTitle>Alterate</CardTitle>
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
                <AddContainer onPress={alterate}>
                    <Feather name="edit-3" size={40} color="#FFF" />
                </AddContainer>
            </Container>
        </>
    )
}