
var firebaseConfig = {
      apiKey: "AIzaSyCrudSGJmL10lQ4vDt8sU3lfuwr7IwOx_o",
      authDomain: "kwitter-c0463.firebaseapp.com",
      databaseURL: "https://kwitter-c0463-default-rtdb.firebaseio.com",
      projectId: "kwitter-c0463",
      storageBucket: "kwitter-c0463.appspot.com",
      messagingSenderId: "158208045485",
      appId: "1:158208045485:web:d0f38a98e738ed54f17124",
      measurementId: "G-ZRWNEZEB7Y"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
