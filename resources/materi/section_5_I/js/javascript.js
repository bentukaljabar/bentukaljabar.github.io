

let oeey = document.querySelectorAll('.oeey');
let isiinya = document.querySelectorAll('.isiinya');

for (let i = 0; i < oeey.length; i++) {
    oeey[i].addEventListener('click', function () {
        isiinya[i].classList.toggle('hilang1');
    })
}