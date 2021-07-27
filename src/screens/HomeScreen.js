import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { event } from "react-native-reanimated";

//Whenever a component is passed a props object, it always shows up as the first arg
const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Hey You!</Text>
    <Button
      title="Navigate to Component Screen"
      onPress={() => navigation.navigate("Components")}
    />
    <Button
      onPress={() => navigation.navigate("List")}
      title="Navigate to List Screen"
    />
    <Button
      onPress={() => navigation.navigate("Image")}
      title="Navigate to Image Screen"
    />
    <Button
      onPress={() => navigation.navigate("Counter")}
      title="Navigate to Counter Screen"
    />
    <Button
      onPress={() => navigation.navigate("Color")}
      title="Navigate to Color Screen"
    />
    <Button
      onPress={() => navigation.navigate("Square")}
      title="Navigate to Square Screen"
    />
    <Button
      onPress={() => navigation.navigate("Text")}
      title="Navigate to Text Screen"
    />
    <Button
      onPress={() => navigation.navigate("Box")}
      title="Navigate to Box Screen"
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
