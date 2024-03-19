// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'

// const firebaseConfig = {
//   apiKey: "AIzaSyDGnoJWNHoYt1xHYV7Gh_Q1XmXl1_uuxQc",
//   authDomain: "aidexpress-1fe47.firebaseapp.com",
//   projectId: "aidexpress-1fe47",
//   storageBucket: "aidexpress-1fe47.appspot.com",
//   messagingSenderId: "881511361194",
//   appId: "1:881511361194:web:4c509f897dbf4e0b71fed3",
//   measurementId: "G-EC2VB4SQH7"
// };
const firebaseConfig = {
  apiKey: "AIzaSyB43N97QPINbVxS_z3WlIbqNzclj__MAno",
  authDomain: "aidexpress-25fd8.firebaseapp.com",
  projectId: "aidexpress-25fd8",
  storageBucket: "aidexpress-25fd8.appspot.com",
  messagingSenderId: "807217254931",
  appId: "1:807217254931:web:28bd891c764c117a3ee5e6",
  measurementId: "G-X88VPN3C29"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;