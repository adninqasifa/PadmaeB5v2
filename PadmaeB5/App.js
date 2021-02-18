// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={{color: "#FFFFFF"}}>Hello world!</Text>
//     </View>
//   );
// };
//
// export default App;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#343434',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux'
import Stackers from './src/navigation/Stackers';
import store from './src/store'

const App= () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stackers/>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
