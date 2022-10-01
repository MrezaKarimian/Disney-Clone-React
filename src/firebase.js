import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChdopSCtiqN3kjoYOp_90JLYVMvqmXrM0",
  authDomain: "disney-clone-react-afebf.firebaseapp.com",
  projectId: "disney-clone-react-afebf",
  storageBucket: "disney-clone-react-afebf.appspot.com",
  messagingSenderId: "267230227926",
  appId: "1:267230227926:web:9dc3340365a90932574877"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { db , auth , provider };
export default db;