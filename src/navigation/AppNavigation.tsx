import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// HomeStack
import HomeScreen from '../screens/HomeScreen';
import Screens from '../utils/Screens';
import SampleScreen from '../screens/SampleScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={Screens.HomeScreen}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name={Screens.SampleScreen}
                component={SampleScreen}
                options={{ headerShown: true, title: "Home" }}
            />
        </HomeStack.Navigator>
    );
}

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen
                    name={Screens.HomeStack}
                    component={HomeStackScreen}
                    options={{
                        title: 'Home',
                        headerShown: false,
                        headerTransparent: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;