// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {

        isinya[i].classList.toggle('hilang');
    })
}


// selanjutnya
let tmbl_selanjutnya = document.querySelectorAll('.selanjutnya');
let bg_pertanyaan = document.querySelectorAll('.pertanyaan');
for (let i = 0; i < tmbl_selanjutnya.length; i++) {
    tmbl_selanjutnya[i].addEventListener('click', function () {
        if (tmbl_selanjutnya[i].className.indexOf('disable') == -1) {
            if (bg_pertanyaan[i].className.indexOf('hilang1') == -1) {
                bg_pertanyaan[i].className += ' hilang1';
                bg_pertanyaan[i + 1].className = bg_pertanyaan[i + 1].className.replace('hilang1', '');
            }
        }
    })
}

// sebelumnya
let tmbl_sebelumnya = document.querySelectorAll('.sebelumnya');
for (let i = 0; i < tmbl_sebelumnya.length; i++) {
    tmbl_sebelumnya[i].addEventListener('click', function () {
        if (tmbl_sebelumnya[i].className.indexOf('disable') == -1) {
            if (bg_pertanyaan[i].className.indexOf('hilang1') == -1) {
                bg_pertanyaan[i].className += ' hilang1';
                bg_pertanyaan[i - 1].className = bg_pertanyaan[i - 1].className.replace('hilang1', '');
            }
        }
    })
}



// pertanyaan 1
let bgpertanyaan = document.querySelectorAll('.pertanyaan');
let pertanyaan1 = document.getElementById('jawaban_input1');
let cek_jawaban1 = document.querySelector('.cek_satu');
let ket_jwb1 = document.querySelector('.ketjwb1');
let penyelesaian1 = document.querySelector('.cara_pertanyaan1');
let ketgambar = document.querySelectorAll('.ketgambar');

// ubah huruf kecil inputan
pertanyaan1.addEventListener('keyup', function () {
    pertanyaan1.value = pertanyaan1.value.toLowerCase();
    pertanyaan1.value = pertanyaan1.value.split(' ').join('');
})

cek_jawaban1.addEventListener('click', function () {
    let jwb1benar = ['2x', '1y', '10z']
    let jawabannya1 = pertanyaan1.value.split(' ').join('');
    jawabannya1 = jawabannya1.split('.').join('');
    jawabannya1 = jawabannya1.split(',').join('');

    let new_hasil = [];
    let new_hasil1 = [];
    // potong inputan dengan batas + dan -
    new_hasil = jawabannya1.split("+");
    for (let i = 0; i < new_hasil.length; i++) {
        new_hasil[i] = new_hasil[i].split("-");
    }
    // menambahkan -
    for (let i = 0; i < new_hasil.length; i++) {
        for (let j = 0; j < new_hasil[i].length; j++) {
            if (new_hasil[i].length != 1) {
                if (j != 0) {
                    new_hasil[i][j] = '-' + new_hasil[i][j];
                }
            }
        }
    }
    // kumpulkan hasil split
    for (let i = 0; i < new_hasil.length; i++) {
        for (let j = 0; j < new_hasil[i].length; j++) {
            new_hasil1.push(new_hasil[i][j]);

        }
    }
    // cek baris pertama jika ada ''
    if (new_hasil1[0] == '') {
        new_hasil1.shift();
    }
    console.log(new_hasil1);

    if (new_hasil1.length == 3) {
        let hasil_huruf = [];
        let hasil_angka = [];
        let hurufnya = [];
        let angkanya = [];
        let cek_variabel = 0;

        // tambahkan 1 pada variabel 1
        for (let j = 0; j < new_hasil1.length; j++) {
            var validasiAngka = /^[1-9]+$/;
            if (new_hasil1[j].length == 1) {
                if (new_hasil1[j].match(validasiAngka) == null) {
                    new_hasil1[j] = "1" + new_hasil1[j];
                }
            }
        }

        let kondisi1 = 0;
        for (let i = 0; i < jwb1benar.length; i++) {
            for (let j = 0; j < new_hasil1.length; j++) {
                if (jwb1benar[i] == new_hasil1[j]) {
                    kondisi1 += 1;
                    delete new_hasil1[j];
                }
            }
        }


        // kondisinya


        // if (cek_variabel == 3) {
        //     if (pertanyaan1.className.indexOf('salah') == -1) {

        //         if (pertanyaan1.className.indexOf('benar') == -1) {
        //             pertanyaan1.className += ' salah';
        //         } else {
        //             pertanyaan1.className = pertanyaan1.className.replace('benar', 'salah');
        //         }
        //     }
        // }
        // // cek konstanta
        // let jwbnya = ['1', '10', '2'];
        // let cek_konstanta = 0;
        // if (cek_variabel == 0) {
        //     for (let i = 0; i < angkanya.length; i++) {
        //         for (let j = 0; j < jwbnya.length; j++) {

        //             if (angkanya[i] == jwbnya[j]) {
        //                 cek_konstanta += 1;
        //                 delete jwbnya[j];
        //             }

        //         }
        //     }
        // }

        if (kondisi1 == 3) {
            if (pertanyaan1.className.indexOf('salah') == -1) {
                if (pertanyaan1.className.indexOf('benar') == -1) {
                    pertanyaan1.className += ' benar';

                }
            } else {
                pertanyaan1.className = pertanyaan1.className.replace('salah', 'benar');

            }
            ket_jwb1.innerText = 'Jawaban Anda Benar';
            ketgambar[0].src = "img/benar.png";
            ketgambar[0].className = ketgambar[0].className.replace('hilang', '');
            if (ket_jwb1.className.indexOf('hilang1 != -1')) {
                ket_jwb1.className = ket_jwb1.className.replace('hilang1', '');
            }
            if (penyelesaian1.className.indexOf('hilang1') == -1) {
                penyelesaian1.className += ' hilang1'
            }


        } else {
            if (pertanyaan1.className.indexOf('salah') == -1) {

                if (pertanyaan1.className.indexOf('benar') == -1) {
                    pertanyaan1.className += ' salah';
                } else {
                    pertanyaan1.className = pertanyaan1.className.replace('benar', 'salah');
                }
            }

            ket_jwb1.innerText = 'Jawaban Anda Masih Salah';
            ketgambar[0].src = "img/salah.png";
            ketgambar[0].className = ketgambar[0].className.replace('hilang', '');
            if (ket_jwb1.className.indexOf('hilang1 != -1')) {
                ket_jwb1.className = ket_jwb1.className.replace('hilang1', '');
            }
            if (penyelesaian1.className.indexOf('hilang1') != -1) {
                penyelesaian1.className = penyelesaian1.className.replace('hilang1', '');
            }


        }
        // console.log(cek_konstanta);

    } else {
        if (pertanyaan1.className.indexOf('salah') == -1) {

            if (pertanyaan1.className.indexOf('benar') == -1) {
                pertanyaan1.className += ' salah';
            } else {
                pertanyaan1.className = pertanyaan1.className.replace('benar', 'salah');
            }
        }
        ketgambar[0].src = "img/salah.png";
        ketgambar[0].className = ketgambar[0].className.replace('hilang', '');
        if (ket_jwb1.className.indexOf('hilang1 != -1')) {
            ket_jwb1.className = ket_jwb1.className.replace('hilang1', '');
        }
        if (penyelesaian1.className.indexOf('hilang1') != -1) {
            penyelesaian1.className = penyelesaian1.className.replace('hilang1', '');
        }

    }
})


// pertanyaan 2
let pertanyaan2 = document.getElementById('jawaban_input2');
let cek_jawaban2 = document.querySelector('.cek_dua');
let ket_jwb2 = document.querySelector('.ketjwb2');
let penyelesaian2 = document.querySelector('.cara_pertanyaan2');

// ubah huruf kecil inputan
pertanyaan2.addEventListener('keyup', function () {
    pertanyaan2.value = pertanyaan2.value.toLowerCase();
    pertanyaan2.value = pertanyaan2.value.split(' ').join('')
})

cek_jawaban2.addEventListener('click', function () {
    let jwb2benar = ['3a', '5']

    let jawabannya2 = pertanyaan2.value.split(' ').join('');
    jawabannya2 = jawabannya2.split('.').join('');
    jawabannya2 = jawabannya2.split(',').join('');

    let new_hasil = [];
    let new_hasil1 = [];
    // potong inputan dengan batas + dan -
    new_hasil = jawabannya2.split("+");
    for (let i = 0; i < new_hasil.length; i++) {
        new_hasil[i] = new_hasil[i].split("-");
    }
    // menambahkan -
    for (let i = 0; i < new_hasil.length; i++) {
        for (let j = 0; j < new_hasil[i].length; j++) {
            if (new_hasil[i].length != 1) {
                if (j != 0) {
                    new_hasil[i][j] = '-' + new_hasil[i][j];
                }
            }
        }
    }
    // kumpulkan hasil split
    for (let i = 0; i < new_hasil.length; i++) {
        for (let j = 0; j < new_hasil[i].length; j++) {
            new_hasil1.push(new_hasil[i][j]);

        }
    }

    // cek baris pertama jika ada ''
    if (new_hasil1[0] == '') {
        new_hasil1.shift();
    }
    // console.log(new_hasil1);

    if (new_hasil1.length == 2) {
        let hasil_huruf = [];
        let hasil_angka = [];
        let hurufnya = [];
        let angkanya = [];
        let cek_variabel = 0;

        // tambahkan 1 pada variabel 1
        for (let j = 0; j < new_hasil1.length; j++) {
            var validasiAngka = /^[1-9]+$/;
            if (new_hasil1[j].length == 1) {
                if (new_hasil1[j].match(validasiAngka) == null) {
                    new_hasil1[j] = "1" + new_hasil1[j];
                }
            }
        }


        console.log(new_hasil1);
        console.log(jwb2benar);

        // if (cek_konstanta == 2) {
        //     for (let i = 0; i < hurufnya.length; i++) {
        //         if (hurufnya[i] == '') {
        //             if (angkanya[i] == '5') {

        //             } else {
        //                 cek_konstanta += 1;
        //             }
        //         }
        //     }
        // }
        let kondisi2 = 0;
        for (let i = 0; i < jwb2benar.length; i++) {
            for (let j = 0; j < new_hasil1.length; j++) {
                if (jwb2benar[i] == new_hasil1[j]) {
                    kondisi2 += 1;
                    delete new_hasil1[j];
                }
            }
        }
        if (kondisi2 == 2) {
            if (pertanyaan2.className.indexOf('salah') == -1) {
                if (pertanyaan2.className.indexOf('benar') == -1) {
                    pertanyaan2.className += ' benar';

                }
            } else {
                pertanyaan2.className = pertanyaan2.className.replace('salah', 'benar');

            }
            ket_jwb2.innerText = 'Jawaban Anda Benar';
            ketgambar[1].src = "img/benar.png";
            ketgambar[1].className = ketgambar[1].className.replace('hilang', '');
            if (ket_jwb2.className.indexOf('hilang1 != -1')) {
                ket_jwb2.className = ket_jwb2.className.replace('hilang1', '');
            }
            if (penyelesaian2.className.indexOf('hilang1') == -1) {
                penyelesaian2.className += ' hilang1'
            }


        } else {
            if (pertanyaan2.className.indexOf('salah') == -1) {

                if (pertanyaan2.className.indexOf('benar') == -1) {
                    pertanyaan2.className += ' salah';
                } else {
                    pertanyaan2.className = pertanyaan2.className.replace('benar', 'salah');
                }
            }

            ket_jwb2.innerText = 'Jawaban Anda Masih Salah';
            ketgambar[1].src = "img/salah.png";
            ketgambar[1].className = ketgambar[1].className.replace('hilang', '');
            if (ket_jwb2.className.indexOf('hilang1 != -1')) {
                ket_jwb2.className = ket_jwb2.className.replace('hilang1', '');
            }
            if (penyelesaian2.className.indexOf('hilang1') != -1) {
                penyelesaian2.className = penyelesaian2.className.replace('hilang1', '');
            }


        }
        // console.log(cek_konstanta);





    } else {
        if (pertanyaan2.className.indexOf('salah') == -1) {

            if (pertanyaan2.className.indexOf('benar') == -1) {
                pertanyaan2.className += ' salah';
            } else {
                pertanyaan2.className = pertanyaan2.className.replace('benar', 'salah');
            }
        }
        ket_jwb2.innerText = 'Jawaban Anda Masih Salah';
        ketgambar[1].src = "img/salah.png";
        ketgambar[1].className = ketgambar[1].className.replace('hilang', '');
        if (ket_jwb2.className.indexOf('hilang1 != -1')) {
            ket_jwb2.className = ket_jwb2.className.replace('hilang1', '');
        }
        if (penyelesaian2.className.indexOf('hilang1') != -1) {
            penyelesaian2.className = penyelesaian2.className.replace('hilang1', '');
        }

    }


})

// pertanyaan 3
let pertanyaan3 = document.getElementById('jawaban_input3');
let cek_jawaban3 = document.querySelector('.cek_tiga');
let ket_jwb3 = document.querySelector('.ketjwb3');
let penyelesaian3 = document.querySelector('.cara_pertanyaan3');

// ubah huruf kecil inputan
pertanyaan3.addEventListener('keyup', function () {
    pertanyaan3.value = pertanyaan3.value.toLowerCase();
    pertanyaan3.value = pertanyaan3.value.split(' ').join('');
})

cek_jawaban3.addEventListener('click', function () {
    let jwb3benar = ['1x', '-2']

    let jawabannya3 = pertanyaan3.value.split(' ').join('');
    jawabannya3 = jawabannya3.split('.').join('');
    jawabannya3 = jawabannya3.split(',').join('');


    let new_hasil = [];
    let new_hasil1 = [];
    // potong inputan dengan batas + dan -
    new_hasil = jawabannya3.split("+");
    for (let i = 0; i < new_hasil.length; i++) {
        new_hasil[i] = new_hasil[i].split("-");
    }
    // menambahkan -
    for (let i = 0; i < new_hasil.length; i++) {
        for (let j = 0; j < new_hasil[i].length; j++) {
            if (new_hasil[i].length != 1) {
                if (j != 0) {
                    new_hasil[i][j] = '-' + new_hasil[i][j];
                }
            }
        }
    }
    // kumpulkan hasil split
    for (let i = 0; i < new_hasil.length; i++) {
        for (let j = 0; j < new_hasil[i].length; j++) {
            new_hasil1.push(new_hasil[i][j]);

        }
    }

    // cek baris pertama jika ada ''
    if (new_hasil1[0] == '') {
        new_hasil1.shift();
    }
    // console.log(new_hasil1);

    if (new_hasil1.length == 2) {
        let hasil_huruf = [];
        let hasil_angka = [];
        let hurufnya = [];
        let angkanya = [];
        let cek_variabel = 0;

        // tambahkan 1 pada variabel 1
        for (let j = 0; j < new_hasil1.length; j++) {
            var validasiAngka = /^[1-9]+$/;
            if (new_hasil1[j].length == 1) {
                if (new_hasil1[j].match(validasiAngka) == null) {
                    new_hasil1[j] = "1" + new_hasil1[j];
                }
            }
        }

        console.log(new_hasil1);
        console.log(jwb3benar);
        let kondisi3 = 0;
        for (let i = 0; i < jwb3benar.length; i++) {
            for (let j = 0; j < new_hasil1.length; j++) {
                if (jwb3benar[i] == new_hasil1[j]) {
                    kondisi3 += 1;
                    delete new_hasil1[j];
                }
            }
        }


        if (kondisi3 == 2) {
            if (pertanyaan3.className.indexOf('salah') == -1) {
                if (pertanyaan3.className.indexOf('benar') == -1) {
                    pertanyaan3.className += ' benar';

                }
            } else {
                pertanyaan3.className = pertanyaan3.className.replace('salah', 'benar');

            }
            ket_jwb3.innerText = 'Jawaban Anda Benar';
            ketgambar[2].src = "img/benar.png";
            ketgambar[2].className = ketgambar[2].className.replace('hilang', '');
            if (ket_jwb3.className.indexOf('hilang1 != -1')) {
                ket_jwb3.className = ket_jwb3.className.replace('hilang1', '');
            }
            if (penyelesaian3.className.indexOf('hilang1') == -1) {
                penyelesaian3.className += ' hilang1'
            }


        } else {
            if (pertanyaan3.className.indexOf('salah') == -1) {

                if (pertanyaan3.className.indexOf('benar') == -1) {
                    pertanyaan3.className += ' salah';
                } else {
                    pertanyaan3.className = pertanyaan3.className.replace('benar', 'salah');
                }
            }

            ket_jwb2.innerText = 'Jawaban Anda Masih Salah';
            ketgambar[2].src = "img/salah.png";
            ketgambar[2].className = ketgambar[2].className.replace('hilang', '');
            if (ket_jwb3.className.indexOf('hilang1 != -1')) {
                ket_jwb3.className = ket_jwb3.className.replace('hilang1', '');
            }
            if (penyelesaian3.className.indexOf('hilang1') != -1) {
                penyelesaian3.className = penyelesaian3.className.replace('hilang1', '');
            }


        }





    } else {
        if (pertanyaan3.className.indexOf('salah') == -1) {

            if (pertanyaan3.className.indexOf('benar') == -1) {
                pertanyaan3.className += ' salah';
            } else {
                pertanyaan3.className = pertanyaan3.className.replace('benar', 'salah');
            }
        }
        ket_jwb3.innerText = 'Jawaban Anda Masih Salah';
        ketgambar[2].src = "img/salah.png";
        ketgambar[2].className = ketgambar[2].className.replace('hilang', '');
        if (ket_jwb3.className.indexOf('hilang1 != -1')) {
            ket_jwb3.className = ket_jwb3.className.replace('hilang1', '');
        }
        if (penyelesaian3.className.indexOf('hilang1') != -1) {
            penyelesaian3.className = penyelesaian3.className.replace('hilang1', '');
        }

    }


})

window.onload = function () {

    pertanyaan1.value = "";
    pertanyaan2.value = "";
    pertanyaan3.value = "";
}