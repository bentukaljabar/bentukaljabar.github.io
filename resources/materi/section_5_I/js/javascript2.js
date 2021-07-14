
//Mari mengamati 1
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


// tombol cb1
let tmbl1 = document.querySelector('.btn1');
let lkhh1 = document.querySelector('.lkhh1');
let lkhh2 = document.querySelector('.lkhh2');
let lkhh3 = document.querySelector('.lkhh3');
let lkhh4 = document.querySelector('.lkhh4');
kondisi1 = 0;

tmbl1.addEventListener('click', function () {
    if (kondisi1 == 0) {
        kondisi1 += 1;
        lkhh1.className = lkhh1.className.replace('hilang', '');
        tmbl1.innerText = "Langkah ke-2";
    } else if (kondisi1 == 1) {
        kondisi1 += 1;
        lkhh2.className = lkhh2.className.replace('hilang', '');
        tmbl1.innerText = "Langkah ke-3";
    } else if (kondisi1 == 2) {
        kondisi1 += 1;
        lkhh3.className = lkhh3.className.replace('hilang', '');
        tmbl1.innerText = "Kesimpulan";
    } else if (kondisi1 == 3) {
        kondisi1 += 1;
        lkhh4.className = lkhh4.className.replace('hilang', '');
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