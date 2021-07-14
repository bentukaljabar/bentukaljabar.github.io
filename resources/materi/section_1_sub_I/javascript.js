// saat tombol icon diklik lakukan 

let nav = document.querySelector(".icon");
nav.addEventListener('click', function () {
    let navigasi = document.getElementById("nav");
    let konten = document.getElementById("konten");
    let bawah = document.getElementById("bawah");
    let kiri = document.getElementById("kiri");
    let kanan = document.getElementById("kanan");

    if (navigasi.className.indexOf('navigasi-hilang') == -1) {
        navigasi.className += " navigasi-hilang";
        konten.className = konten.className.replace("konten", "konten-penuh");
        bawah.className = bawah.className.replace("bawah-hilang", "bawah");
        kiri.className += " konten-ubah";
        kanan.className += " konten-ubah";
    } else {
        navigasi.className = navigasi.className.replace("navigasi-hilang", "");
        konten.className = konten.className.replace("konten-penuh", "konten");
        bawah.className = bawah.className.replace("bawah", "bawah-hilang");
        kiri.className = kiri.className.replace("konten-ubah", "");
        kanan.className = kanan.className.replace("konten-ubah", "");
    }
})

const cek1 = document.getElementById('cek');
cek1.addEventListener('click', function () {
    console.log("ok");
    let ket = document.querySelector('#pertanyaan1 .ket');

    let jawaban = document.getElementById('benar1');
    let jawaban1 = document.getElementById('salah1');

    if (jawaban.checked) {
        ket.innerText = "Jawaban Salah, Bentuk aljabar adalah suatu bentuk matematika di mana dalam penyajiannya mengkombinasikan angka dan huruf.";
        ket.className = ket.className.replace("hilang", "");

    } else if (jawaban1.checked) {
        ket.innerText = "Jawaban Benar, Bentuk aljabar adalah suatu bentuk matematika di mana dalam penyajiannya mengkombinasikan angka dan huruf.";
        ket.className = ket.className.replace("hilang", "");
    } else {
        ket.innerText = "Pilihan belum dipilih. ";
        ket.className = ket.className.replace("hilang", "");
    }


});


const next = document.getElementById('next');
next.addEventListener('click', function () {
    const pertanyaan1 = document.getElementById('pertanyaan1');
    const pertanyaan2 = document.getElementById('pertanyaan2');

    pertanyaan1.className += " hilang";
    pertanyaan2.className = pertanyaan2.className.replace('hilang', '');

});

const previous = document.getElementById('previous');
previous.addEventListener('click', function () {
    const pertanyaan1 = document.getElementById('pertanyaan1');
    const pertanyaan2 = document.getElementById('pertanyaan2');

    pertanyaan2.className += " hilang";
    pertanyaan1.className = pertanyaan2.className.replace('hilang', '');

});

const cek2 = document.getElementById('cek1');
cek2.addEventListener('click', function () {
    console.log("ok");
    let ket = document.querySelector('#pertanyaan2 .ket1');

    let jawaban1 = document.getElementById('box1');
    let jawaban2 = document.getElementById('box2');
    let jawaban3 = document.getElementById('box3');
    let jawaban4 = document.getElementById('box4');

    if ((!jawaban1.checked) && (!jawaban2.checked) && (!jawaban4.checked) && (!jawaban3.checked)) {
        ket.innerText = "Jawaban belum dipilih.";
        ket.className = ket.className.replace("hilang", "");
    } else if ((jawaban1.checked) && (jawaban2.checked) && (jawaban4.checked) && (!jawaban3.checked)) {
        ket.innerText = "Jawaban Benar, Bentuk aljabar dalam penyanjiannya mengkombinasikan angka dan huruf, bukan simbol atau tanda baca.";
        ket.className = ket.className.replace("hilang", "");

    } else {
        ket.innerText = "Jawaban Salah, Bentuk aljabar dalam penyanjiannya mengkombinasikan angka dan huruf, bukan simbol atau tanda baca.";
        ket.className = ket.className.replace("hilang", "");
    }


});

let contoh = document.querySelectorAll('.masuk span');
let ketnya = document.querySelector(".ketnya");

for (let i = 0; i < contoh.length; i++) {
    contoh[i].addEventListener('mouseover', function () {
        if (i == 0) {
            ketnya.innerText = "Bentuk Aljabar yang mengkombinasikan angka 2 dan huruf x. "
            ketnya.className = ketnya.className.replace('hilang', '');
        }
        if (i == 1) {
            ketnya.innerText = "Bentuk Aljabar yang mengkombinasikan angka -6 dan huruf y. "
            ketnya.className = ketnya.className.replace('hilang', '');
        }
        if (i == 2) {
            ketnya.innerText = "Bentuk Aljabar yang mengkombinasikan angka 2 dan huruf a. "
            ketnya.className = ketnya.className.replace('hilang', '');
        }
        if (i == 3) {
            ketnya.innerHTML = "Bentuk Aljabar yang mengkombinasikan angka 1 dan huruf x pangkat 2 ";
            ketnya.className = ketnya.className.replace('hilang', '');
        }
    });
}

for (let i = 0; i < contoh.length; i++) {
    contoh[i].addEventListener('mouseout', function () {
        ketnya.className += ' hilang';
    });
}