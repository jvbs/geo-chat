import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPcFcuStAHgO0sB8XateWzihBysWQzEaI",
  authDomain: "geo-chat-602d6.firebaseapp.com",
  databaseURL: "https://geo-chat-602d6.firebaseio.com",
  projectId: "geo-chat-602d6",
  storageBucket: "geo-chat-602d6.appspot.com",
  messagingSenderId: "579054270719",
  appId: "1:579054270719:web:fa02e93da99989fb75f4ca"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

