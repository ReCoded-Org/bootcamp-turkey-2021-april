import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADnW3KWAf5AmW6EtTKWbLBieW5ukQAYSI",
    authDomain: "test-project-b0b8e.firebaseapp.com",
    projectId: "test-project-b0b8e",
    storageBucket: "test-project-b0b8e.appspot.com",
    messagingSenderId: "966103554483",
    appId: "1:966103554483:web:1b42e9278b05d7677a93c6"
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
