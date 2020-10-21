import React from 'react';
import { FlatList, StyleSheet } from "react-native";
import { EmptyList } from './EmptyList'
import { Spinner } from './Spinner'

const List = ({ style, data, renderItem, isLoading }) => {

    if(isLoading){
        return(
            <Spinner/>
        )
    }
    
    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentStyle}
            style={{ ...styles.container, ...style }}
            ListEmptyComponent={() => <EmptyList />}
            renderItem={renderItem}
            data={data}
        />
    )
    
};
export { List }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentStyle: {
        flexGrow: 1
    }
})