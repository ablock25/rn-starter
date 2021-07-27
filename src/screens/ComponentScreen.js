 //How different Components Work Together
import React from 'react';
//Take information from components and use to show content on mobile device
import { Text, StyleSheet, View } from 'react-native';

// WIRE UP STYLING style={styles.textStyle}
const ComponentScreen = () => {
    const greeting = "My name is Andy"

    //Return some amount of jsx (Similar to HTML)
    return <View>
        <Text style={styles.largeText}>Getting started with react native</Text>
        <Text style={styles.smallText}>{greeting}</Text>
        </View>;
}

//Grouping of styling rules
const styles = StyleSheet.create(
    {
        largeText : {
            fontSize: 45
        },
        smallText : {
            fontSize: 20
        }
    }
)

// Export Component so it can be used somewhere else in the project
export default ComponentScreen;