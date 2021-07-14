let stng = document.querySelector('.icon1');
let wrna = document.querySelector('.warna');
let pilwarna= document.querySelectorAll('.warnanya');
let linknya =document.getElementsByTagName("link");
let head= document.querySelector("head");
let title =document.querySelector("title");
let body= document.querySelector("body");

// body.classList.toggle("hilang");

let cek = function(){
    let stylenyaa =localStorage.getItem("style");
    if(localStorage.getItem("style") != null){
        linknya[0].remove(linknya[0]);
        linknya[0].remove(linknya[0]);

        let link1= document.createElement("link");
        link1.setAttribute('rel', 'stylesheet');
        link1.setAttribute('href', 'css/style'+stylenyaa+'.css');

        let link2= document.createElement("link");
        link2.setAttribute('rel', 'stylesheet');
        link2.setAttribute('href', 'css/content'+stylenyaa+'.css');

        // head.appendChild(link1);
        // head.appendChild(link2);

        head.insertBefore(link1, title);
        head.insertBefore(link2, title);

        setTimeout(function(){ 
            body.classList.toggle("hilang");
        }, 1005);
    }
};
cek();
// warna
stng.addEventListener('click', function(){
    wrna.classList.toggle('hilang');
})

for(let i=0; i<pilwarna.length; i++){
    pilwarna[i].addEventListener('click', function(){
        // linknya[0].remove(linknya[0]);
        // linknya[0].remove(linknya[0]);

        let link1= document.createElement("link");
        link1.setAttribute('rel', 'stylesheet');
        link1.setAttribute('href', 'css/style'+i+'.css');

        let link2= document.createElement("link");
        link2.setAttribute('rel', 'stylesheet');
        link2.setAttribute('href', 'css/content'+i+'.css');

        // head.appendChild(link1);
        // head.appendChild(link2);

        head.insertBefore(link1, title);
        head.insertBefore(link2, title);

        setTimeout(function(){ 
            linknya[0].remove(linknya[0]);
            linknya[0].remove(linknya[0]);
        }, 1010);

        localStorage.setItem("style",i);
    })

}

// saat tombol icon diklik lakukan 
let nav = document.querySelector(".icon");
nav.addEventListener('click', function () {
    let navigasi = document.getElementById("nav");
    let konten = document.getElementById("konten");

    if (navigasi.className.indexOf('navigasi-hilang') == -1) {
        navigasi.className += " navigasi-hilang";
        konten.className = konten.className.replace("konten", "konten-penuh");
    } else {
        navigasi.className = navigasi.className.replace("navigasi-hilang", "");
        konten.className = konten.className.replace("konten-penuh", "konten");
    }
})

// subbab sembunyikan dan tampilkan
let materi = document.querySelectorAll('.navigasi li .nihhh');
let submateri = document.querySelectorAll(' .sub-bagian');
for (let i = 0; i < materi.length; i++) {
    materi[i].addEventListener('click', function () {
        submateri[i].classList.toggle('hilang');
    });
}

// klikme
// let klikme = document.querySelector('.sudah_baca');
// let atasnya = document.querySelector('.awall');
// klikme.addEventListener('click', function () {
//     atasnya.classList.toggle('hilang');

// });