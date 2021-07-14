//Contoh Soal
let kenya = document.querySelectorAll('.ke');
let langkahnya = document.querySelectorAll('.langkahnya');

for (let j = 0; j < kenya.length; j++) {
    kenya[j].addEventListener('click', function () {
        if (kenya[j].className.indexOf('ke_aktif') == -1) {
            kenya[j].className += ' ke_aktif';
            langkahnya[j].className = langkahnya[j].className.replace('hilang', '');

            for (let i = 0; i < kenya.length; i++) {
                if (i != j) {
                    if (kenya[i].className.indexOf('ke_aktif') != -1) {
                        kenya[i].className = kenya[i].className.replace('ke_aktif', '')
                    }
                    if (langkahnya[i].className.indexOf('hilang') == -1) {
                        langkahnya[i].className += ' hilang';
                    }
                }

            }

        } else {}

    });
}

// contoh 1
let cnt1 = document.querySelectorAll('.cnt1');
let btn1 = document.querySelector('.btn1');
let next1 = 0;


btn1.addEventListener('click', function () {
    if (next1 == 0) {
        cnt1[0].className = cnt1[0].className.replace('hilang', '');
        btn1.innerText = "Langkah ke-2"
        next1 += 1;
    } else if (next1 == 1) {
        cnt1[1].className = cnt1[1].className.replace('hilang', '');
        btn1.innerText = "Langkah ke-3"
        next1 += 1;
    } else if (next1 == 2) {
        cnt1[2].className = cnt1[2].className.replace('hilang', '');
        btn1.innerText = "Kesimpulan"
        next1 += 1;
    } else if (next1 == 3) {
        cnt1[3].className = cnt1[3].className.replace('hilang', '');
        btn1.className += ' hilang1';
        next1 += 1;
    }

})

// contoh 2
let cnt2 = document.querySelectorAll('.cnt2');
let btn2 = document.querySelector('.btn2');
let next2 = 0;


btn2.addEventListener('click', function () {
    if (next2 == 0) {
        cnt2[0].className = cnt2[0].className.replace('hilang', '');
        btn2.innerText = "Langkah ke-2"
        next2 += 1;
    } else if (next2 == 1) {
        cnt2[1].className = cnt2[1].className.replace('hilang', '');
        btn2.innerText = "Langkah ke-3"
        next2 += 1;
    } else if (next2 == 2) {
        cnt2[2].className = cnt2[2].className.replace('hilang', '');
        btn2.innerText = "Langkah ke-4"
        next2 += 1;
    } else if (next2 == 3) {
        cnt2[3].className = cnt2[3].className.replace('hilang', '');
        btn2.innerText = "Langkah ke-5"
        next2 += 1;
    } else if (next2 == 4) {
        cnt2[4].className = cnt2[4].className.replace('hilang', '');
        btn2.innerText = "Kesimpulan"
        next2 += 1;
    } else if (next2 == 5) {
        cnt2[5].className = cnt2[5].className.replace('hilang', '');
        btn2.className += ' hilang1';
        next2 += 1;
    }

})

// contoh 3
let cnt3 = document.querySelectorAll('.cnt3');
let btn3 = document.querySelector('.btn3');
let next3 = 0;
console.log(next3);


btn3.addEventListener('click', function () {
    if (next3 == 0) {
        cnt3[0].className = cnt3[0].className.replace('hilang', '');
        btn3.innerText = "Langkah ke-2"
        next3 += 1;
        console.log(next3);
    } else if (next3 == 1) {
        cnt3[1].className = cnt3[1].className.replace('hilang', '');
        btn3.innerText = "Langkah ke-3"
        next3 += 1;
    } else if (next3 == 2) {
        cnt3[2].className = cnt3[2].className.replace('hilang', '');
        btn3.innerText = "Kesimpulan"
        next3 += 1;
    } else if (next3 == 3) {
        cnt3[3].className = cnt3[3].className.replace('hilang', '');
        btn3.className += ' hilang1';
        next3 += 1;
    }

})