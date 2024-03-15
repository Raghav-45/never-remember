// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8O6f90HVfhTSRX-VcggNLw3KGmLiPiCY",
  authDomain: "never-remember.firebaseapp.com",
  projectId: "never-remember",
  storageBucket: "never-remember.appspot.com",
  messagingSenderId: "608787416046",
  appId: "1:608787416046:web:d5639e91a0768ca18a44ff",
  measurementId: "G-C4FRVYWPXS"
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }