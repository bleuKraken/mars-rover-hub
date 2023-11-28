import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// * Stack
import {createStackNavigator} from '@react-navigation/stack';
// * Bottom tab
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// * Components
import RoverCard from './components/RoverCard';

// * Screens
// TODO add universal screen?
// import RoverSelectedScreen from './screens/RoverSelectedScreen';
import SpiritScreen from './screens/SpiritScreen';
import CuriosityScreen from './screens/CuriosityScreen';
import OpportunityScreen from './screens/OpportunityScreen';
import PerseveranceScreen from './screens/PerseveranceScreen';

// * Image locations
const curiosityImage = require('./images/rovers/curiosity_hq.jpg');
const perseveranceImage = require('./images/rovers/perseverance_hq.jpg');
const opportunityImage = require('./images/rovers/opportunity_hq.jpg');
const spiritImage = require('./images/rovers/spirit_hq.jpg');

// * Status indicator
const activeGreen = require('./images/icons/green-circle-16x16.png');
const NotActiveRed = require('./images/icons/red-circle-16x16.png');

// import HomeScreen from './screens/HomeScreen';

// ! This is home screen ~~~~~~~~~~~~~
function Home({navigation}) {
  return (
    <ScrollView style={styles.scrollviewBackground}>
      <RoverCard
        localImage={curiosityImage}
        activeStatus={activeGreen}
        roverName="Curiosity"
        lastPhotoData={'Oct 18th 2023'}
        cameraCount={'23'}
        onPress={() => navigation.navigate('Curiosity')}
      />
      <RoverCard
        localImage={perseveranceImage}
        activeStatus={activeGreen}
        roverName="Perseverance"
        lastPhotoData={'Oct 15th 2023'}
        cameraCount={'17'}
        onPress={() => navigation.navigate('Perseverance')}
      />
      <RoverCard
        localImage={spiritImage}
        activeStatus={NotActiveRed}
        roverName="Spirit"
        lastPhotoData={'Nov 18th 2020'}
        cameraCount={'28'}
        onPress={() => navigation.navigate('Spirit')}
      />
      <RoverCard
        localImage={opportunityImage}
        activeStatus={NotActiveRed}
        roverName="Opportunity"
        lastPhotoData={'Sept 23 2020'}
        cameraCount={'17'}
        onPress={() => navigation.navigate('Opportunity')}
      />
    </ScrollView>
  );
}

// * News Article Bottom Tab
function News() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>News!</Text>
    </View>
  );
}

//* Transition animation
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

//* Stack and Tab Nav Combo
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//* Bottom Tab Navigation
function BottomTabContainer() {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
        tabBarActiveTintColor: 'orange',


        
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'v0.2', 
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
              headerTitleStyle: {
                fontFamily: "my-custom-font",
                fontWeight: "bold",
                fontSize: 23
              },
              headerTitleAlign: 'center',
              headerStyleInterpolator: forFade,
            }}
          />
          <Stack.Screen
            name="Mars Rover"
            component={Home}
            options={{
              headerTintColor: 'white',
              headerStyle: {backgroundColor: 'white'},
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

const styles = StyleSheet.create({
  scrollviewBackground: {
    backgroundColor: 'rgb(0, 0, 0)', 
  },
});
