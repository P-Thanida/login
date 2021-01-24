import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyBh0vpfcCy21d-V7noLw2WOmvmfC3zZgFk",
    authDomain: "login-49b18.firebaseapp.com",
    databaseURL: "https://login-49b18-default-rtdb.firebaseio.com",
    projectId: "login-49b18",
    storageBucket: "login-49b18.appspot.com",
    messagingSenderId: "79500403896",
    appId: "1:79500403896:web:885b116f848167837c804d",
    measurementId: "G-QZ2NKFQP5S"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
