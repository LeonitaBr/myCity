import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { MapPreview } from "../components/MapPreview";
import { useSelector } from "react-redux";
import { colors } from "constants";

const PLaceDetailScreen = ({route, }) => {

    const selectedPlace = useSelector(({ places }) =>places.places.find(product => places.id === route.params.id))
    const selectedLocation = { lat: selectedPlace.lat, lng: selectedPlace.lng }
    const showMapHandler = () => {
        props.navigation.navigate('Map', { readonly: true, initialLocation: selectedLocation })
    }

    return (

        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <Image style={styles.image}  source={{uri:'https://i0.wp.com/tripadvisor.wpengine.com/wp-content/uploads/2018/12/vatican-world-best-attraction.jpeg?quality=90&w=627'}}/>
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}></Text>
                </View>
                <MapPreview
                    onPress={showMapHandler}
                    style={styles.mapPreview}
                    location={selectedLocation}
                ></MapPreview>
            </View>
        </ScrollView>
    )

}

export default PLaceDetailScreen;

const styles = StyleSheet.create({
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%',
        backgroundColor: '#ccc'
    },
    locationContainer: {
        marginVertical: 20,
        width: '90%',
        maxWidth: 350,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10
    },
    addressContainer: {
        padding: 20
    },
    address: {
        color: colors.primary,
        textAlign: 'center'
    },
    mapPreview: {
        width: '100%',
        maxWidth: 350,
        height: 300,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});
