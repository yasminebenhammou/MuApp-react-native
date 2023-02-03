import { useNavigation, Link } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Alert, Button, Image, FlatList, ScrollView, Text, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import detailImg from './../../images/details1.png';

import styles from './styles';

export default function DetailScreen({ route, navigation }) {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { itemId } = route.params;
    const { otherParam } = route.params;

    async function getData() {
        try {
            setLoading(true);
            const response = await fetch(`http://192.168.0.6:3000/${otherParam}/${itemId}`);
            const data = await response.json();
            setItem(data)
            console.log('the data ' + JSON.stringify(data))
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getData()
    }, [])



    if (loading) {
        return (<ActivityIndicator />)
    }

    return (
        <View>
            <ScrollView style={{
                marginTop: 0,
                paddingTop: 0,
            }}>

                <ImageBackground
                    source={detailImg}
                    style={styles.backgroundImage}

                >

                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <Feather name="chevron-left" size={24} color="black" />
                    </TouchableOpacity>

                    <View style={styles.background}>

                        <Text style={styles.titleDetail}>{item.title}</Text>
                        <View style={styles.head}>
                            <Text style={styles.description}>Description</Text>
                            <View style={styles.languageContainer}>
                                <Link to={{ screen: '#', params: { id: 'FR' } }} style={styles.inactiveLanguage}> FR</Link>
                                <Link to={{ screen: '#', params: { id: 'NL' } }} style={styles.inactiveLanguage}> NL</Link>
                                <Link to={{ screen: '#', params: { id: 'ENG' } }} style={styles.activeLanguage}> ENG</Link>
                            </View>
                        </View>
                        <View style={styles.text}>
                            <Text>{item.description}</Text>
                            <TouchableOpacity style={styles.button}><Text style={styles.buttonTxt}>Get directions</Text></TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>

            </ScrollView>

        </View>
    )

}