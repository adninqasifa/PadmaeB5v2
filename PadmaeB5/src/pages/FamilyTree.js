import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import COLOR from '../components/ColorCard';

const Home: () => React$Node = () => {
  return (
    <View style={styles.container}>

      <View style={{flexDirection: "row", marginTop: 20}}>
        <Image style={{width: 80, height: 80}}
          source={require("../assets/images/yan.png")}/>

        <View style={{marginTop: 50}}>
          <View style={styles.lineHorizontal1}></View>
          <View style={styles.lineVertical1}></View>
        </View>

        <Image style={{width: 80, height: 80}}
          source={require("../assets/images/silvia.png")}/>
      </View>

      <View style={styles.lineHorizontal2}></View>
      <View style={{flexDirection: "row", width: 300}}>
        <View style={styles.lineVerticalAdnin}></View>
        <View style={styles.lineVerticalIfa}></View>
      </View>

      <View style={{flexDirection: "row", width: 370}}>
        <Image style={{width: 70, height: 70}}
          source={require("../assets/images/adninqasifa.jpg")}/>
        <View style={styles.lineHorizontal1}></View>
        <Image style={{width: 70, height: 70, marginRight: 25}}
          source={require("../assets/images/kartika.png")}/>
        <Image style={{width: 70, height: 70}}
          source={require("../assets/images/gian.jpeg")}/>

        <View style={{marginTop: 40}}>
          <View style={styles.lineHorizontal1}></View>
          <View style={styles.lineVertical1}></View>
        </View>

        <Image style={{width: 70, height: 70}}
          source={require("../assets/images/ifa.jpg")}/>
      </View>

      <Image style={{width: 60, height: 60, marginLeft: 190}}
        source={require("../assets/images/kalea.jpeg")}/>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
    alignItems: 'center',
    padding: 5,
  },
  lineHorizontal1:{
    height: 3,
    width: 30,
    backgroundColor: COLOR.white,
    alignSelf: "center",
  },
  lineVertical1:{
    height: 40,
    width: 3,
    backgroundColor: COLOR.white,
    alignSelf: "center",
  },

  lineHorizontal2:{
    height: 3,
    width: 300,
    backgroundColor: COLOR.white,
  },
  lineVerticalAdnin:{
    height: 40,
    width: 3,
    backgroundColor: COLOR.white,
  },
  lineVerticalIfa:{
    height: 40,
    width: 3,
    backgroundColor: COLOR.white,
    marginLeft: 295,
  },
});
