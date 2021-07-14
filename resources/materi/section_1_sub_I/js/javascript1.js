let kondisi = 0;
let tmbl_pensil = document.querySelector('.next_pensil');
let repnya = document.querySelectorAll('.rep');
let tulisanya = document.querySelector('.next_pensil p');


tmbl_pensil.addEventListener('click', function () {
    if (kondisi == 0) {
        repnya[0].className = repnya[0].className.replace('hilang', '');
        kondisi += 1;
        tulisanya.innerHTML = 'Banyak pensil untuk 3 segi enam ?';
    } else if (kondisi == 1) {
        repnya[1].className = repnya[1].className.replace('hilang', '');
        kondisi += 1;
        tulisanya.innerHTML = 'Kesimpulan';
    } else if (kondisi == 2) {
        repnya[2].className = repnya[2].className.replace('hilang', '');
        repnya[3].className = repnya[3].className.replace('hilang', '');
        repnya[4].className = repnya[4].className.replace('hilang', '');
        repnya[5].className = repnya[5].className.replace('hilang', '');
        repnya[6].className = repnya[6].className.replace('hilang', '');
        repnya[7].className = repnya[7].className.replace('hilang', '');
        kondisi += 1;
        tulisanya.innerHTML = 'Apa Itu Bentuk Aljabar ?';
    } else if (kondisi == 3) {
        kondisi += 1;
        tulisanya.innerHTML = 'Jadi berapa pensil yang diperlukan untuk membuat 8 segi enam ?';
        repnya[8].className = repnya[8].className.replace('hilang', '');
        repnya[9].className = repnya[9].className.replace('hilang', '');
        repnya[10].className = repnya[10].className.replace('hilang', '');
        repnya[11].className = repnya[11].className.replace('hilang', '');
    } else if (kondisi == 4) {
        repnya[12].className = repnya[12].className.replace('hilang', '');
        repnya[13].className = repnya[13].className.replace('hilang', '');
        repnya[14].className = repnya[14].className.replace('hilang', '');
        repnya[15].className = repnya[15].className.replace('hilang', '');
        repnya[16].className = repnya[16].className.replace('hilang', '');
        tmbl_pensil.className += ' hilang';

    }

MathJax.typeset();
})