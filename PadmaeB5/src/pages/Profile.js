import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import Axios from 'axios';

import COLOR from '../components/ColorCard';

const Profile = () => {
  const [dataUser, setDataUser] = useState({
    //positif: '',
    //message: '',
    //avatar: '',
    //email: '',
    //first_name: '',
    //last_name: '',
    text: '',
  })

  const getData = () => {
    Axios({
      method: 'GET',
      url: `https://reqres.in/api/users/3`
    })
    .then((res) => {
      setDataUser(res.data.support)
    })
    .catch(err => {
      console.log('err: ', err);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={{color: "#FFFFFF"}}>Call API dengan Axios</Text>

      <Button title='GET DATA' onPress={getData} />
      <Text>{dataUser.text}</Text>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
});
