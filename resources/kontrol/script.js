// menguhubungkan ke firebase
var firebaseConfig = {
    apiKey: "AIzaSyBP2OlbvugAiBYYoIVLPnmBTJb86yKinx4",
    authDomain: "hasilnya-7dbc4.firebaseapp.com",
    databaseURL: "https://hasilnya-7dbc4.firebaseio.com",
    projectId: "hasilnya-7dbc4",
    storageBucket: "hasilnya-7dbc4.appspot.com",
    messagingSenderId: "35969158548",
    appId: "1:35969158548:web:e4086ee61bd9807a839381"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.load = function () {
    readlah();


}

function readlah() {
    var task = firebase.database().ref("kontrolkuis/");

    let tmp = document.querySelector('.isinya');

    task.on("child_added", function (data) {
        var taskvalue = data.val();

        if (taskvalue.nilai == 0) {
            tmp.innerHTML += `<div class = "bgkontrol" ><p class="baris"> ${taskvalue.kuis} </p > <label class="switch  kirinih"> <input type = "checkbox" onclick="update(${taskvalue.id},'${taskvalue.kuis}','${taskvalue.nilai}')">
        <span class = "slider round" > </span> </label> </div>`;
        } else {
            tmp.innerHTML += `<div class = "bgkontrol" ><p class="baris"> ${taskvalue.kuis} </p > <label class="switch  kirinih"> <input type = "checkbox" checked onclick="update(${taskvalue.id},'${taskvalue.kuis}','${taskvalue.nilai}')">
        <span class = "slider round" > </span> </label> </div>`;
        }


    });

}


function update(id, kuis, nilai) {

    if (nilai == 0) {
        nilaibaru = 1;
    } else {
        nilaibaru = 0;
    }
    var taskUpdate = {
        kuis: kuis,
        id: id,
        nilai: nilaibaru
    }

    let db = firebase.database().ref("kontrolkuis/" + id);
    db.set(taskUpdate);
    window.location = "/kontrol/kontrol.html";

}