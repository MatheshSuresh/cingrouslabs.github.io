var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var submitBtn = document.getElementById("submitBtn");

function test(){
    var firebaseRef = firebase.database().ref();
    var hourStore = parseInt(hours.value);
    var minStore = parseInt(minutes.value);
    
    firebaseRef.child("Hours").set(hourStore);
    firebaseRef.child("Minutes").set(minStore);
    
}