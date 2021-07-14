
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


// mencoba 1
let tmpt_jwb = document.querySelectorAll('.jwb_new');
let bg_tmbl = document.querySelector('.tombolnih');
let tmbls = document.querySelectorAll('.tmbl');

let kontrol = 99;
let kondisinya = 0;


for (let i = 0; i < tmpt_jwb.length; i++) {
    tmpt_jwb[i].addEventListener('click', function () {

        if (kondisinya == 0 || kondisinya == 2 || kondisinya == 4 || kondisinya == 6) {
            if (bg_tmbl.className.indexOf('hilang1') != -1) {
                bg_tmbl.className = bg_tmbl.className.replace('hilang1', '');
            }
        }
        tmpt_jwb[i].classList.toggle('black');


        for (let j = 0; j < tmpt_jwb.length; j++) {
            if (j != i) {
                if (tmpt_jwb[j].className.indexOf('black') != -1) {
                    tmpt_jwb[j].className = tmpt_jwb[j].className.replace('black', '');
                }
            }
        }

        kontrol = i;
        console.log(kontrol);

    })
}



for (let i = 0; i < tmbls.length; i++) {
    tmbls[i].addEventListener('click', function () {

        input_jawaban = tmpt_jwb[kontrol].innerText;
        console.log(i);

        if (input_jawaban == '. . .') {
            if ((i != 13) && (i != 14) && (i != 7) && (i != 3)) {
                tmpt_jwb[kontrol].innerText = '';
                let bgnya = document.createElement('span');
                let text = document.createTextNode(tmbls[i].innerText);
                bgnya.appendChild(text);
                tmpt_jwb[kontrol].appendChild(bgnya);
                // tmpt_jwb.innerText = tmbls[i].innerText;
            }
            if (i == 7) {
                tmpt_jwb[kontrol].innerText = '';
            } else if (i == 13) {

                if (input_jawaban == '. . .') {
                    tmpt_jwb[kontrol].innerText = '';
                }
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('x');

                bgnya1.appendChild(text1);
                tmpt_jwb[kontrol].appendChild(bgnya1);



                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb[kontrol].appendChild(bgnya);

            } else if (i == 14) {
                if (input_jawaban == 'Tekan Saya') {
                    tmpt_jwb[kontrol].innerText = '';
                }
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('y');


                bgnya1.appendChild(text1);
                tmpt_jwb[kontrol].appendChild(bgnya1);


                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb[kontrol].appendChild(bgnya);

            }

        } else {
            if (i == 7) {
                tmpt_jwb[kontrol].innerText = '';
            } else if (i == 13) {
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('x');

                bgnya1.appendChild(text1);
                tmpt_jwb[kontrol].appendChild(bgnya1);



                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb[kontrol].appendChild(bgnya);

            } else if (i == 14) {
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('y');


                bgnya1.appendChild(text1);
                tmpt_jwb[kontrol].appendChild(bgnya1);


                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb[kontrol].appendChild(bgnya);

            } else if (i == 3) {
                let hapus = document.querySelectorAll('.jwbnya_nih span');
                tmpt_jwb[kontrol].removeChild(hapus[hapus.length - 1]);


            } else {
                let bgnya = document.createElement('span');
                let text = document.createTextNode(tmbls[i].innerText);
                bgnya.appendChild(text);
                tmpt_jwb[kontrol].appendChild(bgnya);
            }

        }

        MathJax.typeset();
    });
}


let cek_cb = document.querySelector('.cek_cb_jmblh');
let kete = document.querySelectorAll('.kete');
let ket_gambr = document.querySelectorAll('.ggmbr');
let lkh2 = document.querySelector('.lkh2');



cek_cb.addEventListener('click', function () {
    let sarat = 0;

    if (kondisinya == 0) {
        if (tmpt_jwb[0].innerText == "12x2") {
            sarat += 1;
        }
        if (tmpt_jwb[1].innerText == "15y") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 2) {
            kete[0].innerText = " Jawaban Benar";
            kete[0].className = kete[0].className.replace("hilang1", "");
            if (kete[1].className.indexOf('hilang1') == -1) {
                kete[1].className += ' hilang1';
            }
            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[0].src = 'gambar/benar.png';
            ket_gambr[0].className = ket_gambr[0].className.replace("hilang1", "");
            tmpt_jwb[0].className = tmpt_jwb[0].className.replace('black', '');
            tmpt_jwb[1].className = tmpt_jwb[1].className.replace('black', '');

            tmpt_jwb[0].className = tmpt_jwb[0].className.replace('jwb_new', '');
            tmpt_jwb[1].className = tmpt_jwb[1].className.replace('jwb_new', '');
            cek_cb.innerText = "Langkah Selanjutnya";
            kondisinya += 1;

        } else {
            kete[0].innerText = " Jawaban Salah";
            kete[0].className = kete[0].className.replace("hilang1", "");
            kete[1].className = kete[1].className.replace("hilang1", "");

            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[0].src = 'gambar/salah.png';
            ket_gambr[0].className = ket_gambr[0].className.replace("hilang1", "");
            tmpt_jwb[0].className = tmpt_jwb[0].className.replace('black', '');
            tmpt_jwb[1].className = tmpt_jwb[1].className.replace('black', '');
        }
    } else if (kondisinya == 1) {
        ket_gambr[0].className += ' hilang1';
        cek_cb.innerText = "Cek Jawaban";
        kete[0].className += ' hilang1';
        kondisinya += 1;
        lkh2.className = lkh2.className.replace('hilang1', '');
    } else if (kondisinya == 2) {
        if (tmpt_jwb[2].innerText == "4x2") {
            sarat += 1;
        }
        if (tmpt_jwb[3].innerText == "5y") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 2) {
            kete[2].innerText = " Jawaban Benar";
            kete[2].className = kete[2].className.replace("hilang1", "");
            if (kete[3].className.indexOf('hilang1') == -1) {
                kete[3].className += ' hilang1';
            }
            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[1].src = 'gambar/benar.png';
            ket_gambr[1].className = ket_gambr[1].className.replace("hilang1", "");
            tmpt_jwb[2].className = tmpt_jwb[2].className.replace('black', '');
            tmpt_jwb[3].className = tmpt_jwb[3].className.replace('black', '');

            tmpt_jwb[2].className = tmpt_jwb[2].className.replace('jwb_new', '');
            tmpt_jwb[3].className = tmpt_jwb[3].className.replace('jwb_new', '');
            cek_cb.className += " hilang1";
            kondisinya += 1;

        } else {
            kete[2].innerText = " Jawaban Salah";
            kete[2].className = kete[2].className.replace("hilang1", "");
            kete[3].className = kete[3].className.replace("hilang1", "");

            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[1].src = 'gambar/salah.png';
            ket_gambr[1].className = ket_gambr[1].className.replace("hilang1", "");
            tmpt_jwb[2].className = tmpt_jwb[2].className.replace('black', '');
            tmpt_jwb[3].className = tmpt_jwb[3].className.replace('black', '');
        }
    }
});


// coba2
let tmpt_jwb1 = document.querySelectorAll('.waw');
let bg_tmbl1 = document.querySelector('.aaa');
let tmbls1 = document.querySelectorAll('.aa');

let kontrol1 = 99;
let kondisinya1 = 0;


for (let i = 0; i < tmpt_jwb1.length; i++) {
    tmpt_jwb1[i].addEventListener('click', function () {

        if (kondisinya1 == 0 || kondisinya1 == 2 || kondisinya1 == 4 || kondisinya1 == 6) {
            if (bg_tmbl1.className.indexOf('hilang1') != -1) {
                bg_tmbl1.className = bg_tmbl1.className.replace('hilang1', '');
            }
        }
        tmpt_jwb1[i].classList.toggle('black');


        for (let j = 0; j < tmpt_jwb1.length; j++) {
            if (j != i) {
                if (tmpt_jwb1[j].className.indexOf('black') != -1) {
                    tmpt_jwb1[j].className = tmpt_jwb1[j].className.replace('black', '');
                }
            }
        }

        kontrol1 = i;
        console.log(kontrol1);

    })
}

for (let i = 0; i < tmbls1.length; i++) {
    tmbls1[i].addEventListener('click', function () {

        input_jawaban = tmpt_jwb1[kontrol1].innerText;
        console.log(i);

        if (input_jawaban == '. . .') {
            if ((i != 13) && (i != 14) && (i != 7) && (i != 3)) {
                tmpt_jwb1[kontrol1].innerText = '';
                let bgnya = document.createElement('span');
                let text = document.createTextNode(tmbls1[i].innerText);
                bgnya.appendChild(text);
                tmpt_jwb1[kontrol1].appendChild(bgnya);
                // tmpt_jwb.innerText = tmbls[i].innerText;
            }
            if (i == 7) {
                tmpt_jwb1[kontrol1].innerText = '';
            } else if (i == 13) {

                if (input_jawaban == '. . .') {
                    tmpt_jwb1[kontrol1].innerText = '';
                }
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('x');

                bgnya1.appendChild(text1);
                tmpt_jwb1[kontrol1].appendChild(bgnya1);



                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb1[kontrol1].appendChild(bgnya);

            } else if (i == 14) {
                if (input_jawaban == 'Tekan Saya') {
                    tmpt_jwb1[kontrol1].innerText = '';
                }
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('y');


                bgnya1.appendChild(text1);
                tmpt_jwb1[kontrol1].appendChild(bgnya1);


                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb1[kontrol1].appendChild(bgnya);

            }

        } else {
            if (i == 7) {
                tmpt_jwb1[kontrol1].innerText = '';
            } else if (i == 13) {
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('x');

                bgnya1.appendChild(text1);
                tmpt_jwb1[kontrol1].appendChild(bgnya1);



                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb1[kontrol1].appendChild(bgnya);

            } else if (i == 14) {
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('y');


                bgnya1.appendChild(text1);
                tmpt_jwb1[kontrol1].appendChild(bgnya1);


                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb1[kontrol1].appendChild(bgnya);

            } else if (i == 3) {
                let hapus = document.querySelectorAll('.jwbnya_nih1 span');
                tmpt_jwb1[kontrol1].removeChild(hapus[hapus.length - 1]);


            } else {
                let bgnya = document.createElement('span');
                let text = document.createTextNode(tmbls1[i].innerText);
                bgnya.appendChild(text);
                tmpt_jwb1[kontrol1].appendChild(bgnya);
            }

        }

        MathJax.typeset();
    });
}


let cek_cb1 = document.querySelector('.btn2');
let lkhh2 = document.querySelector('.lkhh2');
let lkhh3 = document.querySelector('.lkhh3');
let lkhh4 = document.querySelector('.lkhh4');



cek_cb1.addEventListener('click', function () {
    let sarat = 0;

    if (kondisinya1 == 0) {
        if (tmpt_jwb1[0].innerText == "y") {
            sarat += 1;
        }
        if (tmpt_jwb1[1].innerText == "4xy" || tmpt_jwb1[1].innerText == "4yx") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 2) {
            kete[4].innerText = " Jawaban Benar";
            kete[4].className = kete[4].className.replace("hilang1", "");
            if (kete[5].className.indexOf('hilang1') == -1) {
                kete[5].className += ' hilang1';
            }
            if (bg_tmbl1.className.indexOf('hilang1') == -1) {
                bg_tmbl1.className += ' hilang1';
            }
            ket_gambr[2].src = 'gambar/benar.png';
            ket_gambr[2].className = ket_gambr[2].className.replace("hilang1", "");
            tmpt_jwb1[0].className = tmpt_jwb1[0].className.replace('black', '');
            tmpt_jwb1[1].className = tmpt_jwb1[1].className.replace('black', '');

            tmpt_jwb1[0].className = tmpt_jwb[0].className.replace('waw', '');
            tmpt_jwb1[1].className = tmpt_jwb[1].className.replace('waw', '');
            cek_cb1.innerText = "Langkah Selanjutnya";
            kondisinya1 += 1;

        } else {
            kete[4].innerText = " Jawaban Salah";
            kete[4].className = kete[4].className.replace("hilang1", "");
            kete[5].className = kete[5].className.replace("hilang1", "");

            if (bg_tmbl1.className.indexOf('hilang1') == -1) {
                bg_tmbl1.className += ' hilang1';
            }
            ket_gambr[2].src = 'gambar/salah.png';
            ket_gambr[2].className = ket_gambr[2].className.replace("hilang1", "");
            tmpt_jwb1[0].className = tmpt_jwb1[0].className.replace('black', '');
            tmpt_jwb1[1].className = tmpt_jwb1[1].className.replace('black', '');
        }
    } else if (kondisinya1 == 1) {
        ket_gambr[2].className += ' hilang1';
        cek_cb1.innerText = "Cek Jawaban";
        kete[4].className += ' hilang1';
        kondisinya1 += 1;
        lkhh2.className = lkhh3.className.replace('hilang1', '');
        lkhh3.className = lkhh3.className.replace('hilang1', '');
    } else if (kondisinya1 == 2) {
        if (tmpt_jwb1[2].innerText == "6x2y2" || tmpt_jwb1[2].innerText == "6y2x2") {
            sarat += 1;
        }
        if (tmpt_jwb1[3].innerText == "4x2y" || tmpt_jwb1[3].innerText == "4yx2") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 2) {
            kete[6].innerText = " Jawaban Benar";
            kete[6].className = kete[6].className.replace("hilang1", "");
            if (kete[7].className.indexOf('hilang1') == -1) {
                kete[7].className += ' hilang1';
            }
            if (bg_tmbl1.className.indexOf('hilang1') == -1) {
                bg_tmbl1.className += ' hilang1';
            }
            ket_gambr[3].src = 'gambar/benar.png';
            ket_gambr[3].className = ket_gambr[2].className.replace("hilang1", "");
            tmpt_jwb1[2].className = tmpt_jwb1[2].className.replace('black', '');
            tmpt_jwb1[3].className = tmpt_jwb1[3].className.replace('black', '');

            tmpt_jwb1[2].className = tmpt_jwb1[2].className.replace('jwb_new', '');
            tmpt_jwb1[3].className = tmpt_jwb1[3].className.replace('jwb_new', '');
            cek_cb1.innerHTML += " Cek Jawaban";
            kondisinya1 += 1;

        } else {
            kete[6].innerText = " Jawaban Salah";
            kete[6].className = kete[6].className.replace("hilang1", "");
            kete[7].className = kete[7].className.replace("hilang1", "");

            if (bg_tmbl1.className.indexOf('hilang1') == -1) {
                bg_tmbl1.className += ' hilang1';
            }
            ket_gambr[3].src = 'gambar/salah.png';
            ket_gambr[3].className = ket_gambr[3].className.replace("hilang1", "");
            tmpt_jwb1[2].className = tmpt_jwb1[2].className.replace('black', '');
            tmpt_jwb1[3].className = tmpt_jwb1[3].className.replace('black', '');
        }
    } else if (kondisinya1 == 3) {
        ket_gambr[3].className += ' hilang1';
        cek_cb1.innerText = "Cek Jawaban";
        kete[6].className += ' hilang1';
        kondisinya1 += 1;
        lkhh4.className = lkhh4.className.replace('hilang1', '');
    } else if (kondisinya1 == 4) {
        if (tmpt_jwb1[4].innerText == "3y") {
            sarat += 1;
        }
        if (tmpt_jwb1[5].innerText == "2") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 2) {
            kete[8].innerText = " Jawaban Benar";
            kete[8].className = kete[8].className.replace("hilang1", "");
            if (kete[9].className.indexOf('hilang1') == -1) {
                kete[9].className += ' hilang1';
            }
            if (bg_tmbl1.className.indexOf('hilang1') == -1) {
                bg_tmbl1.className += ' hilang1';
            }
            ket_gambr[4].src = 'gambar/benar.png';
            ket_gambr[4].className = ket_gambr[2].className.replace("hilang1", "");
            tmpt_jwb1[4].className = tmpt_jwb1[4].className.replace('black', '');
            tmpt_jwb1[5].className = tmpt_jwb1[5].className.replace('black', '');

            tmpt_jwb1[4].className = tmpt_jwb1[4].className.replace('jwb_new', '');
            tmpt_jwb1[5].className = tmpt_jwb1[5].className.replace('jwb_new', '');
            cek_cb1.className += " hilang1";
            kondisinya1 += 1;

        } else {
            kete[8].innerText = " Jawaban Salah";
            kete[8].className = kete[8].className.replace("hilang1", "");
            kete[9].className = kete[9].className.replace("hilang1", "");

            if (bg_tmbl1.className.indexOf('hilang1') == -1) {
                bg_tmbl1.className += ' hilang1';
            }
            ket_gambr[4].src = 'gambar/salah.png';
            ket_gambr[4].className = ket_gambr[3].className.replace("hilang1", "");
            tmpt_jwb1[4].className = tmpt_jwb1[4].className.replace('black', '');
            tmpt_jwb1[5].className = tmpt_jwb1[5].className.replace('black', '');
        }
    }
});



window.onload = function () {
    // MathJax.typeset();


}