import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyDJ5RUlqkrZvheD7uOTpIhn_In4y3cyJV4",
  authDomain: "powwow-71f7a.firebaseapp.com",
  databaseURL: "https://powwow-71f7a.firebaseio.com",
  projectId: "powwow-71f7a",
  storageBucket: "powwow-71f7a.appspot.com",
  messagingSenderId: "222791357148",
  appId: "1:222791357148:web:32b4b4ca87a04be28b9a19",
  measurementId: "G-CH4Q4XHS42",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
