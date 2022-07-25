import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/home';
import SettingScreen from './src/setting';
import FavouriteScreen from './src/favourite';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOption={{
          activeTintColor: '#3D853D',
        }}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{
            tabBarLabel: 'Favourite',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="heart-multiple-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
