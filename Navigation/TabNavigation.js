import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePost from '../screen/CreatePost'
import Feed from '../screen/Feed '

const Tab = createBottomTabNavigator()

export default class App extends React.Component{
  render(){
    return(
          
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Create Post') {
              iconName = focused
                ? 'create'
                : 'create-outline';
            } else if (route.name === 'Feed') {
              iconName = focused ? 'search' : 'search-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Create Post" component={CreatePost} />
        <Tab.Screen name="Feed" component={Feed} />
      </Tab.Navigator>
    )
  }
}
