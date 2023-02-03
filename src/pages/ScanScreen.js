import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './styles';
import scanGif from './../../images/scanqr.gif';

//https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.scanContainer}>
        <Image source={scanGif}/>
        <Text style={styles.scanText}>Scan the QR-code at the kiosk to get your chosen route on your smartphone.</Text>
          <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
          {scanned && <Button style={styles.scanButton} title={'Press to scan a QR-code'} onPress={() => setScanned(false)} />}

        </View>
 
  );
}

