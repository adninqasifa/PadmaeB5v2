// With Firebase and Cloud Firestore

// import React, { useState, useEffect, useCallback } from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { StyleSheet, TextInput, View, YellowBox, Button } from 'react-native'
// import * as firebase from 'firebase'
// //import * as firebase from '@react-native-firebase/app'
// import 'firebase/firestore'
// //import firestore from '@react-native-firebase/firestore';
//
// const firebaseConfig = {
//   //Your firebase config here
//   apiKey: "AIzaSyDqfXRATHigpzmvr4LI5YF32B8dx3_qbGI",
//   authDomain: "testingchatdua.firebaseapp.com",
//   projectId: "testingchatdua",
//   storageBucket: "testingchatdua.appspot.com",
//   messagingSenderId: "77644488327",
//   appId: "1:77644488327:web:790f0a566f0976e710e222"
// }
//
// if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig)
// }
//
// YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])
//
// const db = firebase.firestore()
// const chatsRef = db.collection('messages')
//
// export default function Messenger() {
//     const [user, setUser] = useState(null)
//     const [name, setName] = useState('')
//     const [messages, setMessages] = useState([])
//
//     useEffect(() => {
//         readUser()
//         const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
//             const messagesFirestore = querySnapshot
//                 .docChanges()
//                 .filter(({ type }) => type === 'added')
//                 .map(({ doc }) => {
//                     const message = doc.data()
//                     //createdAt is firebase.firestore.Timestamp instance
//                     //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
//                     return { ...message, createdAt: message.createdAt.toDate() }
//                 })
//                 .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
//             appendMessages(messagesFirestore)
//         })
//         return () => unsubscribe()
//     }, [])
//
//     const appendMessages = useCallback(
//         (messages) => {
//             setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
//         },
//         [messages]
//     )
//
//     async function readUser() {
//         const user = await AsyncStorage.getItem('user')
//         if (user) {
//             setUser(JSON.parse(user))
//         }
//     }
//     async function handlePress() {
//         const _id = Math.random().toString(36).substring(7)
//         const user = { _id, name }
//         await AsyncStorage.setItem('user', JSON.stringify(user))
//         setUser(user)
//     }
//     async function handleSend(messages) {
//         const writes = messages.map((m) => chatsRef.add(m))
//         await Promise.all(writes)
//     }
//
//     if (!user) {
//         return (
//             <View style={styles.container}>
//                 <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
//                 <Button onPress={handlePress} title="Enter the chat" />
//             </View>
//         )
//     }
//     return <GiftedChat messages={messages} user={user} onSend={handleSend} />
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30,
//   },
//   input: {
//     height: 50,
//     width: '100%',
//     borderWidth: 1,
//     padding: 15,
//     marginBottom: 20,
//     borderColor: 'gray',
//   },
// })

////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

const Messenger = () => {

  return (
    <View style={styles.container}>
      <Text style={{color: "#FFFFFF"}}>This is Messenger Page</Text>
    </View>
  );
};

export default Messenger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
