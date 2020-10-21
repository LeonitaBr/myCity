import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlacesListScreen from '../screens/PlacesListScreen';
import PLaceDetailScreen from '../screens/PlaceDetailScreen';
import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import { NavigationContainer } from '@react-navigation/native';
import headerConfig from '../navigators/headerConfig'
import AuthScreen from '../screens/AuthScreen';
import RestorantScreen from '../screens/RestorantScreen';
import MenuTopNavigator from './menuTopNavigators';
import FoodDetail from '../screens/FoodDetail';
import CartScreen from '../screens/drawerScreens/CartScreen';
import OrderScreen from '../screens/drawerScreens/OrderScreen';
import { useDispatch } from 'react-redux';
import {logout} from '../store/auth/authAction'

const Tab = createBottomTabNavigator();




const tabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="AllPlaces" component={PlacesListScreen} />
            <Tab.Screen name="Restorant" component={RestorantScreen} />
        </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator();

const drawerNavigator = ({ navigation, route }) => {
    const dispatch = useDispatch()

    return (
        <Drawer.Navigator drawerContent={props => {
            return (
                <DrawerContentScrollView {...props} >
                    <DrawerItemList {...props} />
                    <DrawerItem style={{ justifyContent: 'center' }} label="Logout" onPress={() => dispatch(logout())} />
                </DrawerContentScrollView>
            )
        }}>
            <Drawer.Screen name="tabNavigator" component={tabNavigator} />
            <Drawer.Screen name="Order" component={OrderScreen} />
            <Drawer.Screen name="Cart" component={CartScreen} />
        </Drawer.Navigator>
    )
}


const Stack = createStackNavigator();

const AppNavigator = React.forwardRef((_, ref) => {
    return (
        <NavigationContainer ref={ref}>
            <Stack.Navigator>
                <Stack.Screen name={'AuthScreen'} options={headerConfig.default} component={AuthScreen} />
                <Stack.Screen name={'Home'} options={headerConfig.tabNavigator} component={drawerNavigator} />
                <Stack.Screen name={'AllPlaces'} options={headerConfig.tabNavigator} component={PlacesListScreen} />
                <Stack.Screen name={'PLaceDetailScreen'} options={headerConfig.detailsHeader} component={PLaceDetailScreen} />
                <Stack.Screen name={'Map'} options={{ title: 'Map' }} component={MapScreen} />
                <Stack.Screen name={'NewPlaceScreen'} options={headerConfig.generalHeader} component={NewPlaceScreen} />
                <Stack.Screen name={'MenuTopNavigator'} options={headerConfig.generalHeader} component={MenuTopNavigator} />
                <Stack.Screen name={'FoodDetail'} options={headerConfig.generalHeader} component={FoodDetail} />
                <Stack.Screen name={'Restorant'} options={headerConfig.generalHeader} component={RestorantScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
})

export default AppNavigator;