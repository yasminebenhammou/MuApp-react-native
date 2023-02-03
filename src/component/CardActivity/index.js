import React, {useState,useEffect} from 'react';
import { View, Text, Alert, Button,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
var RNFS = require('react-native-fs');
import { useNavigation } from '@react-navigation/native';

//horizontal slider of activities
export default function CardActivity({title,day,duration,image,id}){
  const navigation = useNavigation();

  const loadDetail = () => {
    navigation.navigate('Details', {
      itemId: id,
      otherParam: 'museumActivity'
    });  }

  return(
      <View style={styles.sliderItem} key={id}>
      <View style={styles.activity} >

      <Image source={{uri: image}}  style={styles.activity_image}  resizeMode='cover' />
              <View style={styles.activity_text}>
          <Text>{title}</Text>
          <Feather name="clock" size={24} color="blZack" /><Text>{duration}</Text>
          <Text>{day}</Text>
        </View>
        <TouchableOpacity style={styles.more}  onPress={loadDetail} >
        <Feather name="chevron-right" size={24} color="black" />  
        </TouchableOpacity>
      </View>
      </View>
      
    )

}

