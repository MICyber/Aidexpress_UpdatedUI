// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'

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