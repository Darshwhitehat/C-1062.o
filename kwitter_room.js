
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDkEC-vO1MUPwZWhsGoxshX00qxwkQ2coI",
      authDomain: "chat-d6d8d.firebaseapp.com",
      databaseURL: "https://chat-d6d8d-default-rtdb.firebaseio.com",
      projectId: "chat-d6d8d",
      storageBucket: "chat-d6d8d.appspot.com",
      messagingSenderId: "309636931435",
      appId: "1:309636931435:web:08f27cd81f54a6bf2af62e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    
    function add_room(){
       room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            pupose: "adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    } 

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name#",room_name);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoom(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

