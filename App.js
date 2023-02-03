import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native'
import  HomeScreen from './src/pages/HomeScreen';
import  MapScreen from './src/pages/MapScreen';
import BottomMenu from './src/pages/BottomMenu';
import { MapView } from '@situm/react-native-wayfinding';
import DetailScreen from './src/pages/DetailScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
  <BottomMenu/>
</NavigationContainer></GestureHandlerRootView>


  );
}