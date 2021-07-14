
// klikme
// let klikme = document.querySelector('.klikme .judul-materi');
// let atasnya = document.querySelector('.atasnya');
// klikme.addEventListener('click', function () {
//     atasnya.classList.toggle('hilang');

// });


// kompulan datanya
// cont 1
let cnt_1 = ['<p>\\[x^4 \\div x^2\\]</p><p>\\[ = x^{(4 - 2)}\\]</p><p>\\[ = x ^ 2\\]</p>', '<p>\\[y^5 \\div y\\]</p><p>\\[ = x^{(5 - 1)}\\]</p><p>\\[ = x ^ 4\\]</p>', '<p>\\[x^3 \\div x^2\\]</p><p>\\[ = x^{(3 - 2)}\\]</p><p>\\[ = x\\]</p>', '<p>\\[x^3 \\div x^3\\]</p><p>\\[ = x^{(3 - 3)}\\]</p><p>\\[ = x^0\\]</p><p>\\[ = 1\\]</p>', '<p>\\[x^7 \\div x^5\\]</p><p>\\[ = x^{(7 - 5)}\\]</p><p>\\[ = x^2\\]</p>', '<p>\\[y^6 \\div y^4\\]</p><p>\\[ =y^{(6 - 4)}\\]</p><p>\\[ = y^2\\]</p>', '<p>\\[x^3 \\div y^3\\]</p><p>\\[ =x^3 \\div y^3\\]</p><p>Tidak bisa dibagi karena variabelnya berbeda.</p>', '<p>\\[x^5 \\div y^3\\]</p><p>\\[ =x^5 \\div y^3\\]</p><p>Tidak bisa dibagi karena variabelnya berbeda.</p>'];

let cnt_2 = ['<p>\\[6y^5 \\div 2y^3\\]</p><p class="jarak_atas"> \\[ = \\frac {6} {2}y ^ {(5 - 3)}\\] </p> <p class="jarak_atas"> \\[ = 3 y ^ 2\\] </p>', '<p class="jarak_atas">\\[10y^5 \\div 5y^3\\]</p><p class="jarak_atas"> \\[ = \\frac {10} {5}y ^ {(5 - 3)}\\] </p> <p class="jarak_atas"> \\[ = 2 y ^ 2\\] </p>', '<p class="jarak_atas">\\[10y^5 \\div 5y^3\\]</p><p class="jarak_atas"> \\[ = \\frac {10} {5}y ^ {(5 - 3)}\\] </p> <p class="jarak_atas"> \\[ = 2 y ^ 2\\] </p>', '<p class="jarak_atas">\\[3y^6 \\div 3y^3\\]</p><p class="jarak_atas"> \\[ = \\frac {3} {3}y ^ {(6 - 3)}\\] </p> <p class="jarak_atas"> \\[ = y ^ 3\\] </p>', '<p class="jarak_atas">\\[6x^2 \\div 2x\\]</p><p class="jarak_atas"> \\[ = \\frac {6} {2}x ^ {(2 - 1)}\\] </p> <p class="jarak_atas"> \\[ = 3x\\] </p>', '<p class="jarak_atas">\\[6x^2 \\div 2x^2\\]</p><p class="jarak_atas">\\[= \\frac {6} {2}x ^ {(2 - 2)}\\] </p> <p class="jarak_atas"> \\[= 3x^0\\]</p><p class="jarak_atas"> \\[= 3\\]</p>'];




// perintahnya
let isi1 = document.querySelector('.isi1');
let btn1 = document.querySelector('.cnt1');
btn1.addEventListener('click', function () {

    let acang_angka = Math.floor(Math.random() * cnt_1.length);
    console.log(acang_angka);
    isi1.innerHTML = cnt_1[acang_angka];

    MathJax.typeset();
})

let isi2 = document.querySelector('.isi2');
let btn2 = document.querySelector('.cnt2');

btn2.addEventListener('click', function () {
    let acang_angka = Math.floor(Math.random() * cnt_2.length);
    console.log(acang_angka);
    isi2.innerHTML = cnt_2[acang_angka];

    MathJax.typeset();
})