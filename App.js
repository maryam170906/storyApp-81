import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './Navigation/DrawerNavigation'
import TabNavigation from "./Navigation/TabNavigation"

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
      <DrawerNavigation/>
      <TabNavigation/>
    </NavigationContainer>
    )
  }
}
