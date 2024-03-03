import firebase from "firebase/compacy/app";
import "firebase/compact/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2Ury4_Y7kS_qoluZkQVFZBwDVkh6wuEs",
  authDomain: "aidexpress-88e8f.firebaseapp.com",
  projectId: "aidexpress-88e8f",
  storageBucket: "aidexpress-88e8f.appspot.com",
  messagingSenderId: "482219944604",
  appId: "1:482219944604:web:c6eac8bcf715cb2b8e5b59",
  measurementId: "G-WV70HHZ724",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

