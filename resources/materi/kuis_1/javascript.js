// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {
        if (isinya[i].className.indexOf('hilang') == -1) {
            isinya[i].className += ' hilang';
        } else {
            isinya[i].className = isinya[i].className.replace('hilang', '');
        }
    })
}



let cekdulu = document.querySelectorAll('ul a');

for (let i = 0; i < cekdulu.length; i++) {
    cekdulu[i].addEventListener('click', function (e) {
        e.preventDefault(e);
    });
}

window.addEventListener('kyup', function (e) {
    if (e.keyCode == 8) {
        e.preventDefault();
    }
});


let home_klik = document.querySelector('.home a');
home_klik.addEventListener('click', function (e) {
    e.preventDefault(e);
    let tanya = confirm("Yakin Ingin Meninggalkan Halaman");
    if (tanya) {
        window.location = home_klik.href;
    } else {

    }
})