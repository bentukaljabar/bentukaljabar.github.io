// variabel
const id_user = localStorage.getItem('id_user');
const level_user =localStorage.getItem('level_user');

let nama_user = document.getElementById('nama_user');
let sekolah_user = document.getElementById('sekolah_user');
let kelas_user = document.getElementById('kelas_user');

let token = document.getElementById('token');

token.value="";



// mengambil data user
let data2 =level_user+"/"+id_user+"/";
var dbRef2 = firebase.database().ref(data2);
dbRef2.once('value', (snapshot) => {
    var childData2 = snapshot.val();

    namaLengkapUser  = childData2.nama;
    kelas = childData2.kelas;
    sekolah = childData2.sekolah;

    console.log(namaLengkapUser, kelas, sekolah)
    // mengisi inputan data diri
    nama_user.innerHTML = namaLengkapUser;
    kelas_user.innerHTML = kelas;
    sekolah_user.innerHTML = sekolah;

});


// ketika tombol masuk diklik
let  mulai = document.getElementById('mulai');
mulai.addEventListener('click', function(){

    if(token.value == ""){
        popup.alert({
            content: 'Token masih kosong.'
        });
    }else{
        periksaToken(token.value, (check) => {
            
            if(check == 0){
                popup.alert({
                    content: 'Token salah cek kembali.'
                });
            }else{
                window.location = "hal_kuis.html";
            }
        
        }) 
    }

})

// pengecekan token
function periksaToken(token, callback) {

    let benar = 0 ;
    
    var dbRef = firebase.database().ref("token/");

    dbRef.once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            
            if (token == childData.token) {
                
                localStorage.setItem("id_token", childData.id);
                localStorage.setItem("token", childData.token);
                localStorage.setItem("id_guru", childData.id_guru);
                benar = 1;
            }

        });
        callback(benar)
    });
} 
