import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';

import COLOR from '../components/ColorCard';

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Gallery Family</Text>
      <ScrollView>

        <View style={{flexDirection: "row"}}>
          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/adninqasifa.jpg")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/bg.jpeg")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/gian.jpeg")}/>
          </View>
        </View>

        <View style={{flexDirection: "row"}}>
          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/ifa.jpg")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/kalea.jpeg")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/kartika.png")}/>
          </View>
        </View>

        <View style={{flexDirection: "row"}}>
          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/keluarga.jpg")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/my_logo.png")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/silvia.png")}/>
          </View>
        </View>

        <View style={{flexDirection: "row"}}>
          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/yan.png")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/yan.png")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/yan.png")}/>
          </View>
        </View>

        <View style={{flexDirection: "row"}}>
          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/yan.png")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/yan.png")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/yan.png")}/>
          </View>
        </View>

        <View style={{flexDirection: "row"}}>
          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/yan.png")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/yan.png")}/>
          </View>

          <View style={styles.border}>
            <Image style={{width: 115, height: 115}}
              source={require("../assets/images/yan.png")}/>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default HelloWorldApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
    alignItems: "center",
    padding: 5,
  },
  border: {
    borderColor: COLOR.primary,
    borderWidth: 3,
    margin: 2,
    padding: 1,
  },
  textHeader: {
    color: COLOR.white,
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
});
