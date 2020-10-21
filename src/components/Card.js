import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';

const Card = ({ image, name, onPress }) => {

  return (
    <Pressable style={styles.cardContainer} onPress={onPress}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.nameContainer}>
        <Text style={styles.foodName}>{name}</Text>
      </View>
    </Pressable>
  );
};

export const CardItem = React.memo(Card);

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'flex-end',
    marginVertical: 4,
    height: 200
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  nameContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10
  },
  foodName: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 18,
  }

});
