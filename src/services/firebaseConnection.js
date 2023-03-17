import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {
  APIKEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINGSENDERID,
  APPID,
} from "@env";

let firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
