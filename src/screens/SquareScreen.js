import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCR = 51;

const SquareScreen = () => {
  const reducer = (state, action) => {
    if (action.payload < 0 || action.payload > 255) return state;

    switch (action.type) {
      case 'red':
        return { ...state, red: action.payload };
      case 'green':
        return { ...state, green: action.payload };
      case 'blue':
        return { ...state, blue: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red:0, green:0, blue:0 });
  const { red, green, blue } = state;

  /*
  const [red, setRed ] = useState(0);
  const [green, setGreen ] = useState(0);
  const [blue, setBlue ] = useState(0);

  function updateColor(color, amount) {
    if (amount < 0 || amount > 255) return;
    if (color === 'red') return setRed(amount);
    if (color === 'green') return setGreen(amount);
    if (color === 'blue') return setBlue(amount);
  }
  */

  return (
      <View>
        <ColorCounter
          //onIncrease={() => updateColor('red', red + COLOR_INCR)}
          //onDecrease={() => updateColor('red', red - COLOR_INCR)}
          onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCR + red })}
          onDecrease={() => dispatch({ type: 'red', payload: red - COLOR_INCR })}
          color="Red"
        />
        <ColorCounter
          //onIncrease={() => updateColor('green', green + COLOR_INCR)}
          //onDecrease={() => updateColor('green', green - COLOR_INCR)}
          onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCR + green })}
          onDecrease={() => dispatch({ type: 'green', payload: green - COLOR_INCR })}
          color="Green"
        />
        <ColorCounter
          //onIncrease={() => updateColor('blue', blue + COLOR_INCR)}
          //onDecrease={() => updateColor('blue', blue - COLOR_INCR)}
          onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCR + blue })}
          onDecrease={() => dispatch({ type: 'blue', payload: blue - COLOR_INCR })}
          color="Blue"
        />
        <View style={{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}} />
      </View>
  );
}

const styles = StyleSheet.create({
    text: {
      letterSpacing: 5,
      marginVertical: 50
    }
});

export default SquareScreen;
