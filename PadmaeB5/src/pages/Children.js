import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native';
import { children } from "../components/database";

import COLOR from '../components/ColorCard';
import ChildrenCard from '../components/ChildrenCard';

const Children = ({navigation}) => {
  const [modalBooking, setModalBooking] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>The Children of Yan Mursal and Silvia Maharani</Text>


      <TouchableOpacity
        style={[{flexDirection: "row"}, styles.border]}
        onPress={() => navigation.push('HomeAdnin')}>
        <Image style={styles.image} source={require("../assets/images/adninqasifa.jpg")} />
        <Text style={styles.name}>Adnin Qasifa</Text>
        <Text style={styles.number}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[{flexDirection: "row"}, styles.border]}
        onPress={() => navigation.push('HomeIfa')}>
        <Image style={styles.image} source={require("../assets/images/ifa.jpg")} />
        <Text style={styles.name}>Syarifa Adharani</Text>
        <Text style={styles.number}>2</Text>
      </TouchableOpacity>


      {/*<ChildrenCard />*/}

    </View>
  );
};

export default Children;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 10,
  },
  textHeader: {
    color: COLOR.white,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },

  border: {
    borderColor: COLOR.primary,
    backgroundColor: COLOR.background,
    borderWidth: 5,
    borderRadius: 15 ,
    alignItems: "center",
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 7,
    borderRadius: 50,
  },
  name: {
    color: COLOR.white,
    fontSize: 24,
    alignSelf: "flex-start",
    marginTop: 10,
    width: 195,
  },
  number: {
    color: COLOR.primary,
    fontSize: 90,
    marginLeft: 5,
  },
});
