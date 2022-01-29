import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

//URL link for Image Background
const image = { uri: "https://reactjs.org/logo-og.png" };


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Image Background</Text>
    </ImageBackground>

  
<View>
<ImageBackground source= {require('../uri/assets/picture.jpg')} style={{width:1550,height:200}}>
      <Text style={styles.text}>Image Background</Text>
    </ImageBackground>

</View>
</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;