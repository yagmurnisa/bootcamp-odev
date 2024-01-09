import React, { useContext, useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import AddUser from './screens/AddUser'
import UserList from './screens/UserList'
import {SafeAreaView } from 'react-native'

const Stack = createNativeStackNavigator();

const Start = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                // headerShown: false
              }}
            >
              <Stack.Screen
              name="Home"
              component={HomeScreen}
              />
              <Stack.Screen
              name="UserList"
              component={UserList}
              />
              <Stack.Screen
              name="AddUser"
              component={AddUser}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Start