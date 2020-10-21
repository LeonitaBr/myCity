import React from "react";
import { View, Text, StyleSheet } from "react-native"

const EmptyList = () => {

    return (
        <View style={styles.container}>
            <Text>No Available products</Text>
        </View>
    )
}

export { EmptyList};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    }
});