import React, { useEffect } from "react";
import { StyleSheet, Animated, View, Image, Text, Dimensions, FlatList, Pressable, ScrollView } from "react-native";
import { selectedRestorant } from '../store/selectedRestorant/selectedRestorantAction';
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../store/restaurants/restaurantAction";
const { width, height } = Dimensions.get('window');
const ITEM_SIZE = width * 0.80;

const Backdrop = ({ restorants, scrollX }) => {

    return <View style={styles.backDropContainer}>
        <FlatList
            data={restorants.reverse()}
            keyExtractor={(item, index) => {
                return  index.toString();
               }}
        
            removeClippedSubviews={false}
            contentContainerStyle={{ width, height: height * 0.6 }}
            renderItem={({ item, index }) => {
                if (!item.uri) {
                    return null;
                }
                const translateX = scrollX.interpolate({
                    inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
                    outputRange: [0, width],
                });
                return (
                    <Animated.View
                        key={item.id}
                        removeClippedSubviews={false}
                        style={[styles.backdrop, { width: translateX }]}>
                        <Image
                            source={{ uri: item.uri }}
                            style={{
                                width,
                                height: height * 0.6,
                                position: 'absolute', overflow: 'hidden'
                            }}
                        />
                    </Animated.View>
                );
            }}
        />
    </View>
}


const RestorantScreen = ({ navigation }) => {
    const restaurants = useSelector(({restaurant})=>restaurant.restaurants)
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const allRestorants = [{ key: 'left-spacer' }, ...restaurants, { key: 'right-spacer' }];
    const dispatch = useDispatch();

  
    
    useEffect(()=>{
      dispatch(fetchRestaurants())
    },[])

    return (
        <View style={{ flex: 1 }}>
            <Backdrop restorants={allRestorants} scrollX={scrollX} />
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={allRestorants.reverse()}
                keyExtractor={(item, index) => {
                    return  index.toString();
                   }}
                horizontal
                bounces={false}
                decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}

                renderToHardwareTextureAndroid
                contentContainerStyle={{ alignItems: 'center' }}
                snapToInterval={ITEM_SIZE}
                snapToAlignment='start'
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                    if (!item.name) {
                        return <View style={{ width: (width - ITEM_SIZE) / 2 }} />;
                    }

                    const inputRange = [
                        (index - 2) * ITEM_SIZE,
                        (index - 1) * ITEM_SIZE,
                        index * ITEM_SIZE,
                    ];

                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [100, 50, 100],
                        extrapolate: 'clamp'
                    });

                    return (
                        <View key={item.id} style={{ width: ITEM_SIZE }}>
                            <Animated.View
                                style={[styles.animatedView, {
                                    transform: [{ translateY }],
                                }]}
                            >
                                <Text style={styles.text}>{item.name}</Text>
                                <ScrollView>
                                    {item.foodTypes.map((food, i) => {
                                        console.log('item', item)
                                        return (
                                            <Pressable key={i} onPress={() => {
                                                navigation.navigate('MenuTopNavigator', { foodType: food.name }),
                                                    dispatch(selectedRestorant(item._id))
                                            }} style={styles.foodTypesContainer}>
                                                <Image source={{ uri: food.uri }} style={styles.image} />
                                                <Text style={styles.foodType}>{food.name}</Text>
                                            </Pressable>
                                        )
                                    })}
                                </ScrollView>
                            </Animated.View>
                        </View>
                    );
                }}
            />
        </View>
    )

}

export default RestorantScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,

    },
    image: { width: 60, height: 60 },
    listContentStyle: {
        alignItems: 'flex-end',
        marginVertical: 20
    },
    animatedView: {
        marginHorizontal: 10,
        height: height * 0.5,
        backgroundColor: 'white',
        borderRadius: 20, overflow: 'hidden'
    },
    noList: {
        width: (width - ITEM_SIZE) / 2
    },
    text: {
        color: '#fff',
        paddingVertical: 15,
        borderTopLeftRadius: 20,
        backgroundColor: '#64bbf0',
        borderTopRightRadius: 20,
        textAlign: "center",
        fontSize: 20
    },
    foodType: {
        fontSize: 18,
        fontWeight: '400',
        paddingHorizontal: 20,
    },
    foodTypesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    backdrop: {
        position: 'absolute',

        height,
        overflow: 'hidden'
    },
    backDropContainer: {
        height: height * 0.6,
        position: 'absolute',
        width,
    }
})