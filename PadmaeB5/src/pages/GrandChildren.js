import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native';
import { grandchildren } from "../components/database";
import CardGrandChild from '../components/CardGrandChild';

import COLOR from '../components/ColorCard';

const Children = () => {
  const [modalBooking, setModalBooking] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <ImageBackground
      source={require("../assets/images/bg.jpeg")}
      style={styles.containerBg}>
      <View style={styles.overlay}>

      <View style={styles.container}>
        <Text style={styles.textHeader}>The Grand Children of Yan Mursal and Silvia Maharani</Text>
        <CardGrandChild />
      </View>

    </View>
  </ImageBackground>
  );
};

export default Children;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  containerBg: {
    flex: 1,
  },
  overlay: {
    flex:1,
    backgroundColor:'rgba(255,255,255,0.2)',
  },

  textHeader: {
    color: COLOR.white,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
});
