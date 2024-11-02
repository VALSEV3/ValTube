import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmjSVdwlVKuxgeFOOwn9zt1mq_PB0VY3g",
  authDomain: "valtube-fa534.firebaseapp.com",
  projectId: "valtube-fa534",
  storageBucket: "valtube-fa534.appspot.com",
  messagingSenderId: "1049232379994",
  appId: "1:1049232379994:web:fe2b584e013cc8467a4863",
  measurementId: "G-PV8N0DV8DX"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
