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
              <View style={styles.lineVertical}></View>
            </View>

            <View>
              <Image style={{width: 160, height: 160, borderRadius: 80}}
                source={require("../assets/images/silvia.png")}/>
              <Text style={styles.nama}>Silvia Maharani</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[{marginTop: 15}, styles.button]}
            onPress={() => navigation.push('Children')}>
            <Text style={styles.buttonText}>Children</Text>
          </TouchableOpacity>
          <View style={styles.lineVertical1}></View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push('GrandChildren')}>
            <Text style={styles.buttonText}>Grand Children</Text>
          </TouchableOpacity>
          <View style={styles.lineVertical1}></View>

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
    padding: 10,
  },
  nama: {
    fontSize: 20,
    color: COLOR.white,
    textAlign: 'center',
    fontWeight: 'bold',
    //marginHorizontal: 5,
    marginTop: 10,
  },


  labelNama: {
    width: 160,
    backgroundColor: COLOR.primary,
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 12,
  },


  lineHorizontal:{
    height: 4,
    width: 30,
    backgroundColor: COLOR.white,
    alignSelf: "center",
  },
  lineVertical:{
    height: 150,
    width: 4,
    backgroundColor: COLOR.white,
    alignSelf: "center",
  },
  lineVertical1:{
    height: 30,
    width: 4,
    backgroundColor: COLOR.white,
    alignSelf: "center",
  },

  button: {
    width: 180,
    backgroundColor: COLOR.primary,
    borderRadius: 90,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    color: COLOR.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },

  lineVertical1:{
    height: 30,
    width: 4,
    backgroundColor: COLOR.white,
    alignSelf: "center",
  },

  buttonAbu: {
    width: 100,
    backgroundColor: COLOR.primary,
    borderRadius: 5,
    marginTop: 30,
    paddingVertical: 10,
  },
});
