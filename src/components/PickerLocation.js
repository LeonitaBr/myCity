import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { Spinner } from './Spinner';
import { MapPreview } from './MapPreview';
import { colors } from "constants";

const PickerLocation = ({navigation, route, onLocationPicked}) => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();
    const mapPickedLocation = route&& route.params&& route.params.pickedLocation
   
    useEffect(()=>{
        if(mapPickedLocation){
            setPickedLocation(mapPickedLocation);
            onLocationPicked(mapPickedLocation)
        }
    },[mapPickedLocation, onLocationPicked]);

    const getLocationHandler = async () => {
        try {
            setIsFetching(true)
             await Geolocation.getCurrentPosition((success) => {
                setPickedLocation({
                    lat: success.coords.latitude,
                    lng: success.coords.longitude
                });
                onLocationPicked({
                    lat: success.coords.latitude,
                    lng: success.coords.longitude
                });
            }, (e) => { console.log(e) }, { timeout: 50000 })


        } catch (error) {
            console.log(error)
        }
        setIsFetching(false)
    };
    const pickOnMapHandler = ()=>{
        navigation.navigate('Map')
    }

    return (
        <View style={styles.locationPicker}>
            <MapPreview 
                style={styles.mapPreview} 
                location={pickedLocation}
                onPress={pickOnMapHandler}>
                {isFetching ? (
                   <Spinner/>
                ) : (
                        <Text>No location chosen yet!</Text>
                    )}
            </MapPreview>
            <View style={styles.buttonsContainer}>
            <Button
                title="Get User Location"
                color={colors.primary}
                onPress={getLocationHandler}
            />
            <Button
                title="Pick on Map"
                color={colors.primary}
                onPress={pickOnMapHandler}
            />
            </View>
        </View>
    );
};
export { PickerLocation };

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15,
        flex:1
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1
    },
    buttonsContainer: {
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-around'
    }
});

