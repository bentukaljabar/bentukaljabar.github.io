

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


let cek_cb = document.querySelector('.cek');
let kete = document.querySelectorAll('.kete');
let ket_gambr = document.querySelectorAll('.ggmbr');
let pembhasan = document.querySelectorAll('.pembahasantnya1');
let lkh2 = document.querySelector('.lkh2');



cek_cb.addEventListener('click', function () {
    let sarat = 0;

    if (kondisinya == 0) {
        if (tmpt_jwb[0].innerText == "4x") {
            sarat += 1;
        }
        if (tmpt_jwb[1].innerText == "9y-6y2" || tmpt_jwb[1].innerText == "-6y2+6y") {
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
            if (pembhasan[0].className.indexOf('hilang1') == -1) {
                pembhasan[0].className += ' hilang1';
            }
            ket_gambr[0].src = 'gambar/benar.png';
            ket_gambr[0].className = ket_gambr[0].className.replace("hilang1", "");
            tmpt_jwb[0].className = tmpt_jwb[0].className.replace('black', '');
            tmpt_jwb[1].className = tmpt_jwb[1].className.replace('black', '');

            tmpt_jwb[0].className = tmpt_jwb[0].className.replace('jwb_new', '');
            tmpt_jwb[1].className = tmpt_jwb[1].className.replace('jwb_new', '');

        } else {
            kete[0].innerText = " Jawaban Salah";
            kete[0].className = kete[0].className.replace("hilang1", "");
            kete[1].className = kete[1].className.replace("hilang1", "");
            pembhasan[0].className = pembhasan[0].className.replace("hilang1", "");

            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[0].src = 'gambar/salah.png';
            ket_gambr[0].className = ket_gambr[0].className.replace("hilang1", "");
            tmpt_jwb[0].className = tmpt_jwb[0].className.replace('black', '');
            tmpt_jwb[1].className = tmpt_jwb[1].className.replace('black', '');
        }
    }
});


// pertanyaan 2
// coba2
let tmpt_jwb1 = document.querySelectorAll('.jwb_new1');
let bg_tmbl1 = document.querySelector('.aaa');
let tmbls1 = document.querySelectorAll('.aa');

var kontrol1 = 80;
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
                let hapus = document.querySelectorAll('.jwb_new1 span');
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

let cek_cb1 = document.querySelector('.cek1');

cek_cb1.addEventListener('click', function () {
    let sarat = 0;

    if (kondisinya1 == 0) {
        if (tmpt_jwb1[0].innerText == "2x+3y" || tmpt_jwb1[0].innerText == "3y+2x") {
            sarat += 1;
        }
        if (tmpt_jwb1[1].innerText == "3x") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 2) {
            kete[1].innerText = " Jawaban Benar";
            kete[1].className = kete[1].className.replace("hilang1", "");
            if (bg_tmbl1.className.indexOf('hilang1') == -1) {
                bg_tmbl1.className += ' hilang1';
            }
            if (pembhasan[1].className.indexOf('hilang1') == -1) {
                pembhasan[1].className += ' hilang1';
            }
            ket_gambr[1].src = 'gambar/benar.png';
            ket_gambr[1].className = ket_gambr[1].className.replace("hilang1", "");
            tmpt_jwb1[0].className = tmpt_jwb1[0].className.replace('black', '');
            tmpt_jwb1[1].className = tmpt_jwb1[1].className.replace('black', '');

            tmpt_jwb1[0].className = tmpt_jwb1[0].className.replace('jwb_new', '');
            tmpt_jwb1[1].className = tmpt_jwb1[1].className.replace('jwb_new', '');

        } else {
            kete[1].innerText = " Jawaban Salah";
            kete[1].className = kete[1].className.replace("hilang1", "");
            pembhasan[1].className = pembhasan[1].className.replace("hilang1", "");

            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[1].src = 'gambar/salah.png';
            ket_gambr[1].className = ket_gambr[0].className.replace("hilang1", "");
            tmpt_jwb1[0].className = tmpt_jwb1[0].className.replace('black', '');
            tmpt_jwb1[1].className = tmpt_jwb1[1].className.replace('black', '');
        }
    }
});







// saat halaman dimuat
window.onload = function () {


    // MathJax.typeset();
}