import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-IHm3yr1NDewCMj1g1eBN-6aI_R_KyxA",
    authDomain: "final-project-3ff13.firebaseapp.com",
    projectId: "final-project-3ff13",
    storageBucket: "final-project-3ff13.appspot.com",
    messagingSenderId: "706943388762",
    appId: "1:706943388762:web:5ce86b45e91a0962ff5c63"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyDJj3Eu7dubwJwDQcGy0uA1B8cKMdMUXJs",
//   authDomain: "kicked-us.firebaseapp.com",
//   projectId: "kicked-us",
//   storageBucket: "kicked-us.appspot.com",
//   messagingSenderId: "635144535403",
//   appId: "1:635144535403:web:22c087836c0134efa5602e"
// };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
