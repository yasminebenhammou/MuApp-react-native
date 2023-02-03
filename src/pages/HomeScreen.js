import { useNavigation, Link } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Alert, Button, Image, FlatList, ScrollView, Text, ActivityIndicator } from 'react-native';
import CardActivity from './../component/CardActivity';
import CardExhibition from './../component/CardExhibition';

import Logo from './../../images/logo_museum.png';
import styles from './styles';


export default function HomeScreen() {
    const [listActivities, setListActivities] = useState([])
    const [listExhibition, setListExhibition] = useState([])

    const [loading, setLoading] = useState(true)


    const ActImages = ["https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405124/muApp/activity_lzcw9y.png", "https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405125/muApp/activity2_y5con2.png", "https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405125/muApp/activity4_ka821p.png", "https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405126/muApp/activity3_cpctop.png"]
    const exhImages = ["https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405158/muApp/ex4_gobuoq.png", "https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405158/muApp/ex3_ozbxxt.png", "https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405158/muApp/ex2_tizzak.png", "https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405157/muApp/ex1_knbvfg.png", "https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405157/muApp/ex6_yhmycg.png", "https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405157/muApp/ex7_iezipp.png", "https://res.cloudinary.com/dmj6tqnkw/image/upload/v1675405157/muApp/ex5_hl0riw.png"]
    

    const getData = async () => {
        setLoading(true)
        const url1 = 'http://192.168.0.6:3000/museumActivities';
        const url2 = 'http://192.168.0.6:3000/museumExhibitions';

        const result = (await Promise.all([fetch(url1), fetch(url2)])).map((r) => r.json());
        const [activityRes, exhRes] = await Promise.all(result);
        setListActivities(activityRes);
        console.log(activityRes)
        setListExhibition(exhRes);
        setLoading(false)
    };

    // met brackets 1 keer
    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return (<ActivityIndicator />)
    }
    return (
        <ScrollView style={styles.container}>
            <View>

                <View style={styles.topnav}>
                    <View style={styles.logo}>
                        <Image style={{ flex: 1, width: 140, height: 140, resizeMode: 'contain' }} source={Logo} />
                    </View>
                    <View style={styles.languageContainer}>
                        
                        <Link to={{ screen: '#', params: { id: 'FR' } }} style={styles.inactiveLanguage}> FR</Link>
                        <Link to={{ screen: '#', params: { id: 'NL' } }} style={styles.inactiveLanguage}> NL</Link>
                        <Link to={{ screen: '#', params: { id: 'ENG' } }} style={styles.activeLanguage}> ENG</Link>
                    </View>
                </View>
                <View style={styles.enjoyContainer}>
                    <Text style={styles.enjoy}>Explore, Learn, Enjoy </Text>
                </View>
                {!loading && listActivities.length !== 0 && listExhibition.length !== 0 && (
                    <>
                        <Text style={styles.activitiesText}>Activities</Text>
                        <FlatList
                            horizontal
                            data={listActivities}
                            renderItem={({ item ,index}) => <CardActivity title={item.title} day={item.day} duration={item.duration} image={ActImages[index]} id={item._id} />}
                            keyExtractor={(item, index) => index.toString()}
                        />


                        <View style={styles.exhibitionFrame}>
                        <Text style={styles.activitiesText}>Exhibition</Text>

                                                <FlatList
                            data={listExhibition}
                            renderItem={({ item ,index}) => <CardExhibition title={item.title} description={item.description} image={exhImages[index]} id={item._id} />}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        
</View>
                    </>
                )}

            </View>
        </ScrollView>
    )
}