import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { colors } from "constants";

const MapScreen = ({ navigation }) => {

    const { initialLocation } = route.params;
    const { readonly } = route.params;
    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    initialRegion = {
        latitude: initialLocation?initialLocation.lat: 37.78825,
        longitude:initialLocation?initialLocation.lng: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    const selectLocationHandler = event => {
        if (readonly) {
            return
        }
        setSelectedLocation({
            lat: 37.78825,
            lng: -122.4324,
        })
    }
    let markerCoordinate;

    if (selectedLocation) {
        markerCoordinate = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        }
    }

    const saveLocation = () => {
        if (!selectedLocation) {
            return;
        }
        navigation.navigate('NewPlaceScreen', { pickedLocation: selectedLocation });
    }
    if (readonly) {
        return
    }
    else {
        React.useLayoutEffect(() => {
            navigation.setOptions({
                headerRight: () => (
                    <Pressable onPress={saveLocation}>
                        <Text style={styles.buttonText}>Save</Text>
                    </Pressable>
                )
            });
        }, [navigation]);
    }


    return (

        <MapView
            region={initialRegion}
            style={styles.container}
            onPress={selectLocationHandler}>
            {markerCoordinate && <Marker title={'Picked Location'} coordinate={markerCoordinate} />}
        </MapView>
    )

}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    buttonText: {
        fontSize: 16,
        color: colors.primary
    }
})