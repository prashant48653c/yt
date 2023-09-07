
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBM2vLfheKeWFGjgKZyYv9bwKN-YTWOid4",
  authDomain: "streamzone-93003.firebaseapp.com",
  projectId: "streamzone-93003",
  storageBucket: "streamzone-93003.appspot.com",
  messagingSenderId: "529132154311",
  appId: "1:529132154311:web:63c911e324f77ed0963de2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const Provider = new GoogleAuthProvider();
export { auth, Provider };