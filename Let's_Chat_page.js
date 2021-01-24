//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAfF7K1db7Gam7XCZ3T0h4RaClitWD3620",
    authDomain: "let-s-chat-66e8b.firebaseapp.com",
    projectId: "let-s-chat-66e8b",
    storageBucket: "let-s-chat-66e8b.appspot.com",
    messagingSenderId: "408288111701",
    appId: "1:408288111701:web:f639bb43f6a61fdf0978dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
