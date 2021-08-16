import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from '../main';
import MovieList from '../movieList';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="Movie View" component={MovieList} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default Routes;