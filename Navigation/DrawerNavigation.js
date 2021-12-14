import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation'
import Profile from '../screen/Profile'

const Drawer = createDrawerNavigator()

export default class DrawerNavigation extends React.Component{
  render(){
    return(
             <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigation} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    )
  }
}