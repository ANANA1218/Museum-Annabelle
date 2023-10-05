import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ImageScreen from './ImageScreen';
import StatutScreen from './StatutScreen';
import CustomSidebarMenu from './CustomSidebarMenu';

const Drawer = createDrawerNavigator();

const App = () => {
    
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomSidebarMenu {...props} />}
            >
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Image' component={ImageScreen} />
                <Drawer.Screen name='Status' component={StatutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;