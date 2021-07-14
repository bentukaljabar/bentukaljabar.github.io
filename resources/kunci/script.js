window.load = function () {


}

let kmplanId = [];


let kuisnya = document.getElementById('kuis');
let tmp = document.getElementById("kiri");

kuisfix = kuisnya.value;


function readlah() {
    kuisfix = kuisnya.value;
    console.log(kuisfix);
    tmp.innerHTML = "";

    let dat = new XMLHttpRequest();
    dat.onreadystatechange = function () {


        cek = [];
        jwbs = [];
        hasilakhir = 0;
        benarr = 0;
        salahh = 0;

        if (dat.readyState == 4 && dat.status == 200) {
            // tankap apapun responsnya tangkap,lalu diubah ke objeck
            let data = JSON.parse(this.responseText);
            // melihat data 
            // console.log(data);

            // ---------------------------------
            // acak urutan soal
            //random urutan
            // for (let x = 0; x < 100; x++) {
            //     // acak angka dengan batas length.data dan minimum 0
            //     let angka = Math.floor(Math.random() * data.length) + 0;
            //     cek.push(angka);
            // }
            // membuang angka yang sama
            // cek = Array.from(new Set(cek));
            if (kuisfix == "data8.json") {
                cek = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
            } else {
                cek = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
            console.log(cek);
            // ---------------------------------
            // ambil data tertentu

            for (let i = 0; i < cek.length; i++) {
                let nilai = cek[i];

                let soaldata = data[nilai]["soal" + nilai]["soal"];
                let jwb0 = data[nilai]["soal" + nilai]["a"];
                let jwb1 = data[nilai]["soal" + nilai]["b"];
                let jwb2 = data[nilai]["soal" + nilai]["c"];
                let jwb3 = data[nilai]["soal" + nilai]["d"];
                let nih = data[nilai]["soal" + nilai]["nih"];
                let bnr = data[nilai]["soal" + nilai]["benar"];

                let jwb = [jwb0, jwb1, jwb2, jwb3, nih];

                jwbs.push(bnr);

                // ---------------------------------
                // rangkai konten soal;
                let bg_pertanyaan = document.createElement('div');
                bg_pertanyaan.setAttribute('class', 'bg_pertanyaan');
                // if (i != 0) {
                //     bg_pertanyaan.className += " hilang";
                // }

                let no = document.createElement('div');
                no.setAttribute('class', 'no');

                let soal = document.createElement('p');
                let text_soal = document.createTextNode('Soal ke ');

                let span = document.createElement('span');
                let text_span = document.createTextNode(i + 1);

                span.appendChild(text_span);
                soal.appendChild(text_soal);
                soal.appendChild(span);
                no.appendChild(soal);
                bg_pertanyaan.appendChild(no);

                // ---------------------------------

                let inti_pertanyaan = document.createElement('div');
                inti_pertanyaan.setAttribute('class', 'inti_pertanyaan');

                let pertanyaannya = document.createElement('div');
                pertanyaannya.setAttribute('class', 'pertanyaannya');

                let new_p = document.createElement('p');
                let text_p = document.createTextNode(soaldata);

                new_p.appendChild(text_p);
                pertanyaannya.appendChild(new_p);
                inti_pertanyaan.appendChild(pertanyaannya);
                bg_pertanyaan.appendChild(inti_pertanyaan);

                // ---------------------------------

                let batas = document.createElement('div');
                batas.setAttribute('class', 'batas');

                inti_pertanyaan.appendChild(batas);
                bg_pertanyaan.appendChild(inti_pertanyaan);

                // ---------------------------------

                let soall = document.createElement('div');
                soall.setAttribute('class', 'soall');

                for (let ii = 0; ii < 4; ii++) {
                    let bg_pilihan = document.createElement('label');
                    bg_pilihan.setAttribute('class', 'bg_pilihan');

                    let input = document.createElement('input');
                    input.setAttribute('type', 'radio');
                    input.setAttribute('name', 'radio' + i);
                    if (ii == 0) {
                        input.setAttribute('value', 'a');
                    } else if (ii == 1) {
                        input.setAttribute('value', 'b');
                    } else if (ii == 2) {
                        input.setAttribute('value', 'c');
                    } else {
                        input.setAttribute('value', 'd');
                    }

                    let textnya = document.createElement('span');
                    textnya.setAttribute('class', 'textnya');

                    let nav_pilihan = document.createElement('span');
                    nav_pilihan.setAttribute('class', 'nav_pilihan');

                    let new_p1 = document.createElement('p');
                    let text_p1 = document.createTextNode(jwb[ii]);

                    new_p1.appendChild(text_p1);
                    textnya.appendChild(nav_pilihan);
                    textnya.appendChild(new_p1);
                    bg_pilihan.appendChild(input);
                    bg_pilihan.appendChild(textnya);
                    soall.appendChild(bg_pilihan);

                }

                // ---------------------------------

                inti_pertanyaan.appendChild(soall);
                bg_pertanyaan.appendChild(inti_pertanyaan);


                // ---------------------------------


                let div_jawaban = document.createElement('div');
                div_jawaban.setAttribute('class', 'pertanyaannya');


                let new_pp = document.createElement('p');
                let text_pp = document.createTextNode("Jawaban  = " + nih);

                new_pp.appendChild(text_pp);
                div_jawaban.appendChild(new_pp);

                inti_pertanyaan.appendChild(div_jawaban);

                // ---------------------------------

                let clear = document.createElement('div');
                clear.setAttribute('class', 'clear');
                inti_pertanyaan.appendChild(clear);
                bg_pertanyaan.appendChild(inti_pertanyaan);

                // letakkan di 
                const bd = document.getElementById('kiri');
                bd.appendChild(bg_pertanyaan);


            }
            MathJax.typeset();



        }
    }
    dat.open('GET', kuisfix, true);
    dat.send();



}

window.onload = function () {
    kuis = document.getElementById('kuis');
    kuis.value = value = "data1.json";
}