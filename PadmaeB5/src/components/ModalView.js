import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal, Image} from 'react-native';

import COLOR from '../components/ColorCard';

const ModalView = () => {
  const [modalBooking, setModalBooking] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalBooking.visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}>
      <View style={styles.centeredView}>
        <TouchableOpacity
          style={styles.modalBooking}
          onPress={() => { setModalBooking(!modalBooking);
          }}>
          <Image style={{width: 200, height: 200, borderRadius: 100}} source={image} />
          <View style={styles.border}>
            <Text style={styles.biodataTitle}>{name}</Text>
            <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
            <Text style={styles.biodata}>{date}</Text>
            <Text style={styles.biodataSubTitle}>Phone:</Text>
            <Text style={styles.biodata}>{phone}</Text>
            <Text style={styles.biodataSubTitle}>Address: </Text>
            <Text style={styles.biodata}>{address}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  biodataTitle: {
    alignItems: "center",
    marginHorizontal: 5,
    fontSize: 25,
    fontWeight: "bold",
    color: COLOR.primary,
  },
  biodataSubTitle: {
    alignSelf: "flex-start",
    marginHorizontal: 5,
    fontSize: 18,
    color: COLOR.white,
    fontWeight: "bold",
  },
  biodata: {
    alignSelf: "flex-start",
    marginHorizontal: 5,
    fontSize: 16,
    color: COLOR.white,
    marginLeft: 20,
  },

  centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  },
  modalBooking: {
    backgroundColor: COLOR.background,
    margin: 20,
    borderRadius: 20,
    borderWidth: 5,
    padding: 10,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});
