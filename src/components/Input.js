import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Input = (props) => {

    return (
        <View style={styles.formInput}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                {...props}
                value={props.value}
                style={styles.textInput}
                onChangeText={props.onChangeText}
            />
        </View>
    )
}

export { Input }

const styles = StyleSheet.create({
    formInput: {
        marginVertical: 15
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingHorizontal: 4,
        paddingVertical: 2,
    }
})