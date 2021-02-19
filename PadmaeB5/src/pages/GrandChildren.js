import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native';
import { grandchildren } from "../components/database";
import GrandChildrenCard from '../components/GrandChildrenCard';

import COLOR from '../components/ColorCard';

const Children = () => {
  const [modalBooking, setModalBooking] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>The Grand Children of Yan Mursal and Silvia Maharani</Text>
      <GrandChildrenCard />
    </View>
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

  textHeader: {
    color: COLOR.white,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
});
