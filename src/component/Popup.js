import React, {useState} from 'react';
import { View, Text, Alert, Button,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Popup(){

    function onPress () {
        console.log('hi big')
      }

    return(

        <View style={styles.container}>
            <TouchableOpacity   style={styles.button}  onPress={onPress}>
            <View>
            <Feather name="chevron-right" color={"black"} size={24} />
                </View>
            <View>
                </View>
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20
    },
  });