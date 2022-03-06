import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj-k2YGqPQo3QgaM1L5JV2YRd8G-JXqj4",
  authDomain: "finance-a8cf6.firebaseapp.com",
  projectId: "finance-a8cf6",
  storageBucket: "finance-a8cf6.appspot.com",
  messagingSenderId: "124355282464",
  appId: "1:124355282464:web:949a396a784c4ff43fde45",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
