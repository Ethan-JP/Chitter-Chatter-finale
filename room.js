
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCqzcRXMnqwtATmgp2XlGoqnsf3Wc-Vydo",
      authDomain: "chitter-chatter-4f380.firebaseapp.com",
      databaseURL: "https://chitter-chatter-4f380-default-rtdb.firebaseio.com",
      projectId: "chitter-chatter-4f380",
      storageBucket: "chitter-chatter-4f380.appspot.com",
      messagingSenderId: "70316611839",
      appId: "1:70316611839:web:e3c3377c0401d525a514ca"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username");
document.getElementById("welcomeuser").innerHTML="Welcome : "+user_name

//code for adding room in the database
function addroom() {
      room_name=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
      status : "roomname added"
      })
      //code for setting the roomname in the local storage
      localStorage.setItem("roomname",room_name)
      window.location="page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row=`<div class="room_name" id=${Room_names} onclick="gotoroom(this.id)">${Room_names}</div> <hr>`
       document.getElementById("output").innerHTML+=row
      //Start code
console.log(Room_names)
      //End code
      });});}
getData();
function gotoroom(room) {
      localStorage.setItem("roomname",room)
      window.location="page.html"
}
function logout() {
            localStorage.removeItem("roomname")
            localStorage.removeItem("username")
            window.location="index.html"
}