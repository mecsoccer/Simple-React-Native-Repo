import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(e) => setName(e)}
      />
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
