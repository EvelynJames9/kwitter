
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
 function addRoom(){
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
       });

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById(output).innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace = "index.html";
}


