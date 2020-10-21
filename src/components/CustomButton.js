import React from 'react';
import { Button, StyleSheet } from "react-native";

const CButton = ({ style, onPress, title, color }) => {
    return (
        <Button style={{...styles.buttonContainer,...style}} title={title}
            onPress={onPress}
            color={color} />
    )
}
export const CustomButton = React.memo(CButton)

const styles = StyleSheet.create({
    buttonContainer:{
    borderRadius: 20}
})