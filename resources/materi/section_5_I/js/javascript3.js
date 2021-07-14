// soal1
soal_1 = ["Sederhanakan pecahan bentuk aljabar dari \\[ \\frac{2x}{8y} = . . . ?\\]", "Sederhanakan pecahan bentuk aljabar dari \\[ \\frac{2x^2}{4x} = . . . ?\\]", "Sederhanakan pecahan bentuk aljabar dari \\[ \\frac{8x}{16x^2} = . . . ?\\]", "Sederhanakan pecahan bentuk aljabar dari \\[ \\frac{5x^2y}{7x} = . . . ?\\]", "Sederhanakan pecahan bentuk aljabar dari \\[ \\frac{3x+9x}{6y} = . . . ?\\]", "Sederhanakan pecahan bentuk aljabar dari \\[ \\frac{5y+2y}{4xy} = . . . ?\\]", "Sederhanakan pecahan bentuk aljabar dari \\[ \\frac{2x^2y}{4x+2x} = . . . ?\\]"];

fktr_1 = ["<p>Tentukan faktor-faktornya : </p><br> \\[2x =2 \\times x \\]", "<p>Tentukan faktor-faktornya : </p><br>\\[2x^2 =2 \\times x^2 \\]", "<p>Tentukan faktor-faktornya : </p><br>\\[8x =2^3 \\times x \\]", "<p>Tentukan faktor-faktornya : </p><br>\\[5x^2y =5 \\times x^2 \\times y \\]", "Kita operasikan pembilangnya terlebih dahulu : <br> \\[= \\frac{12x}{6y}\\] ", "Kita operasikan pembilangnya terlebih dahulu : <br> \\[= \\frac{7y}{4xy}\\] ", "Kita operasikan penyebutnya terlebih dahulu : <br> \\[= \\frac{2x^2y}{6x}\\] "];

fktr_11 = ["\\[8y =2^3 \\times y  \\]", "\\[4x =2^2 \\times x \\]", "\\[16x^2 =2^4 \\times x^2 \\]", "\\[7x =7 \\times x \\]", "<p>Tentukan faktor-faktornya : </p>\\[12x =2^2  \\times 3 \\times x\\] <br>\\[6y =2  \\times 3 \\times y\\]", "<p>Tentukan faktor-faktornya : </p>\\[7y =7 \\times y \\] <br>\\[4xy =2^2  \\times x \\times y\\]", "<p>Tentukan faktor-faktornya : </p>\\[2x^2y =2 \\times x^2 \\times y \\] <br>\\[6x =2  \\times 3 \\times x\\]"];
jwb1 = ["2", "2x", "8x", "x", "6", "y", "2x"];

next_1 = ['Lakukan pembagian pada pembilang dan penyebut dengan 2. <br>\\[=\\frac{2x \\div 2}{8y \\div 2}\\]', 'Lakukan pembagian pada pembilang dan penyebut dengan \\[2x\\]. <br>\\[=\\frac{2x^2 \\div 2x}{4x \\div 2x}\\] ', 'Lakukan pembagian pada pembilang dan penyebut dengan \\[8x\\]. <br>\\[=\\frac{8x \\div 8x}{16x^2 \\div 8x}\\] ', 'Lakukan pembagian pada pembilang dan penyebut dengan \\[x\\]. <br>\\[=\\frac{5x^2y \\div x}{7x \\div x}\\] ', 'Lakukan pembagian pada pembilang dan penyebut dengan 6. <br>\\[=\\frac{12x \\div 6}{6y \\div 6}\\] ', 'Lakukan pembagian pada pembilang dan penyebut dengan \\[y\\]. <br>\\[=\\frac{7y \\div y}{4xy \\div y}\\] ', 'Lakukan pembagian pada pembilang dan penyebut dengan \\[2x\\]. <br>\\[=\\frac{2x^2y \\div 2x}{6x \\div 2x}\\] '];

jwb2 = ["x", "x", "1", "5xy", "2x", "7", "xy"];
jwb3 = ["4y", "2", "2x", "7", "y", "4x", "3"];
ksmpln1 = ['Jadi bentuk sederhana dari \\[ \\frac{2x}{8y} \\] adalah \\[\\frac{x}{4y}\\].', 'Jadi bentuk sederhana dari \\[ \\frac{2x^2}{4x} \\] adalah \\[\\frac{x}{2}\\].', 'Jadi bentuk sederhana dari \\[ \\frac{8x}{16x^2} \\] adalah \\[\\frac{1}{2x}\\].', 'Jadi bentuk sederhana dari \\[ \\frac{5x^2y}{7x} \\] adalah \\[\\frac{5xy}{7}\\].', 'Jadi bentuk sederhana dari \\[ \\frac{3x+9x}{6y} \\] adalah \\[\\frac{2x}{y}\\].', 'Jadi bentuk sederhana dari \\[ \\frac{5y+2y}{4xy} \\] adalah \\[\\frac{7}{4x}\\].', 'Jadi bentuk sederhana dari \\[ \\frac{2x^2y}{4x+2x} \\] adalah \\[\\frac{xy}{3}\\].'];



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
let soal1 = document.querySelector('.soal_1');
let faktor1 = document.querySelector('.fktr1');
let faktor11 = document.querySelector('.fktr11');
let input1 = document.querySelector('.kduafktr');
let ketgambar = document.querySelectorAll('.ketgambar');
let nextlah1 = document.querySelector('.nextkntn')
let kete = document.querySelectorAll('.kete');
let acak_angka = Math.floor(Math.random() * soal_1.length);
let la1 = document.querySelectorAll('.la1');
let la2 = document.querySelectorAll('.la2');
let input2 = document.querySelector('.inpt2');
let input3 = document.querySelector('.inpt3');
let ksmpln = document.querySelector('.kempulan');
console.log(acak_angka);
kondisi1 = 0;

window.onload = function () {
    soal1.innerHTML = soal_1[acak_angka];
    faktor1.innerHTML = fktr_1[acak_angka];
    faktor11.innerHTML = fktr_11[acak_angka];
    jwbfix1 = jwb1[acak_angka];
    nextlah1.innerHTML = next_1[acak_angka];
    jwbfix2 = jwb2[acak_angka];
    jwbfix3 = jwb3[acak_angka];
    ksmpln.innerHTML = ksmpln1[acak_angka];

    MathJax.typeset();
    input1.value = "";
    input2.value = "";
    input3.value = "";

}

input1.addEventListener('keyup', function () {
    input1.value = input1.value.toLowerCase();
    input1.value = input1.value.split(' ').join('');
})

input2.addEventListener('keyup', function () {
    input2.value = input2.value.toLowerCase();
    input2.value = input2.value.split(' ').join('')
})

input3.addEventListener('keyup', function () {
    input3.value = input3.value.toLowerCase();
    input3.value = input3.value.split(' ').join('')
})

btn1.addEventListener('click', function () {
    if (kondisi1 == 0) {
        console.log(input1.value);
        console.log(jwbfix1);
        if (input1.value == jwbfix1) {
            ketgambar[0].src = "gambar/benar.png";
            ketgambar[0].className = ketgambar[0].className.replace('hilang1', '');
            kete[0].innerText = " Jawaban Kamu Benar";
            kete[0].className = kete[0].className.replace('hilang1', '');
            input1.className = input1.className.replace('salah', '');
            input1.disabled = true;
            btn1.innerText = "Langkah Selanjutnya";
            kondisi1 += 1;


        } else {
            if (input1.className.indexOf('salah') == -1) {
                input1.className += ' salah';
            }
            ketgambar[0].src = "gambar/salah.png";
            ketgambar[0].className = ketgambar[0].className.replace('hilang1', '');
            input1.value = "";
            kete[0].innerHTML = " Jawaban Kamu Masih Salah <br> Jawaban Benar adalah " + jwbfix1;
            kete[0].className = kete[0].className.replace('hilang1', '');

        }
    } else if (kondisi1 == 1) {
        btn1.innerText = "Cek Jawaban";
        kondisi1 += 1;
        ketgambar[0].className += ' hilang1';
        kete[0].className += ' hilang1';
        la1[0].className = la1[0].className.replace('hilang1', '');
        la2[0].className = la2[0].className.replace('hilang1', '');
        nextlah1.className = nextlah1.className.replace('hilang1', '');
    } else if (kondisi1 == 2) {
        cek = 0;
        if (input2.value == jwbfix2) {
            cek += 1;
        }
        if (input3.value == jwbfix3) {
            cek += 1;
        }

        console.log(cek);

        if (cek == 2) {
            ketgambar[1].src = "gambar/benar.png";
            la1[1].className = la1[1].className.replace('hilang1', '');
            kete[1].innerText = " Jawaban Kamu Benar";
            kete[1].className = kete[0].className.replace('hilang1', '');
            input2.className = input2.className.replace('salah', '');
            input3.className = input3.className.replace('salah', '');
            btn1.innerText = "Kesimpulan";
            input2.disabled = true;
            input3.disabled = true;
            kondisi1 += 1;
        } else {
            if (input2.className.indexOf('salah') == -1) {
                input2.className += ' salah';
            }
            if (input3.className.indexOf('salah') == -1) {
                input3.className += ' salah';
            }
            ketgambar[1].src = "gambar/salah.png";
            la1[1].className = la1[1].className.replace('hilang1', '');
            input2.value = "";
            input3.value = "";
            kete[1].innerHTML = " Jawaban Kamu Masih Salah <br> Jawaban Benar adalah  \\[ \\frac{" + jwbfix2 + "}{" + jwbfix3 + "}\\]";
            kete[1].className = kete[1].className.replace('hilang1', '');
        }
    } else if (kondisi1 == 3) {
        // btn1.className += ' hilang1';
        la1[1].className += ' hilang1';
        kete[1].className += ' hilang1';
        kondisi1 += 1;
        btn1.innerHTML = "Ganti soal";
        ksmpln.className = ksmpln.className.replace('hilang1', '');
    } else if (kondisi1 == 4) {
        kondisi1 = 0;
        btn1.innerText = "Cek Jawaban"
        ksmpln.className += " hilang1";
        la1[0].className += " hilang1";
        la1[1].className += " hilang1";
        la2[0].className += " hilang1";
        nextlah1.className += " hilang1";

        if (acak_angka == 0) {
            acak_angka = acak_angka + 1;
        } else if (acak_angka == soal_1.length - 1) {
            acak_angka = 0;
        } else {
            acak_angka += 1;
        }
        soal1.innerHTML = soal_1[acak_angka];
        faktor1.innerHTML = fktr_1[acak_angka];
        faktor11.innerHTML = fktr_11[acak_angka];
        jwbfix1 = jwb1[acak_angka];
        nextlah1.innerHTML = next_1[acak_angka];
        jwbfix2 = jwb2[acak_angka];
        jwbfix3 = jwb3[acak_angka];
        ksmpln.innerHTML = ksmpln1[acak_angka];


        MathJax.typeset();
        input1.value = "";
        input2.value = "";
        input3.value = "";

        input1.disabled = false;
        input2.disabled = false;
        input3.disabled = false;
    }
    MathJax.typeset();
})