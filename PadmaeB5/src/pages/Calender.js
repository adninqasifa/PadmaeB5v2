import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';

import COLOR from '../components/ColorCard';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      {/*
      <DatePicker
        date={date}
        onDateChange={setDate}
        androidVariant={'nativeAndroid'}
        mode={'date'}
        textColor={'white'}
      />
      <Text style={{marginHorizontal: 10, marginVertical: 10, alignSelf: "center"}}>{date.toDateString()}</Text>
      */}
      <Text style={styles.textHeader}>Important Date</Text>

      <View style={styles.border}>
        <Text style={styles.calenderSubText}>Birthday Date:</Text>
        <ScrollView style={{height: 200}}>
          <View style={styles.border}>
            <Text style={styles.calenderText}>Yan Mursal: 01 January 1955</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.calenderText}>Silvia Maharani: 10 August 1963</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.calenderText}>Adnin Qasifa: 13 July 1988</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.calenderText}>Syarifa Adharani: 11 Juny 1992</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.calenderText}>Kartika Prabawati: 27 March 1990</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.calenderText}>Gian Wirda Satria: 03 July 1990</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.calenderText}>Kalea Nara: 08 January 2019</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.borderTop}>
        <Text style={styles.calenderSubText}>Wedding Date:</Text>
        <ScrollView style={{height: 190}}>
          <View style={styles.border}>
            <Text style={styles.calenderText}>Adnin Qasifa & Kartika Prabawati: 01 January 1955</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.calenderText}>Syarifa Adharani & Gian Wirda Satria: 10 August 1963</Text>
          </View>
        </ScrollView>
      </View>

    </View>
  );
};

export default Calendar;

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
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  calenderSubText: {
    color: COLOR.white,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  calenderText: {
    color: COLOR.white,
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
  },

  border: {
    borderColor: COLOR.primary,
    borderWidth: 3,
    margin: 2,
    padding: 5,
  },

  borderTop: {
    borderColor: COLOR.primary,
    borderWidth: 3,
    marginTop: 20,
    padding: 5,
  },
});
