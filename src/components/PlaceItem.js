import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { colors } from "constants";

const PlaceItem = ({ onSelect, image, title, address, onDelete }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onSelect} style={styles.placeItem}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </Pressable>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={onDelete} style={styles.button} ><Text>Delete</Text></Pressable>
        <Pressable onPress={onSelect} style={styles.button} ><Text>Edit</Text></Pressable>
      </View>
    </View>
  );
};

export { PlaceItem };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between', 
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  placeItem: {
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: colors.primary,
    borderWidth: 1
  },
  button: { marginHorizontal: 5 },
  infoContainer: {
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  },
  address: {
    color: '#666',
    fontSize: 16
  },
  buttonsContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: "row"
  }
});


