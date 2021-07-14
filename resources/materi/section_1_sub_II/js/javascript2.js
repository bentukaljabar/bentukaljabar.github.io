// contoh soal

let kenya = document.querySelectorAll('.ke');
let keisinya = document.querySelectorAll('.langkahnya');

for (let i = 0; i < kenya.length; i++) {
    kenya[i].addEventListener('click', function () {
        kenya[i].classList.toggle('ke_aktif');
        keisinya[i].classList.toggle('hilang');

        for (let j = 0; j < kenya.length; j++) {
            if (i != j) {
                kenya[j].classList.toggle('ke_aktif');
                keisinya[j].classList.toggle('hilang');
            }
        }
    })
}

// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {

        isinya[i].classList.toggle('hilang');
    })
}

window.onload = function () {
    let interaktif = document.querySelector('.interaktif');
    interaktif.src = interaktif.src;
}