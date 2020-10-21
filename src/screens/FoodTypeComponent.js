import React from 'react';
import restorants from '../data/restorants.json';
import { List, Card } from 'components'
import { useSelector, useDispatch } from 'react-redux';
import { selectedfoodType } from '../store/selectedRestorant/selectedRestorantAction';

const FoodTypeScreen = ({ foodType, navigate }) => {

    const choosenRestorantId = useSelector(({ choosenFood }) => choosenFood.id);
    const selectedRestorant = restorants.find((item) => item.id === choosenRestorantId);
    const foodList = selectedRestorant.foodTypes.find((item) => item.name === foodType);
    const  dispatch = useDispatch();

    const returnSelectedValue = (foodType) => {
        switch (foodType) {
            case "Hamburger":
                return foodList.Hamburger
            case "Sandwich":
                return foodList.Sandwich
            case "Pizza":
                return foodList.Pizza
            case "Omlet":
                return foodList.Omlet
            default:
                return foodList
        }
    }
    const onPressHandler =  (item) => {
            dispatch(selectedfoodType(item))
            navigate()
    }

    return (
        <List
            data={returnSelectedValue(foodType)}
            renderItem={({ item }) => {
                return <Card
                    name={item.name}
                    image={item.uri} onPress={() => onPressHandler(item)} />
            }
            } />

    )
}


export default FoodTypeScreen;