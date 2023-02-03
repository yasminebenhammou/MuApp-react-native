import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Button, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

//exhibition list
export default function CardExhibition({title, description, image,id }) {
  const navigation = useNavigation();

  const loadDetail = () => {
    navigation.navigate('Details', {
      itemId: id,
      otherParam: 'museumExhibition'
      
    });  }

  return (
    <View style={styles.exhibition}>
      <View >
   
      <Image source={{  uri:image }} style={styles.exh_images}  resizeMode='cover' />

      </View>
      <View style={styles.exhibitionText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.exhibitionBtn}  
        onPress={loadDetail} title='read more'><Text style={styles.buttonText}> read more</Text></TouchableOpacity>
      </View>
    </View>

  )

}

