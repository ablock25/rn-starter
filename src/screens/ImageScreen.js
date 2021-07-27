import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from "../Components/ImageDetail";


const ImageScreen = () => {
    return <View>
        <ImageDetail
            title="Forest"
            image={require("../../assets/forest.jpg")} 
            score="9"
            />
        <ImageDetail
            title="Beach"
            image={require("../../assets/beach.jpg")} 
            score="7"
        />
        <ImageDetail
            title="Mountain"
            image={require("../../assets/mountain.jpg")} 
            score="6"    
        />
    </View>
};

const styles = StyleSheet.create(
    {
        textSize: 30
    }
);

export default ImageScreen;