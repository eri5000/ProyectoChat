var firebaseConfig = {
  apiKey: "AIzaSyBt3rqjjvR3LjxFqJG5I7jSnSw5Buz0ies",
  authDomain: "chatonline-cd0aa.firebaseapp.com",
  databaseURL: "https://chatonline-cd0aa-default-rtdb.firebaseio.com",
  projectId: "chatonline-cd0aa",
  storageBucket: "chatonline-cd0aa.appspot.com",
  messagingSenderId: "1048119489884",
  appId: "1:1048119489884:web:d77c7a589bd9b7fd55fd99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="hola" + user_name;