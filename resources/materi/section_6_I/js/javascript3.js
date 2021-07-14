

//Contoh Soal
let kenya = document.querySelectorAll('.ke');
let langkahnya = document.querySelectorAll('.langkahnya');

for (let i = 0; i < kenya.length; i++) {
    kenya[i].addEventListener('click', function () {
        if (kenya[i].className.indexOf('ke_aktif') == -1) {
            for (let j = 0; j < kenya.length; j++) {
                kenya[j].classList.toggle('ke_aktif');
            }
            for (let j = 0; j < langkahnya.length; j++) {
                langkahnya[j].classList.toggle('hilang');
            }

        } else {}
    });
}


let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let input2 = document.querySelectorAll('.inpt2');
let input3 = document.querySelectorAll('.inpt3');
let input4 = document.querySelectorAll('.inpt4');
let input5 = document.querySelectorAll('.inpt5');
let input6 = document.querySelectorAll('.inpt6');
let input7 = document.querySelectorAll('.inpt7');
let input8 = document.querySelectorAll('.inpt8');
let keterangan = document.querySelectorAll('.kete');
let letketgambr = document.querySelectorAll('.lahket');
let ketgmbr = document.querySelectorAll('.ketgambar');
let lkh1 = document.querySelector('.lkh1');
let lkh2 = document.querySelector('.lkh2');
let lkh3 = document.querySelector('.lkh3');
let lkhh1 = document.querySelector('.lkhh1');
let lkhh2 = document.querySelector('.lkhh2');
let lkhh3 = document.querySelector('.lkhh3');
let lkhh4 = document.querySelector('.lkhh4');
let ksmpln = document.querySelector('.ksmpln');
let ksmpln1 = document.querySelector('.ksmpln1');
kondisi1 = 0;
kondisi2 = 0;

for (let i = 0; i < input2.length; i++) {
    input2[i].addEventListener('keyup', function () {

        input2[i].value = input2[i].value.toLowerCase();
        input2[i].value = input2[i].value.split(' ').join('');
    })
}

for (let i = 0; i < input3.length; i++) {
    input3[i].addEventListener('keyup', function () {

        input3[i].value = input3[i].value.toLowerCase();
        input3[i].value = input3[i].value.split(' ').join('');
    })
}

for (let i = 0; i < input4.length; i++) {
    input4[i].addEventListener('keyup', function () {

        input4[i].value = input4[i].value.toLowerCase();
        input4[i].value = input4[i].value.split(' ').join('');
    })
}

for (let i = 0; i < input5.length; i++) {
    input5[i].addEventListener('keyup', function () {

        input5[i].value = input5[i].value.toLowerCase();
        input5[i].value = input5[i].value.split(' ').join('');
    })
}

for (let i = 0; i < input6.length; i++) {
    input6[i].addEventListener('keyup', function () {

        input6[i].value = input6[i].value.toLowerCase();
        input6[i].value = input6[i].value.split(' ').join('');
    })
}

for (let i = 0; i < input7.length; i++) {
    input7[i].addEventListener('keyup', function () {

        input7[i].value = input7[i].value.toLowerCase();
        input7[i].value = input7[i].value.split(' ').join('');
    })
}

for (let i = 0; i < input8.length; i++) {
    input8[i].addEventListener('keyup', function () {

        input8[i].value = input8[i].value.toLowerCase();
        input8[i].value = input8[i].value.split(' ').join('');
    })
}


btn1.addEventListener('click', function () {
    if (kondisi1 == 0) {
        let lanjuttidak = 0;
        let jwb = ['3b', '6a'];

        for (let i = 0; i < input2.length; i++) {
            if (i == 0 || i == 1) {
                if (input2[i].value == jwb[0]) {
                    lanjuttidak += 1;
                }
            } else {
                if (input2[i].value == jwb[1]) {
                    lanjuttidak += 1;
                }
            }
        }

        if (lanjuttidak == 4) {
            ketgmbr[0].src = "gambar/benar.png";
            letketgambr[0].className = letketgambr[0].className.replace('hilang1', '');
            if (keterangan[1].className.indexOf("hilang1") == -1) {
                keterangan[1].className += " hilang1";
            }
            keterangan[0].innerHTML = "Jawaban Kamu Benar";
            keterangan[0].className = keterangan[0].className.replace('hilang1', '');


            btn1.innerHTML = "Langkah Selanjutnya";
            for (let i = 0; i < input2.length; i++) {
                input2[i].disabled = true;
            }
            kondisi1 += 1;


        } else {
            keterangan[0].innerHTML = "Jawaban Kamu Masih Salah";
            keterangan[1].innerHTML = `Seharusnya <br> \\[ \\frac{2 \\times 3b}{6a \\times 3b} + \\frac{3 \\times 6a}{3b \\times 6a}\\]`
            keterangan[0].className = keterangan[0].className.replace('hilang1', '');
            keterangan[1].className = keterangan[1].className.replace('hilang1', '');
            ketgmbr[0].src = "gambar/salah.png";
            letketgambr[0].className = letketgambr[0].className.replace('hilang1', '');


        }
    } else if (kondisi1 == 1) {
        keterangan[0].className += " hilang1";
        letketgambr[0].className += " hilang1";
        btn1.innerHTML = "Cek Jawaban";
        kondisi1 += 1;
        lkh1.className = lkh1.className.replace('hilang1', '');
    } else if (kondisi1 == 2) {
        let lanjuttidak = 0;
        let jwb = ['6b', '18ab', '18a'];

        for (let i = 0; i < input3.length; i++) {
            if (i == 1 || i == 3) {
                if (input3[i].value == jwb[1]) {
                    lanjuttidak += 1;
                }
            } else if (i == 0) {
                if (input3[i].value == jwb[0]) {
                    lanjuttidak += 1;
                }
            } else if (i == 2) {
                if (input3[i].value == jwb[2]) {
                    lanjuttidak += 1;
                }
            }
        }

        if (lanjuttidak == 4) {
            ketgmbr[1].src = "gambar/benar.png";
            letketgambr[1].className = letketgambr[1].className.replace('hilang1', '');
            if (keterangan[3].className.indexOf("hilang1") == -1) {
                keterangan[3].className += " hilang1";
            }
            keterangan[2].innerHTML = "Jawaban Kamu Benar";
            keterangan[2].className = keterangan[0].className.replace('hilang1', '');


            btn1.innerHTML = "Langkah Selanjutnya";
            for (let i = 0; i < input3.length; i++) {
                input3[i].disabled = true;
            }
            kondisi1 += 1;


        } else {
            keterangan[2].innerHTML = "Jawaban Kamu Masih Salah";
            keterangan[3].innerHTML = `Seharusnya <br> \\[ \\frac{6b}{18ab} + \\frac{18a}{18ab}\\]`
            keterangan[2].className = keterangan[2].className.replace('hilang1', '');
            keterangan[3].className = keterangan[3].className.replace('hilang1', '');
            ketgmbr[1].src = "gambar/salah.png";
            letketgambr[1].className = letketgambr[1].className.replace('hilang1', '');


        }
    } else if (kondisi1 == 3) {
        keterangan[2].className += " hilang1";
        letketgambr[1].className += " hilang1";
        btn1.innerHTML = "Cek Jawaban";
        kondisi1 += 1;
        lkh2.className = lkh2.className.replace('hilang1', '');
    } else if (kondisi1 == 4) {
        let lanjuttidak = 0;
        let jwb = ['6b+18a', '18a+6b'];

        for (let i = 0; i < input4.length; i++) {
            for (let j = 0; j < jwb.length; j++) {
                if (input4[i].value == jwb[j]) {
                    lanjuttidak += 1;
                }
            }
        }

        if (lanjuttidak == 1) {
            ketgmbr[2].src = "gambar/benar.png";
            letketgambr[2].className = letketgambr[1].className.replace('hilang1', '');
            if (keterangan[5].className.indexOf("hilang1") == -1) {
                keterangan[5].className += " hilang1";
            }
            keterangan[4].innerHTML = "Jawaban Kamu Benar";
            keterangan[4].className = keterangan[0].className.replace('hilang1', '');


            btn1.innerHTML = "Langkah Selanjutnya";
            for (let i = 0; i < input4.length; i++) {
                input4[i].disabled = true;
            }
            kondisi1 += 1;


        } else {
            keterangan[4].innerHTML = "Jawaban Kamu Masih Salah";
            keterangan[5].innerHTML = `Seharusnya <br> \\[ \\frac{18a+6b}{18ab}\\]`
            keterangan[4].className = keterangan[4].className.replace('hilang1', '');
            keterangan[5].className = keterangan[5].className.replace('hilang1', '');
            ketgmbr[2].src = "gambar/salah.png";
            letketgambr[2].className = letketgambr[2].className.replace('hilang1', '');


        }
    } else if (kondisi1 == 5) {
        keterangan[4].className += " hilang1";
        letketgambr[2].className += " hilang1";
        btn1.innerHTML = "Cek Jawaban";
        kondisi1 += 1;
        lkh3.className = lkh2.className.replace('hilang1', '');
    } else if (kondisi1 == 6) {
        let lanjuttidak = 0;
        let jwb = ['b+3a', '3a+b', '3ab'];

        for (let i = 0; i < input5.length; i++) {
            if (i == 0) {
                if (input5[i].value == jwb[0] || input5[i].value == jwb[1]) {
                    lanjuttidak += 1;
                }
            } else {
                if (input5[i].value == jwb[2]) {
                    lanjuttidak += 1;
                }
            }
        }

        if (lanjuttidak == 2) {
            ketgmbr[3].src = "gambar/benar.png";
            letketgambr[3].className = letketgambr[1].className.replace('hilang1', '');
            if (keterangan[7].className.indexOf("hilang1") == -1) {
                keterangan[7].className += " hilang1";
            }
            keterangan[6].innerHTML = "Jawaban Kamu Benar";
            keterangan[6].className = keterangan[6].className.replace('hilang1', '');


            btn1.innerHTML = "Kesimpulan";
            for (let i = 0; i < input5.length; i++) {
                input5[i].disabled = true;
            }
            kondisi1 += 1;


        } else {
            keterangan[6].innerHTML = "Jawaban Kamu Masih Salah";
            keterangan[7].innerHTML = `Seharusnya <br> \\[ \\frac{3a+b}{3ab}\\]`
            keterangan[6].className = keterangan[6].className.replace('hilang1', '');
            keterangan[7].className = keterangan[7].className.replace('hilang1', '');
            ketgmbr[3].src = "gambar/salah.png";
            letketgambr[3].className = letketgambr[3].className.replace('hilang1', '');


        }
    } else if (kondisi1 == 7) {
        keterangan[6].className += " hilang1";
        letketgambr[3].className += " hilang1";
        btn1.className += ' hilang1';
        kondisi1 += 1;
        ksmpln.className = ksmpln.className.replace('hilang1', '');
    }



    MathJax.typeset();
})

btn2.addEventListener('click', function () {
    if (kondisi2 == 0) {
        let lanjuttidak = 0;
        let jwb = ['(x+9)', '(9+x)'];

        for (let i = 0; i < input6.length; i++) {
            for (let j = 0; j < jwb.length; j++) {
                if (input6[i].value == jwb[j]) {
                    console.log(lanjuttidak);
                    lanjuttidak += 1;
                }
            }
        }

        console.log(lanjuttidak);

        if (lanjuttidak == 2) {

            ketgmbr[4].src = "gambar/benar.png";
            letketgambr[4].className = letketgambr[4].className.replace('hilang1', '');
            if (keterangan[9].className.indexOf("hilang1") == -1) {
                keterangan[9].className += " hilang1";
            }
            keterangan[8].innerHTML = "Jawaban Kamu Benar";
            keterangan[8].className = keterangan[8].className.replace('hilang1', '');


            btn2.innerHTML = "Langkah Selanjutnya";
            for (let i = 0; i < input6.length; i++) {
                input6[i].disabled = true;
            }
            kondisi2 += 1;


        } else {
            keterangan[8].innerHTML = "Jawaban Kamu Masih Salah";
            keterangan[9].innerHTML = `Seharusnya <br> \\[ \\frac{15}{(x+9)(x-9)} + \\frac{7 \\times (x+9)}{(x-9) \\times (x+9)}\\]`
            keterangan[8].className = keterangan[8].className.replace('hilang1', '');
            keterangan[9].className = keterangan[9].className.replace('hilang1', '');
            ketgmbr[4].src = "gambar/salah.png";
            letketgambr[4].className = letketgambr[4].className.replace('hilang1', '');


        }
    } else if (kondisi2 == 1) {
        keterangan[8].className += " hilang1";
        letketgambr[4].className += " hilang1";
        btn2.innerHTML = "Cek Jawaban";
        kondisi2 += 1;
        lkhh2.className = lkhh2.className.replace('hilang1', '');
    } else if (kondisi2 == 2) {
        let lanjuttidak = 0;
        let jwb = ['7x+63', '63+7x'];

        for (let i = 0; i < input7.length; i++) {
            for (let j = 0; j < jwb.length; j++) {
                if (input7[i].value == jwb[j]) {
                    console.log(lanjuttidak);
                    lanjuttidak += 1;
                }
            }
        }

        console.log(lanjuttidak);

        if (lanjuttidak == 1) {

            ketgmbr[5].src = "gambar/benar.png";
            letketgambr[5].className = letketgambr[5].className.replace('hilang1', '');
            if (keterangan[11].className.indexOf("hilang1") == -1) {
                keterangan[11].className += " hilang1";
            }
            keterangan[10].innerHTML = "Jawaban Kamu Benar";
            keterangan[10].className = keterangan[8].className.replace('hilang1', '');


            btn2.innerHTML = "Langkah Selanjutnya";
            for (let i = 0; i < input7.length; i++) {
                input7[i].disabled = true;
            }
            kondisi2 += 1;


        } else {
            keterangan[10].innerHTML = "Jawaban Kamu Masih Salah";
            keterangan[11].innerHTML = `Seharusnya <br> \\[ \\frac{15}{(x+9)(x-9)} + \\frac{7x+63}{(x-9)(x+9)}\\]`
            keterangan[10].className = keterangan[10].className.replace('hilang1', '');
            keterangan[11].className = keterangan[11].className.replace('hilang1', '');
            ketgmbr[5].src = "gambar/salah.png";
            letketgambr[5].className = letketgambr[5].className.replace('hilang1', '');


        }
    } else if (kondisi2 == 3) {
        keterangan[10].className += " hilang1";
        letketgambr[5].className += " hilang1";
        btn2.innerHTML = "Cek Jawaban";
        kondisi2 += 1;
        lkhh3.className = lkhh3.className.replace('hilang1', '');
        lkhh4.className = lkhh4.className.replace('hilang1', '');
    } else if (kondisi2 == 4) {
        let lanjuttidak = 0;
        let jwb = ['7x+78', '78+7x'];

        for (let i = 0; i < input8.length; i++) {
            for (let j = 0; j < jwb.length; j++) {
                if (input8[i].value == jwb[j]) {
                    console.log(lanjuttidak);
                    lanjuttidak += 1;
                }
            }
        }

        console.log(lanjuttidak);

        if (lanjuttidak == 1) {

            ketgmbr[6].src = "gambar/benar.png";
            letketgambr[6].className = letketgambr[6].className.replace('hilang1', '');
            if (keterangan[13].className.indexOf("hilang1") == -1) {
                keterangan[13].className += " hilang1";
            }
            keterangan[12].innerHTML = "Jawaban Kamu Benar";
            keterangan[12].className = keterangan[8].className.replace('hilang1', '');


            btn2.innerHTML = "Kesimpulan";
            for (let i = 0; i < input8.length; i++) {
                input8[i].disabled = true;
            }
            kondisi2 += 1;


        } else {
            keterangan[12].innerHTML = "Jawaban Kamu Masih Salah";
            keterangan[13].innerHTML = `Seharusnya <br> \\[ \\frac{7x+78}{(x+9)(x-9)}\\]`
            keterangan[12].className = keterangan[10].className.replace('hilang1', '');
            keterangan[13].className = keterangan[11].className.replace('hilang1', '');
            ketgmbr[6].src = "gambar/salah.png";
            letketgambr[6].className = letketgambr[5].className.replace('hilang1', '');


        }
    } else if (kondisi2 == 5) {
        keterangan[12].className += " hilang1";
        letketgambr[6].className += " hilang1";
        btn2.className += ' hilang1';
        kondisi2 += 1;
        ksmpln1.className = ksmpln1.className.replace('hilang1', '');
    }



    MathJax.typeset();
})



window.onload = function () {
    // MathJax.typeset();
    for (let i = 0; i < input2.length; i++) {
        input2[i].value = "";
    }
    for (let i = 0; i < input3.length; i++) {
        input3[i].value = "";
    }

    for (let i = 0; i < input4.length; i++) {
        input4[i].value = "";
    }

    for (let i = 0; i < input5.length; i++) {
        input5[i].value = "";
    }

    for (let i = 0; i < input6.length; i++) {
        input6[i].value = "";
    }

    for (let i = 0; i < input7.length; i++) {
        input7[i].value = "";
    }

    for (let i = 0; i < input8.length; i++) {
        input8[i].value = "";
    }

}