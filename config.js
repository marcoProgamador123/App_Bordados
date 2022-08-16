import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBHzi7jFnf55yusFFTLaljpJ6_2Mj5aJwY",
    authDomain: "embroidery-app-fc30c.firebaseapp.com",
    projectId: "embroidery-app-fc30c",
    storageBucket: "embroidery-app-fc30c.appspot.com",
    messagingSenderId: "213475641537",
    appId: "1:213475641537:web:cb2a2fb5af845311bb6c40"
  };

  firebase.initializeApp(
    firebaseConfig
  )
  export default firebase.firestore()