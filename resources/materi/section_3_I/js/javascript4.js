
// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {

        isinya[i].classList.toggle('hilang');
    })
}

//Contoh Soal
//Contoh Soal
// let kenya = document.querySelectorAll('.ke');
// let langkahnya = document.querySelectorAll('.langkahnya');
// let interaktif = document.querySelectorAll('.interaktif');

// for (let j = 0; j < kenya.length; j++) {
//     kenya[j].addEventListener('click', function () {
//         if (kenya[j].className.indexOf('ke_aktif') == -1) {
//             kenya[j].className += ' ke_aktif';
//             langkahnya[j].className = langkahnya[j].className.replace('hilang', '');

//             for (let i = 0; i < kenya.length; i++) {
//                 if (i != j) {
//                     if (kenya[i].className.indexOf('ke_aktif') != -1) {
//                         kenya[i].className = kenya[i].className.replace('ke_aktif', '')
//                     }
//                     if (langkahnya[i].className.indexOf('hilang') == -1) {
//                         langkahnya[i].className += ' hilang';
//                     }

//                 }

//             }

//         } else {}

//     });
// }























// saat halaman di load
window.onload = function () {
    // let interaktif = document.querySelectorAll('.interaktif');
    // interaktif[0].scr = interaktif[0].scr;
    // interaktif[1].scr = interaktif[1].scr
}