//YOUR FIREBASE LINKS

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

    //code for getting room name and username from local storage
    user_name=localStorage.getItem("username")
    room_name=localStorage.getItem("roomname")

    //code for sending the message into the roomname into the firebase
    function send() {
          msg=document.getElementById("messageinput").value;
          firebase.database().ref(room_name).push({
                USERNAME:user_name,
                MESSAGE : msg,
                LIKES : 0
          })
          document.getElementById("messageinput").value=" "
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
//code for making a tag for username
user=message_data["USERNAME"]
console.log(user)
usertag=`<h4>${user} </h4>`
//code for making a tag for message
message=message_data["MESSAGE"]
messagetag=`<h4>${message}</h4>`
//code for making a tag for like
like=message_data["LIKES"]
liketag=`<button class="btn btn-warning" id=${firebase_message_id} value=${like} onclick="update(this.id)" ><span class="glyphicon glyphicon-thumbs-up"></span>Like : ${like}</button>`
document.getElementById("output").innerHTML+=usertag+messagetag+liketag;

//End code
      } });  }); }
      
getData();
function logout() {
      localStorage.removeItem("roomname")
      localStorage.removeItem("username")
      window.location="index.html"
}

function update(messageid) {
      likes=document.getElementById(messageid).value;
      updatedlikes=Number(likes)+1
      firebase.database().ref(room_name).child(messageid).update({
            LIKES : updatedlikes
      })
}