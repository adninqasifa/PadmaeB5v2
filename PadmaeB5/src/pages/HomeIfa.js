import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import COLOR from '../components/ColorCard';

const HelloWorldApp = ({navigation}) => {
  const [modalIfa, setModalIfa] = useState(false);
  const [modalGian, setModalGian] = useState(false);
  const [modalKalea, setModalKalea] = useState(false);

  return (
    <View style={styles.container}>

      <View style={{flexDirection: "row", marginTop: 20}}>
        <TouchableOpacity
          onPress={() => {
            setModalIfa(true)
          }}>
          <Image style={{width: 160, height: 160, borderRadius: 80}}
            source={require("../assets/images/ifa.jpg")}/>
          <Text style={styles.nama}>Syarifa Adharani</Text>
        </TouchableOpacity>

        <View style={{marginTop: 80, height: 100}}>
          <View style={styles.lineHorizontal}></View>
          <View style={styles.lineVerticalIfa}></View>
        </View>

        <TouchableOpacity
          onPress={() => {
            setModalGian(true)
          }}>
          <Image style={{width: 160, height: 160, borderRadius: 80}}
            source={require("../assets/images/gian.jpeg")}/>
          <Text style={styles.nama}>Gian Wirda Satria</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{marginTop: 110}}
        onPress={() => {
          setModalKalea(true)
        }}>
        <Image style={{width: 160, height: 160, borderRadius: 80}}
          source={require("../assets/images/kalea.jpeg")}/>
        <Text style={styles.nama}>Kalea Nara</Text>
      </TouchableOpacity>

      <View style={{marginTop: 30}}>
        <FontAwesome5 name='ring' size={50} style={{color: "red", alignSelf: "center"}}/>
        <Text style={styles.textWedding}>06 October 2018</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalIfa}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.modalBooking}
            onPress={() => { setModalIfa(!modalIfa);
            }}>
            <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../assets/images/ifa.jpg")}/>
            <View style={styles.border}>
              <Text style={styles.biodataTitle}>Syarifa Adharani</Text>
              <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
              <Text style={styles.biodata}>11 June 1992</Text>
              <Text style={styles.biodataSubTitle}>Phone:</Text>
              <Text style={styles.biodata}>+62 813-9441-5281</Text>
              <Text style={styles.biodataSubTitle}>Address: </Text>
              <Text style={styles.biodata}>The Savia BSD City, Cluster Tevana Blok B12 No. 8 Kec. Serpong, Kota Tanggerang Selatan, Jawa Barat 15311, Indonesia</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalGian}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.modalBooking}
            onPress={() => { setModalGian(!modalGian);
            }}>
            <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../assets/images/gian.jpeg")}/>
            <View style={styles.border}>
              <Text style={styles.biodataTitle}>Gian Wirda Satria</Text>
              <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
              <Text style={styles.biodata}>03 July 1990</Text>
              <Text style={styles.biodataSubTitle}>Phone:</Text>
              <Text style={styles.biodata}>+62 812-2438-4880</Text>
              <Text style={styles.biodataSubTitle}>Address: </Text>
              <Text style={styles.biodata}>The Savia BSD City, Cluster Tevana Blok B12 No. 8 Kec. Serpong, Kota Tanggerang Selatan, Jawa Barat 15311, Indonesia</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalKalea}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.modalBooking}
            onPress={() => { setModalKalea(!modalKalea);
            }}>
            <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../assets/images/kalea.jpeg")}/>
            <View style={styles.border}>
              <Text style={styles.biodataTitle}>Kalea Nara</Text>
              <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
              <Text style={styles.biodata}>08 January 2019</Text>
              <Text style={styles.biodataSubTitle}>Phone:</Text>
              <Text style={styles.biodata}>-</Text>
              <Text style={styles.biodataSubTitle}>Address: </Text>
              <Text style={styles.biodata}>The Savia BSD City, Cluster Tevana Blok B12 No. 8 Kec. Serpong, Kota Tanggerang Selatan, Jawa Barat 15311, Indonesia</Text>
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
  lineVerticalIfa:{
    height: 220,
    width: 4,
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
    marginTop: 30,
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

////////////////////////////////////////////////////////////////////////////////

// import React, {useState} from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
//
// import COLOR from '../components/ColorCard';
//
// const HelloWorldApp = ({navigation}) => {
//   const [modalIfa, setModalIfa] = useState(false);
//   const [modalGian, setModalGian] = useState(false);
//   const [modalKalea, setModalKalea] = useState(false);
//
//   return (
//     <View style={styles.container}>
//
//       <View style={{flexDirection: "row", marginTop: 20}}>
//         <View>
//           <Image style={{width: 160, height: 160, borderRadius: 80}}
//             source={require("../assets/images/ifa.jpg")}/>
//           <TouchableOpacity
//             style={styles.labelNama}
//             onPress={() => {
//               setModalIfa(true)
//             }}>
//             <Text style={styles.buttonText}>Syarifa Adharani</Text>
//           </TouchableOpacity>
//         </View>
//
//         <View style={{marginTop: 80, height: 100}}>
//           <View style={styles.lineHorizontal}></View>
//           <View style={styles.lineVertical}></View>
//         </View>
//
//         <View>
//           <Image style={{width: 160, height: 160, borderRadius: 80}}
//             source={require("../assets/images/gian.jpeg")}/>
//           <TouchableOpacity
//             style={styles.labelNama}
//             onPress={() => {
//               setModalGian(true)
//             }}>
//             <Text style={styles.buttonText}>Gian Wirda Satria</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//
//       <View>
//         <Image style={{width: 160, height: 160, borderRadius: 80}}
//           source={require("../assets/images/kalea.jpeg")}/>
//         <TouchableOpacity
//           style={styles.labelNama}
//           onPress={() => {
//             setModalKalea(true)
//           }}>
//           <Text style={styles.buttonText}>Kalea Nara</Text>
//         </TouchableOpacity>
//       </View>
//
//       <TouchableOpacity
//         style={styles.border}>
//         <Text style={styles.textButtom}>Wedding Date</Text>
//         <Text style={styles.textButtom}>08 October 2017</Text>
//       </TouchableOpacity>
//
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalIfa}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}>
//         <TouchableOpacity
//           style={styles.modalBooking}
//           onPress={() => { setModalIfa(!modalIfa);
//           }}>
//           <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../assets/images/ifa.jpg")}/>
//           <View style={styles.borderModal}>
//             <Text style={styles.biodataTitle}>Syarifa Adharani</Text>
//             <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
//             <Text style={styles.biodata}>11 June 1992</Text>
//             <Text style={styles.biodataSubTitle}>Phone:</Text>
//             <Text style={styles.biodata}>+62 813-9441-5281</Text>
//             <Text style={styles.biodataSubTitle}>Address: </Text>
//             <Text style={styles.biodata}>The Savia BSD City, Cluster Tevana Blok B12 No. 8 Kec. Serpong, Kota Tanggerang Selatan, Jawa Barat 15311, Indonesia</Text>
//           </View>
//         </TouchableOpacity>
//       </Modal>
//
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalGian}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}>
//         <TouchableOpacity
//           style={styles.modalBooking}
//           onPress={() => { setModalGian(!modalGian);
//           }}>
//           <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../assets/images/gian.jpeg")}/>
//           <View style={styles.borderModal}>
//             <Text style={styles.biodataTitle}>Gian Wirda Satria</Text>
//             <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
//             <Text style={styles.biodata}>03 July 1990</Text>
//             <Text style={styles.biodataSubTitle}>Phone:</Text>
//             <Text style={styles.biodata}>+62 812-2438-4880</Text>
//             <Text style={styles.biodataSubTitle}>Address: </Text>
//             <Text style={styles.biodata}>The Savia BSD City, Cluster Tevana Blok B12 No. 8 Kec. Serpong, Kota Tanggerang Selatan, Jawa Barat 15311, Indonesia</Text>
//           </View>
//         </TouchableOpacity>
//       </Modal>
//
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalKalea}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}>
//         <TouchableOpacity
//           style={styles.modalBooking}
//           onPress={() => { setModalKalea(!modalKalea);
//           }}>
//           <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../assets/images/kalea.jpeg")}/>
//           <View style={styles.borderModal}>
//             <Text style={styles.biodataTitle}>Kalea Nara</Text>
//             <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
//             <Text style={styles.biodata}>08 January 2019</Text>
//             <Text style={styles.biodataSubTitle}>Phone:</Text>
//             <Text style={styles.biodata}>-</Text>
//             <Text style={styles.biodataSubTitle}>Address: </Text>
//             <Text style={styles.biodata}>The Savia BSD City, Cluster Tevana Blok B12 No. 8 Kec. Serpong, Kota Tanggerang Selatan, Jawa Barat 15311, Indonesia</Text>
//           </View>
//         </TouchableOpacity>
//       </Modal>
//
//     </View>
//   );
// };
//
// export default HelloWorldApp;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLOR.background,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//   },
//
//   labelNama: {
//     width: 160,
//     backgroundColor: COLOR.primary,
//     borderRadius: 5,
//     marginTop: 10,
//     paddingVertical: 12,
//   },
//
//   lineHorizontal:{
//     height: 4,
//     width: 30,
//     backgroundColor: COLOR.white,
//     alignSelf: "center",
//   },
//   lineVertical:{
//     height: 150,
//     width: 4,
//     backgroundColor: COLOR.white,
//     alignSelf: "center",
//   },
//
//
//   buttonText: {
//     fontSize: 16,
//     color: COLOR.white,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     marginHorizontal: 5,
//   },
//   textButtom: {
//     fontSize: 24,
//     color: COLOR.white,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     marginHorizontal: 5,
//   },
//
//   border: {
//     borderColor: COLOR.primary,
//     backgroundColor: COLOR.background,
//     borderWidth: 5,
//     borderRadius: 15 ,
//     alignItems: "center",
//     margin: 5,
//     marginTop: 100,
//   },
//   borderModal: {
//     borderColor: COLOR.primary,
//     backgroundColor: COLOR.background,
//     borderWidth: 5,
//     borderRadius: 15 ,
//     alignItems: "center",
//     margin: 5,
//   },
//
//   biodataTitle: {
//     alignItems: "center",
//     marginHorizontal: 5,
//     fontSize: 25,
//     fontWeight: "bold",
//     color: COLOR.primary,
//   },
//   biodataSubTitle: {
//     alignSelf: "flex-start",
//     marginHorizontal: 5,
//     fontSize: 18,
//     color: COLOR.white,
//     fontWeight: "bold",
//   },
//   biodata: {
//     alignSelf: "flex-start",
//     marginHorizontal: 5,
//     fontSize: 16,
//     color: COLOR.white,
//     marginLeft: 20,
//   },
//
//   modalBooking: {
//     backgroundColor: COLOR.background,
//     margin: 20,
//     borderRadius: 20,
//     borderWidth: 5,
//     padding: 10,
//     alignItems: "center",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 10,
//   },
// });
