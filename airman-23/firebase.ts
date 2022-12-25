// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMCssb71dN3TwAwVit42KgsZVB-NI_3B8",
  authDomain: "airman-23.firebaseapp.com",
  projectId: "airman-23",
  storageBucket: "airman-23.appspot.com",
  messagingSenderId: "847663020457",
  appId: "1:847663020457:web:1feffea8966a5e021facb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db};
