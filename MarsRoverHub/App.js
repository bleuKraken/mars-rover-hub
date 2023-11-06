import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RoverSelectedScreen from './screens/RoverSelectedScreen';
import SpiritScreen from './screens/SpiritScreen';
import CuriosityScreen from './screens/CuriosityScreen';
import OpportunityScreen from './screens/OpportunityScreen';
import PerseveranceScreen from './screens/PerseveranceScreen';

// ! This is home screen ~~~~~~~~~~~~~
function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home screen</Text>

      <Button
        title="Profile (Testing)"
        onPress={() => navigation.navigate('Profile')}
      />

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
function Profile({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mars Rover Hub"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'black'},
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerStyleInterpolator: forFade}}
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
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
