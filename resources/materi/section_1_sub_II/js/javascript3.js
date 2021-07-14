const xxxx= 0;
// soal 2
let soal_2 = ['\\[2x^2-4x+5\\]', '\\[x^2-x+2\\]', '\\[2y^2-5x+5\\]', '\\[2y^2+9y+8\\]', '\\[y^2+2y+4\\]'];

let pertanyaan_soal2 = ['Koefisien dari variabel \\[x\\] pada \\[2 x ^ 2 - 4 x + 5\\] adalah', 'Koefisien dari variabel \\[x\\] pada \\[x^2-x+2\\] adalah', 'Koefisien dari variabel \\[x\\] pada \\[2y^2-5x+5\\] adalah', 'Koefisien dari variabel \\[y\\] pada \\[2y^2+9y+8\\] adalah', 'Koefisien dari variabel \\[y^2\\] pada \\[y^2+2y+4\\] adalah'];

let kete_salah = ['* Jawaban kamu salah. <br> Koefisien adalah bilangan yang menyertai variabel pada suatu bentuk aljabar.<br> Sehingga Koefisien dari variabel \\[x\\] pada \\[2x^2 -4x + 5\\] adalah \\[...\\]', '* Jawaban kamu salah. <br> Koefisien adalah bilangan yang menyertai variabel pada suatu bentuk aljabar.<br> Sehingga Koefisien dari variabel \\[x\\] pada \\[x^2-x+2\\] adalah \\[...\\]', '* Jawaban kamu salah. <br> Koefisien adalah bilangan yang menyertai variabel pada suatu bentuk aljabar.<br> Sehingga Koefisien dari variabel \\[x\\] pada \\[2y^2-5x+5\\] adalah \\[...\\]', '* Jawaban kamu salah. <br> Koefisien adalah bilangan yang menyertai variabel pada suatu bentuk aljabar.<br> Sehingga Koefisien dari variabel \\[y\\] pada \\[2y^2+9y+8\\] adalah \\[...\\]', '* Jawaban kamu salah. <br> Koefisien adalah bilangan yang menyertai variabel pada suatu bentuk aljabar.<br> Sehingga Koefisien dari variabel \\[y^2\\] pada \\[y^2+2y+4\\] adalah \\[...\\]'];

let kunci2 = ['-4', '-1', '-5', '9', '1'];

// soal 2
let soal_3 = ['\\[2a-5b-c\\]', '\\[2x+5x+6\\]', '\\[x+3y+9\\]', '\\[5y+1\\]'];

let pertanyaan_soal3 = ['Variabel yang terdapat pada \\[2 a - 5 b - c\\] adalah ', 'Variabel yang terdapat pada \\[2x+5x+6\\] adalah ', 'Variabel yang terdapat pada \\[x+3y+9\\] adalah ', 'Variabel yang terdapat pada \\[5y+1\\] adalah '];

let kete_salah3 = ['* Jawaban Kamu Salah. <br> Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya dengan jelas. Variabel biasanya dilambangkan dengan huruf kecil a, b, c, ..., z. <br><br> Variabel yang terdapat pada bentuk aljabar diatas adalah \\[..., ..., ...\\].', '* Jawaban Kamu Salah. <br> Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya dengan jelas. Variabel biasanya dilambangkan dengan huruf kecil a, b, c, ..., z. <br><br> Variabel yang terdapat pada bentuk aljabar diatas adalah \\[...\\].', '* Jawaban Kamu Salah. <br> Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya dengan jelas. Variabel biasanya dilambangkan dengan huruf kecil a, b, c, ..., z. <br><br> Variabel yang terdapat pada bentuk aljabar diatas adalah \\[..., ...\\].', '* Jawaban Kamu Salah. <br> Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya dengan jelas. Variabel biasanya dilambangkan dengan huruf kecil a, b, c, ..., z. <br><br> Variabel yang terdapat pada bentuk aljabar diatas adalah \\[...\\].'];

let kunci3 = [
    ['a', 'b', 'c'],
    ['x'],
    ['x', 'y'],
    ['y']
]

// soal 3
let soal_4 = ['\\[3d-5e+8\\]', '\\[2x^2-3x+2\\]', '\\[2x^2+3+6y\\]', '\\[-3+6y+6x\\]', '\\[4z-16+6y+6x\\]'];

let pertanyaan_soal4 = ['Konstanta pada \\[3d-5e+8\\] adalah ', 'Konstanta pada \\[2x^2-3x+2\\] adalah ', 'Konstanta pada \\[2x^2+3+6y\\] adalah ', 'Konstanta pada \\[-3+6y+6x\\] adalah ', 'Konstanta pada \\[4z-16+6y+6x\\] adalah '];

let kete_salah4 = ['* Jawaban kamu salah. <br> Konstanta adalah suatu bentuk aljabar yang berupa bilangan dan tidak memuat variabel.<br> Sehingga Konstanta pada \\[3d-5e+8\\] adalah ....', '* Jawaban kamu salah. <br> Konstanta adalah suatu bentuk aljabar yang berupa bilangan dan tidak memuat variabel.<br> Sehingga Konstanta pada \\[2x^2-3x+2\\] adalah ....', '* Jawaban kamu salah. <br> Konstanta adalah suatu bentuk aljabar yang berupa bilangan dan tidak memuat variabel.<br> Sehingga Konstanta pada \\[2x^2+3+6y\\] adalah ....', '* Jawaban kamu salah. <br> Konstanta adalah suatu bentuk aljabar yang berupa bilangan dan tidak memuat variabel.<br> Sehingga Konstanta pada \\[-3+6y+6x\\] adalah ....', '* Jawaban kamu salah. <br> Konstanta adalah suatu bentuk aljabar yang berupa bilangan dan tidak memuat variabel.<br> Sehingga Konstanta pada \\[4z-16+6y+6x\\] adalah ....'];

let kunci4 = ['8', '2', '3', '-3', '-16'];





// ptnyaan 2
let jwb2 = kunci2[0];
let ketsalah = kete_salah[0];

// pertanyaan 3
let jwb3 = kunci3[0];
let ketsalah1 = kete_salah3[0];

// pertanyaan 3
let jwb4 = kunci4[0];
let ketsalah2 = kete_salah4[0];



let btn2 = document.querySelector('.gnti1');
let btn3 = document.querySelector('.gnti2');
let btn4 = document.querySelector('.gnti3');
let soalnya2 = document.querySelector('.soal2');
let soalnya3 = document.querySelector('.soal3');
let soalnya4 = document.querySelector('.soal4');
let ptny_soal2 = document.querySelector('.jwbnya_soal2');
let ptny_soal3 = document.querySelector('.jwbnya_soal3');
let ptny_soal4 = document.querySelector('.jwbnya_soal4');
let tmpt_input = document.querySelectorAll('.pertanyaanunsur');

btn2.addEventListener('click', function () {

    let acak_angka = Math.floor(Math.random() * soal_2.length);
    let ketgambr = document.querySelector('.ketgambar');
    let ketenya = document.querySelector('.kete');

    soalnya2.innerText = soal_2[acak_angka];
    ptny_soal2.innerText = pertanyaan_soal2[acak_angka];
    jwb2 = kunci2[acak_angka];
    ketsalah = kete_salah[acak_angka];
    tmpt_input[0].value = '';

    if (ketgambr.className.indexOf('hilang') == -1) {
        ketgambr.className += ' hilang';
    }

    if (ketenya.className.indexOf('hilang') == -1) {
        ketenya.className += ' hilang';
    }


    console.log(acak_angka);


    MathJax.typeset();
})

btn3.addEventListener('click', function () {

    let acak_angka = Math.floor(Math.random() * soal_3.length);
    let ketgambr = document.querySelector('.g3');
    let ketenya = document.querySelector('.k3');

    soalnya3.innerText = soal_3[acak_angka];
    ptny_soal3.innerText = pertanyaan_soal3[acak_angka];
    jwb3 = kunci3[acak_angka];
    ketsalah1 = kete_salah3[acak_angka];
    tmpt_input[1].value = '';

    if (ketgambr.className.indexOf('hilang') == -1) {
        ketgambr.className += ' hilang';
    }

    if (ketenya.className.indexOf('hilang') == -1) {
        ketenya.className += ' hilang';
    }


    console.log(acak_angka);


    MathJax.typeset();
})

btn4.addEventListener('click', function () {

    let acak_angka = Math.floor(Math.random() * soal_4.length);
    let ketgambr = document.querySelector('.g4');
    let ketenya = document.querySelector('.k4');

    soalnya4.innerText = soal_4[acak_angka];
    ptny_soal4.innerText = pertanyaan_soal4[acak_angka];
    jwb4 = kunci4[acak_angka];
    ketsalah2 = kete_salah4[acak_angka];
    tmpt_input[2].value = '';

    if (ketgambr.className.indexOf('hilang') == -1) {
        ketgambr.className += ' hilang';
    }

    if (ketenya.className.indexOf('hilang') == -1) {
        ketenya.className += ' hilang';
    }


    console.log(acak_angka);


    MathJax.typeset();
})



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


// ketika tombol cek di klik
let input_jawaban = document.querySelectorAll('.pertanyaanunsur');
let cekkk = document.querySelectorAll('.cek');
let keterangann = document.querySelectorAll('.kete');
let ketgambar = document.querySelectorAll('.ketgambar');


// ubah inputan jadi huruf kecil
for (let j = 0; j < input_jawaban.length; j++) {
    input_jawaban[j].addEventListener('keyup', function () {
        input_jawaban[j].value = input_jawaban[j].value.toLowerCase();
        input_jawaban[j].value = input_jawaban[j].value.split(' ').join('');
    })
}

for (let i = 0; i < cekkk.length; i++) {

    cekkk[i].addEventListener('click', function () {
        input_jawaban[i].value = input_jawaban[i].value.split(' ').join('');
        let jwbb = jwb3;

        if (i == 0) {
            if (input_jawaban[i].value == jwb2) {
                keterangann[i].innerText = "";
                ketgambar[i].src = "gambar/benar.png";
                ketgambar[i].className = ketgambar[i].className.replace('hilang', '');

                if (keterangann[i].className.indexOf('hilang') == -1) {
                    if (keterangann[i].className.indexOf('red') == -1) {} else {
                        keterangann[i].className = keterangann[i].className.replace('red', '');
                    }

                } else {
                    keterangann[i].className = keterangann[i].className.replace('hilang', '');
                    if (keterangann[i].className.indexOf('red') == -1) {} else {
                        keterangann[i].className = keterangann[i].className.replace('red', '');
                    }

                }
            } else {
                ketgambar[i].src = "gambar/salah.png";
                ketgambar[i].className = ketgambar[i].className.replace('hilang', '');
                keterangann[i].innerHTML = ketsalah;
                if (keterangann[i].className.indexOf('hilang') == -1) {
                    if (keterangann[i].className.indexOf('red') == -1) {
                        keterangann[i].className += 'red';
                    } else {}

                } else {
                    keterangann[i].className = keterangann[i].className.replace('hilang', '');
                    if (keterangann[i].className.indexOf('red') == -1) {
                        keterangann[i].className += 'red';
                    } else {}

                }
            }
            MathJax.typeset();
        }

        if (i == 1) {
            // potong inputan dengan batas, jika ada
            var validasiAngka = /^[1-9]+$/;
            let kondisii = 0;


            let jawabannya11 = input_jawaban[i].value.split(',').join('');
            jawabannya11 = jawabannya11.split('dan').join('');
            jawabannya11 = jawabannya11.split('.').join('');
            jawabannya11 = jawabannya11.split('');

            console.log(jawabannya11);
            console.log(jwbb);


            if (jawabannya11.length == jwb3.length) {

                for (let j = 0; j < jawabannya11.length; j++) {
                    for (let l = 0; l < jawabannya11.length; l++) {
                        if (jwbb[j] == jawabannya11[l]) {
                            kondisii += 1;
                            delete jawabannya11[l];
                        }

                    }
                }

                console.log(kondisii);
                console.log(jwb3.length);

                if (kondisii == jwb3.length) {
                    keterangann[i].innerText = "";
                    ketgambar[i].src = "gambar/benar.png";
                    ketgambar[i].className = ketgambar[i].className.replace('hilang', '');

                    if (keterangann[i].className.indexOf('hilang') == -1) {
                        if (keterangann[i].className.indexOf('red') == -1) {} else {
                            keterangann[i].className = keterangann[i].className.replace('red', '');
                        }

                    } else {
                        keterangann[i].innerHTML = "";
                        ketgambar[i].src = "gambar/benar.png";
                        ketgambar[i].className = ketgambar[i].className.replace('hilang', '');

                        keterangann[i].className = keterangann[i].className.replace('hilang', '');
                        if (keterangann[i].className.indexOf('red') == -1) {} else {
                            keterangann[i].className = keterangann[i].className.replace('red', '');
                        }

                    }
                } else {

                    keterangann[i].innerHTML = ketsalah1;
                    ketgambar[i].src = "gambar/salah.png";
                    ketgambar[i].className = ketgambar[i].className.replace('hilang', '');

                    if (keterangann[i].className.indexOf('hilang') == -1) {
                        if (keterangann[i].className.indexOf('red') == -1) {
                            keterangann[i].className += 'red';
                        } else {}

                    } else {
                        keterangann[i].className = keterangann[i].className.replace('hilang', '');
                        if (keterangann[i].className.indexOf('red') == -1) {
                            keterangann[i].className += 'red';
                        } else {}

                    }

                }

            } else {
                keterangann[i].innerHTML = ketsalah1;
                ketgambar[i].src = "gambar/salah.png";
                ketgambar[i].className = ketgambar[i].className.replace('hilang', '');

                if (keterangann[i].className.indexOf('hilang') == -1) {
                    if (keterangann[i].className.indexOf('red') == -1) {
                        keterangann[i].className += 'red';
                    } else {}

                } else {
                    keterangann[i].className = keterangann[i].className.replace('hilang', '');
                    if (keterangann[i].className.indexOf('red') == -1) {
                        keterangann[i].className += 'red';
                    } else {}

                }
            }

        }

        if (i == 2) {
            if (input_jawaban[i].value == jwb4) {
                keterangann[i].innerText = "";
                ketgambar[i].src = "gambar/benar.png";
                ketgambar[i].className = ketgambar[i].className.replace('hilang', '');

                if (keterangann[i].className.indexOf('hilang') == -1) {
                    if (keterangann[i].className.indexOf('red') == -1) {} else {
                        keterangann[i].className = keterangann[i].className.replace('red', '');
                    }

                } else {
                    keterangann[i].className = keterangann[i].className.replace('hilang', '');
                    if (keterangann[i].className.indexOf('red') == -1) {} else {
                        keterangann[i].className = keterangann[i].className.replace('red', '');
                    }

                }
            } else {
                keterangann[i].innerHTML = ketsalah2;
                ketgambar[i].src = "gambar/salah.png";
                ketgambar[i].className = ketgambar[i].className.replace('hilang', '');

                if (keterangann[i].className.indexOf('hilang') == -1) {
                    if (keterangann[i].className.indexOf('red') == -1) {
                        keterangann[i].className += ' salah';
                    } else {}

                } else {
                    keterangann[i].className = keterangann[i].className.replace('hilang', '');
                    if (keterangann[i].className.indexOf('red') == -1) {
                        keterangann[i].className += ' salah';
                    } else {}

                }
            }
            MathJax.typeset();
        }

        MathJax.typeset();
    });
}








// saat halaman dimuat
window.onload = function () {
    for (let i = 0; i < input_jawaban.length; i++) {
        input_jawaban[i].value = '';
    }
    let interaktif = document.querySelector('.interaktif');
    interaktif.src = interaktif.src;
}