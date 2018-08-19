var db=firebase.firestore();

function test(){
    var name=document.getElementById("data1").value;
    var mail=document.getElementById("data2").value;
    var msg=document.getElementById("data3").value;
    // Add a new document in collection "cities"
    db.collection("cingrous").doc(name).set({
        mail: mail,
        message: msg
    })
    .then(function() {
        console.log("Document successfully written!");
        window.alert("Document successfully written!")
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}