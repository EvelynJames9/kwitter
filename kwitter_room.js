
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
