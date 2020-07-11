import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        { name: 'friend #1' },
        { name: 'friend #2' },
        { name: 'friend #3' },
        { name: 'friend #4' },
        { name: 'friend #5' },
        { name: 'friend #6' },
    ];

    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.text}>{item.name}</Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    text: {
        letterSpacing: 5,
        marginVertical: 50
    }
});

export default ListScreen;
