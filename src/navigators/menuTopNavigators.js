import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabBar from './menuTopBar';
import { foodTypes } from 'constants'
import {Hamburger, Pizza, Omlet, Sandwich} from '../screens/FoodTypesScreen'
import { useSelector } from 'react-redux';


const chooseInitialRoute = (foodSelected) => {

  switch (foodSelected) {
    case "Hamburger":
      return foodTypes.hamburger
    case "Pizza":
      return foodTypes.pizza
    case "Sandwich":
      return foodTypes.sandwich
    case "Omlet":
      return foodTypes.omlet
    default:
      return foodTypes.hamburger
  }
}


const Tab = createMaterialTopTabNavigator();

const MenuTopNavigator = (props) => {
  const restaurants = useSelector(({restaurant})=>restaurant.restaurants)
  const selectedRestorantId = useSelector(({ choosenFood }) => choosenFood.id);
  const selectedRestorant = restaurants.find(item => item._id === selectedRestorantId);
  const foodTypeExists = (foodType) => {
    return  selectedRestorant.foodTypes.some(item => item.name === foodType)
  }
  return (
    <Tab.Navigator initialRouteName={chooseInitialRoute(props.route.params.foodType)} tabBar={props => <MyTabBar {...props} />}>
      {foodTypeExists("Hamburger") &&<Tab.Screen name={'Hamburger'} component={Hamburger} />}
      {foodTypeExists("Pizza") &&<Tab.Screen name={'Pizza'} component={Pizza} />}
      {foodTypeExists("Sandwich") &&<Tab.Screen name={'Sandwich'} component={Sandwich} />}
      {foodTypeExists("Omlet")&&<Tab.Screen name={'Omlet'} component={Omlet} />}
    </Tab.Navigator>
  );
}
export default MenuTopNavigator
