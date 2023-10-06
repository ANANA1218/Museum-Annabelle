import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import PeintureList from '../peinture/PeintureList';
import GetAllpeinture from './peinture/GetAllpeinture';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.navigate(route.name); // Utilisez `navigate` pour changer d'écran
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
    
  {/* if user =  admin */}


      <Tab.Screen
        name="Home ADMIN"
        component={GetAllpeinture}
        options={{
          tabBarLabel: 'Home ADMIN',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />

 
       <Tab.Screen
        name="Liste Users ADMIN"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Liste Users ADMIN',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="file" size={size} color={color} />;
          },
        }}
      />
      
     
      <Tab.Screen
        name="logout"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'logout',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="logout" size={size} color={color} />;
          },
        }}
      />


        {/* if admin = redac */}

        <Tab.Screen
        name="Home "
        component={PeintureList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />

      
      <Tab.Screen
        name="Profile"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account" size={size} color={color} />;
          },
        }}
      />



    </Tab.Navigator>
  );
}
