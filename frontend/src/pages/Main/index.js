import React, { useState, useEffect } from 'react'
// General imports
import { useNavigation } from '@react-navigation/native'
import  { Feather } from '@expo/vector-icons'
import { Animated, AsyncStorage, StatusBar, Alert, View } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import api from '../../services/api'

// External components
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Timer from '../../components/Timer'

// Styled components
import {
    Container,
    Content,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Title,
    CardTitle,
    CardDescription,
    Pomodoros,
    Priority,
    AllTasksButton,
    AllTasksText
} from './styles'

export default function Main() {

    // Navigation functions ***START***
        const navigation = useNavigation()

        function navigateToCreateTask() {
            navigation.navigate('CreateTask')
        }
    // Navigation functions ***END***


    // Animation functions ***START***
        let offset = 0
        const translateY = new Animated.Value(0)

        const animatedEvent = Animated.event( // vai captar a posição que o usuário tá arrastando e vai mandar para o translateY
            [
                {
                    nativeEvent: {
                        translationY: translateY, // passing the translateY variable to translationY param
                    }
                }
            ],
            { useNativeDriver: true } // to use native Java or Swift to do the animation.
        )

        function onHandlerStateChanged(event) { // to pass the user moves to translateY variable
            if (event.nativeEvent.oldState === State.ACTIVE) {
                let opened = false
                const { translationY } = event.nativeEvent

                offset += translationY

                if (translationY >= 100) {
                    opened = true
                } else {
                    translateY.setValue(offset)
                    translateY.setOffset(0)
                    offset = 0
                }

                Animated.timing(translateY, {
                    toValue: opened ? 380 : 0,
                    duration: 100,
                    useNativeDriver: true,
                }).start(() => {
                    offset = opened ? 380 : 0
                    translateY.setOffset(offset)
                    translateY.setValue(0)
                })
            }
        }
    // Animation functions ***END***

    const [tasks, setTasks] = useState([])

    async function loadTask() {
        const username = await AsyncStorage.getItem('username')

        try {
            api.get('tasksone', {
                headers: {
                    Authorization: username
                }
            }).then(response => {
                setTasks(response.data)
            })
        } catch(error) {
            Alert.alert('Erro', 'Impossível mostrar tarefas, tente novamente mais tarde.')
        }
        
    }

    useEffect(() => {
        loadTask()
    }, [tasks])    

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            
            <Header />
            
            <Content>
                <Timer translateY={translateY} />

                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChanged}
                >
                    <Card style={{
                            transform: [{
                                translateY: translateY.interpolate({
                                    inputRange: [-350, 0, 380],
                                    outputRange: [-50, 0, 380],
                                    extrapolate: 'clamp'
                                })
                            }]
                        }}>
                            {tasks.map(task => (
                                <React.Fragment key={task.id}>
                                    <CardHeader>
                                        <Feather name="chevrons-down" size={30} color="#fda993" />
                                        <Title>Scroll down to start!</Title>
                                        <Feather name="chevrons-down" size={30} color="#fda993" />
                                    </CardHeader>
                                    <CardContent key={task.id}>
                                        <Feather name="circle" size={30} color="#666" />
                                        <CardTitle>{task.taskTitle}</CardTitle>
                                        <CardDescription>{task.taskDescription}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <Feather name="clock" size={24} color="#fda993" />
                                        <Pomodoros>{task.pomodoros}</Pomodoros>
                                        <Feather name="flag" size={24} color="#fda993" />
                                        <Priority>{task.taskPriority}</Priority>
                                    </CardFooter>
                                </React.Fragment>
                            ))}
                        </Card>
                </PanGestureHandler>
            </Content>
            
            <Tabs translateY={translateY} />
            
            <AllTasksButton onPress={navigateToCreateTask} >
                <Feather name="plus-circle" size={30} color="#fda993" />
                <AllTasksText>Add task</AllTasksText>
                <Feather name="plus-circle" size={30} color="#fda993" />
            </AllTasksButton>
        </Container>
    )
}