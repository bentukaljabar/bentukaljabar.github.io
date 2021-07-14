

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




let soal1 = ['\\[\\frac{5}{3xy}+\\frac{6}{3x}\\]', '\\[\\frac{2x}{4x}+\\frac{3}{2y}\\]', '\\[\\frac{5}{7y}+\\frac{3}{7y}\\]', '\\[\\frac{2a}{3a}+\\frac{5}{3}\\]', '\\[\\frac{3}{4x}+\\frac{2}{3y}\\]', '\\[\\frac{12}{5x}-\\frac{3}{2y}\\]', '\\[\\frac{5}{3y}-\\frac{2}{x}\\]'];
let kunci1 = [
    ['6y+5', '5+6y'],
    ['3+y', 'y+3'],
    ['8'],
    ['7'],
    ['8x+9y', '9y+8x'],
    ['24y-15x', '-15x+24y'],
    ['5x-6y', '-6y+5x']
]
let kunci2 = [
    ['3xy', '3yx'],
    ['2y'],
    ['7y'],
    ['3'],
    ['12xy', '12yx'],
    ['10xy', '10yx'],
    ['3xy', '3yx']
]
let pembahasanket = ['<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau jarak_atas" > \\[ = \\frac{5}{3xy}+\\frac{6}{3x}\\] </p> <p class = "masuk aau jarak_atas" > \\[ =\\frac{5}{3xy}+\\frac{6 \\times y}{3x \\times y}\\] </p> <p class = "masuk aau jarak_atas" > \\[ = \\frac{5}{3xy}+\\frac{6y}{3xy}\\] </p> <p class = "masuk aau jarak_atas" > \\[ = \\frac{5+6y}{3xy}\\] </p>', '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{2x}{4x}+\\frac{3}{2y}\\] </p> <p class = "masuk aau jarak_atas"> \\[ =\\frac{2x \\times 2y}{4x \\times 2y}+\\frac{3 \\times 4x}{2y \\times 4x}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{4xy}{8xy}+\\frac{12x}{8xy}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{4xy+12x}{8xy}\\] </p> </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{y+3}{2xy}\\] </p>', '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{5}{7y}+\\frac{3}{7y}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{5+3} {7y}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{8}{7y}\\] </p>', '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{2a}{3a}+\\frac{5}{3}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{2a}{3a}+\\frac{5 \\times a}{3 \\times a}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{2a+5a}{3a}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{7a}{3a}\\] </p><p class = "masuk aau jarak_atas"> \\[ = \\frac{7}{3}\\] </p>', '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{3}{4x}+\\frac{2}{3y}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{3 \\times 3y}{4x \\times 3y}+\\frac{2 \\times 4x}{3y \\times 4x}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{9y}{12xy} +\\frac{8x}{12xy}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{9y+8x}{12xy}\\] </p>', '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{12}{5x}-\\frac{3}{2y}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{12 \\times 2y}{5x \\times 2y}-\\frac{3 \\times 5x}{2y \\times 5x}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{24y}{10xy} -\\frac{15x}{10xy}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{24y-15x}{10xy}\\] </p>', '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{5}{3y}-\\frac{2}{x}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{5 \\times x}{3y \\times x}-\\frac{2 \\times 3y}{x \\times 3y}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{5x}{3xy} -\\frac{6y}{3xy}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{5x-6y}{3xy}\\] </p>'];

let soal2 = ['\\[\\frac{6}{(x+5)}-\\frac{2}{(x+4)}\\]', '\\[\\frac{2x}{(3+y)}+\\frac{4x}{(3+z)}\\]'];
let kunci11 = [
    ['4x+14', '14+4x'],
    ['18x+4xy+2xz', '18x+4yx+2xz', '18x+4xy+2zx', '18x+4yx+2zx', '18x+2xz+4xy', '18x+2xz+4yx', '18x+2zx+4xy', '18x+2zx+4yx', '4xy+18x+2xz', '4yx+18x+2xz', '4xy+18x+2zx', '4yx+18x+2zx', '4xy+2xz+18x', '4yx+2xz+18x', '4xy+2zx+18x', '4yx+2zx+18x', '2zx+18x+4xy', '2zx+18x+4yx', '2xz+18x+4xy', '2xz+18x+4yx', '2zx+4xy+18x', '2zx+4yx+18x', '2xz+x4xy+18x', '2xz+x4yx+18x']
]
let kunci22 = [
    ['(x+5)(x+4)', '(5+x)(x+4)', '(x+5)(4+x)', '(5+x)(4+x)', '(x+4)(x+5)', '(x+4)(5+x)', '(4+x)(x+5)', '(4+x)(5+x)'],
    ['(y+3)(z+3)', '(3+y)(z+3)', '(y+3)(3+z)', '(3+y)(3+z)', '(z+3)(y+3)', '(z+3)(3+y)', '(3+z)(y+3)', '(3+z)(3+y)']
]
let pembahasanket1 = ['<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{6}{(x+5)}-\\frac{2}{(x+4)}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{6 \\times (x+4)}{(x+5) \\times (x+4)}-\\frac{2 \\times (x+5)}{(x+4) \\times (x+5)}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{6x+24}{(x+5)(x+4)} -\\frac{2x+10}{(x+4)(x+5)}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{6x+24-(2x+10)}{(x+4)(x+5)}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{6x+24-2x-10}{(x+4)(x+5)}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{6x-2x+24-10}{(x+4)(x+5)}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{4x+14}{(x+4)(x+5)}\\] </p>', '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{2x}{(3+y)}+\\frac{4x}{(3+z)}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{2x \\times (3+z)}{(3+y) \\times (3+z)}+\\frac{4x \\times (3+y)}{(3+y) \\times (3+z)}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{6x+2xz}{(3+y)(3+z)} +\\frac{12x+4xy}{(3+y)(3+z)}\\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{6x+2xz+12x+4xy}{(3+y)(3+z)} \\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{6x+12x+4xy+2xz}{(3+y)(3+z)} \\] </p> <p class = "masuk aau jarak_atas"> \\[ = \\frac{18x+4xy+2xz}{(3+y)(3+z)} \\] </p> '];




let tmbl = document.querySelector('.cek');
let tmbl1 = document.querySelector('.cek1');
let bgpertanyaan1 = document.querySelector('.pembahasantnya1');
let bgpertanyaan2 = document.querySelector('.pembahasantnya2');
let keterangannya = document.querySelectorAll('.kete');
let ketgambar = document.querySelectorAll('.ketgambar');
let inputnya = document.querySelectorAll('.ptnya');
let inputnya1 = document.querySelectorAll('.ptnya1');
let ket_pembahasann = document.querySelector('.pembahasantnya1');
let ket_pembahasann2 = document.querySelector('.pembahasantnya2');
let soalnya_nih = document.querySelector('.soalnya_nih');
let soalnya_nih1 = document.querySelector('.soalnya_nih1');
let acang_angka = Math.floor(Math.random() * soal1.length);
let acang_angka1 = Math.floor(Math.random() * soal2.length);




// kunci jawaban pertanyaan 1
let jwb_benar1 = kunci1[acang_angka];
let jwb_benar2 = kunci2[acang_angka];

// kunci jawaban pertanyaan 2
let jwb_benar11 = kunci11[acang_angka1];
let jwb_benar22 = kunci22[acang_angka1];

// tombol ubah 1
let tmbl_ubah = document.querySelector('.ubah1');
tmbl_ubah.addEventListener('click', function () {
    let ket_pembahasann = document.querySelector('.pembahasantnya1');
    let soalnya_nih = document.querySelector('.soalnya_nih');
    let acang_angka = Math.floor(Math.random() * soal1.length);
    let kete = document.querySelector('.kete');
    let gambar = document.querySelector('.ketgambar');
    let inpunya = document.querySelectorAll('.ptnya');
    console.log(acang_angka);
    jwb_benar1 = kunci1[acang_angka];
    jwb_benar2 = kunci2[acang_angka];

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
    if (inpunya[0].className.indexOf('salah') != -1) {
        inpunya[0].className = inpunya[0].className.replace('salah', '')
    }
    if (inpunya[1].className.indexOf('salah') != -1) {
        inpunya[1].className = inpunya[1].className.replace('salah', '')
    }


    inputnya[0].value = '';
    inputnya[1].value = '';

    soalnya_nih.innerHTML = soal1[acang_angka];
    ket_pembahasann.innerHTML = pembahasanket[acang_angka];

    MathJax.typeset();
})

// tombol ubah 2
let tmbl_ubah2 = document.querySelector('.ubah2');
tmbl_ubah2.addEventListener('click', function () {
    let ket_pembahasann = document.querySelector('.pembahasantnya2');
    let soalnya_nih1 = document.querySelector('.soalnya_nih1');
    let acang_angka = Math.floor(Math.random() * soal2.length);
    console.log(acang_angka);
    jwb_benar11 = kunci11[acang_angka];
    jwb_benar22 = kunci22[acang_angka];

    if (ket_pembahasann.className.indexOf('hilang1') == -1) {
        ket_pembahasann.className += ' hilang1';
        console.log('ok');
    }
    if (keterangannya[1].className.indexOf('hilang1') == -1) {
        keterangannya[1].className += ' hilang1';
    }
    if (ketgambar[1].className.indexOf('hilang1') == -1) {
        ketgambar[1].className += ' hilang1';
    }
    if (inputnya1[0].className.indexOf('salah') != -1) {
        inputnya1[0].className = inputnya1[0].className.replace('salah', '')
    }
    if (inputnya1[1].className.indexOf('salah') != -1) {
        inputnya1[1].className = inputnya1[1].className.replace('salah', '')
    }


    inputnya1[0].value = '';
    inputnya1[1].value = '';

    soalnya_nih1.innerHTML = soal2[acang_angka];
    ket_pembahasann2.innerHTML = pembahasanket1[acang_angka];

    MathJax.typeset();
})


for (let i = 0; i < inputnya.length; i++) {
    inputnya[i].addEventListener('keyup', function () {
        inputnya[i].value = inputnya[i].value.toLowerCase();
        inputnya[i].value = inputnya[i].value.split(' ').join('');
    })
}

for (let i = 0; i < inputnya1.length; i++) {
    inputnya1[i].addEventListener('keyup', function () {
        inputnya1[i].value = inputnya1[i].value.toLowerCase();
        inputnya1[i].value = inputnya1[i].value.split(' ').join('');
    })
}


tmbl.addEventListener('click', function () {
    let hasilnyaa = [];
    let new_hasil = [];


    if (inputnya[0].value == '' || inputnya[1].value == '') {
        if (inputnya[0].className.indexOf('salah') == -1) {
            inputnya[0].className += ' salah';
        }
        if (inputnya[1].className.indexOf('salah') == -1) {
            inputnya[1].className += ' salah';
        }
        keterangannya[0].innerText = '* Jawaban Masih Kosong';
        if (keterangannya[0].className.indexOf('hilang1') != -1) {
            keterangannya[0].className = keterangannya[0].className.replace('hilang1', '');
        }
        if (keterangannya[0].className.indexOf('red') == -1) {
            keterangannya[0].className += ' red';
        }

        ketgambar[0].src = 'gambar/salah.png';
        if (ketgambar[0].className.indexOf('hilang1') != -1) {
            ketgambar[0].className = ketgambar[0].className.replace('hilang1', '');
        }

        if (ket_pembahasann.className.indexOf('hilang1') == -1) {
            ket_pembahasann.className += ' hilang1';
        }


    } else if (inputnya[0].value != '' && inputnya[1].value != '') {
        let kondisi = 0;

        for (let i = 0; i < jwb_benar1.length; i++) {
            if (inputnya[0].value == jwb_benar1[i]) {
                kondisi += 1;
            }
        }
        for (let i = 0; i < jwb_benar2.length; i++) {
            if (inputnya[1].value == jwb_benar2[i]) {
                kondisi += 1;
            }
        }



        if (kondisi == 2) {

            keterangannya[0].innerText = '* Jawaban Benar';
            if (keterangannya[0].className.indexOf('hilang1') != -1) {
                keterangannya[0].className = keterangannya[0].className.replace('hilang1', '');
            }
            if (keterangannya[0].className.indexOf('red') != -1) {
                keterangannya[0].className = keterangannya[0].className.replace('red', '');
            }

            if (inputnya[0].className.indexOf('salah') != -1) {
                inputnya[0].className = inputnya[0].className.replace('salah', '');
            }

            if (inputnya[1].className.indexOf('salah') != -1) {
                inputnya[1].className = inputnya[1].className.replace('salah', '');
            }

            if (ket_pembahasann.className.indexOf('hilang1') == -1) {
                ket_pembahasann.className += ' hilang1';
            }

            ketgambar[0].src = 'gambar/benar.png';
            if (ketgambar[0].className.indexOf('hilang1') != -1) {
                ketgambar[0].className = ketgambar[0].className.replace('hilang1', '');
            }

        } else {

            if (inputnya[0].className.indexOf('salah') == -1) {
                inputnya[0].className += ' salah';
            }
            if (inputnya[1].className.indexOf('salah') == -1) {
                inputnya[1].className += ' salah';
            }
            keterangannya[0].innerText = '* Jawaban Masih Salah';
            if (keterangannya[0].className.indexOf('hilang1') != -1) {
                keterangannya[0].className = keterangannya[0].className.replace('hilang1', '');
            }
            if (keterangannya[0].className.indexOf('red') == -1) {
                keterangannya[0].className += ' red';
            }

            ketgambar[0].src = 'gambar/salah.png';
            if (ketgambar[0].className.indexOf('hilang1') != -1) {
                ketgambar[0].className = ketgambar[0].className.replace('hilang1', '');
            }

            if (ketgambar[0].className.indexOf('hilang1') != -1) {
                ketgambar[0].className = ketgambar[0].className.replace('hilang1', '');
            }
            if (ket_pembahasann.className.indexOf('hilang1') != -1) {
                ket_pembahasann.className = ket_pembahasann.className.replace('hilang1', '');
            }
            if (bgpertanyaan1.className.indexOf('hilang1') != -1) {
                bgpertanyaan1.className = bgpertanyaan1.className.replace('hilang1', '');
            }

            console.log('salah');


        }

        console.log(kondisi);

    }


})

tmbl1.addEventListener('click', function () {
    let hasilnyaa = [];
    let new_hasil = [];


    if (inputnya1[0].value == '' || inputnya1[1].value == '') {
        if (inputnya1[0].className.indexOf('salah') == -1) {
            inputnya1[0].className += ' salah';
        }
        if (inputnya1[1].className.indexOf('salah') == -1) {
            inputnya1[1].className += ' salah';
        }
        keterangannya[1].innerText = '* Jawaban Masih Kosong';
        if (keterangannya[1].className.indexOf('hilang1') != -1) {
            keterangannya[1].className = keterangannya[1].className.replace('hilang1', '');
        }
        if (keterangannya[1].className.indexOf('red') == -1) {
            keterangannya[1].className += ' red';
        }

        ketgambar[1].src = 'gambar/salah.png';
        if (ketgambar[1].className.indexOf('hilang1') != -1) {
            ketgambar[1].className = ketgambar[1].className.replace('hilang1', '');
        }

        if (ket_pembahasann2.className.indexOf('hilang1') == -1) {
            ket_pembahasann2.className += ' hilang1';
        }


    } else if (inputnya1[0].value != '' && inputnya1[1].value != '') {
        let kondisi = 0;

        for (let i = 0; i < jwb_benar11.length; i++) {
            if (inputnya1[0].value == jwb_benar11[i]) {
                kondisi += 1;
            }
        }
        for (let i = 0; i < jwb_benar22.length; i++) {
            if (inputnya1[1].value == jwb_benar22[i]) {
                kondisi += 1;
            }
        }



        if (kondisi == 2) {

            keterangannya[1].innerText = '* Jawaban Benar';
            if (keterangannya[1].className.indexOf('hilang1') != -1) {
                keterangannya[1].className = keterangannya[1].className.replace('hilang1', '');
            }
            if (keterangannya[1].className.indexOf('red') != -1) {
                keterangannya[1].className = keterangannya[1].className.replace('red', '');
            }

            if (inputnya1[0].className.indexOf('salah') != -1) {
                inputnya1[0].className = inputnya1[0].className.replace('salah', '');
            }

            if (inputnya1[1].className.indexOf('salah') != -1) {
                inputnya1[1].className = inputnya1[1].className.replace('salah', '');
            }

            if (ket_pembahasann2.className.indexOf('hilang1') == -1) {
                ket_pembahasann2.className += ' hilang1';
            }

            ketgambar[1].src = 'gambar/benar.png';
            if (ketgambar[1].className.indexOf('hilang1') != -1) {
                ketgambar[1].className = ketgambar[1].className.replace('hilang1', '');
            }

        } else {

            if (inputnya1[0].className.indexOf('salah') == -1) {
                inputnya1[0].className += ' salah';
            }
            if (inputnya1[1].className.indexOf('salah') == -1) {
                inputnya1[1].className += ' salah';
            }
            keterangannya[1].innerText = '* Jawaban Masih Salah';
            if (keterangannya[1].className.indexOf('hilang1') != -1) {
                keterangannya[1].className = keterangannya[0].className.replace('hilang1', '');
            }
            if (keterangannya[1].className.indexOf('red') == -1) {
                keterangannya[1].className += ' red';
            }

            ketgambar[1].src = 'gambar/salah.png';
            if (ketgambar[1].className.indexOf('hilang1') != -1) {
                ketgambar[1].className = ketgambar[1].className.replace('hilang1', '');
            }

            if (ketgambar[1].className.indexOf('hilang1') != -1) {
                ketgambar[1].className = ketgambar[1].className.replace('hilang1', '');
            }
            if (ket_pembahasann2.className.indexOf('hilang1') != -1) {
                ket_pembahasann2.className = ket_pembahasann2.className.replace('hilang1', '');
            }
            if (bgpertanyaan2.className.indexOf('hilang1') != -1) {
                bgpertanyaan2.className = bgpertanyaan2.className.replace('hilang1', '');
            }

            console.log('salah');


        }

        console.log(kondisi);

    }


})








// saat halaman dimuat
window.onload = function () {
    inputnya[0].value = '';
    inputnya[1].value = '';
    inputnya1[0].value = '';
    inputnya1[1].value = '';

    soalnya_nih.innerHTML = soal1[acang_angka];
    ket_pembahasann.innerHTML = pembahasanket[acang_angka];
    soalnya_nih1.innerHTML = soal2[acang_angka1];
    ket_pembahasann2.innerHTML = pembahasanket1[acang_angka1];

    MathJax.typeset();
}