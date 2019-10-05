$(document).ready(function(){

  getWeather();
})
function getWeather(arg1){
  $(".city").text("");
  $(".temp").text("");
  var url="https://api.openweathermap.org/data/2.5/weather?q="+arg1+"&units=imperial&APPID="+apikey;
  $.ajax(url,{success:function(data){
$(".city").text(data.name);
$(".temp").text(data.main.temp);
  },error:function(error){
    $(".error-message").text("An error ocurred.");
  }})
}
function searchWeather(){
  var seekQuery=$(".search").val();
  getWeather(seekQuery);
}
function handleSignIn(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user.email);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

function addMessage(postTitle,postBody){

var postData={
title:postTitle, body:postBody
}
var database = firebase.database().ref("posts");
var newPostRef = database.push();
newPostRef.set(postData);
}

function handleMessageFormSubmit(){
  var postTitle=$("#post-title").val();
  var postBody=$("#post-body").val();
  console.log(postTitle);
  addMessage(postTitle,postBody);
}