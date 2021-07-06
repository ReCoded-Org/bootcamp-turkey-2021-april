import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvzdMbI4lZgTdoOKsKtZg1fErG7pWn3HQ",
  authDomain: "fir-router-e2851.firebaseapp.com",
  projectId: "fir-router-e2851",
  storageBucket: "fir-router-e2851.appspot.com",
  messagingSenderId: "187731742336",
  appId: "1:187731742336:web:26dbe337f54c48a30f6065",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
