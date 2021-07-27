import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';


const ColorScreen = () => {

    const [colorList, addColor] = useState([]);

    return (<View>
        <Button
            title="Add Color"
            onPress={ () => { 
                addColor([...colorList, randomRgb()]);
            }}
        />
        <FlatList
            keyExtractor={(item) => item}
            data = {colorList}
            renderItem={({item}) => {
                return <View style={{height:100, width:100, backgroundColor: item }}/>;
            }}
        />
    </View>);
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;