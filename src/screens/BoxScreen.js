import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const BoxScreen = () => {

    return (<View style={styles.parentStyle}>
        <View style={styles.childStyleOne} />
        <View style={styles.childStyleTwo} />
        <View style={styles.childStyleThree} />
    </View>);
}

const styles = StyleSheet.create({
    parentStyle: {
        flexDirection: 'row',
        height:200,
        justifyContent:'space-between'
    },
    childStyleOne: {
        backgroundColor: 'red',
        height: 50,
        width:50
    },
    childStyleTwo: {
        backgroundColor: 'blue',
        height: 50,
        width:50,
        top:50  
    },
    childStyleThree: {
        backgroundColor: 'green',
        height: 50,
        width:50
    }
});

export default BoxScreen;