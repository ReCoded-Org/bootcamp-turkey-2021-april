import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCypLXRNJr8WaFL8HQ_0_49oNrRYDgTukg",
    authDomain: "fir-routing-21f0c.firebaseapp.com",
    projectId: "fir-routing-21f0c",
    storageBucket: "fir-routing-21f0c.appspot.com",
    messagingSenderId: "912144949393",
    appId: "1:912144949393:web:4a7e1f5050f3f80cc91f30"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
