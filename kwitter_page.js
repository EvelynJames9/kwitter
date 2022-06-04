//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCqTzD017mvNTie0gh5RITbpgBfpxIgVpY",
      authDomain: "kwitter-b468a.firebaseapp.com",
      databaseURL: "https://kwitter-b468a-default-rtdb.firebaseio.com",
      projectId: "kwitter-b468a",
      storageBucket: "kwitter-b468a.appspot.com",
      messagingSenderId: "830773501528",
      appId: "1:830773501528:web:389fb4370b731901f6742d"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 function send(){
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
   document.getElementById("msg").value = ""; 
 }
