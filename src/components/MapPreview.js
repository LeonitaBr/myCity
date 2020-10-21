import React from "react";
import { Image, StyleSheet, Pressable } from "react-native";
import { googleApiKey } from './../environments/environment'

const MapPreview = ({ location, children, style, onPress }) => {

    let imagePreviewUrl;
    if (location) {
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyBY6kSjBjMmgsRh5s27QdZ5oqs7f-2_bd0`
        }

        return (
        <Pressable onPress={onPress} style={{ ...styles.mapPreview, ...style }}>
            {location ?( <Image style={styles.mapImage}  source={{uri:imagePreviewUrl}}/>):(children)}
        </Pressable >
    )

}

export { MapPreview };

const  styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    mapImage: {
        width: '100%',
        height: '100%',
    }
})