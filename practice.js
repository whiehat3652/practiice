

//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyA_2wdBQx8bmBXMYN-n5CNFY0eGASd-h0Y",
    authDomain: "kwitter-bccea.firebaseapp.com",
    databaseURL: "https://kwitter-bccea.firebaseio.com",
    projectId: "kwitter-bccea",
    storageBucket: "kwitter-bccea.appspot.com",
    messagingSenderId: "939322242209",
    appId: "1:939322242209:web:8b4782414e011f35bb2ce0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        kwtter : "hey there this is the kwitter app"
    });
}