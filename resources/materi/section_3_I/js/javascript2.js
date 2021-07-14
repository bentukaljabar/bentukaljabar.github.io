// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {

        isinya[i].classList.toggle('hilang');
    })
}


// ganti soal
let ganti_soal = document.querySelectorAll('.button');
let isinya_soal = document.querySelectorAll('.bgisi');

let cnth_soal0 = ['<p>\\[=5(3y)\\]</p> <p> \\[ = 5 \\times 3 y\\] </p> <p> \\[ = 15y \\] </p> ', '<p>\\[=2(2y)\\]</p> <p> \\[ = 2 \\times 2 y\\] </p> <p> \\[ = 4y \\] </p>', '<p>\\[=7(2x)\\]</p> <p> \\[ = 7 \\times 2x\\] </p> <p> \\[ = 14x \\] </p>', '<p>\\[=-2(6y)\\]</p> <p> \\[ = -2 \\times 6y\\] </p> <p> \\[ = -12y \\] </p>', '<p>\\[=-3(2x)\\]</p> <p> \\[ = -3 \\times 2x\\] </p> <p> \\[ = -6x \\] </p>', '<p>\\[=-3(6x^2)\\]</p> <p> \\[ = -3 \\times 6x^2\\] </p> <p> \\[ = -18x^2 \\] </p>', '<p>\\[=-9(-x^2)\\]</p> <p> \\[ = -9 \\times (-x^2)\\] </p> <p> \\[ = 9x^2 \\] </p>', '<p>\\[=4(x^2)\\]</p> <p> \\[ = 4 \\times x^2\\] </p> <p> \\[ = 4x^2 \\] </p>', '<p>\\[=10(2x^2)\\]</p> <p> \\[ = 10 \\times 2x^2\\] </p> <p> \\[ = 20x^2 \\] </p>', '<p>\\[=6(-x^2)\\]</p> <p> \\[ = 6 \\times (-x^2)\\] </p> <p> \\[ = -6x^2 \\] </p>'];

let cnth_soal1 = ['<p>\\[=3(2x-4)\\]</p> <p> \\[ = (3 \\times 2x) - (3 \\times 4)\\] </p> <p> \\[ = (6x) - (12)\\] </p> <p> \\[ = 6x - 12\\] </p>', '<p>\\[=2(2x-4y)\\]</p> <p> \\[ = (2 \\times 2x) - (2 \\times 4y)\\] </p> <p> \\[ = (4x) - (8y)\\] </p> <p> \\[ = 4x - 8y\\] </p>', '<p>\\[=7(2x^2+4)\\]</p> <p> \\[ = (7 \\times 2x^2) + (7 \\times 4)\\] </p> <p> \\[ = (14x^2) + (28)\\] </p> <p> \\[ = 14x^2 + 28\\] </p>', '<p>\\[=8(3x+4y^2)\\]</p> <p> \\[ = (8 \\times 3x) + (8 \\times 4y^2)\\] </p> <p> \\[ = (24x) + (32y^2)\\] </p> <p> \\[ = 24x + 32y^2\\] </p>', '<p>\\[=3(9-4y)\\]</p> <p> \\[ = (3 \\times 9) - (3 \\times 4y)\\] </p> <p> \\[ = (27) - (12y)\\] </p> <p> \\[ = 27 - 12y\\] </p>'];

let cnth_soal2 = ['<p>\\[=y^2 \\times y^2\\]</p> <p> \\[ = y ^ {2 + 2}\\] </p> <p > \\[ = y ^ 4\\] </p>', '<p>\\[=x^5 \\times x^3\\]</p> <p> \\[ = x ^ {5 + 3}\\] </p> <p > \\[ = x ^ 8\\] </p>', '<p>\\[=x^3 \\times x\\]</p> <p> \\[ = x ^ {3 + 1}\\] </p> <p > \\[ = x ^ 4\\] </p>', '<p>\\[=x \\times x^2\\]</p> <p> \\[ = x ^ {1 + 2}\\] </p> <p > \\[ = x ^ 3\\] </p>', '<p>\\[=y \\times y\\]</p> <p> \\[ = y ^ {1 + 1}\\] </p> <p > \\[ = y ^ 2\\] </p>'];

let cnth_soal3 = ['<p>\\[=(x^3)^3\\]</p> <p> \\[ = x ^ {3 \\times 3}\\] </p> <p > \\[ = x ^ 9\\] </p>', '<p>\\[=(y)^3\\]</p> <p> \\[ = y ^ {1 \\times 3}\\] </p> <p > \\[ = y ^ 3\\] </p>', '<p>\\[=(x^2)^2\\]</p> <p> \\[ = x ^ {2 \\times 2}\\] </p> <p > \\[ = x ^ 4\\] </p>', '<p>\\[=(y^2)^3\\]</p> <p> \\[ = y ^ {2 \\times 3}\\] </p> <p > \\[ = y^6\\] </p>', '<p>\\[=(x^2)^4\\]</p> <p> \\[ = x^ {2 \\times 4}\\] </p> <p > \\[ = x^8\\] </p>'];

let cnth_soal4 = ['<p>\\[=(x \\times y)^2\\]</p> <p> \\[ = x ^ 2 \\times y^2\\] </p>', '<p>\\[=(y \\times x)^4\\]</p> <p> \\[ = y ^ 4 \\times x^4\\] </p>', '<p>\\[=(x \\times y)^3\\]</p> <p> \\[ = x ^ 3 \\times y^3\\] </p>', '<p>\\[=(y^2 \\times x)^4\\]</p> <p> \\[ = y ^ 8 \\times x^4\\] </p>', '<p>\\[=(y^2 \\times x)^4\\]</p> <p> \\[ = y ^ 8 \\times x^4\\] </p>', '<p>\\[=(y^2 \\times x^3)^2\\]</p> <p> \\[ = y ^4 \\times x^6\\] </p>'];

let cnth_soal5 = ['<p>\\[=x^2 \\times 3x^3\\]</p> <p> \\[ = (1 \\times 3) x ^ {2 + 3}\\] </p> <p> \\[ = 3x ^ 5\\] </p>', '<p>\\[=5x^3 \\times 3x^4\\]</p> <p> \\[ = (5 \\times 3) x ^ {3 + 4}\\] </p> <p> \\[ = 15x ^ 7\\] </p>', '<p>\\[=y^2 \\times 5y^4\\]</p> <p> \\[ = (1 \\times 5) y ^ {2 + 4}\\] </p> <p> \\[ = 5x ^ 6\\] </p>', '<p>\\[=7y^2 \\times 5y^3\\]</p> <p> \\[ = (7 \\times 5) y ^ {2 + 3}\\] </p> <p> \\[ = 35x ^ 5\\] </p>'];


let kondisi0, kondisi1, kondisi2, kondisi3, kondisi4, kondisi5 = 100;

for (let i = 0; i < ganti_soal.length; i++) {
    ganti_soal[i].addEventListener('click', function () {

        if (i == 0) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal0.length);
            if (acang_angka != kondisi0) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal0[acang_angka];
                kondisi0 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal0.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal0[acang_angka];
                kondisi0 = acang_angka;
            }

        }

        if (i == 1) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal1.length);
            if (acang_angka != kondisi1) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal1[acang_angka];
                kondisi1 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal1.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal1[acang_angka];
                kondisi1 = acang_angka;
            }
        }

        if (i == 2) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal2.length);
            if (acang_angka != kondisi2) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal2[acang_angka];
                kondisi2 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal2.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal2[acang_angka];
                kondisi2 = acang_angka;
            }
        }

        if (i == 3) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal3.length);
            if (acang_angka != kondisi3) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal3[acang_angka];
                kondisi3 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal3.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal3[acang_angka];
                kondisi3 = acang_angka;
            }
        }

        if (i == 4) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal4.length);
            if (acang_angka != kondisi4) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal4[acang_angka];
                kondisi4 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal4.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal4[acang_angka];
                kondisi4 = acang_angka;
            }
        }

        if (i == 5) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal5.length);
            if (acang_angka != kondisi5) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal5[acang_angka];
                kondisi5 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal5.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal5[acang_angka];
                kondisi5 = acang_angka;
            }
        }


        MathJax.typeset();
    })

}