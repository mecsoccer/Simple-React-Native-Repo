import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to image screen"
      />
      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <Text>Go to image screen</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to square demo"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to text demo"
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go to box demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;