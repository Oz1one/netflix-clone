// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBjpzOtK_u4YLcnGzdHw43p0BWOM5DM2LI",
    authDomain: "netflix-clone-217d5.firebaseapp.com",
    projectId: "netflix-clone-217d5",
    storageBucket: "netflix-clone-217d5.appspot.com",
    messagingSenderId: "71500829333",
    appId: "1:71500829333:web:e38bff8b568db966e8819c",
    measurementId: "G-YCZXSS97R3"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth};
export default db;