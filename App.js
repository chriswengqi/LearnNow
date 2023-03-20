import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { Platform, Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen} from './src/screens'
import { Osaka ,Tokyo, Hokkaido, LosAngeles, NewYork, SanFrancisco, Stockholm, Kiruna} from './src/screens'
import { navigationRef } from './src/navigation/RootNavigation'; 
import {decode, encode} from 'base-64'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { firebase } from './src/firebase/config'


if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }


const Stack = createStackNavigator();

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

export default function App() {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [isReady, setIsReady] = useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }


    useEffect(() => {
      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);

    // state restoration. Somehow it's not working properly even though i'm following the documentation properly.

    /** 
    React.useEffect(() => {
      const restoreState = async () => {
        try {
          const initialUrl = await Linking.getInitialURL();
  
          if (Platform.OS !== 'web' && initialUrl == null) {
            const savedState = await AsyncStorage.getItem(PERSISTENCE_KEY + user["email"]);
            const state = savedState ? JSON.parse(savedState) : undefined;
  
            if (state !== undefined) {
              setInitialState(state);
            }
          }
        } finally {
          setIsReady(true);
        }
      };
  
      if (!isReady) {
        restoreState();
      }
    }, [isReady]);

    */
    

  return (
    <NavigationContainer ref={navigationRef} 
    // onStateChange={(state) =>
      
      // AsyncStorage.setItem(PERSISTENCE_KEY + user["email"], JSON.stringify(state))}
    >
      <Stack.Navigator>
        { user ? (
          <>

          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>

          <Stack.Screen name="Osaka">
            {props => <Osaka {...props} extraData={user} />}
          </Stack.Screen>

          <Stack.Screen name="Tokyo">
            {props => <Tokyo {...props} extraData={user} />}
          </Stack.Screen>

          <Stack.Screen name="Hokkaido">
            {props => <Hokkaido {...props} extraData={user} />}
          </Stack.Screen>

          <Stack.Screen name="Los Angeles">
            {props => <LosAngeles {...props} extraData={user} />}
          </Stack.Screen>

          <Stack.Screen name="New York">
            {props => <NewYork {...props} extraData={user} />}
          </Stack.Screen>

          <Stack.Screen name="San Francisco">
            {props => <SanFrancisco {...props} extraData={user} />}
          </Stack.Screen>

          <Stack.Screen name="Stockholm">
            {props => <Stockholm {...props} extraData={user} />}
          </Stack.Screen>

          <Stack.Screen name="Kiruna">
            {props => <Kiruna {...props} extraData={user} />}
          </Stack.Screen>

          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
         
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}