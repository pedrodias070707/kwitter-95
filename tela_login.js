const app = initializeApp(firebaseConfig);

function addUser(){

var userName = document.getElementById("userName").value;
localStorage.setItem("userName",userName);
firebase.database().ref("/").child(userName).update({
    purpose:"adicionar usuario"
})
window.location="tela_kwitter.html";
}

