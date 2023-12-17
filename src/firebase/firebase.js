import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8qAGzl6ucSKVWPA4BhlsVF6FiB1H4t2I",
  authDomain: "instagram-clone-freecode-ba014.firebaseapp.com",
  projectId: "instagram-clone-freecode-ba014",
  storageBucket: "instagram-clone-freecode-ba014.appspot.com",
  messagingSenderId: "869953704027",
  appId: "1:869953704027:web:225f3ddfc8678eba9c6f7e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };