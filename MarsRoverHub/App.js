import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// Stack
import {createStackNavigator} from '@react-navigation/stack';
// Bottom tab
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

// import RoverSelectedScreen from './screens/RoverSelectedScreen';
import SpiritScreen from './screens/SpiritScreen';
import CuriosityScreen from './screens/CuriosityScreen';
import OpportunityScreen from './screens/OpportunityScreen';
import PerseveranceScreen from './screens/PerseveranceScreen';

import HomeScreen from './screens/HomeScreen';

// ! This is home screen ~~~~~~~~~~~~~
function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home screen 2</Text>


      <Button
        title="Spirit Rover"
        onPress={() => navigation.navigate('Spirit')}
      />

      <Button
        title="Curiosity Rover"
        onPress={() => navigation.navigate('Curiosity')}
      />

      <Button
        title="Opportunity Rover"
        onPress={() => navigation.navigate('Opportunity')}
      />

      <Button
        title="Perseverance Rover"
        onPress={() => navigation.navigate('Perseverance')}
      />
    </View>
  );
}

// * Profile Screen ~~~~~~~~
// * delete when not needed
/*
function Profile({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
*/

// * News Article Bottom Tab
function News() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>News!</Text>
    </View>
  );
}

// Transition animation
const forFade = ({current, next}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};

// Stack and Tab Nav Combo
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// * Bottom Tab Navigation
// Bottom Tabs
function BottomTabContainer() {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: 'black',
        tabBarStyle: {backgroundColor: 'black'},
        tabBarActiveTintColor: 'orange',
      })}>
      <Tab.Screen
        name="Home Screen"
        component={Home}
        options={{
          title: 'v0.2', // this is hidden, change @param headerTintColor -> white
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="NewsScreen"
        component={News}
        options={{
          title: 'News Screen',
          tabBarLabel: 'News Screen',
        }}
      />
    </Tab.Navigator>
  );
}

// * Stack Navigation
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Mars Rover Hub"
            component={BottomTabContainer}
            options={{
              headerTintColor: 'white',
              headerStyle: {backgroundColor: 'black'},
              headerStyleInterpolator: forFade,
            }}
          />
          <Stack.Screen
            name="Mars Rover"
            component={Home}
            options={{
              headerTintColor: 'white',
              headerStyle: {backgroundColor: 'black'},
            }}
          />
          <Stack.Screen
            name="Spirit"
            component={SpiritScreen}
            options={{headerStyleInterpolator: forFade}}
          />

          <Stack.Screen
            name="Curiosity"
            component={CuriosityScreen}
            options={{headerStyleInterpolator: forFade}}
          />

          <Stack.Screen
            name="Opportunity"
            component={OpportunityScreen}
            options={{headerStyleInterpolator: forFade}}
          />

          <Stack.Screen
            name="Perseverance"
            component={PerseveranceScreen}
            options={{headerStyleInterpolator: forFade}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
