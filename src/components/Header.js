import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { colors } from "constants";

const Header = ({ title, navigation, menu }) => {

    return (
        <View style={styles.container}>
            {menu ? <Pressable style={styles.button} 
            onPress={() =>navigation.dispatch(DrawerActions.toggleDrawer())}>
                <IonIcons name="md-menu" size={24} color="#fff" />
            </Pressable>
                :
                <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="#fff" />
                </Pressable>}
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export { Header };

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 50,
        paddingHorizontal: 7
    },
    title: {
        textAlign:'center',
        flex:1,
        fontWeight: '500',
        fontSize: 24,
        color: '#fff'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',

    }

})