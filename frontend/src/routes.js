import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Login from './pages/Login'
import Register from './pages/Register'

import Main from './pages/Main'

import ForNow from './pages/ForNow'
import Today from './pages/Today'
import Tomorrow from './pages/Tomorrow'
import ThisWeek from './pages/ThisWeek'
import TakeTime from './pages/TakeTime'

import SeeAll from './pages/SeeAll'

import TaskDetail from './pages/TaskDetail';
import CreateTask from './pages/CreateTask';

import Settings from './pages/SettingsPage'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Main" component={Main} />

                <AppStack.Screen name="ForNow" component={ForNow} />
                <AppStack.Screen name="Today" component={Today} />
                <AppStack.Screen name="Tomorrow" component={Tomorrow} />
                <AppStack.Screen name="ThisWeek" component={ThisWeek} />
                <AppStack.Screen name="TakeTime" component={TakeTime} />

                <AppStack.Screen name="CreateTask" component={CreateTask} />

                <AppStack.Screen name="TaskDetail" component={TaskDetail} />

                <AppStack.Screen name="Settings" component={Settings} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}