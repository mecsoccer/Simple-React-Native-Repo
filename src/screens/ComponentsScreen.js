import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Jaachimma';
    return (
        <View>
            <Text style={styles.text}>Getting started with react-native</Text>
            <Text>My name is {myName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 45
    },
    text20: {
        fontSize: 20
    }
});

export default ComponentsScreen;
