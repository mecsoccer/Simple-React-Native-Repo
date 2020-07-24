import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';

const ColourScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title="Add an color" onPress={() => {
                setColors([...colors, randomRgb()])
            }} />
            <FlatList
              keyExtractor={(item) => String(colors.indexOf(item) + 1)}
              data={colors} 
              renderItem={({ item }) => {
                return <View style={{height: 100, width: 100, backgroundColor: item}}/>;
              }}
            />
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({});

export default ColourScreen;
