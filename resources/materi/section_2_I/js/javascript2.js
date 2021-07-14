
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


// tombol penjumlahan
let tmbl_penjumlahan = document.querySelector('.tmb_pnjumlahan');
let tmbl_pengurangan = document.querySelector('.tmb_pngrangan');
let bg_penjumlahan = document.querySelectorAll('.pjmlh');
let bg_pengurangan = document.querySelectorAll('.pngrn');
let ket_jmlh = document.querySelector('.ket_pnjumlh');
let ket_pngrang = document.querySelector('.ket_pngurangan');
let operasinya = document.querySelector('.operasi1');
let operasinya1 = document.querySelector('.maa');
let jadi = document.querySelectorAll('.aau');
console.log(jadi);
let kondisi1 = 0;
let kondisi2 = 0;

tmbl_penjumlahan.addEventListener('click', function () {
    if (kondisi1 == 0) {
        kondisi1 += 1;
        ket_jmlh.className = ket_jmlh.className.replace('hilang1', '');
        operasinya.className += ' red';
        ket_jmlh.innerText = '* Perhatikan soal, kita keluarkan angkanya dari kurung. Perhatikan operasi (+) atau (-) diluar kurungnya.';
        tmbl_penjumlahan.innerText = 'Langkah Kedua';
        bg_penjumlahan[0].className = bg_penjumlahan[0].className.replace('hilang1', '');
    } else if (kondisi1 == 1) {
        kondisi1 += 1;
        ket_jmlh.innerText = '* Kumpulkan suku-suku sejenisnya, yaitu (\\[6a\\] dengan \\[3a\\]), dan (\\[5b\\] dengan \\[-7b\\]).';
        operasinya.className = operasinya.className.replace('red', '');
        tmbl_penjumlahan.innerText = 'Langkah Ketiga';
        bg_penjumlahan[1].className = bg_penjumlahan[1].className.replace('hilang1', '');
    } else if (kondisi1 == 2) {
        kondisi1 += 1;
        ket_jmlh.innerText = '* Operasikan suku sejenisnya, sehingga menjadi (\\[6a+3a =9a\\]), dan (\\[5b-7b=-2b\\]).';
        tmbl_penjumlahan.innerText = 'Kesimpulan';
        bg_penjumlahan[2].className = bg_penjumlahan[2].className.replace('hilang1', '');
    } else if (kondisi1 == 3) {
        ket_jmlh.className += ' hilang1'
        tmbl_penjumlahan.className += ' hilang1';
        jadi[1].className = jadi[1].className.replace('hilang1', '');
        if (kondisi1 == 3 && kondisi2 == 3) {
            document.querySelector('.lanjutt').className = document.querySelector('.lanjutt').className.replace('hilang1', '');
            document.querySelector('.interaktif').className = document.querySelector('.interaktif').className.replace('hilang1', '');
            document.querySelector('.Perbesarlah').className = document.querySelector('.Perbesarlah').className.replace('hilang1', '');
            document.querySelector('.interaktif').src = document.querySelector('.interaktif').src;
            document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace('hilang1', '');


        }
    }



    MathJax.typeset();
})

tmbl_pengurangan.addEventListener('click', function () {
    if (kondisi2 == 0) {
        kondisi2 += 1;
        ket_pngrang.className = ket_pngrang.className.replace('hilang1', '');
        operasinya1.className += ' red';
        ket_pngrang.innerText = '* Perhatikan soal, kita keluarkan angkanya dari kurung. Perhatikan operasi (+) atau (-) diluar kurungnya. Karena operasi (-) sehingga \\[-(7x-3x^2) = -7x+3x^2\\].';
        tmbl_pengurangan.innerText = 'Langkah Kedua';
        bg_pengurangan[0].className = bg_pengurangan[0].className.replace('hilang1', '');
    } else if (kondisi2 == 1) {
        kondisi2 += 1;
        ket_pngrang.innerText = '* Kumpulkan suku-suku sejenisnya, yaitu (\\[x^2\\] dengan \\[3x^2\\]), suku yang tidak sejenis letakkan dibelakangnya.';
        operasinya1.className = operasinya1.className.replace('red', '');
        tmbl_pengurangan.innerText = 'Langkah Ketiga';
        bg_pengurangan[1].className = bg_pengurangan[1].className.replace('hilang1', '');
    } else if (kondisi2 == 2) {
        kondisi2 += 1;
        ket_pngrang.innerText = '* Operasikan suku sejenisnya, sehingga menjadi (\\[x^2+3x^2 =4x^2\\]).';
        tmbl_pengurangan.innerText = 'Kesimpulan';
        bg_pengurangan[2].className = bg_pengurangan[2].className.replace('hilang1', '');
    } else if (kondisi2 == 3) {
        ket_pngrang.className += ' hilang1'
        tmbl_pengurangan.className += ' hilang1';
        jadi[3].className = jadi[3].className.replace('hilang1', '');
        if (kondisi1 == 3 && kondisi2 == 3) {
            document.querySelector('.lanjutt').className = document.querySelector('.lanjutt').className.replace('hilang1', '');
            document.querySelector('.interaktif').className = document.querySelector('.interaktif').className.replace('hilang1', '');
            document.querySelector('.Perbesarlah').className = document.querySelector('.Perbesarlah').className.replace('hilang1', '');
            document.querySelector('.interaktif').src = document.querySelector('.interaktif').src;
            document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace('hilang1', '');


        }
    }



    MathJax.typeset();
})