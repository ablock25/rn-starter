import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SquareComponent from '../Components/SquareComponent';

const COLOR_INCREMENT = 15;
const MIN_VALUE = 0;
const MAX_VALUE = 255;

const reducer = (state, action) => {
    //state === {red: 0, green: 0, blue: 0}
    //action === {colorToChange: 'red', 'green', blue', amount: 15 || -15}
    switch (action.colorToChange) {
        case 'red':
            //never changing state values directly
            return state.red + action.amount > MAX_VALUE || state.red + action.amount < MIN_VALUE 
            ? state
            : {...state, red: state.red + action.amount};
        case 'green':
            return state.green + action.amount > MAX_VALUE || state.green + action.amount < MIN_VALUE 
            ? state
            : {...state, green: state.green + action.amount};
        case 'blue':
            return state.blue + action.amount > MAX_VALUE || state.blue + action.amount < MIN_VALUE 
            ? state
            : {...state, blue: state.blue + action.amount};
        default:
            return;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (<View>
        <SquareComponent
            color="Red"
            onIncrease={() => dispatch( {colorToChange: 'red', amount:COLOR_INCREMENT})}
            onDecrease={() => dispatch( {colorToChange: 'red', amount:-COLOR_INCREMENT})}
        />
        <SquareComponent
            color="Green"
            onIncrease={() => dispatch( {colorToChange: 'green', amount:COLOR_INCREMENT})}
            onDecrease={() => dispatch( {colorToChange: 'green', amount:-COLOR_INCREMENT})}
        />
        <SquareComponent
            color="Blue"
            onIncrease={() => dispatch( {colorToChange: 'blue', amount:COLOR_INCREMENT})}
            onDecrease={() => dispatch( {colorToChange: 'blue', amount:-COLOR_INCREMENT})}
        />
        <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>);
}

const styles = StyleSheet.create({});

export default SquareScreen;