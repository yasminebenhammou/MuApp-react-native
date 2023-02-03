import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';
import MapScreen from './MapScreen';
import { Feather,Ionicons } from '@expo/vector-icons';
import DetailScreen from './DetailScreen';
import HomeStackScreen from './HomeStack';

  const Tab = createBottomTabNavigator();
  
  export default function BottomMenu() {
    return (

      <Tab.Navigator detachInactiveScreens={false} screenOptions={{
        tabBarActiveTintColor: '#1a616be6',
      }} >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{
          headerShown: false ,
          tabBarShowLabel:false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="map" options={{ headerShown: false ,tabBarShowLabel:false,  tabBarIcon: ({ color, size }) => (
            <Feather name="map-pin" color={color} size={size} />
          ),}} >
                    {props => <MapScreen index={1} />} 
        </Tab.Screen>
        <Tab.Screen name="scan" component={ScanScreen} options={{ headerShown: false , tabBarShowLabel:false,  tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-qr-code-outline" color={color} size={size} />
          ),}}/>
      </Tab.Navigator>
    );
  }