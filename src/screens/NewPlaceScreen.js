import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";
import { Input, ImgPicker, PickerLocation } from 'components'
import { colors } from "constants";
import { useDispatch } from "react-redux";
import { addPlace } from "../store/places/placesAction";

const NewPlaceScreen = ({ navigation }) => {

    const [title, setTitle] = useState('')
    const [selectedImage, setSelectedImage] = useState();
    const [selectedLocation, setSelectedLocation] = useState();

    const dispatch = useDispatch();

    const imagePickedHandler = imagePath => {
        setSelectedImage(imagePath)
    }
    //name, description, latitude, longitude, address, placeImage
    const savePlaceHandler = () => {
        dispatch(addPlace(
            'Place 1', 'description', selectedLocation, '156.15.6', 'adress'));
        navigation.goBack();
    }

    const locationPickedHandler = useCallback(location => {
        setSelectedLocation(location);
    }, [])

    return (

        <ScrollView style={styles.container}>
            <Input
                value={title}
                label={'Title'}
                onChangeText={text => setTitle(text)}
            />
            <ImgPicker onTakenImage={imagePickedHandler} />
            <PickerLocation
                navigation={navigation}
                onLocationPicked={locationPickedHandler} />

            <Button title={'Save Place'} color={colors.primary} onPress={savePlaceHandler} />
        </ScrollView>
    )

}

export default NewPlaceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30

    }
})