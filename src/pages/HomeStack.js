import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen from './HomeScreen';
import { Feather,Ionicons } from '@expo/vector-icons';
import DetailScreen from './DetailScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
       <HomeStack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false }}/> 
       <HomeStack.Screen name="Details" component={DetailScreen} options={{
          headerShown: false }}/>            
      </HomeStack.Navigator>
     );
   }