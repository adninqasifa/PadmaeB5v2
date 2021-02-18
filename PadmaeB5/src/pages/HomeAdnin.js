import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Modal } from 'react-native';

import COLOR from '../components/ColorCard';

const HelloWorldApp = ({navigation}) => {
  const [modalAdnin, setModalAdnin] = useState(false);
  const [modalTika, setModalTika] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/images/bg.jpeg")}
      style={styles.containerBg}>
      <View style={styles.overlay}>
        <View style={styles.container}>

          <View style={{flexDirection: "row", marginTop: 20}}>
            <View>
              <Image style={{width: 160, height: 160, borderRadius: 80}}
                source={require("../assets/images/adninqasifa.jpg")}/>
              <TouchableOpacity
                style={styles.labelNama}
                onPress={() => {
                  setModalAdnin(true)
                }}>
                <Text style={styles.buttonText}>Adnin Qasifa</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 80, height: 100}}>
              <View style={styles.lineHorizontal}></View>
            </View>

            <View>
              <Image style={{width: 160, height: 160, borderRadius: 80}}
                source={require("../assets/images/kartika.png")}/>
              <TouchableOpacity
                style={styles.labelNama}
                onPress={() => {
                  setModalTika(true)
                }}>
                <Text style={styles.buttonText}>Kartika Prabawati</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.border}>
            <Text style={styles.textButtom}>Wedding Date</Text>
            <Text style={styles.textButtom}>06 October 2018</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalAdnin}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}>
            <TouchableOpacity
              style={styles.modalBooking}
              onPress={() => { setModalAdnin(!modalAdnin);
              }}>
              <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../assets/images/adninqasifa.jpg")}/>
              <View style={styles.borderModal}>
                <Text style={styles.biodataTitle}>Adnin Qasifa</Text>
                <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
                <Text style={styles.biodata}>13 July 1988</Text>
                <Text style={styles.biodataSubTitle}>Phone:</Text>
                <Text style={styles.biodata}>+62 813 8150 3507</Text>
                <Text style={styles.biodataSubTitle}>Address: </Text>
                <Text style={styles.biodata}>Jl. Desa Putra No.44, RT01/RW06, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12640, Indonesia</Text>
              </View>
            </TouchableOpacity>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalTika}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}>
            <TouchableOpacity
              style={styles.modalBooking}
              onPress={() => { setModalTika(!modalTika);
              }}>
              <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../assets/images/kartika.png")}/>
              <View style={styles.borderModal}>
                <Text style={styles.biodataTitle}>Kartika Prabawati</Text>
                <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
                <Text style={styles.biodata}>27 March 1990</Text>
                <Text style={styles.biodataSubTitle}>Phone:</Text>
                <Text style={styles.biodata}>+62 813-9441-5281</Text>
                <Text style={styles.biodataSubTitle}>Address: </Text>
                <Text style={styles.biodata}>Jl. Desa Putra No.44, RT01/RW06, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12640, Indonesia</Text>
              </View>
            </TouchableOpacity>
          </Modal>

        </View>
      </View>
    </ImageBackground>
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
  containerBg: {
    flex: 1,
  },
  overlay: {
    flex:1,
    backgroundColor:'rgba(255,255,255,0.2)',
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

  buttonText: {
    fontSize: 16,
    color: COLOR.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  textButtom: {
    fontSize: 24,
    color: COLOR.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },

  border: {
    borderColor: COLOR.primary,
    backgroundColor: COLOR.background,
    borderWidth: 5,
    borderRadius: 15 ,
    alignItems: "center",
    margin: 5,
    marginTop: 300,
  },
  borderModal: {
    borderColor: COLOR.primary,
    backgroundColor: COLOR.background,
    borderWidth: 5,
    borderRadius: 15 ,
    alignItems: "center",
    margin: 5,
  },

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
