import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import COLOR from '../components/ColorCard';

const HelloWorldApp = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={{flexDirection: "row", marginTop: 20}}>
        <View>
          <Image style={{width: 160, height: 160, borderRadius: 80}}
            source={require("../assets/images/yan.png")}/>
          <Text style={styles.nama}>Yan Mursal</Text>
        </View>

        <View style={{marginTop: 80, height: 100}}>
          <View style={styles.lineHorizontal}></View>
          <View style={styles.lineVerticalHome}></View>
        </View>

        <View>
          <Image style={{width: 160, height: 160, borderRadius: 80}}
            source={require("../assets/images/silvia.png")}/>
          <Text style={styles.nama}>Silvia Maharani</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[{marginTop: 180}, styles.button]}
        onPress={() => navigation.push('Children')}>
        <Text style={styles.buttonText}>Children</Text>
      </TouchableOpacity>
      <View style={styles.lineVerticalKecil}></View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('GrandChildren')}>
        <Text style={styles.buttonText}>Grand Children</Text>
      </TouchableOpacity>
      <View style={styles.lineVerticalKecil}></View>

      <TouchableOpacity
        style={styles.button}
        onPress= {() => alert("We Dont Have Grand Grand Children")}>
        <Text style={styles.buttonText}>Grand Grand Children</Text>
      </TouchableOpacity>

    </View>

  );
};

export default HelloWorldApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nama: {
    fontSize: 17,
    color: COLOR.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: "monospace",
    marginTop: 10,
  },

  lineHorizontal:{
    height: 4,
    width: 30,
    backgroundColor: COLOR.white,
    alignSelf: "center",
  },
  lineVerticalHome:{
    height: 300,
    width: 4,
    backgroundColor: COLOR.white,
    alignSelf: "center",
  },
  lineVerticalKecil:{
    height: 10,
    width: 4,
    backgroundColor: COLOR.white,
    alignSelf: "center",
  },

  button: {
    width: 370,
    backgroundColor: COLOR.background,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: COLOR.primary,
    borderWidth: 4,
  },
  buttonText: {
    fontSize: 16,
    color: COLOR.white,
    fontFamily: "monospace",
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: "italic",
    marginHorizontal: 5,
  },
});
