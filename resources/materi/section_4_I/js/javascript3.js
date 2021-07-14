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
// let bgpembahasan = document.querySelector('.pembahasantnya2');
// let ketenya2 = document.querySelector('.kete1');
// let ketgambar2 = document.querySelector('.ggmbr');
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
let lkh3 = document.querySelector('.lkh3');
let lkh4 = document.querySelector('.lkh4');



cek_cb.addEventListener('click', function () {
    let sarat = 0;

    if (kondisinya == 0) {
        if (tmpt_jwb[0].innerText == "24x2") {
            sarat += 1;
        }
        if (tmpt_jwb[1].innerText == "4x") {
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
        if (tmpt_jwb[2].innerText == "24") {
            sarat += 1;
        }
        if (tmpt_jwb[3].innerText == "4") {
            sarat += 1;
        }
        if (tmpt_jwb[4].innerText == "x2") {
            sarat += 1;
        }
        if (tmpt_jwb[5].innerText == "x") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 4) {
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
            tmpt_jwb[4].className = tmpt_jwb[4].className.replace('black', '');
            tmpt_jwb[5].className = tmpt_jwb[5].className.replace('black', '');

            cek_cb.innerText = "Langkah Selanjutnya";
            kondisinya += 1;

        } else {
            kete[2].innerText = " Jawaban Salah";
            kete[2].className = kete[2].className.replace("hilang1", "");
            kete[3].className = kete[3].className.replace("hilang1", "");

            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[1].src = 'gambar/salah.png';
            ket_gambr[1].className = ket_gambr[0].className.replace("hilang1", "");
            tmpt_jwb[2].className = tmpt_jwb[2].className.replace('black', '');
            tmpt_jwb[3].className = tmpt_jwb[3].className.replace('black', '');
            tmpt_jwb[4].className = tmpt_jwb[4].className.replace('black', '');
            tmpt_jwb[5].className = tmpt_jwb[5].className.replace('black', '');
        }
    } else if (kondisinya == 3) {
        ket_gambr[1].className += ' hilang1';
        cek_cb.innerText = "Cek Jawaban";
        kete[2].className += ' hilang1';
        kondisinya += 1;
        lkh3.className = lkh3.className.replace('hilang1', '');
    } else if (kondisinya == 4) {
        if (tmpt_jwb[6].innerText == "6") {
            sarat += 1;
        }
        if (tmpt_jwb[7].innerText == "x") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 2) {
            kete[4].innerText = " Jawaban Benar";
            kete[4].className = kete[4].className.replace("hilang1", "");
            if (kete[5].className.indexOf('hilang1') == -1) {
                kete[5].className += ' hilang1';
            }
            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[2].src = 'gambar/benar.png';
            ket_gambr[2].className = ket_gambr[2].className.replace("hilang1", "");
            tmpt_jwb[6].className = tmpt_jwb[2].className.replace('black', '');
            tmpt_jwb[7].className = tmpt_jwb[3].className.replace('black', '');

            cek_cb.innerText = "Langkah Selanjutnya";
            kondisinya += 1;

        } else {
            kete[4].innerText = " Jawaban Salah";
            kete[4].className = kete[4].className.replace("hilang1", "");
            kete[5].className = kete[5].className.replace("hilang1", "");

            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[2].src = 'gambar/salah.png';
            ket_gambr[2].className = ket_gambr[2].className.replace("hilang1", "");
            tmpt_jwb[6].className = tmpt_jwb[6].className.replace('black', '');
            tmpt_jwb[7].className = tmpt_jwb[7].className.replace('black', '');
        }
    } else if (kondisinya == 5) {
        ket_gambr[2].className += ' hilang1';
        cek_cb.innerText = "Cek Jawaban";
        kete[4].className += ' hilang1';
        kondisinya += 1;
        lkh4.className = lkh4.className.replace('hilang1', '');
    } else if (kondisinya == 6) {
        if (tmpt_jwb[8].innerText == "6x") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 1) {
            kete[6].innerText = " Jawaban Benar";
            kete[6].className = kete[6].className.replace("hilang1", "");
            if (kete[7].className.indexOf('hilang1') == -1) {
                kete[7].className += ' hilang1';
            }
            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[3].src = 'gambar/benar.png';
            ket_gambr[3].className = ket_gambr[3].className.replace("hilang1", "");
            tmpt_jwb[8].className = tmpt_jwb[8].className.replace('black', '');

            cek_cb.innerText = "Kesimpulan";
            kondisinya += 1;

        } else {
            kete[6].innerText = " Jawaban Salah";
            kete[6].className = kete[6].className.replace("hilang1", "");
            kete[7].className = kete[7].className.replace("hilang1", "");

            if (bg_tmbl.className.indexOf('hilang1') == -1) {
                bg_tmbl.className += ' hilang1';
            }
            ket_gambr[3].src = 'gambar/salah.png';
            ket_gambr[3].className = ket_gambr[3].className.replace("hilang1", "");
            tmpt_jwb[8].className = tmpt_jwb[8].className.replace('black', '');
        }
    } else if (kondisinya == 7) {
        ket_gambr[3].className += ' hilang1';
        cek_cb.innerText = "Cek Jawaban";
        kete[6].className += ' hilang1';
        kete[8].className = kete[8].className.replace('hilang1', '');
        kondisinya += 1;
        cek_cb.className += ' hilang1';
    }
});


let ck_cb2 = document.querySelector('.cek2');
let lkh = document.querySelectorAll('.lkk');
let kete1 = document.querySelectorAll('.kete1');
let ket_gambr1 = document.querySelectorAll('.ggmbr1');
let jwbs = document.querySelectorAll('.jjwwbb');
let garis1 = document.querySelector('.petunjuk1');
let garis2 = document.querySelector('.petunjuk2');
let garis11 = document.querySelector('.petunjuk11');
let garis111 = document.querySelector('.petunjuk111');
let gasris222 = document.querySelector('.petunjuk222');
let hasilkali = document.querySelector('.wehh');
let hasilkali1 = document.querySelector('.hskl');
let kurang1 = document.querySelector('.kurang');
let kurang2 = document.querySelector('.kurang1');
let hasilkurang = document.querySelector('.laho');
let akhir = document.querySelector('.akhir');
let kondisi2 = 0;

ck_cb2.addEventListener('click', function () {
    if (kondisi2 == 0) {
        kondisi2 += 1;
        lkh[0].className = lkh[0].className.replace('hilang1', '');
        ck_cb2.innerText = "Cek Jawaban";
    } else if (kondisi2 == 1) {
        sarat = 0;
        if (tmpt_jwb2[0].innerText == "2x") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 1) {
            kete1[0].innerText = " Jawaban Benar";
            kete1[0].className = kete1[0].className.replace("hilang1", "");
            if (kete1[1].className.indexOf('hilang1') == -1) {
                kete1[1].className += ' hilang1';
            }
            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[0].src = 'gambar/benar.png';
            ket_gambr1[0].className = ket_gambr1[0].className.replace("hilang1", "");
            tmpt_jwb2[0].className = tmpt_jwb2[0].className.replace('black', '');
            ck_cb2.innerText = "Langkah Selanjutnya";
            jwbs[0].className = jwbs[0].className.replace('hilang1', '');
            kondisi2 += 1;

        } else {
            kete1[0].innerText = " Jawaban Salah";
            kete1[0].className = kete1[0].className.replace("hilang1", "");
            kete1[1].className = kete1[1].className.replace("hilang1", "");

            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[0].src = 'gambar/salah.png';
            ket_gambr1[0].className = ket_gambr1[0].className.replace("hilang1", "");
            tmpt_jwb2[0].className = tmpt_jwb2[0].className.replace('black', '');
        }
    } else if (kondisi2 == 2) {
        ket_gambr1[0].className += ' hilang1';
        ck_cb2.innerText = "Cek Jawaban";
        kete1[0].className += ' hilang1';
        kondisi2 += 1;
        lkh[1].className = lkh[1].className.replace('hilang1', '');
        garis1.className = garis1.className.replace('hilang1', '');
        garis11.className = garis11.className.replace('hilang1', '');
    } else if (kondisi2 == 3) {
        sarat = 0;
        if (tmpt_jwb2[1].innerText == "2x2+4x" || tmpt_jwb2[1].innerText == "4x+2x2") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 1) {
            kete1[2].innerText = " Jawaban Benar";
            kete1[2].className = kete1[2].className.replace("hilang1", "");
            if (kete1[3].className.indexOf('hilang1') == -1) {
                kete1[3].className += ' hilang1';
            }
            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[1].src = 'gambar/benar.png';
            ket_gambr1[1].className = ket_gambr1[1].className.replace("hilang1", "");
            tmpt_jwb2[1].className = tmpt_jwb2[1].className.replace('black', '');
            ck_cb2.innerText = "Langkah Selanjutnya";

            garis111.className = garis111.className.replace('hilang1', '');
            hasilkali.className = hasilkali.className.replace('hilang1', '');

            kondisi2 += 1;

        } else {
            kete1[2].innerText = " Jawaban Salah";
            kete1[2].className = kete1[2].className.replace("hilang1", "");
            kete1[3].className = kete1[3].className.replace("hilang1", "");

            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[1].src = 'gambar/salah.png';
            ket_gambr1[1].className = ket_gambr1[1].className.replace("hilang1", "");
            tmpt_jwb2[1].className = tmpt_jwb2[1].className.replace('black', '');
        }
    } else if (kondisi2 == 4) {
        ket_gambr1[1].className += ' hilang1';
        ck_cb2.innerText = "Cek Jawaban";
        kete1[2].className += ' hilang1';
        kondisi2 += 1;
        lkh[2].className = lkh[2].className.replace('hilang1', '');
        garis1.className = garis1.className.replace('hilang1', '');
        garis11.className = garis11.className.replace('hilang1', '');
        kurang1.className = kurang1.className.replace('hilang1', '');
    } else if (kondisi2 == 5) {
        sarat = 0;
        if (tmpt_jwb2[2].innerText == "8x+16" || tmpt_jwb2[2].innerText == "16+8x") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 1) {
            kete1[4].innerText = " Jawaban Benar";
            kete1[4].className = kete1[4].className.replace("hilang1", "");
            if (kete1[5].className.indexOf('hilang1') == -1) {
                kete1[5].className += ' hilang1';
            }
            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[2].src = 'gambar/benar.png';
            ket_gambr1[2].className = ket_gambr1[2].className.replace("hilang1", "");
            tmpt_jwb2[2].className = tmpt_jwb2[2].className.replace('black', '');
            ck_cb2.innerText = "Langkah Selanjutnya";
            hasilkurang.className = hasilkurang.className.replace('hilang1', '');


            kondisi2 += 1;

        } else {
            kete1[4].innerText = " Jawaban Salah";
            kete1[4].className = kete1[4].className.replace("hilang1", "");
            kete1[5].className = kete1[5].className.replace("hilang1", "");

            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[2].src = 'gambar/salah.png';
            ket_gambr1[2].className = ket_gambr1[2].className.replace("hilang1", "");
            tmpt_jwb2[2].className = tmpt_jwb2[2].className.replace('black', '');
        }
    } else if (kondisi2 == 6) {
        ket_gambr1[2].className += ' hilang1';
        ck_cb2.innerText = "Cek Jawaban";
        kete1[3].className += ' hilang1';
        kondisi2 += 1;
        lkh[3].className = lkh[3].className.replace('hilang1', '');
    } else if (kondisi2 == 7) {
        sarat = 0;
        if (tmpt_jwb2[3].innerText == "8") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 1) {
            kete1[6].innerText = " Jawaban Benar";
            kete1[6].className = kete1[6].className.replace("hilang1", "");
            if (kete1[7].className.indexOf('hilang1') == -1) {
                kete1[7].className += ' hilang1';
            }
            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[3].src = 'gambar/benar.png';
            ket_gambr1[3].className = ket_gambr1[3].className.replace("hilang1", "");
            tmpt_jwb2[3].className = tmpt_jwb2[3].className.replace('black', '');
            ck_cb2.innerText = "Langkah Selanjutnya";
            hasilkurang.className = hasilkurang.className.replace('hilang1', '');
            jwbs[1].className = jwbs[1].className.replace('hilang1', '');


            kondisi2 += 1;

        } else {
            kete1[6].innerText = " Jawaban Salah";
            kete1[6].className = kete1[6].className.replace("hilang1", "");
            kete1[7].className = kete1[7].className.replace("hilang1", "");

            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[3].src = 'gambar/salah.png';
            ket_gambr1[3].className = ket_gambr1[3].className.replace("hilang1", "");
            tmpt_jwb2[3].className = tmpt_jwb2[3].className.replace('black', '');
        }
    } else if (kondisi2 == 8) {
        ket_gambr1[3].className += ' hilang1';
        ck_cb2.innerText = "Cek Jawaban";
        kete1[4].className += ' hilang1';
        kondisi2 += 1;
        lkh[4].className = lkh[4].className.replace('hilang1', '');
        garis2.className = garis2.className.replace('hilang1', '');
    } else if (kondisi2 == 9) {
        sarat = 0;
        if (tmpt_jwb2[4].innerText == "8x+16" || tmpt_jwb2[4].innerText == "16+8x") {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 1) {
            kete1[8].innerText = " Jawaban Benar";
            kete1[8].className = kete1[8].className.replace("hilang1", "");
            if (kete1[9].className.indexOf('hilang1') == -1) {
                kete1[9].className += ' hilang1';
            }
            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[4].src = 'gambar/benar.png';
            ket_gambr1[4].className = ket_gambr1[4].className.replace("hilang1", "");
            tmpt_jwb2[4].className = tmpt_jwb2[4].className.replace('black', '');
            ck_cb2.innerText = "Langkah Selanjutnya";
            hasilkurang.className = hasilkurang.className.replace('hilang1', '');
            gasris222.className = gasris222.className.replace('hilang1', '');
            hasilkali1.className = hasilkali1.className.replace('hilang1', '');

            kondisi2 += 1;

        } else {
            kete1[8].innerText = " Jawaban Salah";
            kete1[8].className = kete1[8].className.replace("hilang1", "");
            kete1[9].className = kete1[9].className.replace("hilang1", "");

            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[4].src = 'gambar/salah.png';
            ket_gambr1[4].className = ket_gambr1[4].className.replace("hilang1", "");
            tmpt_jwb2[4].className = tmpt_jwb2[4].className.replace('black', '');
        }
    } else if (kondisi2 == 10) {
        ket_gambr1[4].className += ' hilang1';
        ck_cb2.innerText = "Cek Jawaban";
        kete1[5].className += ' hilang1';
        kondisi2 += 1;
        lkh[5].className = lkh[5].className.replace('hilang1', '');
        kurang2.className = kurang2.className.replace('hilang1', '');
    } else if (kondisi2 == 11) {
        sarat = 0;
        if (tmpt_jwb2[5].innerText == '0') {
            sarat += 1;
        }
        console.log(sarat);

        if (sarat == 1) {
            kete1[10].innerText = " Jawaban Benar";
            kete1[10].className = kete1[8].className.replace("hilang1", "");
            if (kete1[11].className.indexOf('hilang1') == -1) {
                kete1[11].className += ' hilang1';
            }
            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[5].src = 'gambar/benar.png';
            ket_gambr1[5].className = ket_gambr1[5].className.replace("hilang1", "");
            tmpt_jwb2[5].className = tmpt_jwb2[5].className.replace('black', '');
            ck_cb2.innerText = "Langkah Selanjutnya";
            akhir.className = akhir.className.replace('hilang1', '');

            kondisi2 += 1;

        } else {
            kete1[10].innerText = " Jawaban Salah";
            kete1[10].className = kete1[10].className.replace("hilang1", "");
            kete1[11].className = kete1[11].className.replace("hilang1", "");

            if (bg_tmbl2.className.indexOf('hilang1') == -1) {
                bg_tmbl2.className += ' hilang1';
            }
            ket_gambr1[5].src = 'gambar/salah.png';
            ket_gambr1[5].className = ket_gambr1[5].className.replace("hilang1", "");
            tmpt_jwb2[5].className = tmpt_jwb2[5].className.replace('black', '');
        }
    } else if (kondisi2 == 12) {
        ket_gambr1[5].className += ' hilang1';
        ck_cb2.className += ' hilang1';
        kete1[6].className += ' hilang1';
        kondisi2 += 1;
        lkh[6].className = lkh[6].className.replace('hilang1', '');
    }
})


// mencoba 2
let tmpt_jwb2 = document.querySelectorAll('.jwb_new1');
let bg_tmbl2 = document.querySelector('.tombolnihlagi');
let tmbls2 = document.querySelectorAll('.tmbl2');

let kontrol2 = 99;
let kondisinya2 = 0;


for (let i = 0; i < tmpt_jwb2.length; i++) {
    tmpt_jwb2[i].addEventListener('click', function () {

        if (kondisinya2 == 0) {
            if (bg_tmbl2.className.indexOf('hilang1') != -1) {
                bg_tmbl2.className = bg_tmbl2.className.replace('hilang1', '');
            }
        }
        tmpt_jwb2[i].classList.toggle('black');


        for (let j = 0; j < tmpt_jwb2.length; j++) {
            if (j != i) {
                if (tmpt_jwb2[j].className.indexOf('black') != -1) {
                    tmpt_jwb2[j].className = tmpt_jwb2[j].className.replace('black', '');
                }
            }
        }

        kontrol2 = i;
        console.log(kontrol2);

    })
}

for (let i = 0; i < tmbls2.length; i++) {
    tmbls2[i].addEventListener('click', function () {

        input_jawaban = tmpt_jwb2[kontrol2].innerText;
        console.log(i);

        if (input_jawaban == '. . .') {
            if ((i != 13) && (i != 14) && (i != 7) && (i != 3)) {
                tmpt_jwb2[kontrol2].innerText = '';
                let bgnya = document.createElement('span');
                let text = document.createTextNode(tmbls2[i].innerText);
                bgnya.appendChild(text);
                tmpt_jwb2[kontrol2].appendChild(bgnya);
                // tmpt_jwb.innerText = tmbls[i].innerText;
            }
            if (i == 7) {
                tmpt_jwb2[kontrol2].innerText = '';
            } else if (i == 13) {

                if (input_jawaban == '. . .') {
                    tmpt_jwb2[kontrol2].innerText = '';
                }
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('x');

                bgnya1.appendChild(text1);
                tmpt_jwb2[kontrol2].appendChild(bgnya1);



                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb2[kontrol2].appendChild(bgnya);

            } else if (i == 14) {
                if (input_jawaban == 'Tekan Saya') {
                    tmpt_jwb2[kontrol2].innerText = '';
                }
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('y');


                bgnya1.appendChild(text1);
                tmpt_jwb2[kontrol2].appendChild(bgnya1);


                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb2[kontrol2].appendChild(bgnya);

            }

        } else {
            if (i == 7) {
                tmpt_jwb2[kontrol2].innerText = '';
            } else if (i == 13) {
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('x');

                bgnya1.appendChild(text1);
                tmpt_jwb2[kontrol2].appendChild(bgnya1);



                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb2[kontrol2].appendChild(bgnya);

            } else if (i == 14) {
                let bgnya = document.createElement('span');
                let bgnya1 = document.createElement('span');
                let pangakat = document.createElement('sup');
                let text = document.createTextNode('2');
                let text1 = document.createTextNode('y');


                bgnya1.appendChild(text1);
                tmpt_jwb2[kontrol2].appendChild(bgnya1);


                pangakat.appendChild(text);
                bgnya.appendChild(pangakat);
                tmpt_jwb2[kontrol2].appendChild(bgnya);

            } else if (i == 3) {
                let hapus = document.querySelectorAll('.jwbnya_nih span');
                tmpt_jwb2[kontrol2].removeChild(hapus[hapus.length - 1]);


            } else {
                let bgnya = document.createElement('span');
                let text = document.createTextNode(tmbls2[i].innerText);
                bgnya.appendChild(text);
                tmpt_jwb2[kontrol2].appendChild(bgnya);
            }

        }

        MathJax.typeset();
    });
}