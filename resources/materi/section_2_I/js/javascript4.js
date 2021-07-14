// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {

        isinya[i].classList.toggle('hilang');
    })
}

// nav mari mencoba
let kenya = document.querySelectorAll('.ke');
let keisinya = document.querySelectorAll('.langkahnya');

for (let i = 0; i < kenya.length; i++) {
    kenya[i].addEventListener('click', function () {
        kenya[i].classList.toggle('ke_aktif');
        keisinya[i].classList.toggle('hilang');

        for (let j = 0; j < kenya.length; j++) {
            if (i != j) {
                kenya[j].classList.toggle('ke_aktif');
                keisinya[j].classList.toggle('hilang');
            }
        }
    })
}



// klik tmbl cek jawaban
let tmbl_jmlh = document.querySelector('.cek_cb_jmblh');
let input_jmlh = document.querySelectorAll('.jwb1');
let bg_input = document.querySelectorAll('.bg_input');
let ket_jmlh = document.querySelectorAll('.cb_jmlh');

let jwb_benar = ['+3p', '+3r', '-5s', '+7p', '-1r'];

let kondisi1 = 0;

// function agar saat di enter tidak dijalankan 
for (let i = 0; i < input_jmlh.length; i++) {
    input_jmlh[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });
}

// ubah huruf kecil inputan
for (let i = 0; i < input_jmlh.length; i++) {
    input_jmlh[i].addEventListener('keyup', function (e) {
        input_jmlh[i].value = input_jmlh[i].value.toLowerCase();
        input_jmlh[i].value = input_jmlh[i].value.split(' ').join('');
    });
}


tmbl_jmlh.addEventListener('click', function () {
    let hasilnyaa = [];
    let hasilnyaa1 = [];
    let hasilnyaa2 = [];
    let new_hasil = [];
    let new_hasil1 = [];
    let new_hasil2 = [];
    let jwb_benar1 = ['+3p', '+7p'];
    let jwb_benar2 = ['+3r', '-1r'];
    let jwb_benar3 = ['10p', '2r', '-5s'];
    let jwb_benar4 = ['+10p', '+2r', '-5s'];


    if (kondisi1 == 0) {

        if (input_jmlh[0].value == '') {
            if (input_jmlh[0].className.indexOf('salah') == -1) {
                input_jmlh[0].className += ' salah';
            }


        } else if (input_jmlh[0].value != '') {
            let jawabannya1 = input_jmlh[0].value.split(' ').join('');
            jawabannya1 = jawabannya1.split('.').join('');

            // potong inputan dengan batas +
            hasilnya = jawabannya1.split("+");
            for (let i = 0; i < hasilnya.length; i++) {
                if (hasilnya[i].indexOf('-') != 0) {
                    var validasiAngka = /^[1-9]+$/;
                    if (hasilnya[i].length == 1 && hasilnya[i].match(validasiAngka) == null) {
                        hasilnya[i] = "+1" + hasilnya[i];
                    } else {
                        hasilnya[i] = "+" + hasilnya[i];
                    }
                }
            }

            // potong inputan dengan batas -
            for (let i = 0; i < hasilnya.length; i++) {
                hasilnyaa.push(hasilnya[i].split("-"));
            }

            // gabungkan array jadi satu baris
            for (let i = 0; i < hasilnyaa.length; i++) {
                if (hasilnyaa[i].length > 0) {
                    for (let j = 0; j < hasilnyaa[i].length; j++) {
                        new_hasil.push(hasilnyaa[i][j]);
                    }
                } else {
                    new_hasil.push(hasilnyaa[i]);
                }
            }

            // cek baris pertama jika ada ''
            if (new_hasil[0] == '') {
                new_hasil.shift();
            }

            // tambahkan - pada awalnya
            for (i = 0; i < new_hasil.length; i++) {
                if (new_hasil[i].indexOf('+') != 0) {

                    var validasiAngka = /^[1-9]+$/;
                    if (new_hasil[i].length == 1 && new_hasil[i].match(validasiAngka) == null) {
                        new_hasil[i] = '-1' + new_hasil[i];
                    } else {
                        new_hasil[i] = '-' + new_hasil[i];
                    }
                }

            }
            console.log(new_hasil);

            // cek jawaban
            let sarat = 0;
            if (new_hasil.length == 5) {

                for (let i = 0; i < jwb_benar.length; i++) {
                    for (let j = 0; j < new_hasil.length; j++) {
                        if (jwb_benar[i] == new_hasil[j]) {
                            sarat += 1;
                            delete new_hasil[j];
                        }
                    }
                }

                if (sarat == 5) {
                    if (ket_jmlh[0].className.indexOf('hilang1') != -1) {
                        ket_jmlh[0].className = ket_jmlh[0].className.replace('hilang1', '');
                    }
                    ket_jmlh[0].innerText = '\\[= ' + input_jmlh[0].value + '\\]';

                    if (ket_jmlh[1].className.indexOf('hilang1') != -1) {
                        ket_jmlh[1].className = ket_jmlh[1].className.replace('hilang1', '');
                    }
                    ket_jmlh[1].innerText = '* Kelompokkan Sukunya';

                    bg_input[0].className += ' hilang1';
                    bg_input[1].className = bg_input[0].className.replace('hilang1', '');
                    kondisi1 += 1;
                } else {
                    if (input_jmlh[0].className.indexOf('salah') == -1) {
                        input_jmlh[0].className += ' salah';
                    }
                    setTimeout(function () {
                        input_jmlh[0].value = '';
                        input_jmlh[0].placeholder = 'Masukkan 3p+3r-5s+7p-r';
                        MathJax.typeset();
                    }, 1500);
                }




            } else {
                if (input_jmlh[0].className.indexOf('salah') == -1) {
                    input_jmlh[0].className += ' salah';
                }
                setTimeout(function () {
                    input_jmlh[0].value = '';
                    input_jmlh[0].placeholder = 'Masukkan 3p+3r-5s+7p-r';
                    MathJax.typeset();
                }, 1500);
            }
            console.log(new_hasil);
            // console.log(sarat);
        }
    } else if (kondisi1 == 1) {
        if (input_jmlh[1].value == '' && input_jmlh[2].value == '' && input_jmlh[3].value == '') {
            for (let i = 1; i < 4; i++) {
                if (input_jmlh[i].className.indexOf('salah') == -1) {
                    input_jmlh[i].className += ' salah';
                }
            }


        } else if (input_jmlh[1].value != '') {
            let jawabannya1 = input_jmlh[1].value.split(' ').join('');
            jawabannya1 = jawabannya1.split('.').join('');

            let jawabannya2 = input_jmlh[2].value.split(' ').join('');
            jawabannya2 = jawabannya2.split('.').join('');

            let jawabannya3 = input_jmlh[3].value.split(' ').join('');
            jawabannya3 = jawabannya3.split('.').join('');

            // potong inputan dengan batas +
            hasilnya = jawabannya1.split("+");
            for (let i = 0; i < hasilnya.length; i++) {
                if (hasilnya[i].indexOf('-') != 0) {
                    var validasiAngka = /^[1-9]+$/;
                    if (hasilnya[i].length == 1 && hasilnya[i].match(validasiAngka) == null) {
                        hasilnya[i] = "+1" + hasilnya[i];
                    } else {
                        hasilnya[i] = "+" + hasilnya[i];
                    }
                }
            }
            hasilnya1 = jawabannya2.split("+");
            for (let i = 0; i < hasilnya1.length; i++) {
                if (hasilnya1[i].indexOf('-') != 0) {
                    var validasiAngka = /^[1-9]+$/;
                    if (hasilnya1[i].length == 1 && hasilnya1[i].match(validasiAngka) == null) {
                        hasilnya1[i] = "+1" + hasilnya1[i];
                    } else {
                        hasilnya1[i] = "+" + hasilnya1[i];
                    }
                }
            }
            hasilnya2 = jawabannya3.split("+");
            for (let i = 0; i < hasilnya2.length; i++) {
                if (hasilnya2[i].indexOf('-') != 0) {
                    var validasiAngka = /^[1-9]+$/;
                    if (hasilnya2[i].length == 1 && hasilnya2[i].match(validasiAngka) == null) {
                        hasilnya2[i] = "+1" + hasilnya2[i];
                    } else {
                        hasilnya2[i] = "+" + hasilnya2[i];
                    }
                }
            }


            // potong inputan dengan batas -
            for (let i = 0; i < hasilnya.length; i++) {
                hasilnyaa.push(hasilnya[i].split("-"));
            }
            for (let i = 0; i < hasilnya1.length; i++) {
                hasilnyaa1.push(hasilnya1[i].split("-"));
            }
            for (let i = 0; i < hasilnya2.length; i++) {
                hasilnyaa2.push(hasilnya2[i].split("-"));
            }


            // gabungkan array jadi satu baris
            for (let i = 0; i < hasilnyaa.length; i++) {
                if (hasilnyaa[i].length > 0) {
                    for (let j = 0; j < hasilnyaa[i].length; j++) {
                        new_hasil.push(hasilnyaa[i][j]);
                    }
                } else {
                    new_hasil.push(hasilnyaa[i]);
                }
            }
            for (let i = 0; i < hasilnyaa1.length; i++) {
                if (hasilnyaa1[i].length > 0) {
                    for (let j = 0; j < hasilnyaa1[i].length; j++) {
                        new_hasil1.push(hasilnyaa1[i][j]);
                    }
                } else {
                    new_hasil1.push(hasilnyaa1[i]);
                }
            }
            for (let i = 0; i < hasilnyaa2.length; i++) {
                if (hasilnyaa2[i].length > 0) {
                    for (let j = 0; j < hasilnyaa2[i].length; j++) {
                        new_hasil2.push(hasilnyaa2[i][j]);
                    }
                } else {
                    new_hasil2.push(hasilnyaa2[i]);
                }
            }

            // cek baris pertama jika ada ''
            if (new_hasil[0] == '') {
                new_hasil.shift();
            }
            if (new_hasil1[0] == '') {
                new_hasil1.shift();
            }
            if (new_hasil2[0] == '') {
                new_hasil2.shift();
            }

            // tambahkan - pada awalnya
            for (i = 0; i < new_hasil.length; i++) {
                if (new_hasil[i].indexOf('+') != 0) {

                    var validasiAngka = /^[1-9]+$/;
                    if (new_hasil[i].length == 1 && new_hasil[i].match(validasiAngka) == null) {
                        new_hasil[i] = '-1' + new_hasil[i];
                    } else {
                        new_hasil[i] = '-' + new_hasil[i];
                    }
                }

            }
            for (i = 0; i < new_hasil1.length; i++) {
                if (new_hasil1[i].indexOf('+') != 0) {

                    var validasiAngka = /^[1-9]+$/;
                    if (new_hasil1[i].length == 1 && new_hasil1[i].match(validasiAngka) == null) {
                        new_hasil1[i] = '-1' + new_hasil1[i];
                    } else {
                        new_hasil1[i] = '-' + new_hasil1[i];
                    }
                }

            }
            for (i = 0; i < new_hasil2.length; i++) {
                if (new_hasil2[i].indexOf('+') != 0) {

                    var validasiAngka = /^[1-9]+$/;
                    if (new_hasil2[i].length == 1 && new_hasil2[i].match(validasiAngka) == null) {
                        new_hasil2[i] = '-1' + new_hasil2[i];
                    } else {
                        new_hasil2[i] = '-' + new_hasil2[i];
                    }
                }

            }

            // cek jawaban

            // cek panjang inputan tidak boleh selain 1 atau 2
            let nextt = 0;
            let jawaban_benar = 0;
            if (new_hasil.length != 2 && new_hasil.length != 1) {
                for (let i = 1; i < 4; i++) {
                    if (input_jmlh[i].className.indexOf('salah') == -1) {
                        input_jmlh[i].className += ' salah';
                    }
                    ket_jmlh[1].innerText = '* Jawaban Salah';
                    setTimeout(function () {
                        input_jmlh[1].value = '';
                        input_jmlh[2].value = '';
                        input_jmlh[3].value = '';
                        input_jmlh[1].placeholder = '3p+7p';
                        input_jmlh[2].placeholder = '3r-r';
                        input_jmlh[3].placeholder = '-5s';
                        MathJax.typeset();
                    }, 1500);
                    nextt = 1;
                }
            }
            if (new_hasil1.length != 2 && new_hasil1.length != 1) {
                for (let i = 1; i < 4; i++) {
                    if (input_jmlh[i].className.indexOf('salah') == -1) {
                        input_jmlh[i].className += ' salah';
                    }
                    ket_jmlh[1].innerText = '* Jawaban Salah';
                    setTimeout(function () {
                        input_jmlh[1].value = '';
                        input_jmlh[2].value = '';
                        input_jmlh[3].value = '';
                        input_jmlh[1].placeholder = '3p+7p';
                        input_jmlh[2].placeholder = '3r-r';
                        input_jmlh[3].placeholder = '-5s';
                        MathJax.typeset();
                    }, 1500);
                }
                nextt = 1;
            }
            if (new_hasil2.length != 2 && new_hasil2.length != 1) {
                for (let i = 1; i < 4; i++) {
                    if (input_jmlh[i].className.indexOf('salah') == -1) {
                        input_jmlh[i].className += ' salah';
                    }
                }
                ket_jmlh[1].innerText = '* Jawaban Salah';
                setTimeout(function () {
                    input_jmlh[1].value = '';
                    input_jmlh[2].value = '';
                    input_jmlh[3].value = '';
                    input_jmlh[1].placeholder = '3p+7p';
                    input_jmlh[2].placeholder = '3r-r';
                    input_jmlh[3].placeholder = '-5s';
                    MathJax.typeset();
                }, 1500);
                nextt = 1;
            }

            // tukar jawaban
            if (new_hasil1.length == 1) {
                let baru = new_hasil;
                new_hasil = new_hasil1;
                new_hasil1 = baru;
            } else if (new_hasil2.length == 1) {
                let baru = new_hasil;
                new_hasil = new_hasil2;
                new_hasil2 = baru;
            }

            // jawaban dengan kunci
            if (nextt == 0) {
                if (new_hasil.length == 1) {
                    if (new_hasil[0] == '-5s') {
                        jawaban_benar += 1;
                    }
                }
                if (new_hasil1.length == 2) {
                    if (new_hasil1[0] == jwb_benar1[0] && new_hasil1[1] == jwb_benar1[1]) {
                        jawaban_benar += 1;
                        delete jwb_benar1[0];
                        delete jwb_benar1[1];

                    } else if (new_hasil1[0] == jwb_benar1[1] && new_hasil1[1] == jwb_benar1[0]) {
                        jawaban_benar += 1;
                        delete jwb_benar1[0];
                        delete jwb_benar1[1];

                    }

                    if (new_hasil1[0] == jwb_benar2[0] && new_hasil1[1] == jwb_benar2[1]) {
                        jawaban_benar += 1;
                        delete jwb_benar2[0];
                        delete jwb_benar2[1];

                    } else if (new_hasil1[0] == jwb_benar2[1] && new_hasil1[1] == jwb_benar2[0]) {
                        jawaban_benar += 1;
                        delete jwb_benar2[0];
                        delete jwb_benar2[1];

                    }
                }
                if (new_hasil2.length == 2) {
                    if (new_hasil2[0] == jwb_benar1[0] && new_hasil2[1] == jwb_benar1[1]) {
                        jawaban_benar += 1;
                        delete jwb_benar1[0];
                        delete jwb_benar1[1];

                    } else if (new_hasil2[0] == jwb_benar1[1] && new_hasil2[1] == jwb_benar1[0]) {
                        jawaban_benar += 1;
                        delete jwb_benar1[0];
                        delete jwb_benar1[1];

                    }

                    if (new_hasil2[0] == jwb_benar2[0] && new_hasil2[1] == jwb_benar2[1]) {
                        jawaban_benar += 1;
                        delete jwb_benar2[0];
                        delete jwb_benar2[1];

                    } else if (new_hasil2[0] == jwb_benar2[1] && new_hasil2[1] == jwb_benar2[0]) {
                        jawaban_benar += 1;
                        delete jwb_benar2[0];
                        delete jwb_benar2[1];

                    }
                }
            }

            if (jawaban_benar == 3) {
                ket_jmlh[1].innerText = '\\[=(' + input_jmlh[1].value + ')+(' + input_jmlh[2].value + ')+(' + input_jmlh[3].value + ')\\]';
                ket_jmlh[2].className = ket_jmlh[2].className.replace('hilang1', '');
                ket_jmlh[2].innerText = '* Operasikan Suku Sejenisnya'

                bg_input[1].className += ' hilang1';
                bg_input[2].className = bg_input[2].className.replace('hilang1', '');
                kondisi1 += 1;
            } else {
                if (input_jmlh[i].className.indexOf('salah') == -1) {
                    input_jmlh[i].className += ' salah';
                }
                ket_jmlh[1].innerText = '* Jawaban Salah';
                setTimeout(function () {
                    input_jmlh[1].value = '';
                    input_jmlh[2].value = '';
                    input_jmlh[3].value = '';
                    input_jmlh[1].placeholder = '3p+7p';
                    input_jmlh[2].placeholder = '3r-r';
                    input_jmlh[3].placeholder = '-5s';
                    MathJax.typeset();
                }, 1500);
            }

            console.log(new_hasil);
            console.log(new_hasil1);
            console.log(new_hasil2);
            console.log(jawaban_benar);
            // console.log(sarat);
        }
    } else if (kondisi1 == 2) {

        if (input_jmlh[4].value == '' && input_jmlh[5].value == '' && input_jmlh[6].value == '') {
            for (let i = 4; i < 7; i++) {
                if (input_jmlh[i].className.indexOf('salah') == -1) {
                    input_jmlh[i].className += ' salah';
                }
            }


        } else if (input_jmlh[0].value != '') {
            let jawabannya1 = [];
            jawabannya1.push(input_jmlh[4].value.split(' ').join(''));
            jawabannya1.push(input_jmlh[5].value.split(' ').join(''));
            jawabannya1.push(input_jmlh[6].value.split(' ').join(''));

            console.log(jawabannya1);
            // cek jawaban
            let sarat = 0;
            if (jawabannya1.length == 3) {

                for (let i = 0; i < jwb_benar3.length; i++) {
                    for (let j = 0; j < jawabannya1.length; j++) {

                        if (jawabannya1[i] == jwb_benar3[j]) {
                            sarat += 1;
                            delete jwb_benar3[j];
                        }
                    }
                }

                if (sarat == 3) {
                    ket_jmlh[2].innerText = '\\[=(' + input_jmlh[4].value + ')+(' + input_jmlh[5].value + ')+(' + input_jmlh[6].value + ')\\]';
                    // ket_jmlh[3].className = ket_jmlh[3].className.replace('hilang1', '');
                    // ket_jmlh[3].innerText = '* Keluarkan dari kurung';

                    bg_input[2].className += ' hilang1';
                    bg_input[3].className = bg_input[3].className.replace('hilang1', '');
                    kondisi1 += 1;
                } else {
                    for (let i = 4; i < 7; i++) {
                        if (input_jmlh[i].className.indexOf('salah') == -1) {
                            input_jmlh[i].className += ' salah';
                        }
                    }
                    setTimeout(function () {
                        input_jmlh[4].value = '';
                        input_jmlh[5].value = '';
                        input_jmlh[6].value = '';
                        input_jmlh[4].placeholder = '10p';
                        input_jmlh[5].placeholder = '2r';
                        input_jmlh[6].placeholder = '-5s';
                        ket_jmlh[2].innerText = '* Jawaban Salah';
                        MathJax.typeset();
                    }, 1500);
                }




            } else {
                for (let i = 4; i < 7; i++) {
                    if (input_jmlh[i].className.indexOf('salah') == -1) {
                        input_jmlh[i].className += ' salah';
                    }
                }
                setTimeout(function () {
                    input_jmlh[4].value = '';
                    input_jmlh[5].value = '';
                    input_jmlh[6].value = '';
                    input_jmlh[4].placeholder = '10p';
                    input_jmlh[5].placeholder = '2r';
                    input_jmlh[6].placeholder = '-5s';
                    ket_jmlh[2].innerText = '* Jawaban Salah';
                    MathJax.typeset();
                }, 1500);
            }
        }
    } else if (kondisi1 == 3) {

        if (input_jmlh[7].value == '') {
            if (input_jmlh[7].className.indexOf('salah') == -1) {
                input_jmlh[7].className += ' salah';
            }


        } else if (input_jmlh[7].value != '') {
            let jawabannya1 = input_jmlh[7].value.split(' ').join('');
            jawabannya1 = jawabannya1.split('.').join('');

            // potong inputan dengan batas +
            hasilnya = jawabannya1.split("+");
            for (let i = 0; i < hasilnya.length; i++) {
                if (hasilnya[i].indexOf('-') != 0) {
                    var validasiAngka = /^[1-9]+$/;
                    if (hasilnya[i].length == 1 && hasilnya[i].match(validasiAngka) == null) {
                        hasilnya[i] = "+1" + hasilnya[i];
                    } else {
                        hasilnya[i] = "+" + hasilnya[i];
                    }
                }
            }

            // potong inputan dengan batas -
            for (let i = 0; i < hasilnya.length; i++) {
                hasilnyaa.push(hasilnya[i].split("-"));
            }

            // gabungkan array jadi satu baris
            for (let i = 0; i < hasilnyaa.length; i++) {
                if (hasilnyaa[i].length > 0) {
                    for (let j = 0; j < hasilnyaa[i].length; j++) {
                        new_hasil.push(hasilnyaa[i][j]);
                    }
                } else {
                    new_hasil.push(hasilnyaa[i]);
                }
            }

            // cek baris pertama jika ada ''
            if (new_hasil[0] == '') {
                new_hasil.shift();
            }

            // tambahkan - pada awalnya
            for (i = 0; i < new_hasil.length; i++) {
                if (new_hasil[i].indexOf('+') != 0) {

                    var validasiAngka = /^[1-9]+$/;
                    if (new_hasil[i].length == 1 && new_hasil[i].match(validasiAngka) == null) {
                        new_hasil[i] = '-1' + new_hasil[i];
                    } else {
                        new_hasil[i] = '-' + new_hasil[i];
                    }
                }

            }
            console.log(new_hasil);

            // cek jawaban
            let sarat = 0;
            if (new_hasil.length == 3) {

                for (let i = 0; i < jwb_benar4.length; i++) {
                    for (let j = 0; j < new_hasil.length; j++) {
                        if (jwb_benar4[i] == new_hasil[j]) {
                            sarat += 1;
                            delete new_hasil[j];
                        }
                    }
                }

                if (sarat == 3) {
                    ket_jmlh[3].className = ket_jmlh[3].className.replace('hilang1', '');

                    ket_jmlh[3].innerText = '\\[= ' + input_jmlh[7].value + '\\]';

                    bg_input[3].className += ' hilang1';
                    kondisi1 += 1;
                    tmbl_jmlh.innerText = 'Ulang';
                } else {
                    if (input_jmlh[7].className.indexOf('salah') == -1) {
                        input_jmlh[7].className += ' salah';
                    }
                    setTimeout(function () {
                        input_jmlh[7].value = '';
                        input_jmlh[7].placeholder = '10p+2r-5s';
                        MathJax.typeset();
                    }, 1500);
                }




            } else {
                if (input_jmlh[7].className.indexOf('salah') == -1) {
                    input_jmlh[7].className += ' salah';
                }
                setTimeout(function () {
                    input_jmlh[7].value = '';
                    input_jmlh[7].placeholder = '10p+2r-5s';
                    MathJax.typeset();
                }, 1500);
            }
            console.log(new_hasil);
            // console.log(sarat);
        }
    } else if (kondisi1 == 4) {
        kondisi1 = 0;
        tmbl_jmlh.innerText = 'Cek Jawaban';
        for (let i = 0; i < input_jmlh.length; i++) {
            input_jmlh[i].value = '';
        }
        ket_jmlh[3].className += ' hilang1';
        ket_jmlh[2].className += ' hilang1';
        ket_jmlh[1].className += ' hilang1';
        ket_jmlh[0].className += ' hilang1';
        bg_input[0].className = bg_input[0].className.replace('hilang1', '');
    }



    MathJax.typeset();
})


// klik tmbl cek jawaban
let tmbl_kurang = document.querySelector('.cek_cb_kurang');
let input_kurang = document.querySelectorAll('.jwb2');
let bg_input1 = document.querySelectorAll('.bg_input1');
let ket_kurang = document.querySelectorAll('.cb_kurang');

let jwb_benar5 = ['+3a', '+4b', '+6', '-9b', '+4a'];

let kondisi2 = 0;

// function agar saat di enter tidak dijalankan 
for (let i = 0; i < input_kurang.length; i++) {
    input_kurang[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });
}
// ubah huruf kecil inputan
for (let i = 0; i < input_kurang.length; i++) {
    input_kurang[i].addEventListener('keyup', function (e) {
        input_kurang[i].value = input_kurang[i].value.toLowerCase();
        input_kurang[i].value = input_kurang[i].value.split(' ').join('');
    });
}

tmbl_kurang.addEventListener('click', function () {
    let hasilnyaa = [];
    let hasilnyaa1 = [];
    let hasilnyaa2 = [];
    let new_hasil = [];
    let new_hasil1 = [];
    let new_hasil2 = [];
    let jwb_benar1 = ['+3a', '+4a'];
    let jwb_benar2 = ['+4b', '-9b'];
    let jwb_benar3 = ['7a', '-5b', '6'];
    let jwb_benar4 = ['+7a', '-5b', '+6'];


    if (kondisi2 == 0) {

        if (input_kurang[0].value == '') {
            if (input_kurang[0].className.indexOf('salah') == -1) {
                input_kurang[0].className += ' salah';
            }


        } else if (input_kurang[0].value != '') {
            let jawabannya1 = input_kurang[0].value.split(' ').join('');
            jawabannya1 = jawabannya1.split('.').join('');

            // potong inputan dengan batas +
            hasilnya = jawabannya1.split("+");
            for (let i = 0; i < hasilnya.length; i++) {
                if (hasilnya[i].indexOf('-') != 0) {
                    var validasiAngka = /^[1-9]+$/;
                    if (hasilnya[i].length == 1 && hasilnya[i].match(validasiAngka) == null) {
                        hasilnya[i] = "+1" + hasilnya[i];
                    } else {
                        hasilnya[i] = "+" + hasilnya[i];
                    }
                }
            }

            // potong inputan dengan batas -
            for (let i = 0; i < hasilnya.length; i++) {
                hasilnyaa.push(hasilnya[i].split("-"));
            }

            // gabungkan array jadi satu baris
            for (let i = 0; i < hasilnyaa.length; i++) {
                if (hasilnyaa[i].length > 0) {
                    for (let j = 0; j < hasilnyaa[i].length; j++) {
                        new_hasil.push(hasilnyaa[i][j]);
                    }
                } else {
                    new_hasil.push(hasilnyaa[i]);
                }
            }

            // cek baris pertama jika ada ''
            if (new_hasil[0] == '') {
                new_hasil.shift();
            }

            // tambahkan - pada awalnya
            for (i = 0; i < new_hasil.length; i++) {
                if (new_hasil[i].indexOf('+') != 0) {

                    var validasiAngka = /^[1-9]+$/;
                    if (new_hasil[i].length == 1 && new_hasil[i].match(validasiAngka) == null) {
                        new_hasil[i] = '-1' + new_hasil[i];
                    } else {
                        new_hasil[i] = '-' + new_hasil[i];
                    }
                }

            }
            console.log(new_hasil);

            // cek jawaban
            let sarat = 0;
            if (new_hasil.length == 5) {

                for (let i = 0; i < jwb_benar5.length; i++) {
                    for (let j = 0; j < new_hasil.length; j++) {
                        if (jwb_benar5[i] == new_hasil[j]) {
                            sarat += 1;
                            delete new_hasil[j];
                        }
                    }
                }

                if (sarat == 5) {
                    ket_kurang[0].className = ket_kurang[0].className.replace('hilang1', '');

                    ket_kurang[0].innerText = '\\[= ' + input_kurang[0].value + '\\]';


                    ket_kurang[1].className = ket_kurang[1].className.replace('hilang1', '');

                    ket_kurang[1].innerText = '* Kelompokkan Sukunya';

                    bg_input1[0].className += ' hilang1';
                    bg_input1[1].className = bg_input1[1].className.replace('hilang1', '');
                    kondisi2 += 1;
                } else {
                    if (input_kurang[0].className.indexOf('salah') == -1) {
                        input_kurang[0].className += ' salah';
                    }
                    setTimeout(function () {
                        input_kurang[0].value = '';
                        input_kurang[0].placeholder = 'Masukkan 3a+4b+6-9b+4a';
                        MathJax.typeset();
                    }, 1500);
                }




            } else {
                if (input_kurang[0].className.indexOf('salah') == -1) {
                    input_kurang[0].className += ' salah';
                }
                setTimeout(function () {
                    input_kurang[0].value = '';
                    input_kurang[0].placeholder = 'Masukkan 3a+4b+6-9b+4a';
                    MathJax.typeset();
                }, 1500);
            }
            console.log(new_hasil);


        }
    } else if (kondisi2 == 1) {
        if (input_kurang[1].value == '' && input_kurang[2].value == '' && input_kurang[3].value == '') {
            for (let i = 1; i < 4; i++) {
                if (input_kurang[i].className.indexOf('salah') == -1) {
                    input_kurang[i].className += ' salah';
                }
            }


        } else if (input_kurang[1].value != '') {
            let jawabannya1 = input_kurang[1].value.split(' ').join('');
            jawabannya1 = jawabannya1.split('.').join('');

            let jawabannya2 = input_kurang[2].value.split(' ').join('');
            jawabannya2 = jawabannya2.split('.').join('');

            let jawabannya3 = input_kurang[3].value.split(' ').join('');
            jawabannya3 = jawabannya3.split('.').join('');

            // potong inputan dengan batas +
            hasilnya = jawabannya1.split("+");
            for (let i = 0; i < hasilnya.length; i++) {
                if (hasilnya[i].indexOf('-') != 0) {
                    var validasiAngka = /^[1-9]+$/;
                    if (hasilnya[i].length == 1 && hasilnya[i].match(validasiAngka) == null) {
                        hasilnya[i] = "+1" + hasilnya[i];
                    } else {
                        hasilnya[i] = "+" + hasilnya[i];
                    }
                }
            }
            hasilnya1 = jawabannya2.split("+");
            for (let i = 0; i < hasilnya1.length; i++) {
                if (hasilnya1[i].indexOf('-') != 0) {
                    var validasiAngka = /^[1-9]+$/;
                    if (hasilnya1[i].length == 1 && hasilnya1[i].match(validasiAngka) == null) {
                        hasilnya1[i] = "+1" + hasilnya1[i];
                    } else {
                        hasilnya1[i] = "+" + hasilnya1[i];
                    }
                }
            }
            hasilnya2 = jawabannya3.split("+");
            for (let i = 0; i < hasilnya2.length; i++) {
                if (hasilnya2[i].indexOf('-') != 0) {
                    var validasiAngka = /^[1-9]+$/;
                    if (hasilnya2[i].length == 1 && hasilnya2[i].match(validasiAngka) == null) {
                        hasilnya2[i] = "+1" + hasilnya2[i];
                    } else {
                        hasilnya2[i] = "+" + hasilnya2[i];
                    }
                }
            }


            // potong inputan dengan batas -
            for (let i = 0; i < hasilnya.length; i++) {
                hasilnyaa.push(hasilnya[i].split("-"));
            }
            for (let i = 0; i < hasilnya1.length; i++) {
                hasilnyaa1.push(hasilnya1[i].split("-"));
            }
            for (let i = 0; i < hasilnya2.length; i++) {
                hasilnyaa2.push(hasilnya2[i].split("-"));
            }


            // gabungkan array jadi satu baris
            for (let i = 0; i < hasilnyaa.length; i++) {
                if (hasilnyaa[i].length > 0) {
                    for (let j = 0; j < hasilnyaa[i].length; j++) {
                        new_hasil.push(hasilnyaa[i][j]);
                    }
                } else {
                    new_hasil.push(hasilnyaa[i]);
                }
            }
            for (let i = 0; i < hasilnyaa1.length; i++) {
                if (hasilnyaa1[i].length > 0) {
                    for (let j = 0; j < hasilnyaa1[i].length; j++) {
                        new_hasil1.push(hasilnyaa1[i][j]);
                    }
                } else {
                    new_hasil1.push(hasilnyaa1[i]);
                }
            }
            for (let i = 0; i < hasilnyaa2.length; i++) {
                if (hasilnyaa2[i].length > 0) {
                    for (let j = 0; j < hasilnyaa2[i].length; j++) {
                        new_hasil2.push(hasilnyaa2[i][j]);
                    }
                } else {
                    new_hasil2.push(hasilnyaa2[i]);
                }
            }

            // cek baris pertama jika ada ''
            if (new_hasil[0] == '') {
                new_hasil.shift();
            }
            if (new_hasil1[0] == '') {
                new_hasil1.shift();
            }
            if (new_hasil2[0] == '') {
                new_hasil2.shift();
            }

            // tambahkan - pada awalnya
            for (i = 0; i < new_hasil.length; i++) {
                if (new_hasil[i].indexOf('+') != 0) {

                    var validasiAngka = /^[1-9]+$/;
                    if (new_hasil[i].length == 1 && new_hasil[i].match(validasiAngka) == null) {
                        new_hasil[i] = '-1' + new_hasil[i];
                    } else {
                        new_hasil[i] = '-' + new_hasil[i];
                    }
                }

            }
            for (i = 0; i < new_hasil1.length; i++) {
                if (new_hasil1[i].indexOf('+') != 0) {

                    var validasiAngka = /^[1-9]+$/;
                    if (new_hasil1[i].length == 1 && new_hasil1[i].match(validasiAngka) == null) {
                        new_hasil1[i] = '-1' + new_hasil1[i];
                    } else {
                        new_hasil1[i] = '-' + new_hasil1[i];
                    }
                }

            }
            for (i = 0; i < new_hasil2.length; i++) {
                if (new_hasil2[i].indexOf('+') != 0) {

                    var validasiAngka = /^[1-9]+$/;
                    if (new_hasil2[i].length == 1 && new_hasil2[i].match(validasiAngka) == null) {
                        new_hasil2[i] = '-1' + new_hasil2[i];
                    } else {
                        new_hasil2[i] = '-' + new_hasil2[i];
                    }
                }

            }


            // jika panjangnya 1 dan itu + hapus
            for (i = 0; i < new_hasil.length; i++) {
                if (new_hasil[i].length == 1) {
                    if (new_hasil[i] == '+') {
                        new_hasil.shift();
                    }
                }

            }
            for (i = 0; i < new_hasil1.length; i++) {
                if (new_hasil1[i].length == 1) {
                    if (new_hasil1[i] == '+') {
                        new_hasil1.shift();
                    }
                }

            }
            for (i = 0; i < new_hasil2.length; i++) {
                if (new_hasil2[i].length == 1) {
                    if (new_hasil2[i] == '+') {
                        new_hasil2.shift();
                    }
                }

            }

            // cek jawaban
            let nextt = 0;
            let jawaban_benar = 0;

            // cek panjang inputan tidak boleh selain 1 atau 2

            if (new_hasil.length != 2 && new_hasil.length != 1) {
                for (let i = 1; i < 4; i++) {
                    if (input_kurang[i].className.indexOf('salah') == -1) {
                        input_kurang[i].className += ' salah';
                    }
                    ket_kurang[1].innerText = '* Jawaban Salah';
                    setTimeout(function () {
                        input_kurang[1].value = '';
                        input_kurang[2].value = '';
                        input_kurang[3].value = '';
                        input_kurang[1].placeholder = '3a+4a';
                        input_kurang[2].placeholder = '4b-9b';
                        input_kurang[3].placeholder = '6';
                        MathJax.typeset();
                    }, 1500);
                    nextt = 1;
                }
            }
            if (new_hasil1.length != 2 && new_hasil1.length != 1) {
                for (let i = 1; i < 4; i++) {
                    if (input_kurang[i].className.indexOf('salah') == -1) {
                        input_kurang[i].className += ' salah';
                    }
                    ket_kurang[1].innerText = '* Jawaban Salah';
                    setTimeout(function () {
                        input_kurang[1].value = '';
                        input_kurang[2].value = '';
                        input_kurang[3].value = '';
                        input_kurang[1].placeholder = '3a+4a';
                        input_kurang[2].placeholder = '4b-9b';
                        input_kurang[3].placeholder = '6';
                        MathJax.typeset();
                    }, 1500);
                    nextt = 1;
                }
            }
            if (new_hasil2.length != 2 && new_hasil2.length != 1) {
                for (let i = 1; i < 4; i++) {
                    if (input_kurang[i].className.indexOf('salah') == -1) {
                        input_kurang[i].className += ' salah';
                    }
                }
                ket_kurang[1].innerText = '* Jawaban Salah';
                setTimeout(function () {
                    input_kurang[1].value = '';
                    input_kurang[2].value = '';
                    input_kurang[3].value = '';
                    input_kurang[1].placeholder = '3a+4a';
                    input_kurang[2].placeholder = '4b-9b';
                    input_kurang[3].placeholder = '6';
                    MathJax.typeset();
                }, 1500);
                nextt = 1;
            }

            // tukar jawaban
            if (new_hasil1.length == 1) {
                let baru = new_hasil;
                new_hasil = new_hasil1;
                new_hasil1 = baru;
            } else if (new_hasil2.length == 1) {
                let baru = new_hasil;
                new_hasil = new_hasil2;
                new_hasil2 = baru;
            }




            // jawaban dengan kunci
            if (nextt == 0) {
                if (new_hasil.length == 1) {
                    if (new_hasil[0] == '+6') {
                        jawaban_benar += 1;
                    }
                }
                if (new_hasil1.length == 2) {
                    if (new_hasil1[0] == jwb_benar1[0] && new_hasil1[1] == jwb_benar1[1]) {
                        jawaban_benar += 1;
                        delete jwb_benar1[0];
                        delete jwb_benar1[1];

                    } else if (new_hasil1[0] == jwb_benar1[1] && new_hasil1[1] == jwb_benar1[0]) {
                        jawaban_benar += 1;
                        delete jwb_benar1[0];
                        delete jwb_benar1[1];

                    }

                    if (new_hasil1[0] == jwb_benar2[0] && new_hasil1[1] == jwb_benar2[1]) {
                        jawaban_benar += 1;
                        delete jwb_benar2[0];
                        delete jwb_benar2[1];

                    } else if (new_hasil1[0] == jwb_benar2[1] && new_hasil1[1] == jwb_benar2[0]) {
                        jawaban_benar += 1;
                        delete jwb_benar2[0];
                        delete jwb_benar2[1];

                    }
                }
                if (new_hasil2.length == 2) {
                    if (new_hasil2[0] == jwb_benar1[0] && new_hasil2[1] == jwb_benar1[1]) {
                        jawaban_benar += 1;
                        delete jwb_benar1[0];
                        delete jwb_benar1[1];

                    } else if (new_hasil2[0] == jwb_benar1[1] && new_hasil2[1] == jwb_benar1[0]) {
                        jawaban_benar += 1;
                        delete jwb_benar1[0];
                        delete jwb_benar1[1];

                    }

                    if (new_hasil2[0] == jwb_benar2[0] && new_hasil2[1] == jwb_benar2[1]) {
                        jawaban_benar += 1;
                        delete jwb_benar2[0];
                        delete jwb_benar2[1];

                    } else if (new_hasil2[0] == jwb_benar2[1] && new_hasil2[1] == jwb_benar2[0]) {
                        jawaban_benar += 1;
                        delete jwb_benar2[0];
                        delete jwb_benar2[1];

                    }
                }
            }

            if (jawaban_benar == 3) {
                ket_kurang[1].innerText = '\\[=(' + input_kurang[1].value + ')+(' + input_kurang[2].value + ')+(' + input_kurang[3].value + ')\\]';
                ket_kurang[2].className = ket_kurang[2].className.replace('hilang1', '');
                ket_kurang[2].innerText = '* Operasikan Suku Sejenisnya'

                bg_input1[1].className += ' hilang1';
                bg_input1[2].className = bg_input1[2].className.replace('hilang1', '');
                kondisi2 += 1;
            } else {
                if (input_kurang[i].className.indexOf('salah') == -1) {
                    input_kurang[i].className += ' salah';
                }
                ket_kurang[1].innerText = '* Jawaban Salah';
                setTimeout(function () {
                    input_kurang[1].value = '';
                    input_kurang[2].value = '';
                    input_kurang[3].value = '';
                    input_kurang[1].placeholder = '3a+4a';
                    input_kurang[2].placeholder = '4b-9b';
                    input_kurang[3].placeholder = '6';
                    MathJax.typeset();
                }, 1500);
                nextt = 1;
            }

            console.log(new_hasil);
            console.log(new_hasil1);
            console.log(new_hasil2);
            console.log(jawaban_benar);
            // console.log(sarat);
        }
    } else if (kondisi2 == 2) {

        if (input_kurang[4].value == '' && input_kurang[5].value == '' && input_kurang[6].value == '') {
            for (let i = 4; i < 7; i++) {
                if (input_kurang[i].className.indexOf('salah') == -1) {
                    input_kurang[i].className += ' salah';
                }
            }


        } else if (input_kurang[0].value != '') {
            let jawabannya1 = [];
            jawabannya1.push(input_kurang[4].value.split(' ').join(''));
            jawabannya1.push(input_kurang[5].value.split(' ').join(''));
            jawabannya1.push(input_kurang[6].value.split(' ').join(''));

            console.log(jawabannya1);
            // cek jawaban
            let sarat = 0;
            if (jawabannya1.length == 3) {

                for (let i = 0; i < jwb_benar3.length; i++) {
                    for (let j = 0; j < jawabannya1.length; j++) {

                        if (jawabannya1[i] == jwb_benar3[j]) {
                            sarat += 1;
                            delete jwb_benar3[j];
                        }
                    }
                }

                if (sarat == 3) {
                    ket_kurang[2].innerText = '\\[=(' + input_kurang[4].value + ')+(' + input_kurang[5].value + ')+(' + input_kurang[6].value + ')\\]';
                    // ket_kurang[3].className = ket_kurang[3].className.replace('hilang1', '');
                    // ket_kurang[3].innerText = '* Keluarkan dari kurung';

                    bg_input1[2].className += ' hilang1';
                    bg_input1[3].className = bg_input1[3].className.replace('hilang1', '');
                    kondisi2 += 1;
                } else {
                    for (let i = 4; i < 7; i++) {
                        if (input_kurang[i].className.indexOf('salah') == -1) {
                            input_kurang[i].className += ' salah';
                        }
                    }
                    setTimeout(function () {
                        input_kurang[4].value = '';
                        input_kurang[5].value = '';
                        input_kurang[6].value = '';
                        input_kurang[4].placeholder = '7a';
                        input_kurang[5].placeholder = '-5b';
                        input_kurang[6].placeholder = '6';
                        ket_kurang[2].innerText = '* Jawaban Salah';
                        MathJax.typeset();
                    }, 1500);
                }




            } else {
                for (let i = 4; i < 7; i++) {
                    if (input_kurang[i].className.indexOf('salah') == -1) {
                        input_kurang[i].className += ' salah';
                    }
                }
                setTimeout(function () {
                    input_kurang[4].value = '';
                    input_kurang[5].value = '';
                    input_kurang[6].value = '';
                    input_kurang[4].placeholder = '7a';
                    input_kurang[5].placeholder = '-5b';
                    input_kurang[6].placeholder = '6';
                    ket_kurang[2].innerText = '* Jawaban Salah';
                    MathJax.typeset();
                }, 1500);
            }
        }
    } else if (kondisi2 == 3) {

        if (input_kurang[7].value == '') {
            if (input_kurang[7].className.indexOf('salah') == -1) {
                input_kurang[7].className += ' salah';
            }


        } else if (input_kurang[7].value != '') {
            let jawabannya1 = input_kurang[7].value.split(' ').join('');
            jawabannya1 = jawabannya1.split('.').join('');

            // potong inputan dengan batas +
            hasilnya = jawabannya1.split("+");
            for (let i = 0; i < hasilnya.length; i++) {
                if (hasilnya[i].indexOf('-') != 0) {
                    var validasiAngka = /^[1-9]+$/;
                    if (hasilnya[i].length == 1 && hasilnya[i].match(validasiAngka) == null) {
                        hasilnya[i] = "+1" + hasilnya[i];
                    } else {
                        hasilnya[i] = "+" + hasilnya[i];
                    }
                }
            }

            // potong inputan dengan batas -
            for (let i = 0; i < hasilnya.length; i++) {
                hasilnyaa.push(hasilnya[i].split("-"));
            }

            // gabungkan array jadi satu baris
            for (let i = 0; i < hasilnyaa.length; i++) {
                if (hasilnyaa[i].length > 0) {
                    for (let j = 0; j < hasilnyaa[i].length; j++) {
                        new_hasil.push(hasilnyaa[i][j]);
                    }
                } else {
                    new_hasil.push(hasilnyaa[i]);
                }
            }

            // cek baris pertama jika ada ''
            if (new_hasil[0] == '') {
                new_hasil.shift();
            }

            // tambahkan - pada awalnya
            for (i = 0; i < new_hasil.length; i++) {
                if (new_hasil[i].indexOf('+') != 0) {

                    var validasiAngka = /^[1-9]+$/;
                    if (new_hasil[i].length == 1 && new_hasil[i].match(validasiAngka) == null) {
                        new_hasil[i] = '-1' + new_hasil[i];
                    } else {
                        new_hasil[i] = '-' + new_hasil[i];
                    }
                }

            }
            console.log(new_hasil);

            // cek jawaban
            let sarat = 0;
            if (new_hasil.length == 3) {

                for (let i = 0; i < jwb_benar4.length; i++) {
                    for (let j = 0; j < new_hasil.length; j++) {
                        if (jwb_benar4[i] == new_hasil[j]) {
                            sarat += 1;
                            delete new_hasil[j];
                        }
                    }
                }
                console.log(new_hasil);

                if (sarat == 3) {
                    ket_kurang[3].className = ket_kurang[3].className.replace('hilang1', '');

                    ket_kurang[3].innerText = '\\[= ' + input_kurang[7].value + '\\]';

                    bg_input1[3].className += ' hilang1';
                    kondisi2 += 1;
                    tmbl_kurang.innerText = 'Ulang';
                } else {
                    if (input_kurang[7].className.indexOf('salah') == -1) {
                        input_kurang[7].className += ' salah';
                    }
                    setTimeout(function () {
                        input_kurang[7].value = '';
                        input_kurang[7].placeholder = '7a-5b+6';
                        MathJax.typeset();
                    }, 1500);
                }




            } else {
                if (input_kurang[7].className.indexOf('salah') == -1) {
                    input_kurang[7].className += ' salah';
                }
                setTimeout(function () {
                    input_kurang[7].value = '';
                    input_kurang[7].placeholder = '7a-5b+6';
                    MathJax.typeset();
                }, 1500);
            }
            console.log(new_hasil);
            // console.log(sarat);
        }
    } else if (kondisi2 == 4) {
        kondisi1 = 0;
        tmbl_kurang.innerText = 'Cek Jawaban';
        for (let i = 0; i < input_kurang.length; i++) {
            input_kurang[i].value = '';
        }
        ket_kurang[3].className += ' hilang1';
        ket_kurang[2].className += ' hilang1';
        ket_kurang[1].className += ' hilang1';
        ket_kurang[0].className += ' hilang1';
        bg_input1[0].className = bg_input1[0].className.replace('hilang1', '');
    }



    MathJax.typeset();
})































// saat halaman di load
window.onload = function () {
    for (let i = 0; i < input_jmlh.length; i++) {
        input_jmlh[i].value = '';
    }
    for (let i = 0; i < input_kurang.length; i++) {
        input_kurang[i].value = '';
    }
}