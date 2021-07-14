// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {

        isinya[i].classList.toggle('hilang');
    })
}


// sudah baca
let sudah_baca = document.querySelector('.sudah_baca');
let interaktifnya = document.querySelector('.lala');


sudah_baca.addEventListener('click', function () {
    sudah_baca.className += ' hilang';
    interaktifnya.className = interaktifnya.className.replace('hilang', '');
    interaktifnya.src = interaktifnya.src;
})
