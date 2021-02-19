import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image} from 'react-native';
import { database } from "../components/database";

import COLOR from '../components/ColorCard';
import AllCard from '../components/AllCard';

const Search = () => {
  return (
    <View style={styles.container}>

      <View>
        <TextInput
          placeholder="Search"
          style = {styles.searchbar}
          lightTheme default
          placeholderTextColor='black'
          onChangeText={(text) => {
            let aaaa = database.filter((e)=>e.name.toLowerCase().includes(text.toLowerCase()))
            console.log("ini testing 2", klinik);

            if (text.length == 0) {
              setKlinik(klinikSearchList)
              console.log("hahaha", klinikSearchList);
            } else {
              setKlinik(aaaa)
            }
          }}
        />
      </View>

      <AllCard />

    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  searchbar: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    paddingLeft: 20,
    borderColor: COLOR.primary,
    backgroundColor: COLOR.white,
  },
});
