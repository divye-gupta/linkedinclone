import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCdLO9vhj0nLTSOoXI1dTCaJwNip8zcBrg",
  authDomain: "linkedin-clone-41691.firebaseapp.com",
  projectId: "linkedin-clone-41691",
  storageBucket: "linkedin-clone-41691.appspot.com",
  messagingSenderId: "270547510194",
  appId: "1:270547510194:web:29780afa9fab55cf1ffaab"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
