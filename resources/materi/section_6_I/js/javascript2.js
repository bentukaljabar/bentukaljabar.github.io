

//Mari mengamati 1
let kenya = document.querySelectorAll('.ke');
let langkahnya = document.querySelectorAll('.langkahnya');

for (let i = 0; i < kenya.length; i++) {
    kenya[i].addEventListener('click', function () {
        if (kenya[i].className.indexOf('ke_aktif') == -1) {
            kenya[i].className += ' ke_aktif';

            for (let j = 0; j < kenya.length; j++) {
                if (j != i) {
                    if (kenya[j].className.indexOf('ke_aktif') != -1) {
                        kenya[j].className = kenya[j].className.replace('ke_aktif', '');
                    }
                }
            }
        } else {}
        if (langkahnya[i].className.indexOf('hilang') != -1) {
            langkahnya[i].className = langkahnya[i].className.replace('hilang', '');

            for (let j = 0; j < langkahnya.length; j++) {
                if (j != i) {
                    if (langkahnya[j].className.indexOf('hilang') == -1) {
                        langkahnya[j].className += ' hilang';
                    }
                }
            }
        } else {}
    });
}


// tombol cb1
let tmbl1 = document.querySelector('.btn1');
let lkhh1 = document.querySelector('.lkhh1');
let lkhh2 = document.querySelector('.lkhh2');
let lkhh3 = document.querySelector('.lkhh3');
kondisi1 = 0;

tmbl1.addEventListener('click', function () {
    if (kondisi1 == 0) {
        kondisi1 += 1;
        lkhh1.className = lkhh1.className.replace('hilang', '');
        tmbl1.innerText = "Langkah ke-2";
    } else if (kondisi1 == 1) {
        kondisi1 += 1;
        lkhh2.className = lkhh2.className.replace('hilang', '');
        tmbl1.innerText = "Kesimpulan";
    } else if (kondisi1 == 2) {
        kondisi1 += 1;
        lkhh3.className = lkhh3.className.replace('hilang', '');
        tmbl1.className += ' hilang1';
    }
})

// tombol cb2
let tmbl2 = document.querySelector('.btn2');
let lkkh1 = document.querySelector('.lkkh1');
let lkkh2 = document.querySelector('.lkkh2');
let lkkh3 = document.querySelector('.lkkh3');
let lkkh4 = document.querySelector('.lkkh4');
let lkkh5 = document.querySelector('.lkkh5');
kondisi2 = 0;

tmbl2.addEventListener('click', function () {
    if (kondisi2 == 0) {
        kondisi2 += 1;
        lkkh1.className = lkkh1.className.replace('hilang', '');
        tmbl2.innerText = "Langkah ke-2";
    } else if (kondisi2 == 1) {
        kondisi2 += 1;
        lkkh2.className = lkkh2.className.replace('hilang', '');
        tmbl2.innerText = "Langkah ke-3";
    } else if (kondisi2 == 2) {
        kondisi2 += 1;
        lkkh3.className = lkkh3.className.replace('hilang', '');
        tmbl2.innerText = "Langkah ke-4";
    } else if (kondisi2 == 3) {
        kondisi2 += 1;
        lkkh4.className = lkkh4.className.replace('hilang', '');
        tmbl2.innerText = "Kesimpulan";
    } else if (kondisi2 == 4) {
        kondisi2 += 1;
        lkkh5.className = lkkh5.className.replace('hilang', '');
        tmbl2.className += ' hilang1';
    }
})

// tombol cb3
let tmbl3 = document.querySelector('.btn3');
let llkkh1 = document.querySelector('.llkkh1');
let llkkh2 = document.querySelector('.llkkh2');
let llkkh3 = document.querySelector('.llkkh3');
let llkkh4 = document.querySelector('.llkkh4');
let llkkh5 = document.querySelector('.llkkh5');
kondisi3 = 0;

tmbl3.addEventListener('click', function () {
    if (kondisi3 == 0) {
        kondisi3 += 1;
        llkkh1.className = llkkh1.className.replace('hilang', '');
        tmbl3.innerText = "Langkah ke-2";
    } else if (kondisi3 == 1) {
        kondisi3 += 1;
        llkkh2.className = llkkh2.className.replace('hilang', '');
        tmbl3.innerText = "Langkah ke-3";
    } else if (kondisi3 == 2) {
        kondisi3 += 1;
        llkkh3.className = llkkh3.className.replace('hilang', '');
        tmbl3.innerText = "Langkah ke-4";
    } else if (kondisi3 == 3) {
        kondisi3 += 1;
        llkkh4.className = llkkh4.className.replace('hilang', '');
        tmbl3.innerText = "Kesimpulan";
    } else if (kondisi3 == 4) {
        kondisi3 += 1;
        llkkh5.className = llkkh5.className.replace('hilang', '');
        tmbl3.className += ' hilang1';
    }
})