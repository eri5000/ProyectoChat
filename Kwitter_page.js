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
  document.getElementById("user_name").innerHTML="Hola " + user_name + "Bienvenido a la sala: " + room_name;
  
  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").value = "";
  }


