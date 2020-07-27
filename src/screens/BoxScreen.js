import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>dasdfalajald</Text>
      <Text style={styles.textStyle}>dasdfalajald</Text>
      <Text style={styles.textStyle}>dasdfalajald</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection:'row',
    height: 200,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 20,
  }
});

export default BoxScreen;
