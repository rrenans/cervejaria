import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const initialRegion = {
  latitude: -27.547829476331174,
  longitude: -48.498496686235626,
  latitudeDelta: 0.0922,
  longitudeDelta:0.0421,
};


const Mapa = () => {

  const [region, setRegion] = useState(initialRegion);

  return (
    <View style={styles.container}>
      <MapView 
        initialRegion={initialRegion}
        region={region} 
        provider={PROVIDER_GOOGLE} 
        style={styles.map}>

          <Marker
            cordinate={{latitude: initialRegion.latitude, 
              longitude: initialRegion.longitude}} 
              title={"SENAI"}>
          </Marker>
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignContent: 'center'
  },
  maps: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Mapa;