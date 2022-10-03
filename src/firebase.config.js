import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-DcHsEsiW2MvtBI4kZtavugSiQpdcxEg",
  authDomain: "restaurantapp-3a5a3.firebaseapp.com",
  databaseURL: "https://restaurantapp-3a5a3-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-3a5a3",
  storageBucket: "restaurantapp-3a5a3.appspot.com",
  messagingSenderId: "874888684079",
  appId: "1:874888684079:web:7488d84afd64eb37aadcda",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
