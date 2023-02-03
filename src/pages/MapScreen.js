import React, { useEffect, useState ,useRef} from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { MapView } from '@situm/react-native-wayfinding';
import styles from './styles';
import { SITUM_USER, SITUM_API_KEY, BUILDING_ID, GOOGLE_API_KEY } from './../config/config';

// situm sdk https://github.com/situmtech/react-native-wayfinding
export default function MapScreen() {
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {

        loadMap()
    },[]);

    function loadMap() {
        setIsMapLoaded(!isMapLoaded);

          }

    const onMapReady = (e) => {
        console.log("++++++++++++++++ MAP SHOULD BE READY :" + JSON.stringify(e));
    };

    const  onFloorChange = (event) => {
        console.log("on floor change detected: " + JSON.stringify(event.nativeEvent));
    };

    const  onPoiSelected = (event) => {
        console.log("on poi selected detected: " + JSON.stringify(event.nativeEvent));
    };

    const  onPoiDeselected = (event) => {
        console.log("on poi deselected detected: " + JSON.stringify(event.nativeEvent));
    };

    const onNavigationRequested = (event) => {
        console.log("on navigation requested detected: " + JSON.stringify(event.nativeEvent));
    };

    const   onNavigationError = (event) => {
        console.log("on navigation error detected: " + JSON.stringify(event.nativeEvent));
    };

    const  onNavigationFinished = (event) => {
        console.log("on navigation finished detected: " + JSON.stringify(event.nativeEvent));
    };
return(
    <View style={styles.container}>
        {console.log("trying to load map on index: " +index )}
    {isMapLoaded? (
                    <MapView
                        style={styles.mapview}
                        user={SITUM_USER}
                        apikey={SITUM_API_KEY}
                        googleApikey={GOOGLE_API_KEY}
                        buildingId={BUILDING_ID}
                        onMapReady={onMapReady}
                        onFloorChange={onFloorChange}
                        onPoiSelected={onPoiSelected}
                        onPoiDeselected={onPoiDeselected}
                        onNavigationRequested={onNavigationRequested}
                        onNavigationError={onNavigationError}
                        onNavigationFinished={onNavigationFinished}
                        // iOSMapViewIndex={index.toString()}
                    />
    ):(

    <Text>Wait till map is loaded</Text>
    )
}
    </View>    
    )
}




