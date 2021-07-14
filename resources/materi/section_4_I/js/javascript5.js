// soal1
let soal_1 = ['Tentukan hasil operasi pembagian dari \\[24a^36b \\div 2(2 a)\\]...', 'Tentukan hasil operasi pembagian dari \\[12x^2 \\div 4x\\]...', 'Tentukan hasil operasi pembagian dari \\[20x^44y^2 \\div 2(5x^2y)\\]...', 'Tentukan hasil operasi pembagian dari \\[6a^3b^2c \\div 3abc\\]...', 'Tentukan hasil operasi pembagian dari \\[35x^5y^3 \\div 7x^2y2\\]...'];

let pilihana_1 = [
    ['\\[6a^2b\\]', '\\[36a^2b\\]', '\\[6a^3b\\]', '\\[36a^3b\\]'],
    ['\\[3x\\]', '\\[4x\\]', '\\[4x^2\\]', '\\[3x^2\\]'],
    ['\\[8x^2y^2\\]', '\\[20x^2y^2\\]', '\\[20x^2y\\]', '\\[8x^2y\\]'],
    ['\\[2a^2b\\]', '\\[2a^3b^2\\]', '\\[3a^2bc\\]', '\\[3a^2b^2c\\]'],
    ['\\[5x^2y\\]', '\\[7x^2y^2\\]', '\\[5x^3y\\]', '\\[5x^3y^2\\]']
];
let pembahasan_1 = ['<p class="masuk aau">Pembahasan :</p> <p class="masuk aau jarak_atas">\\[24a^36b \\div 2(2a)\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{24a^36b}{2(2a)}\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{24a^36b}{4a}\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{24}{4} \\times \\frac{a^3}{a} \\times 6b\\]</p> <p class="masuk aau jarak_atas">\\[=6 \\times a^2 \\times 6b\\]</p> <p class="masuk aau jarak_atas">\\[=36a^2b\\]</p> <br>', '<p class="masuk aau">Pembahasan :</p> <p class="masuk aau jarak_atas">\\[12x^2 \\div 4x\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{12x^2}{4x}\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{12}{4}\\times \\frac{x^2}{x}\\]</p> <p class="masuk aau jarak_atas">\\[=3 \\times x \\]</p> <p class="masuk aau jarak_atas">\\[=3x\\]</p> <br>', '<p class="masuk aau">Pembahasan :</p> <p class="masuk aau jarak_atas">\\[20x^44y^2 \\div 2(5x^2y)\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{20x^44y^2}{2(5x^2y)}\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{20x^44y^2}{10x^2y}\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{20}{10} \\times \\frac{x^4}{x^2} \\times 4 \\times \\frac{y^2}{y}\\]</p> <p class="masuk aau jarak_atas">\\[=2 \\times x^2 \\times 4 \\times y\\]</p> <p class="masuk aau jarak_atas">\\[=8x^2y\\]</p> <br>', '<p class="masuk aau">Pembahasan :</p> <p class="masuk aau jarak_atas">\\[6a^3b^2c \\div 3abc\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{6a^3b^2c}{3abc)}\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{6}{3} \\times \\frac{a^3}{a}\\times \\frac{b^2}{b}\\times \\frac{c}{c} \\]</p> <p class="masuk aau jarak_atas">\\[=2 \\times a^2 \\times b \\]</p> <p class="masuk aau jarak_atas">\\[=2a^2b\\]</p> <br>', '<p class="masuk aau">Pembahasan :</p> <p class="masuk aau jarak_atas">\\[35x^5y^3 \\div 7x^2y^2\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{35x^5y^3}{7x^2y^2)}\\]</p> <p class="masuk aau jarak_atas">\\[= \\frac{35}{7} \\times \\frac{x^5}{x^2}\\times \\frac{y^3}{y^2}\\]</p> <p class="masuk aau jarak_atas">\\[=5 \\times x^3 \\times y \\]</p> <p class="masuk aau jarak_atas">\\[=5x^3y\\]</p> <br>'];
let kunci_1 = ['b', 'a', 'd', 'a', 'c'];


// pertanyaan 2
let soal2 = ['Tentukan hasil pembagian dari \\[x^2+8x-48\\] oleh \\[x-4\\] . . .', 'Tentukan hasil pembagian dari \\[x^2+5x+6\\] oleh \\[x+2\\] . . .'];
let pembahasanket2 = ['<div class="bg_bagi"> <p class="jwb "><span class="">\\[x\\]</span> <span class="">\\[+12\\]</span></p> <p class="inline  kiridikit">\\[x-4\\]</p> <p class="inline"><div class="dibagi inline"> \\[x^2+8x-48\]</div></p> <span class=""><p class="inline hasil1 ">\\[x^2-4x\\]</p></span> <div class="kurang ">-</div> <br> <span class="blok"><p class="inline hasil2 ">\\[12x-48\\]</p></span> <span class="blok"><p class="hasil2 ">\\[12x-48\\]</p></span> <div class="kurang1 ">-</div> <br> <span class=""><p class="inline hasil3 ">\\[0\\]</p></span> </div>', '<div class="bg_bagi"> <p class="jwb "><span class="">\\[x\\]</span> <span class="">\\[+3\\]</span></p> <p class="inline  kiridikit">\\[x+2\\]</p> <p class="inline"><div class="dibagi inline"> \\[x^2+5x+6\\]</div></p> <span class=""><p class="inline hasil1 ">\\[x^2+2x\\]</p></span> <div class="kurang ">-</div> <br> <span class="blok"><p class="inline hasil2 ">\\[3x+6\\]</p></span> <span class="blok"><p class="hasil2 ">\\[3x+6\\]</p></span> <div class="kurang1 ">-</div> <br> <span class=""><p class="inline hasil3 ">\\[0\\]</p></span> </div>']
let kunci1 = [
    ['+1x', '+12'],
    ['+1x', '+3']
];
let syarat_pertanyaan2 = ['2', '2'];

// kunci jawaban pertanyaan 2
let jwb_benarr = kunci1[0];
let pnjang_jawaban = syarat_pertanyaan2[0];



// pertanyaan 1
let ubh1 = document.querySelector('.ubah1');
ubh1.addEventListener('click', function () {

    let soalnya_nih = document.querySelector('.soal1');
    let acang_angka = Math.floor(Math.random() * soal_1.length);
    console.log(acang_angka);

    soalnya_nih.innerHTML = soal_1[acang_angka];
    jwb1 = kunci_1[acang_angka];

    let radio0 = document.querySelectorAll('.radio0');
    for (let i = 0; i < radio0.length; i++) {
        radio0[i].checked = false;
    }

    let pilihanya = document.querySelectorAll('.pil1');
    for (let i = 0; i < pilihanya.length; i++) {
        pilihanya[i].innerHTML = pilihana_1[acang_angka][i];
    }

    let pembahasana1 = document.querySelector('.pembahasantnya1');
    pembahasana1.innerHTML = pembahasan_1[acang_angka];

    let keterangan1 = document.querySelector('.kete1');
    if (keterangan1.className.indexOf('hilang1') == -1) {
        keterangan1.className += ' hilang1';
    }

    let pembahasantnya1 = document.querySelector('.pembahasantnya1');
    if (pembahasantnya1.className.indexOf('hilang1') == -1) {
        pembahasantnya1.className += ' hilang1';
    }


    MathJax.typeset();


});

let jwb1 = kunci_1[0];

let cek1 = document.querySelector('.cek1');
cek1.addEventListener('click', function () {
    let radio0 = document.querySelectorAll('.radio0');
    let keterangan1 = document.querySelector('.kete1');


    for (let i = 0; i < radio0.length; i++) {
        // console.log(radio0[i].checked)
        if (radio0[i].checked == true) {
            if (radio0[i].value == jwb1) {
                bunyi();
                keterangan1.innerText = 'Jawaban Benar';


                if (keterangan1.className.indexOf('hilang1') != -1) {
                    keterangan1.className = keterangan1.className.replace('hilang1', '');
                }
                let pembahasantnya1 = document.querySelector('.pembahasantnya1');
                if (pembahasantnya1.className.indexOf('hilang1') == -1) {
                    pembahasantnya1.className += ' hilang1';
                }


            } else {
                keterangan1.innerText = 'Jawaban Salah';
                if (keterangan1.className.indexOf('hilang1') != -1) {
                    keterangan1.className = keterangan1.className.replace('hilang1', '');
                }

                let pembahasantnya1 = document.querySelector('.pembahasantnya1');
                if (pembahasantnya1.className.indexOf('hilang1') != -1) {
                    pembahasantnya1.className = pembahasantnya1.className.replace('hilang1', '');
                }
            }
        }



    }
})


// pertanyaan 2
let tmpt_jwb = document.querySelector('.jwbnya_nih');
let bg_tmbl = document.querySelector('.tombolnih');
let tmbls = document.querySelectorAll('.tmbl');
let bgpembahasan = document.querySelector('.pembahasantnya2');
let ketenya2 = document.querySelector('.kete1');
let ketgambar2 = document.querySelector('.ggmbr');


// tombol ubah 2
let tmbl_ubah2 = document.querySelector('.ubah2');
tmbl_ubah2.addEventListener('click', function () {
    console.log('ok');
    let soalnya_nih = document.querySelector('.soalnya2');
    let acang_angka = Math.floor(Math.random() * soal2.length);
    let tmpt_jwb = document.querySelector('.jwbnya_nih');
    let tmbl = document.querySelector('.tombolnih');
    let ket_pembahasann = document.querySelector('.pembahasantnya2');
    let kete = document.querySelector('.kete1');
    let gambar = document.querySelector('.ggmbr');

    jwb_benarr = kunci1[acang_angka];
    pnjang_jawaban = syarat_pertanyaan2[acang_angka];
    soalnya_nih.innerHTML = soal2[acang_angka];
    ket_pembahasann.innerHTML = pembahasanket2[acang_angka];



    tmpt_jwb.innerText = 'Tekan Saya';
    if (tmpt_jwb.className.indexOf('black') != -1) {
        tmpt_jwb.className = tmpt_jwb.className.replace('black', '');
        tmbl.className += ' hilang1';
    }

    if (ket_pembahasann.className.indexOf('hilang1') == -1) {
        ket_pembahasann.className += ' hilang1';
        console.log('ok');
    }
    if (kete.className.indexOf('hilang1') == -1) {
        kete.className += ' hilang1';
    }
    if (gambar.className.indexOf('hilang1') == -1) {
        gambar.className += ' hilang1';
    }


    MathJax.typeset();
})


tmpt_jwb.addEventListener('click', function () {
    tmpt_jwb.classList.toggle('black');
    bg_tmbl.classList.toggle('hilang1');

})

for (let i = 0; i < tmbls.length; i++) {
    tmbls[i].addEventListener('click', function () {

        input_jawaban = tmpt_jwb.innerText;
        console.log(i);

        if (input_jawaban == 'Tekan Saya') {
            if ((i != 16) && (i != 13) && (i != 14) && (i != 7) && (i != 20)) {
                tmpt_jwb.innerText = '';
                let bgnya = document.createElement('span');
                let text = document.createTextNode(tmbls[i].innerText);
                bgnya.appendChild(text);
                tmpt_jwb.appendChild(bgnya);
                // tmpt_jwb.innerText = tmbls[i].innerText;
            }
            if (i == 7) {
                tmpt_jwb.innerText = '';
            } else if (i == 13) {

                if (input_jawaban == 'Tekan Saya') {
                    tmpt_jwb.innerText = '';
                }
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('x');

                bgnya1.appendChild(text1);
                tmpt_jwb.appendChild(bgnya1);



                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb.appendChild(bgnya);

            } else if (i == 14) {
                if (input_jawaban == 'Tekan Saya') {
                    tmpt_jwb.innerText = '';
                }
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('y');


                bgnya1.appendChild(text1);
                tmpt_jwb.appendChild(bgnya1);


                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb.appendChild(bgnya);

            }

        } else {
            if (i == 7) {
                tmpt_jwb.innerText = '';
            } else if (i == 13) {
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('x');

                bgnya1.appendChild(text1);
                tmpt_jwb.appendChild(bgnya1);



                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb.appendChild(bgnya);

            } else if (i == 14) {
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('y');


                bgnya1.appendChild(text1);
                tmpt_jwb.appendChild(bgnya1);


                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb.appendChild(bgnya);

            } else if (i == 3) {
                let hapus = document.querySelectorAll('.jwbnya_nih span');
                tmpt_jwb.removeChild(hapus[hapus.length - 1]);


            } else if (i == 20) {
                let jawaban = document.querySelectorAll('.jwbnya_nih span');
                let gabung = '';
                for (let j = 0; j < jawaban.length; j++) {
                    gabung += jawaban[j].innerText;
                }
                console.log(gabung);


                let hasilnyaa = [];
                let new_hasil = [];

                hasilnya = gabung.split("+");
                for (let j = 0; j < hasilnya.length; j++) {
                    if (hasilnya[j].indexOf('-') != 0) {
                        var validasiAngka = /^[1-9]+$/;
                        if (hasilnya[j].length == 1 && hasilnya[j].match(validasiAngka) == null) {
                            hasilnya[j] = "+1" + hasilnya[j];
                        } else {
                            hasilnya[j] = "+" + hasilnya[j];
                        }
                    }
                }

                // potong inputan dengan batas -
                for (let j = 0; j < hasilnya.length; j++) {
                    hasilnyaa.push(hasilnya[j].split("-"));
                }

                // // gabungkan array jadi satu baris
                for (let j = 0; j < hasilnyaa.length; j++) {
                    if (hasilnyaa[j].length > 0) {
                        for (let k = 0; k < hasilnyaa[j].length; k++) {
                            new_hasil.push(hasilnyaa[j][k]);
                        }
                    } else {
                        new_hasil.push(hasilnyaa[j]);
                    }
                }

                // // cek baris pertama jika ada ''
                if (new_hasil[0] == '') {
                    new_hasil.shift();
                }

                // // tambahkan - pada awalnya
                for (j = 0; j < new_hasil.length; j++) {
                    if (new_hasil[j].indexOf('+') != 0) {

                        var validasiAngka = /^[1-9]+$/;
                        if (new_hasil[j].length == 1 && new_hasil[j].match(validasiAngka) == null) {
                            new_hasil[j] = '-1' + new_hasil[j];
                        } else {
                            new_hasil[j] = '-' + new_hasil[j];
                        }
                    }

                }
                console.log(new_hasil);

                let sarat = 0;
                if (new_hasil.length == pnjang_jawaban) {
                    for (let i = 0; i < jwb_benarr.length; i++) {
                        for (let j = 0; j < new_hasil.length; j++) {
                            if (jwb_benarr[i] == new_hasil[j]) {
                                sarat += 1;
                                delete new_hasil[j];
                            }
                        }
                    }
                }
                console.log(sarat);

                console.log(jwb_benarr);
                console.log(pnjang_jawaban);
                if (sarat == pnjang_jawaban) {

                    ketgambar2.src = 'gambar/benar.png';
                    if (ketgambar2.className.indexOf('hilang1') != -1) {
                        ketgambar2.className = ketgambar2.className.replace('hilang1', '');
                    }
                    ketenya2.innerText = 'Jawaban Benar';
                    if (ketenya2.className.indexOf('hilang1') != -1) {
                        ketenya2.className = ketenya2.className.replace('hilang1', '');
                    }
                    if (ketenya2.className.indexOf('red') != -1) {
                        ketenya2.className = ketenya2.className.replace('red', '');
                    }
                    if (bgpembahasan.className.indexOf('hilang1') == -1) {
                        bgpembahasan.className += ' hilang1';
                    }

                    tmpt_jwb.classList.toggle('black');
                    bg_tmbl.classList.toggle('hilang1');
                } else {
                    if (bgpembahasan.className.indexOf('hilang1') != -1) {
                        bgpembahasan.className = bgpembahasan.className.replace('hilang1', '');
                    }
                    tmpt_jwb.classList.toggle('black');
                    bg_tmbl.classList.toggle('hilang1');

                    ketenya2.innerText = 'Jawaban Salah';
                    if (ketenya2.className.indexOf('hilang1') != -1) {
                        ketenya2.className = ketenya2.className.replace('hilang1', '');
                    }
                    if (ketenya2.className.indexOf('red') == -1) {
                        ketenya2.className += ' red';
                    }
                    ketgambar2.src = 'gambar/salah.png';
                    if (ketgambar2.className.indexOf('hilang1') != -1) {
                        ketgambar2.className = ketgambar2.className.replace('hilang1', '');
                    }





                }

                console.log(gabung);
            } else {
                let bgnya = document.createElement('span');
                let text = document.createTextNode(tmbls[i].innerText);
                bgnya.appendChild(text);
                tmpt_jwb.appendChild(bgnya);
            }

        }

        MathJax.typeset();
    });
}

// pertanyaan 3


let cek2 = document.querySelector('.cek2');
cek2.addEventListener('click', function () {
    let radio2 = document.querySelectorAll('.radio2');
    let keterangan2 = document.querySelector('.kete2');


    for (let i = 0; i < radio2.length; i++) {
        // console.log(radio0[i].checked)
        if (radio2[i].checked == true) {
            if (radio2[i].value == 'a') {

                keterangan2.innerText = 'Jawaban Benar';

                if (keterangan2.className.indexOf('hilang1') != -1) {
                    keterangan2.className = keterangan2.className.replace('hilang1', '');
                }
                let pembahasantnya2 = document.querySelector('.pembahasantnya3');
                if (pembahasantnya2.className.indexOf('hilang1') == -1) {
                    pembahasantnya2.className += ' hilang1';
                }


            } else {
                keterangan2.innerText = 'Jawaban Salah';
                if (keterangan2.className.indexOf('hilang1') != -1) {
                    keterangan2.className = keterangan2.className.replace('hilang1', '');
                }

                let pembahasantnya2 = document.querySelector('.pembahasantnya3');
                if (pembahasantnya2.className.indexOf('hilang1') != -1) {
                    pembahasantnya2.className = pembahasantnya2.className.replace('hilang1', '');
                }
            }
        }



    }
})






// saat tombol icon diklik lakukan 
let nav = document.querySelector(".icon");
nav.addEventListener('click', function () {
    let navigasi = document.getElementById("nav");
    let konten = document.getElementById("konten");

    if (navigasi.className.indexOf('navigasi-hilang') == -1) {
        navigasi.className += " navigasi-hilang";
        konten.className = konten.className.replace("konten", "konten-penuh");
    } else {
        navigasi.className = navigasi.className.replace("navigasi-hilang", "");
        konten.className = konten.className.replace("konten-penuh", "konten");
    }
})

// subbab sembunyikan dan tampilkan
let materi = document.querySelectorAll('.navigasi li .nihhh');
let submateri = document.querySelectorAll(' .sub-bagian');
for (let i = 0; i < materi.length; i++) {
    materi[i].addEventListener('click', function () {
        submateri[i].classList.toggle('hilang');
    });
}


// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {

        isinya[i].classList.toggle('hilang');
    })
}



// bg_pertanyaan next back
let bgnyaa = document.querySelectorAll('.pertanyaann');
let sbnya = document.querySelectorAll('.sb');
let slnya = document.querySelectorAll('.sl');
for (let i = 0; i < slnya.length; i++) {
    slnya[i].addEventListener('click', function () {
        console.log('ok');
        if (slnya[i].className.indexOf('disable') == -1) {

            if (bgnyaa[i].className.indexOf('hilang') == -1) {
                bgnyaa[i].className += ' hilang';
                bgnyaa[i + 1].className = bgnyaa[i + 1].className.replace('hilang', '');
            }
        }
    });
}
for (let i = 0; i < sbnya.length; i++) {
    sbnya[i].addEventListener('click', function () {
        console.log('ok');
        if (sbnya[i].className.indexOf('disable') == -1) {

            if (bgnyaa[i].className.indexOf('hilang') == -1) {
                bgnyaa[i].className += ' hilang';
                bgnyaa[i - 1].className = bgnyaa[i - 1].className.replace('hilang', '');
            }
        }
    });
}

window.onload = function () {
    let radio0 = document.querySelectorAll('.radio0');
    for (let i = 0; i < radio0.length; i++) {
        radio0[i].checked = false;
    }

    let radio2 = document.querySelectorAll('.radio2');
    for (let i = 0; i < radio2.length; i++) {
        radio2[i].checked = false;
    }
}

var bel = new Audio('../../../sound/coba.ogg');

function bunyi() {

    // Properti currentTime ditambahkan di sini supaya setiap kali fungsi bunyi() dijalankan, suara akan diputar ulang dari awal. Dengan begini tombol “Tekan Bel” bisa ditekan berkali-kali.
    bel.currentTime = 0;
    bel.play();
}