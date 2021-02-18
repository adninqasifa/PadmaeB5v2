import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Gallery from '../pages/Gallery';
import Calender from '../pages/Calender';;
import Messenger from '../pages/Messenger';
import FamilyTree from '../pages/FamilyTree';

import Children from '../pages/Children';
import GrandChildren from '../pages/GrandChildren';

import HomeAdnin from '../pages/HomeAdnin';
import HomeIfa from '../pages/HomeIfa';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Stackers = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MyTab" component={MyTab} />
      <Stack.Screen name="Children" component={Children} />
      <Stack.Screen name="GrandChildren" component={GrandChildren} />
      <Stack.Screen name="HomeAdnin" component={HomeAdnin} />
      <Stack.Screen name="HomeIfa" component={HomeIfa} />
    </Stack.Navigator>
  );
};

const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let icon;

          if (route.name === 'Home') {
            iconName = focused ? 'home': 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'magnifying-glass' : 'magnifying-glass';
          } else if (route.name === 'Messenger') {
            iconName = focused ? 'chat' : 'chat';
          } else if (route.name === 'Calender') {
            iconName = focused ? 'calendar' : 'calendar';
          } else if (route.name === 'Gallery') {
            iconName = focused ? 'image' : 'image';
          } else if (route.name === 'FamilyTree') {
            icon = focused ? require("../assets/images/my_logo.png") : require("../assets/images/my_logo.png");
          }
          return <Entypo name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#FF2400',
        inactiveTintColor: '#343434',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Messenger" component={Messenger} />
      <Tab.Screen name="Calender" component={Calender} />
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="FamilyTree" component={FamilyTree} />
    </Tab.Navigator>
  );
}

export default Stackers;
