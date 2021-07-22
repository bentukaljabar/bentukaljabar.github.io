// variabel
const id_user = localStorage.getItem('id_user');
const level_user = localStorage.getItem('level_user');
const id_token = localStorage.getItem('id_token');
const id_guru = localStorage.getItem('id_guru');
const token = localStorage.getItem('token');
const poinnya = localStorage.getItem('poin_soal')
const id_kelas = localStorage.getItem('id_kelas');
const bg_nav_soal =document.querySelector('.bg_soal');
let bg_soal =document.querySelector('.kanan');
let db_waktu, db_poin, db_banyak_soal, db_nama_user, db_kelas;
let bg_user = document.getElementById('bg_nama_user');
let nama_user = document.getElementById('nama_user');
let judul = document.getElementById('isi_judul');
let selesai = document.querySelector('.selesai');
let waktuTerakhir =localStorage.getItem('waktuTerakhir');
let urutan_soal =[];
let soalnih =[];
let pil_a=[];
let pil_b=[];
let pil_c=[];
let pil_d=[];
let kunci =[];
let pil_userr=[];
let ket_user=[];
let dataPilihanUser = {};
let dataPilihanUserAdaNew =JSON.parse(localStorage.getItem('dataPilihanUserAda'))
let urutanDataSebelumnya = localStorage.getItem('urutan_soal');

// cek apakah sudah ada data user memilih
if(dataPilihanUserAdaNew != null){
    dataPilihanUser = dataPilihanUserAdaNew;
}else{
    dataPilihanUser = {
        id:id_token,
        id_user:id_user,
    };
}

// mengambil data user
let data = level_user + "/"
var dbRef = firebase.database().ref(data);

dbRef.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        if(childData.id == id_user){
            // nama_user.innerHTML = childData.nama;
            // bg_user.innerHTML += `<div class="icon"><img src="img/ic_calon.png" alt=""></div>`;
            db_nama_user =childData.nama;
            db_kelas= childData.kelas;
        }

    });
});

// mengambil data token
let data1 ="token/"
var dbRef1 = firebase.database().ref(data1);

dbRef1.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        var childData1 = childSnapshot.val();

        if(childData1.id == id_token){
            judul.innerHTML = childData1.nama_paket;
            db_banyak_soal = childData1.banyak_soal;
            db_poin = childData1.poin_soal;
            db_waktu = childData1.waktu;
        }

    });
    meanampilkan_banyak_nav(db_banyak_soal)
    if(waktuTerakhir == null){
        meanampilkan_waktu(db_waktu*60000, 1)
    }else{
        meanampilkan_waktu(parseInt(waktuTerakhir), 1)
    }
});

// mengambil data soal
let soalnya ="soals/" + id_guru + "/" + id_token +"/soal/"
var dbRef2 = firebase.database().ref(soalnya);

dbRef2.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        var childData2 = childSnapshot.val();
        soalnih.push(childData2.soal);
        pil_a.push(childData2.a);
        pil_b.push(childData2.b);
        pil_c.push(childData2.c);
        pil_d.push(childData2.d);
        kunci.push(childData2.kunci);
    });
    if(urutanDataSebelumnya == null){
        merandom_urutan(soalnih.length);
        console.log('ok')
    }else{
        urutan_soal =JSON.parse(urutanDataSebelumnya)
        // console.log('no')
    }
    tampilkan_soal(db_banyak_soal, soalnih, pil_a, pil_b, pil_c, pil_d, kunci);
    console.log(urutan_soal);
});



// menampilkan navigasi soal
const meanampilkan_banyak_nav = (db_banyak_soal) =>{
    for(let i=0; i < db_banyak_soal; i++){
        bg_nav_soal.innerHTML +=`<div class="soal_nav belum"><p class="text fontsedang ">${i+1}</p></div>`
    }

    bg_nav_soal.innerHTML += `
    <div class="clear"></div>
    <div class="ket fontsedang">
        <p>Ket:</p>
        <p><span class="belum">Putih</span> = Belum dijawab</p>
        <p><span class="sudah">Hijau</span> = Sudah dijawab</p>
    </div>`
}

// mengatur waktu
const meanampilkan_waktu = (waktu, paksaberhenti) =>{
    countDownDate = new Date().getTime();
    countDownDate += waktu;
    
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        // console.log(distance);
                
        // Perhitungan waktu untuk menit dan detik
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
        document.getElementById("demo").innerHTML = minutes + ":" + seconds;
                
        localStorage.setItem('waktuTerakhir', distance);

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "Waktu Selesai";
            nilaiwktu=1;
            hitung_skor(db_banyak_soal)
            localStorage.removeItem("dataPilihanUserAda");
            localStorage.removeItem("urutan_soal");
            localStorage.removeItem("waktuTerakhir");
            localStorage.removeItem("id_token");
            localStorage.removeItem("token");
        }
    }, 1000);

    if(paksaberhenti == 0){
        clearInterval(x);
    }
}

// waktu
function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + " : " + tanggal.getMinutes());
}

// merandom soal
const merandom_urutan = (db_banyak_soal) =>{
    //random urutan
    for (let x = 0; x < 100; x++) {
        // acak angka dengan batas length.data dan minimum 0
        let angka = Math.floor(Math.random() * db_banyak_soal) + 0;
        urutan_soal.push(angka);
    }
    // membuang angka yang sama
    urutan_soal = Array.from(new Set(urutan_soal));
    console.log(urutan_soal)
    localStorage.setItem('urutan_soal', JSON.stringify(urutan_soal));
}

// menyimpan soal ke database
var d = new Date();
var t = d.getTime();
var counter = t;
var jwbb = counter+1;

function simpanHasil(nama, iduser, kelas, token, skor, waktu, id_kelas) {
    counter += 1;
    var task = {
        id: counter,
        nama: nama,
        id_user : iduser,
        kelas: kelas,
        token: token,
        skor: skor,
        waktu: waktu,
        id_kelas,
        tgl : hari()
    }

    let data = "hasilSoal/"+id_guru+"/"+token+"/"+counter+"/";
    let db = firebase.database().ref(data);
    db.set(task);
}

// menyimpan pilihan user kedatabase
function jawabnya(soal,kunci,jwb,ket) {
    counter += 2;
    var task = {
        id:counter,
        soal:soal,
        jawaban:kunci,
        jawaban_user:jwb,
        keterangan:ket
    }

    let db = firebase.database().ref("hasilSoal/"+id_guru+"/"+token+"/"+jwbb+"/detail/"+counter);
    db.set(task);
}

// Menampilkan hasil ke layar
function kanan_akhir(nama,kelas,skor,keterangan,waktu){
    return `
<center>
    <div class="card">

        <div class="additional">
            <div class="icon hasil_icon"><center><img src="img/hasil.gif" alt=""></center></div>
        </div>

    <div class="general">
        <h1>${nama}</h1>
        <hr>
        <table class="hasilnya">
                <tr>
                    <td class="col1">KELAS</td>
                    <td class="col2">:</td>
                    <td class="col3">${kelas}</td>
                </tr>
                <tr>
                    <td class="col1">SKOR</td>
                    <td class="col2">:</td>
                    <td class="col3">${skor}</td>
                </tr>
                <tr>
                    <td class="col1">KETERANGAN</td>
                    <td class="col2">:</td>
                    <td class="col3">${keterangan}</td>
                </tr>
            </table>
    </div>

    </div>
</center>
`
}

// menghitung skor dan menmapilkan hasil layar
const hitung_skor = (banyak_soal) =>{
    hasilakhir = 0;
    benarr = 0;

    let pils_soal = document.querySelectorAll('input');
        for (let i = 0; i < banyak_soal; i++) {
            let pil_ganda=0;
            for (let j = 0; j < pils_soal.length; j++) {
                if (pils_soal[j].attributes.name.nodeValue == 'radio' + i) {
                    if (pils_soal[j].checked == true) {
                        pil_userr.push(pils_soal[j].attributes.key.value);
                        if (pils_soal[j].attributes.key.value == kunci[urutan_soal[i]]) {
                            hasilakhir = hasilakhir + poin_soal;
                            benarr = benarr + 1;
                            ket_user.push("benar")
                        } else {
                            hasilakhir = hasilakhir;
                            ket_user.push("salah")
                        }
                    }else{
                        pil_ganda +=1;
                        if(pil_ganda == 4){
                            pil_userr.push("-");
                            ket_user.push("salah")
                        }
                    }
                }
            }
        }
            
    let keterangannya;
    let waktunya =waktu();
            
    if(hasilakhir >= 70){
        keterangannya ="LULUS"
    }else{
        keterangannya="TIDAK LULUS"
    }

    // console.log("kunci jawaban", kunci)
    // console.log("jawaban user", pil_userr)
    // console.log("keterangan", ket_user)
    // console.log("hasil akhir",hasilakhir);

    document.querySelector('.kanan').className +=  ' kanan_new';
    document.querySelector('.kiri').className += ' hilang';
    // bg_user.className += ' hilang';
    document.querySelector('.judul').className += ' top_baru';
    let bgsoalnya = document.querySelectorAll('.bg_pertanyaan');
            
    for(let i = 0; i<bgsoalnya.length; i++){
        if(bgsoalnya[i].className.indexOf('hilang') == -1) {
            bgsoalnya[i].className += ' hilang';
        }
    }

    document.querySelector('.kanan').innerHTML = kanan_akhir(db_nama_user, db_kelas, hasilakhir, keterangannya, waktunya);
    simpanHasil(db_nama_user, id_user, db_kelas, token, hasilakhir, waktunya, id_kelas);
    for(let i=0; i<db_banyak_soal; i++){
        jawabnya(soalnih[urutan_soal[i]], kunci[urutan_soal[i]], pil_userr[i], ket_user[i]);
    }

}

// menampilkan soal
const tampilkan_soal = (banyak_soal, soalnih, pil_a, pil_b, pil_c, pil_d, kunci) =>{

    // menampilkan soalnya
    for(let i=0; i<banyak_soal; i++){
        bg_soal.innerHTML +=`
            <div class="bg_pertanyaan">
                <div class="no">
                    <p>Soal ke <span>${i+1}</span></p>
                </div>
                <div class="inti_pertanyaan">
                        <div class="pertanyaannya"><p>${soalnih[urutan_soal[i]]}</p></div>
                        <div class="batas"></div>
                        <div class="soall">
                            <label class="bg_pilihan">
                                <input type="radio" name="radio${i}" value="a" key='${pil_a[urutan_soal[i]]}'>
                                <span class="textnya">
                                    <span class="nav_pilihan"></span>
                                    <p>${pil_a[urutan_soal[i]]}</p>
                                </span>
                            </label>
                            <label class="bg_pilihan">
                                <input type="radio" name="radio${i}" value="b" key='${pil_b[urutan_soal[i]]}'>
                                <span class="textnya">
                                    <span class="nav_pilihan"></span>
                                    <p>${pil_b[urutan_soal[i]]}</p>
                                </span>
                            </label>
                            <label class="bg_pilihan">
                                <input type="radio" name="radio${i}" value="c" key='${pil_c[urutan_soal[i]]}'>
                                <span class="textnya">
                                    <span class="nav_pilihan"></span>
                                    <p>${pil_c[urutan_soal[i]]}</p>
                                </span>
                            </label>
                            <label class="bg_pilihan">
                                <input type="radio" name="radio${i}" value="d" key='${pil_d[urutan_soal[i]]}'>
                                <span class="textnya">
                                    <span class="nav_pilihan"></span>
                                    <p>${pil_d[urutan_soal[i]]}</p>
                                </span>
                            </label>
                        </div>
                        <center>
                            <div class="nav_sebelum"><p>SEBELUMNYA</p></div>
                            <div class="nav_selanjut"><p>SELANJUTNYA</p></div>
                        </center>
                        <div class="clear"></div>
                    </div>
            </div>
        `
        MathJax.typeset();
    }

    // membuat soal hilang kecuali no1
    let bg_soalnya = document.querySelectorAll('.bg_pertanyaan');
    let sblmnya = document.querySelectorAll('.nav_sebelum');
    let slanjutnya = document.querySelectorAll('.nav_selanjut');
        for(let i=0; i<banyak_soal; i++){
            if(i == 0){
                sblmnya[i].className += ' disable';
            }
            if(i== banyak_soal-1){
                slanjutnya[i].className +=' disable';
                
            }
            if(i != 0){
                bg_soalnya[i].className += ' hilang';
            }
        }

    // perintah tombol selanjutnya
    for (let i = 0; i < slanjutnya.length - 1; i++) {
        slanjutnya[i].addEventListener('click', function () {
            let bgnya = slanjutnya[i].parentElement.parentElement.parentElement;
            // menghilangkan bg_sekarang
            bgnya.className += " hilang";
            // menampilkan bg_pertanyaan selanjutnya
            bg_soalnya[i + 1].className = bg_soalnya[i + 1].className.replace("hilang", "");
        });
    }

    // perintah tombol kembali
    for (let i = 0; i < sblmnya.length; i++) {
        sblmnya[i].addEventListener('click', function () {
            if (i != 0) {
                let bgnya = sblmnya[i].parentElement.parentElement.parentElement;
                bgnya.className += " hilang";
                // menampilkan bg_pertanyaan selanjutnya
                bg_soalnya[i - 1].className = bg_soalnya[i - 1].className.replace("hilang", "");
            }
        });
    }

    // tangkap soall pilihan yang dklik dan beri warna di nav soal    
    let soallnya = document.querySelectorAll('.soall');
    let soal_navnya = document.querySelectorAll('.soal_nav');

    for (let i = 0; i < soallnya.length; i++) {
        soallnya[i].addEventListener('click', function () {

            let pilihannya = document.querySelectorAll('.bg_pilihan input');
            for (let j = 0; j < pilihannya.length; j++) {
                pilihannya[j].addEventListener('click', function () {
                    soal_navnya[i].className = soal_navnya[i].className.replace("belum", " sudah");
                });
            }
        });
    }

    // nav_soal diklik
    let klik_nav_soal = document.querySelectorAll('.soal_nav');
    for (let l = 0; l < klik_nav_soal.length; l++) {
        klik_nav_soal[l].addEventListener('click', function () {
            let pindah_bgsoalnya = document.querySelectorAll('.bg_pertanyaan');
            for (let k = 0; k < pindah_bgsoalnya.length; k++) {
                if (k == l) {
                    pindah_bgsoalnya[k].className = pindah_bgsoalnya[k].className.replace(" hilang", " ");
                } else {
                    if (pindah_bgsoalnya[k].className.indexOf('hilang') == -1) {
                        pindah_bgsoalnya[k].className += ' hilang';
                    }
                }
            }
        });
    }
    

    // tombol selesai diklik
    selesai.addEventListener('click', function () {

        // mencek semua jawaban
        let sarat = 0;

        for (let t = 0; t < banyak_soal; t++) {
            if ((soal_navnya[t].className.indexOf('sudah') == 10)) {
                sarat = sarat + 1;
            }
        }

        if(sarat == banyak_soal){
            // hitung_skor(banyak_soal)
            // menghentikan waktu
            meanampilkan_waktu(0,0);
        }else{
            popup.alert({
                content: 'Masih ada soal yang belum terjawab.'
            });
        }
    })

    tangkapPilihan()
    if(dataPilihanUserAdaNew != null){
        backupPilihan(banyak_soal)
    }
}

// menangkap pilihan user 
function tangkapPilihan(){
    let pils_soal = document.querySelectorAll('input');
    
    for (let i = 0; i < pils_soal.length; i++) {
        pils_soal[i].addEventListener('click', function(){
            let keynya = pils_soal[i].name;
            let valuenya = pils_soal[i].value;

            dataPilihanUser[keynya]=valuenya;
            localStorage.setItem('dataPilihanUserAda', JSON.stringify(dataPilihanUser));
        });
    }
}

// menampilkan backup pilihan user
function backupPilihan(banyak_soal){
    if(dataPilihanUserAdaNew.id == id_token && dataPilihanUserAdaNew.id_user==id_user){
        let pils_soal = document.querySelectorAll('input');

        for (let i = 0; i < banyak_soal; i++) {
            for (let j = 0; j < pils_soal.length; j++) {
                let keynya = pils_soal[j].name;
                let valuenya = pils_soal[j].value;

                if (keynya == Object.keys(dataPilihanUserAdaNew)[i+2] && valuenya == dataPilihanUserAdaNew[keynya]) {
                    // console.log(Object.keys(dataPilihanUserAdaNew)[i+2])
                    pils_soal[j].checked=true;
                    let indexnya = keynya.split('radio').join('');
                    let soal_navnya = document.querySelectorAll('.soal_nav');
                    soal_navnya[indexnya].className = soal_navnya[indexnya].className.replace("belum", " sudah");
                }
            }
            
        }
    }
}

function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}
