// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator, { Routes } from './composants/Backoffice/BottomTabNavigator'; 
import Login from './composants/Login/LoginPassword'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
      initialParams={{}}
     />
  <Stack.Screen
    name="Main"
    component={BottomTabNavigator}
    options={{ headerShown: false }}
  />
        {/* Ajoutez les nouvelles routes ici */}
        <Stack.Screen
          name="OeuvreDetail"
          component={Routes.PeintureById}
          options={{ title: 'Détails de l\'oeuvre' }}
        />

        <Stack.Screen
          name="PostPeinture"
          component={Routes.PostPeinture}
          options={{ title: 'Ajouter une peinture' }}
        />
        <Stack.Screen
          name="PostUsers"
          component={Routes.PostUsers}
          options={{ title: 'Ajouter un utilisateur' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
