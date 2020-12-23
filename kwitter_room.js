var firebaseConfig = {
      apiKey: "AIzaSyDRBcQvEwPsgdNV_wSYU_Pid-YVFFc8Umk",
      authDomain: "kwitter-87f45.firebaseapp.com",
      databaseURL: "https://kwitter-87f45-default-rtdb.firebaseio.com",
      projectId: "kwitter-87f45",
      storageBucket: "kwitter-87f45.appspot.com",
      messagingSenderId: "99774017811",
      appId: "1:99774017811:web:51a56f5f36e41dd0576ae6",
      measurementId: "G-QZTB0NZPMT"
    };
    firebase.initializeApp(firebaseConfig);
 function addroom(){
  room_name = document.getElementById("room").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name",room_name)
  window.location = "kwitter_page.html"
 }
 
username=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="welcome " + username + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        console.log("room name- " + Room_names)
        row = "<div class='room_name' id="+Room_names+" onclick='direct_to_room(this.id)'>#"+Room_names+"</div><hr>"
        document.getElementById("output").innerHTML += row;
      });});}
getData();
function direct_to_room(name){
    console.log(name);
    localStorage.setItem("room_name",name)
    window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

