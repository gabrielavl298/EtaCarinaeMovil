import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCxc4c4cQ2CLqpvGL2z7qiGCE_lbfKZ4RM",
  authDomain: "etacarinae-e197e.firebaseapp.com",
  projectId: "etacarinae-e197e",
  storageBucket: "etacarinae-e197e.appspot.com",
  messagingSenderId: "605036753784",
  appId: "1:605036753784:web:6c08c744b3b0e2a75c0e8d"
  };

  const firebaseapp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseapp);

  export default db;