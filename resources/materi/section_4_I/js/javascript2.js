// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {

        isinya[i].classList.toggle('hilang');
    })
}

// satu
let btn1 = document.querySelector('.btn1');
let kosong = document.querySelector('.kosong');
let satu = document.querySelectorAll('.satu');
let dua = document.querySelectorAll('.duaa');
let tiga = document.querySelectorAll('.tiga');
let empat = document.querySelector('.empat');
let kondisi = 0;

btn1.addEventListener('click', function () {
    if (kondisi == 0) {
        kosong.className = kosong.className.replace('hilang', '');
        kondisi += 1;
        btn1.innerHTML = "Langkah 1";
    } else if (kondisi == 1) {
        for (let i = 0; i < satu.length; i++) {
            satu[i].className = satu[i].className.replace('hilang', '');
        }
        kondisi += 1;
        btn1.innerHTML = "Langkah 2";
    } else if (kondisi == 2) {
        for (let i = 0; i < dua.length; i++) {
            dua[i].className = dua[i].className.replace('hilang', '');
        }
        kondisi += 1;
        btn1.innerHTML = "Langkah 3";
    } else if (kondisi == 3) {
        for (let i = 0; i < tiga.length; i++) {
            tiga[i].className = tiga[i].className.replace('hilang', '');
        }
        kondisi += 1;
        btn1.innerHTML = "Kesimpulan";
    } else if (kondisi == 4) {

        empat.className = empat.className.replace('hilang', '')
        kondisi += 1;
        btn1.className += " hilang1";
    }
})

// 2
let kenya = document.querySelectorAll('.ke');
let langkahnya = document.querySelectorAll('.langkahnya');
let garis_ats1 = document.querySelector('.petunjuk1');
let garis_ats2 = document.querySelector('.petunjuk2');
let garis_bg_atas = document.querySelector('.petunjuk11');
// let jwbnyaa = document.querySelectorAll('.jwb span');
let garis_bwh1 = document.querySelector('.petunjuk111');
let garis_bwh2 = document.querySelector('.petunjuk222');
let kurang1 = document.querySelector('.kurang');
let kurang2 = document.querySelector('.kurang1');
let kalinya = document.querySelectorAll('.bg_bagi span');



for (let i = 0; i < kenya.length; i++) {
    kenya[i].addEventListener('click', function () {

        for (let j = 0; j < kenya.length; j++) {
            if (j <= i) {
                if (kenya[j].className.indexOf('ke_aktif') == -1) {
                    kenya[j].className += ' ke_aktif';
                }

                if (langkahnya[j].className.indexOf('hilang') == -1) {

                } else {
                    langkahnya[j].className = langkahnya[j].className.replace('hilang', '');
                }

            } else {
                if (kenya[j].className.indexOf('ke_aktif') == -1) {
                    kenya[j].className = kenya[j].className.replace('ke_aktif', '');
                }
                if (kenya[j].className.indexOf('ke_aktif') != -1) {
                    kenya[j].className = kenya[j].className.replace('ke_aktif', '');
                }

                if (langkahnya[j].className.indexOf('hilang') == -1) {
                    langkahnya[j].className += ' hilang';
                }
            }
        }


        if (i == 6) {
            document.querySelector('.akhir').className = document.querySelector('.akhir').className.replace('hilang', '');

        }

        if (i != 6) {
            if (document.querySelector('.akhir').className.indexOf('hilang') == -1) {
                document.querySelector('.akhir').className += ' hilang';
            }

        }


        if (i == 0) {
            if (kalinya[0].className.indexOf('hilang') == -1) {
                kalinya[0].className += ' hilang';
            }
            if (garis_ats1.className.indexOf('hilang') == -1) {
                garis_ats1.className += ' hilang';
            }
            if (garis_bg_atas.className.indexOf('hilang') == -1) {
                garis_bg_atas.className += ' hilang';
            }
            if (kalinya[2].className.indexOf('hilang') == -1) {
                kalinya[2].className += ' hilang';
            }
            if (garis_bwh1.className.indexOf('hilang') == -1) {
                garis_bwh1.className += ' hilang';
            }
            if (kurang1.className.indexOf('hilang') == -1) {
                kurang1.className += ' hilang';
            }
            if (kalinya[3].className.indexOf('hilang') == -1) {
                kalinya[3].className += ' hilang';
            }
            if (kalinya[1].className.indexOf('hilang') == -1) {
                kalinya[1].className += ' hilang';
            }
            if (garis_ats2.className.indexOf('hilang') == -1) {
                garis_ats2.className += ' hilang';
            }
            if (garis_bwh2.className.indexOf('hilang') == -1) {
                garis_bwh2.className += ' hilang';
            }
            if (kalinya[4].className.indexOf('hilang') == -1) {
                kalinya[4].className += ' hilang';
            }
            if (kurang2.className.indexOf('hilang') == -1) {
                kurang2.className += ' hilang';
            }
            if (kalinya[5].className.indexOf('hilang') == -1) {
                kalinya[5].className += ' hilang';
            }
        }

        if (i == 1) {
            kalinya[0].className = kalinya[0].className.replace('hilang', '');
            if (garis_ats1.className.indexOf('hilang') == -1) {
                garis_ats1.className += ' hilang';
            }
            if (garis_bg_atas.className.indexOf('hilang') == -1) {
                garis_bg_atas.className += ' hilang';
            }
            if (kalinya[2].className.indexOf('hilang') == -1) {
                kalinya[2].className += ' hilang';
            }
            if (garis_bwh1.className.indexOf('hilang') == -1) {
                garis_bwh1.className += ' hilang';
            }
            if (kurang1.className.indexOf('hilang') == -1) {
                kurang1.className += ' hilang';
            }
            if (kalinya[3].className.indexOf('hilang') == -1) {
                kalinya[3].className += ' hilang';
            }
            if (kalinya[1].className.indexOf('hilang') == -1) {
                kalinya[1].className += ' hilang';
            }
            if (garis_ats2.className.indexOf('hilang') == -1) {
                garis_ats2.className += ' hilang';
            }
            if (garis_bwh2.className.indexOf('hilang') == -1) {
                garis_bwh2.className += ' hilang';
            }
            if (kalinya[4].className.indexOf('hilang') == -1) {
                kalinya[4].className += ' hilang';
            }
            if (kurang2.className.indexOf('hilang') == -1) {
                kurang2.className += ' hilang';
            }
            if (kalinya[5].className.indexOf('hilang') == -1) {
                kalinya[5].className += ' hilang';
            }
        }
        if (i == 2) {
            kalinya[0].className = kalinya[0].className.replace('hilang', '');
            garis_ats1.className = garis_ats1.className.replace('hilang', '');
            garis_bg_atas.className = garis_bg_atas.className.replace('hilang', '');
            kalinya[2].className = kalinya[2].className.replace('hilang', '');
            garis_bwh1.className = garis_bwh1.className.replace('hilang', '');
            if (kurang1.className.indexOf('hilang') == -1) {
                kurang1.className += ' hilang';
            }
            if (kalinya[3].className.indexOf('hilang') == -1) {
                kalinya[3].className += ' hilang';
            }
            if (kalinya[1].className.indexOf('hilang') == -1) {
                kalinya[1].className += ' hilang';
            }
            if (garis_ats2.className.indexOf('hilang') == -1) {
                garis_ats2.className += ' hilang';
            }
            if (garis_bwh2.className.indexOf('hilang') == -1) {
                garis_bwh2.className += ' hilang';
            }
            if (kalinya[4].className.indexOf('hilang') == -1) {
                kalinya[4].className += ' hilang';
            }
            if (kurang2.className.indexOf('hilang') == -1) {
                kurang2.className += ' hilang';
            }
            if (kalinya[5].className.indexOf('hilang') == -1) {
                kalinya[5].className += ' hilang';
            }

        }

        if (i == 3) {
            kalinya[0].className = kalinya[0].className.replace('hilang', '');
            garis_ats1.className = garis_ats1.className.replace('hilang', '');
            garis_bg_atas.className = garis_bg_atas.className.replace('hilang', '');
            kalinya[2].className = kalinya[2].className.replace('hilang', '');
            garis_bwh1.className = garis_bwh1.className.replace('hilang', '');
            kurang1.className = kurang1.className.replace('hilang', '');
            kalinya[3].className = kalinya[3].className.replace('hilang', '');
            if (kalinya[1].className.indexOf('hilang') == -1) {
                kalinya[1].className += ' hilang';
            }
            if (garis_ats2.className.indexOf('hilang') == -1) {
                garis_ats2.className += ' hilang';
            }
            if (garis_bwh2.className.indexOf('hilang') == -1) {
                garis_bwh2.className += ' hilang';
            }
            if (kalinya[4].className.indexOf('hilang') == -1) {
                kalinya[4].className += ' hilang';
            }
            if (kurang2.className.indexOf('hilang') == -1) {
                kurang2.className += ' hilang';
            }
            if (kalinya[5].className.indexOf('hilang') == -1) {
                kalinya[5].className += ' hilang';
            }
        }

        if (i == 4) {
            kalinya[0].className = kalinya[0].className.replace('hilang', '');
            garis_ats1.className = garis_ats1.className.replace('hilang', '');
            garis_bg_atas.className = garis_bg_atas.className.replace('hilang', '');
            kalinya[2].className = kalinya[2].className.replace('hilang', '');
            garis_bwh1.className = garis_bwh1.className.replace('hilang', '');
            kurang1.className = kurang1.className.replace('hilang', '');
            kalinya[3].className = kalinya[3].className.replace('hilang', '');
            kalinya[1].className = kalinya[0].className.replace('hilang', '');
            if (garis_ats2.className.indexOf('hilang') == -1) {
                garis_ats2.className += ' hilang';
            }
            if (garis_bwh2.className.indexOf('hilang') == -1) {
                garis_bwh2.className += ' hilang';
            }
            if (kalinya[4].className.indexOf('hilang') == -1) {
                kalinya[4].className += ' hilang';
            }
            if (kurang2.className.indexOf('hilang') == -1) {
                kurang2.className += ' hilang';
            }
            if (kalinya[5].className.indexOf('hilang') == -1) {
                kalinya[5].className += ' hilang';
            }
        }

        if (i == 5) {
            kalinya[0].className = kalinya[0].className.replace('hilang', '');
            garis_ats1.className = garis_ats1.className.replace('hilang', '');
            garis_bg_atas.className = garis_bg_atas.className.replace('hilang', '');
            kalinya[2].className = kalinya[2].className.replace('hilang', '');
            garis_bwh1.className = garis_bwh1.className.replace('hilang', '');
            kurang1.className = kurang1.className.replace('hilang', '');
            kalinya[3].className = kalinya[3].className.replace('hilang', '');
            kalinya[1].className = kalinya[0].className.replace('hilang', '');
            garis_ats2.className = garis_ats2.className.replace('hilang', '');
            garis_bwh2.className = garis_bwh2.className.replace('hilang', '');
            kalinya[4].className = kalinya[4].className.replace('hilang', '');
            if (kurang2.className.indexOf('hilang') == -1) {
                kurang2.className += ' hilang';
            }
            if (kalinya[5].className.indexOf('hilang') == -1) {
                kalinya[5].className += ' hilang';
            }
        }

        if (i == 6) {
            kalinya[0].className = kalinya[0].className.replace('hilang', '');
            garis_ats1.className = garis_ats1.className.replace('hilang', '');
            garis_bg_atas.className = garis_bg_atas.className.replace('hilang', '');
            kalinya[2].className = kalinya[2].className.replace('hilang', '');
            garis_bwh1.className = garis_bwh1.className.replace('hilang', '');
            kurang1.className = kurang1.className.replace('hilang', '');
            kalinya[3].className = kalinya[3].className.replace('hilang', '');
            kalinya[1].className = kalinya[0].className.replace('hilang', '');
            garis_ats2.className = garis_ats2.className.replace('hilang', '');
            garis_bwh2.className = garis_bwh2.className.replace('hilang', '');
            kalinya[4].className = kalinya[4].className.replace('hilang', '');
            kurang2.className = kurang2.className.replace('hilang', '');
            kalinya[5].className = kalinya[5].className.replace('hilang', '');
        }

    });
}