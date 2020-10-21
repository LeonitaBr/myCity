import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { List, PlaceItem } from 'components'
import { fetchPlaces, deletePlace } from '../store/places/placesAction'

const PlacesListScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const places = useSelector(({ places }) => places.places);

    const loadPlaces = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(fetchPlaces());

        } catch (error) {
            console.log('error', error)
        }
        setIsLoading(false);

    }, [dispatch, isLoading])

    useEffect(() => {
        loadPlaces()
    }, [ dispatch]);
    

    const renderItem = ({ item }) => {
        return (
            <PlaceItem
                image={'https://i0.wp.com/tripadvisor.wpengine.com/wp-content/uploads/2018/12/vatican-world-best-attraction.jpeg?quality=90&w=627'}
                title={item.name}
                address={null}
                onSelect={() => navigation.navigate('PLaceDetailScreen', { title: item.name, id: item.id })} 
                onDelete={() =>dispatch(deletePlace(item._id))} />
        )
    }

 
    return (
        <List
            isLoading={isLoading}
            data={places} renderItem={renderItem} />
    )

}

export default PlacesListScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flex: 1,

    }
})