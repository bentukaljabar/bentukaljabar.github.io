const btn_warna = document.querySelector('.warna')
const bg_warna = document.querySelector('.warna_pilih')
const pilih_warna = document.querySelectorAll('.warnanya')
const html = document.querySelector('html')
const navigasi = document.querySelectorAll('.nihhh')
const navigasi_sub =document.querySelectorAll('.sub-bagian');
let bg_navigasi = document.getElementById("nav");
let konten = document.getElementById("konten");
let navi = document.querySelector(".icon");

// load awal halaman
if(localStorage.getItem("color") != null){
    html.dataset.colorMode = localStorage.getItem("color");
}
bg_tutup.classList.toggle('tutup');


// warna
for(let i=0; i<pilih_warna.length; i++){
    pilih_warna[i].addEventListener('click', function(){
        if(html.dataset.colorMode != pilih_warna[i].attributes.name.nodeValue){
            html.dataset.colorMode = pilih_warna[i].attributes.name.nodeValue;
            localStorage.setItem("color",pilih_warna[i].attributes.name.nodeValue)
        }
    })
}

btn_warna.addEventListener('click', function(){
    bg_warna.classList.toggle('hilang');
    console.log(bg_warna)
})

// navigasi
for(let i=0; i<navigasi.length-1; i++){
    navigasi[i].addEventListener('click', function(){
        console.log('ok')
        if(navigasi_sub[i].className.indexOf('hilang') == -1){
            navigasi_sub[i].classList.toggle('hilang');
        }
        else{
            navigasi_sub[i].classList.toggle('hilang');
        }
    })
}

// menu navigasi
navi.addEventListener('click', function () {
    console.log("ok")
    if (bg_navigasi.className.indexOf('navigasi-hilang') == -1) {
        bg_navigasi.classList.toggle("navigasi-hilang");
        konten.className = konten.className.replace("konten", "konten-penuh");
    } else {
        bg_navigasi.classList.toggle("navigasi-hilang");
        konten.className = konten.className.replace("konten-penuh", "konten");
    }
})
