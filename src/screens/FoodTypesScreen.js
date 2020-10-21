import React from 'react';
import FoodTypeScreen from "./FoodTypeComponent";
import { foodTypes } from 'constants';

export const Hamburger = ({ navigation }) => {

    return (
        <FoodTypeScreen
            foodType={foodTypes.hamburger}
            navigate={() => navigation.navigate('FoodDetail')}
        />
    )
} 
export const Omlet = ({ navigation }) => {

    return <FoodTypeScreen
        foodType={foodTypes.omlet}
        navigate={() => navigation.navigate('FoodDetail')}
    />
}

export  const Pizza = ({ navigation }) => {

    return <FoodTypeScreen
        foodType={foodTypes.pizza}
        navigate={() => navigation.navigate('FoodDetail')} />
}

export const Sandwich = ({ navigation }) => {

    return <FoodTypeScreen
        foodType={foodTypes.sandwich}
        navigate={() => navigation.navigate('FoodDetail')} />
}
