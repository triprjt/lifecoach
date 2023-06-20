import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase

const app = {
  apiKey: "AIzaSyA0jQiAhyPqFQDwRUUhKa0ykjdqu3HV21E",

  authDomain: "lifecoach-97e61.firebaseapp.com",

  projectId: "lifecoach-97e61",

  storageBucket: "lifecoach-97e61.appspot.com",

  messagingSenderId: "251730046313",

  appId: "1:251730046313:web:2e7a6bb90dd4e6d70e21f8",

  measurementId: "G-TLQFTM0GR8",
};

// Firebase storage reference
const storage = getStorage(app);
export default storage;
