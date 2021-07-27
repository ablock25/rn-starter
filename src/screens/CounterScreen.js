import React, {useReducer} from 'react';
import {  Text, StyleSheet, Button, View } from 'react-native';

const reducer = (state, action) => {
    return {...state, amount: state.amount + action.amount};
}

const CounterScreen = () => {
    //Array Deconstruction
    const [state, dispatch] = useReducer(reducer, {amount:0});
    //Never modify counter directly. Use setCounter.

    return <View>
        <Button 
            title="Increase"
            onPress={() => dispatch({amount:1})}
        />
        <Button
            title="Decrease"
            onPress={() => dispatch({amount:-1})}
        />
        <Text>Current Count</Text>
        <Text>{state.amount}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;