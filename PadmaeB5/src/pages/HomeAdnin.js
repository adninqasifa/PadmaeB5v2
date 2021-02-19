import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import COLOR from '../components/ColorCard';

const HelloWorldApp = ({navigation}) => {
  const [modalAdnin, setModalAdnin] = useState(false);
  const [modalTika, setModalTika] = useState(false);

  return (
    <View style={styles.container}>

      <View style={{flexDirection: "row", marginTop: 20}}>
        <TouchableOpacity
          onPress={() => {
            setModalAdnin(true)
          }}>
          <Image style={{width: 160, height: 160, borderRadius: 80}}
            source={require("../assets/images/adninqasifa.jpg")}/>
          <Text style={styles.nama}>Adnin Qasifa</Text>
        </TouchableOpacity>

        <View style={{marginTop: 80, height: 100}}>
          <View style={styles.lineHorizontal}></View>
        </View>

        <TouchableOpacity
          onPress={() => {
            setModalTika(true)
          }}>
          <Image style={{width: 160, height: 160, borderRadius: 80}}
            source={require("../assets/images/kartika.png")}/>
          <Text style={styles.nama}>Kartika Prabawati</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 300}}>
        <FontAwesome5 name='ring' size={50} style={{color: "red", alignSelf: "center"}}/>
        <Text style={styles.textWedding}>06 October 2018</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAdnin}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.modalBooking}
            onPress={() => { setModalAdnin(!modalAdnin);
            }}>
            <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../assets/images/adninqasifa.jpg")}/>
            <View style={styles.border}>
              <Text style={styles.biodataTitle}>Adnin Qasifa</Text>
              <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
              <Text style={styles.biodata}>13 July 1988</Text>
              <Text style={styles.biodataSubTitle}>Phone:</Text>
              <Text style={styles.biodata}>+62 813 8150 3507</Text>
              <Text style={styles.biodataSubTitle}>Address: </Text>
              <Text style={styles.biodata}>Jl. Desa Putra No.44, RT01/RW06, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12640, Indonesia</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTika}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.modalBooking}
            onPress={() => { setModalTika(!modalTika);
            }}>
            <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../assets/images/kartika.png")}/>
            <View style={styles.border}>
              <Text style={styles.biodataTitle}>Kartika Prabawati</Text>
              <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
              <Text style={styles.biodata}>27 March 1990</Text>
              <Text style={styles.biodataSubTitle}>Phone:</Text>
              <Text style={styles.biodata}>+62 813-9441-5281</Text>
              <Text style={styles.biodataSubTitle}>Address: </Text>
              <Text style={styles.biodata}>Jl. Desa Putra No.44, RT01/RW06, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12640, Indonesia</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

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
    fontSize: 15,
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

  border: {
    borderColor: COLOR.primary,
    backgroundColor: COLOR.background,
    borderWidth: 5,
    borderRadius: 15 ,
    alignItems: "center",
    margin: 5,
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

  borderWedding: {
    borderColor: COLOR.primary,
    backgroundColor: COLOR.background,
    borderWidth: 5,
    borderRadius: 15 ,
    alignItems: "center",
    margin: 5,
    marginTop: 300,
  },
  textWedding: {
    fontSize: 24,
    color: COLOR.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },

  centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  //marginTop: 100,
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
