import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Button, TouchableOpacity, Modal} from 'react-native';
import { database } from "../components/database";

import COLOR from '../components/ColorCard';
import ModalView from '../components/ModalView';

export default function Card() {
  const [modalBooking, setModalBooking] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <ScrollView>

      {database.map((data, index) => (
        <TouchableOpacity
          style={[{flexDirection: "row"}, styles.border]}
          key={index}
          onPress={() => {
            setModalBooking(true)
            setName(data.name)
            setImage(data.image)
            setDate(data.date)
            setPhone(data.phone)
            setAddress(data.address)
          }}>
          <Image style={styles.image} source={data.image} />
          <Text style={styles.name}>{data.name}</Text>
        </TouchableOpacity>
      ))}


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalBooking}
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

      {/*<ModalView />*/}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
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

  biodataTitle: {
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
  //marginTop: 145,
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
