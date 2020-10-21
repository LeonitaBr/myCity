import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native"
import {colors} from "constants";

const Spinner = () => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color={colors.primary} />
        </View>
    )
}

export { Spinner };

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    }
});