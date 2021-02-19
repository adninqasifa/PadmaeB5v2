// import React, {useState} from 'react';
// import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
// import DatePicker from 'react-native-date-picker';
// import Entypo from 'react-native-vector-icons/Entypo';
//
// import COLOR from '../components/ColorCard';
// import ModalView from '../components/ModalView';
//
// const Calender = () => {
//   const [modalBooking, setModalBooking] = useState(false);
//   const [date, setDate] = useState(new Date());
//
//   return (
//     <View style={styles.container}>
//
//       <Text style={styles.textHeader}>Important Date</Text>
//
//       <View style={{flexDirection: "row", alignSelf: "center"}}>
//         <Text style={styles.date}>{date.toDateString()}</Text>
//         <TouchableOpacity
//           onPress={() => {setModalBooking(true);
//           }}>
//           <Entypo name='calendar' size={20} style={{color: COLOR.white, marginTop: 13, marginHorizontal: 10}}/>
//         </TouchableOpacity>
//       </View>
//
//
//       <Text style={styles.calenderSubText}>Birthday Date:</Text>
//       <ScrollView style={{height: 150}}>
//         <View style={styles.border}>
//           <Text style={styles.calenderText}>Yan Mursal: 01 January 1955</Text>
//         </View>
//         <View style={styles.border}>
//           <Text style={styles.calenderText}>Silvia Maharani: 10 August 1963</Text>
//         </View>
//         <View style={styles.border}>
//           <Text style={styles.calenderText}>Adnin Qasifa: 13 July 1988</Text>
//         </View>
//         <View style={styles.border}>
//           <Text style={styles.calenderText}>Syarifa Adharani: 11 Juny 1992</Text>
//         </View>
//         <View style={styles.border}>
//           <Text style={styles.calenderText}>Kartika Prabawati: 27 March 1990</Text>
//         </View>
//         <View style={styles.border}>
//           <Text style={styles.calenderText}>Gian Wirda Satria: 03 July 1990</Text>
//         </View>
//         <View style={styles.border}>
//           <Text style={styles.calenderText}>Kalea Nara: 08 January 2019</Text>
//         </View>
//       </ScrollView>
//
//       <Text style={styles.calenderSubText}>Wedding Date:</Text>
//       <ScrollView style={{height: 180}}>
//         <View style={styles.border}>
//           <Text style={styles.calenderText}>Adnin Qasifa & Kartika Prabawati: 01 January 1955</Text>
//         </View>
//         <View style={styles.border}>
//           <Text style={styles.calenderText}>Syarifa Adharani & Gian Wirda Satria: 10 August 1963</Text>
//         </View>
//       </ScrollView>
//
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalBooking}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <DatePicker
//               date={date}
//               onDateChange={setDate}
//               androidVariant={'nativeAndroid'}
//               mode={'date'}
//               textColor={'white'}
//             />
//             <TouchableOpacity
//               style={{ backgroundColor: COLOR.background }}
//               onPress={() => { setModalBooking(!modalBooking);
//               }}>
//               <Text style={{color: COLOR.white, fontSize: 18, padding: 3 }}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//
//       <ModalView />
//
//     </View>
//   );
// }
//
// export default Calender;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLOR.background,
//     //alignItems: 'center',
//     //justifyContent: 'center',
//     padding: 10,
//   },
//   textHeader: {
//     color: COLOR.white,
//     fontSize: 24,
//     paddingTop: 10,
//     paddingBottom: 10,
//     textAlign: 'center',
//   },
//   calenderSubText: {
//     color: COLOR.white,
//     fontSize: 20,
//     paddingTop: 10,
//     paddingBottom: 10,
//   },
//   calenderText: {
//     color: COLOR.white,
//     fontSize: 18,
//     paddingTop: 10,
//     paddingBottom: 10,
//   },
//   date: {
//     color: COLOR.white,
//     fontSize: 20,
//     //marginHorizontal: 10,
//     marginVertical: 10,
//     alignSelf: "center",
//   },
//
//   border: {
//     borderColor: COLOR.primary,
//     borderWidth: 3,
//     margin: 2,
//     padding: 5,
//   },
//
//   borderTop: {
//     borderColor: COLOR.primary,
//     borderWidth: 3,
//     marginTop: 20,
//     padding: 5,
//   },
//
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5
//   },
// });

////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Yan Mursal ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
  };

  // const renderItem = (item) => {
  //   return (
  //     <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
  //       <Card>
  //         <Card.Content>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               justifyContent: 'space-between',
  //               alignItems: 'center',
  //             }}>
  //             <Text>{item.name}</Text>
  //             <Avatar.Text label="A" />
  //           </View>
  //         </Card.Content>
  //       </Card>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <View style={{flex: 1}}>
      <Agenda
        //items={items}
        loadItemsForMonth={loadItems}
        selected={'2021-02-18'}
        //renderItem={renderItem}
      />
    </View>
  );
};

export default Schedule;
