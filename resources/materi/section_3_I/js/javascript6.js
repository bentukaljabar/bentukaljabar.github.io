// soal1
let soal_1 = ['Tentukan hasil operasi perkalian dari \\[2x^3 \\times 4x^2\\] . . .', 'Tentukan hasil operasi perkalian dari \\[x^3 \\times 2x^2\\] . . . ', 'Tentukan hasil operasi perkalian dari \\[7x \\times x^2\\] . . . '];
let pilihana_1 = [
    ['\\[8x^6\\]', '\\[6x^6\\]', '\\[8x^5\\]', '\\[6x^5\\]'],
    ['\\[2 x ^ 5\\]', '\\[2 x ^ 6\\]', '\\[x ^ 5\\]', '\\[x ^ 6\\]'],
    ['\\[7 x ^ 2\\]', '\\[7 x ^ 3\\]', '\\[7x \\]', '\\[x ^ 2\\]']
];
let pembahasan_1 = ['<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau" > \\[2 x ^ 3 \\times 4 x ^ 2\\] </p> <p class = "masuk aau" > \\[ = (2 \\times 4) x ^ {(3 + 2)}\\] </p> <p class = "masuk aau" > \\[ = 8 x ^ 5\\] </p>', '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau" > \\[ x ^ 3 \\times 2 x ^ 2\\] </p> <p class = "masuk aau" > \\[ = (1 \\times 2) x ^ {(3 + 2)}\\] </p> <p class = "masuk aau" > \\[ = 2 x ^ 5\\] </p>', '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau" > \\[ 7x \\times x ^ 2\\] </p> <p class = "masuk aau" > \\[ = (7 \\times 1) x ^ {(1 + 2)}\\] </p> <p class = "masuk aau" > \\[ = 7 x ^ 3\\] </p>'];
let kunci_1 = ['c', 'a', 'b'];

// soal2
let soal_2 = ['Tentukan hasil operasi perkalian dari \\[(2x+4) \\times (x + 7)\\]...', 'Tentukan hasil operasi perkalian dari \\[(x+5) \\times (2 - y)\\]...'];
let pilihana_2 = [
    ['\\[2x^2+18x+28\\]', '\\[2x^2+10x+28\\]', '\\[2x^2+18x+49\\]', '\\[2x^2+10x+49\\]'],
    ['\\[x-xy-4y+10\\]', '\\[2x-xy+10-5y\\]', '\\[2x-5y+10\\]', '\\[x+4y-xy+10\\]']
];
let pembahasan_2 = ['<p class="masuk aau">Pembahasan :</p><p class="masuk aau">\\[(2x+4)\\times(x+7)\\]</p><p class="masuk aau">\\[=2x(x+7)+4(x+7)\\]</p><p class="masuk aau">\\[=(2x \\times x)+(2x \\times 7)+(4 \\times x)+(4 \\times 7)\\]</p><p class="masuk aau">\\[=(2x^2)+(14x)+(4x)+(28)\\]</p><p class="masuk aau">\\[=2x^2 + 18x +28\\]</p>', '<p class="masuk aau">Pembahasan :</p> <p class="masuk aau">\\[(x+5)\\times(2-y)\\]</p> <p class="masuk aau">\\[=x(2-y)+5(2-y)\\]</p> <p class="masuk aau">\\[=(x \\times 2)+(x \\times -y)+(5 \\times 2)+(5 \\times -y)\\]</p> <p class="masuk aau">\\[=(2x)+(-xy)+(10)+(-5y)\\]</p><p class="masuk aau">\\[=2x-xy+10-5y\\]</p>'];
let kunci_2 = ['a', 'b'];

// soal3
let soal_3 = ['Tentukan hasil operasi perkalian dari \\[2x(2y^2+4x^2)\\] . . .', 'Tentukan hasil operasi perkalian dari \\[2a(4a^3+b^2)\\] . . .'];
let pilihana_3 = [
    ['\\[4y^2+8x^3\\]', '\\[4y^3+8x^2\\]', '\\[4xy^2+8x^3\\]', '\\[4xy^2+4x^2\\]'],
    ['\\[8a^4+2ab^2\\]', '\\[4a^3+2a2b^3\\]', '\\[4a^4+2ab^2\\]', '\\[8a^3+2ab^2\\]']
];
let pembahasan_3 = ['<p class="masuk aau">Pembahasan :</p><p class="masuk aau">\\[2x(2y^2 +4x^2)\\]</p><p class="masuk aau">\\[=(2x \\times 2y^2)+(2x \\times 4x^2)\\]</p> <p class="masuk aau">\\[=(4xy^2)+(8x^3)\\]</p> <p class="masuk aau">\\[=4xy^2+8x^3\\]</p>', '<p class="masuk aau">Pembahasan :</p><p class="masuk aau">\\[2a(4a^3+b^2)\\]</p><p class="masuk aau">\\[=(2a \\times 4a^3)+(2a \\times b^2)\\]</p> <p class="masuk aau">\\[=(8a^4)+(2ab^2)\\]</p> <p class="masuk aau">\\[=8a^4+2ab^2\\]</p>'];
let kunci_3 = ['c', 'a'];

// soal4
let soal_4 = ['Tentukan hasil operasi perkalian dari \\[(x+5)^2\\] ...', 'Tentukan hasil operasi perkalian dari \\[(x+3)^2\\] ...'];
let pilihana_4 = [
    ['\\[x^2+10x+10\\]', '\\[x^2+10x+5\\]', '\\[x^2+25\\]', '\\[x^2+10x+25\\]'],
    ['\\[x^2+6x+9\\]', '\\[x^2+3x+3\\]', '\\[x^2+9\\]', '\\[3x^2+x+9\\]']
];
let pembahasan_4 = ['<p class="masuk aau">Pembahasan :</p> <p class="masuk aau">\\[(x+5)^2\\]</p> <p class="masuk aau">\\[=(x+5) \\times (x + 5)\\]</p> <p class="masuk aau">\\[=x(x+5)+5(x+5)\\]</p> <p class="masuk aau">\\[=(x \\times x)+(x \\times 5)+(5 \\times x)+(5 \\times 5)\\]</p> <p class="masuk aau">\\[=(x^2)+(5x)+(5x)+(25)\\]</p> <p class="masuk aau">\\[=x^2+10x+25\\]</p>', '<p class="masuk aau">Pembahasan :</p> <p class="masuk aau">\\[(x+3)^2\\]</p> <p class="masuk aau">\\[=(x+3) \\times (x + 3)\\]</p> <p class="masuk aau">\\[=x(x+3)+3(x+3)\\]</p> <p class="masuk aau">\\[=(x \\times x)+(x \\times 3)+(3 \\times x)+(3 \\times 3)\\]</p> <p class="masuk aau">\\[=(x^2)+(3x)+(3x)+(9)\\]</p> <p class="masuk aau">\\[=x^2+6x+9\\]</p>'];
let kunci_4 = ['d', 'a'];




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
let ubh2 = document.querySelector('.ubah2');
ubh2.addEventListener('click', function () {

    let soalnya_nih = document.querySelector('.soal2');
    let acang_angka = Math.floor(Math.random() * soal_2.length);
    console.log(acang_angka);

    soalnya_nih.innerHTML = soal_2[acang_angka];
    jwb2 = kunci_2[acang_angka];

    let radio1 = document.querySelectorAll('.radio1');
    for (let i = 0; i < radio1.length; i++) {
        radio1[i].checked = false;
    }

    let pilihanya = document.querySelectorAll('.pil2');
    for (let i = 0; i < pilihanya.length; i++) {
        pilihanya[i].innerHTML = pilihana_2[acang_angka][i];
    }

    let pembahasana1 = document.querySelector('.pembahasantnya2');
    pembahasana1.innerHTML = pembahasan_2[acang_angka];

    let keterangan1 = document.querySelector('.kete2');
    if (keterangan1.className.indexOf('hilang1') == -1) {
        keterangan1.className += ' hilang1';
    }

    let pembahasantnya1 = document.querySelector('.pembahasantnya2');
    if (pembahasantnya1.className.indexOf('hilang1') == -1) {
        pembahasantnya1.className += ' hilang1';
    }


    MathJax.typeset();


});

let jwb2 = kunci_2[0];

let cek2 = document.querySelector('.cek2');
cek2.addEventListener('click', function () {
    let radio1 = document.querySelectorAll('.radio1');
    let keterangan1 = document.querySelector('.kete2');


    for (let i = 0; i < radio1.length; i++) {
        // console.log(radio0[i].checked)
        if (radio1[i].checked == true) {
            if (radio1[i].value == jwb2) {

                keterangan1.innerText = 'Jawaban Benar';

                if (keterangan1.className.indexOf('hilang1') != -1) {
                    keterangan1.className = keterangan1.className.replace('hilang1', '');
                }
                let pembahasantnya1 = document.querySelector('.pembahasantnya2');
                if (pembahasantnya1.className.indexOf('hilang1') == -1) {
                    pembahasantnya1.className += ' hilang1';
                }


            } else {
                keterangan1.innerText = 'Jawaban Salah';
                if (keterangan1.className.indexOf('hilang1') != -1) {
                    keterangan1.className = keterangan1.className.replace('hilang1', '');
                }

                let pembahasantnya1 = document.querySelector('.pembahasantnya2');
                if (pembahasantnya1.className.indexOf('hilang1') != -1) {
                    pembahasantnya1.className = pembahasantnya1.className.replace('hilang1', '');
                }
            }
        }



    }
})

// pertanyaan 3
let ubh3 = document.querySelector('.ubah3');
ubh3.addEventListener('click', function () {

    let soalnya_nih = document.querySelector('.soal3');
    let acang_angka = Math.floor(Math.random() * soal_3.length);
    console.log(acang_angka);

    soalnya_nih.innerHTML = soal_3[acang_angka];
    jwb3 = kunci_3[acang_angka];

    let radio2 = document.querySelectorAll('.radio2');
    for (let i = 0; i < radio2.length; i++) {
        radio2[i].checked = false;
    }

    let pilihanya = document.querySelectorAll('.pil3');
    for (let i = 0; i < pilihanya.length; i++) {
        pilihanya[i].innerHTML = pilihana_3[acang_angka][i];
    }

    let pembahasana1 = document.querySelector('.pembahasantnya3');
    pembahasana1.innerHTML = pembahasan_3[acang_angka];

    let keterangan1 = document.querySelector('.kete3');
    if (keterangan1.className.indexOf('hilang1') == -1) {
        keterangan1.className += ' hilang1';
    }

    let pembahasantnya1 = document.querySelector('.pembahasantnya3');
    if (pembahasantnya1.className.indexOf('hilang1') == -1) {
        pembahasantnya1.className += ' hilang1';
    }


    MathJax.typeset();


});

let jwb3 = kunci_3[0];

let cek3 = document.querySelector('.cek3');
cek3.addEventListener('click', function () {
    let radio1 = document.querySelectorAll('.radio2');
    let keterangan1 = document.querySelector('.kete3');


    for (let i = 0; i < radio1.length; i++) {
        // console.log(radio0[i].checked)
        if (radio1[i].checked == true) {
            if (radio1[i].value == jwb3) {

                keterangan1.innerText = 'Jawaban Benar';

                if (keterangan1.className.indexOf('hilang1') != -1) {
                    keterangan1.className = keterangan1.className.replace('hilang1', '');
                }
                let pembahasantnya1 = document.querySelector('.pembahasantnya3');
                if (pembahasantnya1.className.indexOf('hilang1') == -1) {
                    pembahasantnya1.className += ' hilang1';
                }


            } else {
                keterangan1.innerText = 'Jawaban Salah';
                if (keterangan1.className.indexOf('hilang1') != -1) {
                    keterangan1.className = keterangan1.className.replace('hilang1', '');
                }

                let pembahasantnya1 = document.querySelector('.pembahasantnya3');
                if (pembahasantnya1.className.indexOf('hilang1') != -1) {
                    pembahasantnya1.className = pembahasantnya1.className.replace('hilang1', '');
                }
            }
        }



    }
})

// pertanyaan 4
let ubh4 = document.querySelector('.ubah4');
ubh4.addEventListener('click', function () {

    let soalnya_nih = document.querySelector('.soal4');
    let acang_angka = Math.floor(Math.random() * soal_4.length);
    console.log(acang_angka);

    soalnya_nih.innerHTML = soal_4[acang_angka];
    jwb4 = kunci_4[acang_angka];

    let radio1 = document.querySelectorAll('.radio3');
    for (let i = 0; i < radio1.length; i++) {
        radio1[i].checked = false;
    }

    let pilihanya = document.querySelectorAll('.pil4');
    for (let i = 0; i < pilihanya.length; i++) {
        pilihanya[i].innerHTML = pilihana_4[acang_angka][i];
    }

    let pembahasana1 = document.querySelector('.pembahasantnya4');
    pembahasana1.innerHTML = pembahasan_4[acang_angka];

    let keterangan1 = document.querySelector('.kete4');
    if (keterangan1.className.indexOf('hilang1') == -1) {
        keterangan1.className += ' hilang1';
    }

    let pembahasantnya1 = document.querySelector('.pembahasantnya4');
    if (pembahasantnya1.className.indexOf('hilang1') == -1) {
        pembahasantnya1.className += ' hilang1';
    }


    MathJax.typeset();


});

let jwb4 = kunci_4[0];

let cek4 = document.querySelector('.cek4');
cek4.addEventListener('click', function () {
    let radio2 = document.querySelectorAll('.radio3');
    let keterangan1 = document.querySelector('.kete4');


    for (let i = 0; i < radio2.length; i++) {
        // console.log(radio0[i].checked)
        if (radio2[i].checked == true) {
            if (radio2[i].value == jwb4) {

                keterangan1.innerText = 'Jawaban Benar';

                if (keterangan1.className.indexOf('hilang1') != -1) {
                    keterangan1.className = keterangan1.className.replace('hilang1', '');
                }
                let pembahasantnya1 = document.querySelector('.pembahasantnya4');
                if (pembahasantnya1.className.indexOf('hilang1') == -1) {
                    pembahasantnya1.className += ' hilang1';
                }


            } else {
                keterangan1.innerText = 'Jawaban Salah';
                if (keterangan1.className.indexOf('hilang1') != -1) {
                    keterangan1.className = keterangan1.className.replace('hilang1', '');
                }

                let pembahasantnya1 = document.querySelector('.pembahasantnya4');
                if (pembahasantnya1.className.indexOf('hilang1') != -1) {
                    pembahasantnya1.className = pembahasantnya1.className.replace('hilang1', '');
                }
            }
        }



    }
})


let cek5 = document.querySelector('.cek5');
cek5.addEventListener('click', function () {
    let radio2 = document.querySelectorAll('.radio4');
    let keterangan1 = document.querySelector('.kete5');


    for (let i = 0; i < radio2.length; i++) {
        // console.log(radio0[i].checked)
        if (radio2[i].checked == true) {
            if (radio2[i].value == 'c') {

                keterangan1.innerText = 'Jawaban Benar';

                if (keterangan1.className.indexOf('hilang1') != -1) {
                    keterangan1.className = keterangan1.className.replace('hilang1', '');
                }
                let pembahasantnya1 = document.querySelector('.pembahasantnya5');
                if (pembahasantnya1.className.indexOf('hilang1') == -1) {
                    pembahasantnya1.className += ' hilang1';
                }


            } else {
                keterangan1.innerText = 'Jawaban Salah';
                if (keterangan1.className.indexOf('hilang1') != -1) {
                    keterangan1.className = keterangan1.className.replace('hilang1', '');
                }

                let pembahasantnya1 = document.querySelector('.pembahasantnya5');
                if (pembahasantnya1.className.indexOf('hilang1') != -1) {
                    pembahasantnya1.className = pembahasantnya1.className.replace('hilang1', '');
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
// let petunjunya = document.querySelectorAll('.petunjuk');
// let isinya = document.querySelectorAll('.isinya');
// for (let i = 0; i < petunjunya.length; i++) {
//     petunjunya[i].addEventListener('click', function () {

//         isinya[i].classList.toggle('hilang');
//     })
// }

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







// saat halaman dimuat
window.onload = function () {
    let radio0 = document.querySelectorAll('.radio0');
    for (let i = 0; i < radio0.length; i++) {
        radio0[i].checked = false;
    }

    let radio1 = document.querySelectorAll('.radio1');
    for (let i = 0; i < radio1.length; i++) {
        radio1[i].checked = false;
    }

    let radio2 = document.querySelectorAll('.radio2');
    for (let i = 0; i < radio2.length; i++) {
        radio2[i].checked = false;
    }

    let radio3 = document.querySelectorAll('.radio3');
    for (let i = 0; i < radio3.length; i++) {
        radio3[i].checked = false;
    }
    let radio4 = document.querySelectorAll('.radio4');
    for (let i = 0; i < radio4.length; i++) {
        radio4[i].checked = false;
    }
}