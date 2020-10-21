import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { colors } from 'constants';
import ImagePicker from 'react-native-image-picker';
import { cameraOptions } from 'utils'

const ImgPicker = ({onTakenImage}) => {
    const [selectedImage, setSelectedImage] = useState('');

    const takeImagePicker = async () => {
      await ImagePicker.launchCamera(cameraOptions, (response)=>{
          setSelectedImage(response.uri);
          onTakenImage(response.uri)
          
      })
       
    }

    return (
        <View style={styles.container}>
            <View style={styles.imagePreview}>
               {!selectedImage?<Text style={styles.text}>No Image  yet</Text>
               : <Image style={styles.image} source={{uri: selectedImage}} />}
            </View>
            <Button title={'Take Image'} color={colors.primary} onPress={takeImagePicker} />
        </View>
    )
}
export { ImgPicker };


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 30


    },
    imagePreview: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        marginBottom: 10,
        borderWidth: 1,
        width: '100%',
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%'
    },
});