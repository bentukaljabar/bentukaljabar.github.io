// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {

        isinya[i].classList.toggle('hilang');
    })
}




// mari mengamti
let bg_pembahasan = document.querySelector('.bg_pembahasan');
let sudh_baca = document.querySelector('.next_pensil');

sudh_baca.addEventListener('click', function () {
    bg_pembahasan.className = bg_pembahasan.className.replace('hilang1', '');
    sudh_baca.className += ' hilang1';
})

let ditanya = document.querySelector('.ditanya');
let misalkan = document.querySelector('.misalkan');
let jawabanA = document.querySelector('.jawabanA');
let langkh = document.querySelector('.lanhkhh');
let kondisi = 0;

langkh.addEventListener('click', function () {
    if (kondisi == 0) {
        ditanya.className = ditanya.className.replace('hilang1', '');
        langkh.innerText = 'Misalkan';
        kondisi += 1;
    } else if (kondisi == 1) {
        misalkan.className = misalkan.className.replace('hilang1', '');
        langkh.innerText = 'Jawab';
        kondisi += 1;
    } else if (kondisi == 2) {
        jawabanA.className = jawabanA.className.replace('hilang1', '');
        langkh.className += ' hilang1';
        kondisi += 1;
    }
})