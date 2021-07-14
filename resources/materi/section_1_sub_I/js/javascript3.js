// petunjuk
let petunjunya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {

        isinya[i].classList.toggle('hilang');
    })
}

// nav mari mencoba
let kenya = document.querySelectorAll('.ke');
let keisinya = document.querySelectorAll('.langkahnya');

for (let i = 0; i < kenya.length; i++) {
    kenya[i].addEventListener('click', function () {
        kenya[i].classList.toggle('ke_aktif');
        keisinya[i].classList.toggle('hilang');

        for (let j = 0; j < kenya.length; j++) {
            if (i != j) {
                kenya[j].classList.toggle('ke_aktif');
                keisinya[j].classList.toggle('hilang');
            }
        }
    })
}

// tooltip
let popupnya = document.querySelectorAll('.popup');
let tampilpopup = document.querySelectorAll('.sip');
let soalnext = document.querySelectorAll('.cb1_next');
for (let i = 0; i < popupnya.length; i++) {
    popupnya[i].addEventListener('click', function () {
        tampilpopup[i].classList.toggle("show");
        for (let j = 0; j < tampilpopup.length; j++) {

            if (i != j) {
                tampilpopup[j].className = tampilpopup[j].className.replace('show', '');
            }
        }
        setTimeout(function () {
            tampilpopup[i].classList.toggle("show");

        }, 1500);

    });
}

// mari mencoba1
let jawaban_xy = document.querySelectorAll('.xy');
let soalnya = document.querySelectorAll('.coba');
let bgxy = document.querySelectorAll('.bg_inputxy');
let jwbnya1;
let jwbnya2;
let jwbnya3;
let jwbnya0;


for (let i = 0; i < jawaban_xy.length; i++) {

    // function agar saat di enter tidak dijalankan 
    jawaban_xy[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    jawaban_xy[i].addEventListener('keyup', function () {
        jawaban_xy[i].value = jawaban_xy[i].value.toLowerCase();
        jawaban_xy[i].value = jawaban_xy[i].value.split(' ').join('');

        if (i == 0) {

            var validasiAngka = /^[a-z]+$/;
            if (jawaban_xy[0].value.match(validasiAngka) != null) {
                if (jawaban_xy[0].value.length == 0) {
                    jawaban_xy[0].className = jawaban_xy[0].className.replace('benar', '');
                    jawaban_xy[0].className = jawaban_xy[0].className.replace('salah', '');


                }



                if (jawaban_xy[0].value.length != 1 && jawaban_xy[0].value.length != 0) {
                    if (jawaban_xy[0].className.indexOf('salah') == -1) {
                        if (jawaban_xy[0].className.indexOf('benar') == -1) {
                            jawaban_xy[0].className += ' salah';
                        } else {
                            jawaban_xy[0].className = jawaban_xy[0].className.replace('benar', 'salah');
                        }

                    }


                }


                if (jawaban_xy[0].value.length == 1) {
                    if (jawaban_xy[0].className.indexOf('benar') == -1) {
                        if (jawaban_xy[0].className.indexOf('salah') == -1) {
                            jawaban_xy[0].className += ' benar';
                        } else {
                            jawaban_xy[0].className = jawaban_xy[0].className.replace('salah', 'benar');
                        }
                    }

                    setTimeout(function () {
                        let text_lama = soalnya[0].innerText;
                        let text_baru = text_lama + '\\[' + jawaban_xy[0].value + '\\]';
                        soalnya[0].innerText = text_baru;

                        soalnext[0].className = soalnext[0].className.replace('hilang1', '');
                        jwbnya0 = jawaban_xy[0].value;
                        jwbnya1 = 2 + jawaban_xy[0].value;
                        jwbnya2 = 5 + jawaban_xy[0].value;
                        jwbnya3 = 5 + jawaban_xy[0].value;

                        bgxy[0].className += ' hilang1';
                        // jawaban_xy[0].remove();
                        text_lama = soalnya[1].innerText;
                        text_baru = text_lama + ' \\[= 2 \\times ' + jawaban_xy[0].value + '=\\]';
                        soalnya[1].innerText = text_baru;

                        MathJax.typeset();
                    }, 3000);

                }
            } else {
                if (jawaban_xy[0].className.indexOf('salah') == -1) {
                    if (jawaban_xy[0].className.indexOf('benar') == -1) {
                        jawaban_xy[0].className += ' salah';
                    } else {
                        jawaban_xy[0].className = jawaban_xy[0].className.replace('benar', 'salah');
                    }

                }
            }

        }

        if (i == 1) {
            // console.log(jwbnya1);
            if (jwbnya1 == jawaban_xy[1].value) {
                if (jawaban_xy[1].className.indexOf('salah') != -1) {
                    jawaban_xy[1].className = jawaban_xy[1].className.replace('salah', 'benar');
                } else {
                    jawaban_xy[1].className += ' benar';
                }

                setTimeout(function () {
                    soalnya[1].innerText = 'Harga satu ikat kacang panjang adalah 2 kali harga sebungkus santan = \\[ 2 \\times  ' + jawaban_xy[0].value + ' = ' + jwbnya1 + '\\]';
                    soalnext[1].className = soalnext[1].className.replace('hilang1', '');

                    // soalnya[2].innerText = 'Harga dua ikat kacang panjang \\[= 2 \\times 2' + jawaban_xy[0].value + '=\\]'

                    soalnya[2].innerText = 'Harga 1 buah humbut adalah 5 kali harga sebungkus santan \\[= 5 \\times ' + jawaban_xy[0].value + '=\\]';
                    bgxy[1].className += ' hilang1';
                    MathJax.typeset();

                }, 3000);

            } else {
                if (jawaban_xy[1].className.indexOf('salah') == -1) {
                    if (jawaban_xy[1].className.indexOf('benar') == -1) {
                        jawaban_xy[1].className += ' salah';
                    } else {
                        jawaban_xy[1].className = jawaban_xy[1].className.replace('benar', 'salah');
                    }
                }
            }

        }

        // if (i == 2) {
        //     console.log(jwbnya2);
        //     if (jwbnya2 == jawaban_xy[2].value) {
        //         if (jawaban_xy[2].className.indexOf('salah') != -1) {
        //             jawaban_xy[2].className = jawaban_xy[2].className.replace('salah', 'benar');
        //         } else {
        //             jawaban_xy[2].className += ' benar';
        //         }

        //         setTimeout(function () {
        //             soalnya[2].innerText = 'Harga dua ikat kacang panjang \\[ = 2 \\times 2 ' + jawaban_xy[0].value + ' = ' + jwbnya2 + ' \\]';
        //             soalnext[2].className = soalnext[2].className.replace('hilang1', '');

        //             soalnya[3].innerText = 'Harga 1 buah humbut adalah 5 kali harga santan \\[= 5 \\times ' + jawaban_xy[0].value + '=\\]'

        //             bgxy[2].className += ' hilang1';
        //             MathJax.typeset();
        //         }, 3000);


        //     } else {
        //         if (jawaban_xy[2].className.indexOf('salah') == -1) {
        //             if (jawaban_xy[2].className.indexOf('benar') == -1) {
        //                 jawaban_xy[2].className += ' salah';
        //             } else {
        //                 jawaban_xy[2].className = jawaban_xy[2].className.replace('benar', 'salah');
        //             }
        //         }
        //     }

        // }

        if (i == 2) {
            console.log(jwbnya2);
            if (jwbnya2 == jawaban_xy[2].value) {
                if (jawaban_xy[2].className.indexOf('salah') != -1) {
                    jawaban_xy[2].className = jawaban_xy[2].className.replace('salah', 'benar');
                } else {
                    jawaban_xy[2].className += ' benar';
                }
                setTimeout(function () {
                    soalnya[2].innerText = 'Harga 1 buah humbut adalah 5 kali harga sebungkus santan \\[= 5 \\times ' + jawaban_xy[0].value + ' = ' + jwbnya3 + ' \\]';
                    soalnext[2].className = soalnext[3].className.replace('hilang1', '');
                    soalnext[3].className = soalnext[4].className.replace('hilang1', '');
                    // soalnext[5].className = soalnext[5].className.replace('hilang1', '');



                    bgxy[2].className += ' hilang1';
                    MathJax.typeset();
                }, 3000);


            } else {
                if (jawaban_xy[2].className.indexOf('salah') == -1) {
                    if (jawaban_xy[2].className.indexOf('benar') == -1) {
                        jawaban_xy[2].className += ' salah';
                    } else {
                        jawaban_xy[2].className = jawaban_xy[2].className.replace('benar', 'salah');
                    }
                }
            }

        }

        if (i == 3) {
            if (jwbnya0 == jawaban_xy[3].value) {
                if (jawaban_xy[3].className.indexOf('salah') != -1) {
                    jawaban_xy[3].className = jawaban_xy[3].className.replace('salah', 'benar');
                } else {
                    jawaban_xy[3].className += ' benar';
                }

            } else {
                if (jawaban_xy[3].className.indexOf('salah') == -1) {
                    if (jawaban_xy[3].className.indexOf('benar') == -1) {
                        jawaban_xy[3].className += ' salah';
                    } else {
                        jawaban_xy[3].className = jawaban_xy[3].className.replace('benar', 'salah');
                    }
                }
            }

        }
        if (i == 4) {
            if (jwbnya1 == jawaban_xy[4].value) {
                if (jawaban_xy[4].className.indexOf('salah') != -1) {
                    jawaban_xy[4].className = jawaban_xy[4].className.replace('salah', 'benar');
                } else {
                    jawaban_xy[4].className += ' benar';
                }

            } else {
                if (jawaban_xy[4].className.indexOf('salah') == -1) {
                    if (jawaban_xy[4].className.indexOf('benar') == -1) {
                        jawaban_xy[4].className += ' salah';
                    } else {
                        jawaban_xy[4].className = jawaban_xy[4].className.replace('benar', 'salah');
                    }
                }
            }

        }
        if (i == 5) {
            if (jwbnya2 == jawaban_xy[5].value) {
                if (jawaban_xy[5].className.indexOf('salah') != -1) {
                    jawaban_xy[5].className = jawaban_xy[5].className.replace('salah', 'benar');
                } else {
                    jawaban_xy[5].className += ' benar';
                }

            } else {
                if (jawaban_xy[5].className.indexOf('salah') == -1) {
                    if (jawaban_xy[5].className.indexOf('benar') == -1) {
                        jawaban_xy[5].className += ' salah';
                    } else {
                        jawaban_xy[5].className = jawaban_xy[5].className.replace('benar', 'salah');
                    }
                }
            }

        }

        if (jawaban_xy[3].className.indexOf('benar') != -1 && jawaban_xy[4].className.indexOf('benar') != -1 && jawaban_xy[5].className.indexOf('benar') != -1) {
            console.log(soalnya[4]);

            setTimeout(function () {
                bgxy[3].className += ' hilang1';
                bgxy[4].className += ' hilang1';
                bgxy[5].className += ' hilang1';

                soalnya[3].innerText = '';
                soalnya[4].innerText = '';
                soalnya[5].innerText = '';

                soalnya[3].innerText = '\\[' + jawaban_xy[0].value + ' + ' + jwbnya1 + ' + ' + jwbnya3 + ' \\].';

                soalnext[4].innerText = 'Jadi bentuk aljabar dari total harga pembelian Ibu Mega adalah \\[' + jawaban_xy[0].value + ' + ' + jwbnya1 + ' + ' + jwbnya3 + ' \\].';
                soalnext[5].className = soalnext[5].className.replace('hilang1', '');
                soalnext[4].className = soalnext[4].className.replace('hilang1', '');

                MathJax.typeset();
            }, 3000);




        }

    });
}

// ulang1
let ulang1 = document.querySelector('.ulang');
ulang1.addEventListener('click', function () {
    for (let i = 0; i < bgxy.length; i++) {
        bgxy[i].className = bgxy[i].className.replace('hilang1', '');
        jawaban_xy[i].value = '';
        jawaban_xy[i].className = jawaban_xy[i].className.replace('benar', '');
        jawaban_xy[i].className = jawaban_xy[i].className.replace('salah', '');
    }
    for (let j = 0; j < soalnext.length; j++) {

        soalnext[j].className += ' hilang1';

    }
    soalnya[0].innerText = 'Misalkan harga 1 bungkus santan adalah =';
    soalnya[1].innerText = 'Harga satu ikat kacang panjang adalah 2 kali harga sebungkus santan';
    soalnya[4].innerText = '\\[+\\]';
    soalnya[5].innerText = '\\[+\\]';
    soalnya[3].innerText = '';

})


// mari mencoba2
let jawaban_xy1 = document.querySelectorAll('.xy1');
let soalnya1 = document.querySelectorAll('.coba1');
let bgxy1 = document.querySelectorAll('.bg_inputxy1');
let soalnext1 = document.querySelectorAll('.cb2_next');
console.log(soalnya1);
for (let i = 0; i < jawaban_xy1.length; i++) {
    // function agar saat di enter tidak dijalankan 
    jawaban_xy1[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });


    jawaban_xy1[i].addEventListener('keyup', function () {
        jawaban_xy1[i].value = jawaban_xy1[i].value.toLowerCase();
        jawaban_xy1[i].value = jawaban_xy1[i].value.split(' ').join('');

        if (i == 0) {

            var validasiAngka = /^[a-z]+$/;
            if (jawaban_xy1[0].value.match(validasiAngka) != null) {
                if (jawaban_xy1[0].value.length == 0) {
                    jawaban_xy1[0].className = jawaban_xy1[0].className.replace('benar', '');
                    jawaban_xy1[0].className = jawaban_xy1[0].className.replace('salah', '');


                }



                if (jawaban_xy1[0].value.length != 1 && jawaban_xy1[0].value.length != 0) {
                    if (jawaban_xy1[0].className.indexOf('salah') == -1) {
                        if (jawaban_xy1[0].className.indexOf('benar') == -1) {
                            jawaban_xy1[0].className += ' salah';
                        } else {
                            jawaban_xy1[0].className = jawaban_xy1[0].className.replace('benar', 'salah');
                        }

                    }


                }


                if (jawaban_xy1[0].value.length == 1) {
                    if (jawaban_xy1[0].className.indexOf('benar') == -1) {
                        if (jawaban_xy1[0].className.indexOf('salah') == -1) {
                            jawaban_xy1[0].className += ' benar';
                        } else {
                            jawaban_xy1[0].className = jawaban_xy1[0].className.replace('salah', 'benar');
                        }
                    }

                    setTimeout(function () {
                        soalnya1[0].innerText = soalnya1[0].innerText + '\\[' + jawaban_xy1[0].value + '\\]';
                        soalnext1[0].className = soalnext1[0].className.replace('hilang1', '');
                        bgxy1[0].className += ' hilang1';
                        MathJax.typeset();
                    }, 3000);

                }

            } else {
                if (jawaban_xy1[0].className.indexOf('salah') == -1) {
                    if (jawaban_xy1[0].className.indexOf('benar') == -1) {
                        jawaban_xy1[0].className += ' salah';
                    } else {
                        jawaban_xy1[0].className = jawaban_xy1[0].className.replace('benar', 'salah');
                    }

                }
            }
        }

        if (i == 1) {

            var validasiAngka = /^[a-z]+$/;
            if (jawaban_xy1[1].value.match(validasiAngka) != null) {
                if (jawaban_xy1[1].value.length == 0) {
                    jawaban_xy1[1].className = jawaban_xy1[1].className.replace('benar', '');
                    jawaban_xy1[1].className = jawaban_xy1[1].className.replace('salah', '');


                }

                if (jawaban_xy1[1].value.length != 1 && jawaban_xy1[1].value.length != 0) {
                    if (jawaban_xy1[1].className.indexOf('salah') == -1) {
                        if (jawaban_xy1[1].className.indexOf('benar') == -1) {
                            jawaban_xy1[1].className += ' salah';
                        } else {
                            jawaban_xy1[1].className = jawaban_xy1[1].className.replace('benar', 'salah');
                        }

                    }


                }


                if (jawaban_xy1[1].value.length == 1) {
                    if (jawaban_xy1[1].value != jawaban_xy1[0].value) {
                        console.log('lala');

                        if (jawaban_xy1[1].className.indexOf('benar') == -1) {
                            if (jawaban_xy1[1].className.indexOf('salah') == -1) {
                                jawaban_xy1[1].className += ' benar';
                            } else {
                                jawaban_xy1[1].className = jawaban_xy1[1].className.replace('salah', 'benar');
                            }
                        }

                        setTimeout(function () {
                            soalnya1[1].innerText = soalnya1[1].innerText + '\\[' + jawaban_xy1[1].value + '\\]';
                            soalnext1[1].className = soalnext1[1].className.replace('hilang1', '');
                            soalnext1[2].className = soalnext1[2].className.replace('hilang1', '');
                            // soalnext1[3].className = soalnext1[3].className.replace('hilang1', '');
                            // soalnext1[4].className = soalnext1[4].className.replace('hilang1', '');
                            // soalnext1[5].className = soalnext1[5].className.replace('hilang1', '');
                            bgxy1[1].className += ' hilang1';
                            MathJax.typeset();
                        }, 3000);

                    } else {
                        if (jawaban_xy1[1].className.indexOf('salah') == -1) {
                            if (jawaban_xy1[1].className.indexOf('benar') == -1) {
                                jawaban_xy1[1].className += ' salah';
                            } else {
                                jawaban_xy1[1].className = jawaban_xy1[1].className.replace('benar', 'salah');
                            }

                        }
                    }

                }

            } else {
                if (jawaban_xy1[1].className.indexOf('salah') == -1) {
                    if (jawaban_xy1[1].className.indexOf('benar') == -1) {
                        jawaban_xy1[1].className += ' salah';
                    } else {
                        jawaban_xy1[1].className = jawaban_xy1[1].className.replace('benar', 'salah');
                    }

                }
            }
        }

        if (i == 2 || i == 3) {

            var validasiAngka = /^[a-z]+$/;
            if (jawaban_xy1[i].value.match(validasiAngka) != null) {
                if (jawaban_xy1[i].value.length == 0) {
                    jawaban_xy1[i].className = jawaban_xy1[i].className.replace('benar', '');
                    jawaban_xy1[i].className = jawaban_xy1[i].className.replace('salah', '');


                }



                if (jawaban_xy1[i].value.length != 1 && jawaban_xy1[i].value.length != 0) {
                    if (jawaban_xy1[i].className.indexOf('salah') == -1) {
                        if (jawaban_xy1[i].className.indexOf('benar') == -1) {
                            jawaban_xy1[i].className += ' salah';
                        } else {
                            jawaban_xy1[i].className = jawaban_xy1[i].className.replace('benar', 'salah');
                        }

                    }


                }


                if (jawaban_xy1[i].value.length == 1) {
                    if (jawaban_xy1[i].value == jawaban_xy1[0].value) {
                        if (jawaban_xy1[i].className.indexOf('benar') == -1) {
                            if (jawaban_xy1[i].className.indexOf('salah') == -1) {
                                jawaban_xy1[i].className += ' benar';
                            } else {
                                jawaban_xy1[i].className = jawaban_xy1[i].className.replace('salah', 'benar');
                            }
                        }
                    }


                }

            } else {
                if (jawaban_xy1[i].className.indexOf('salah') == -1) {
                    if (jawaban_xy1[i].className.indexOf('benar') == -1) {
                        jawaban_xy1[i].className += ' salah';
                    } else {
                        jawaban_xy1[i].className = jawaban_xy1[i].className.replace('benar', 'salah');
                    }

                }
            }
        }

        if (i == 4 || i == 5) {

            var validasiAngka = /^[a-z]+$/;
            if (jawaban_xy1[i].value.match(validasiAngka) != null) {
                if (jawaban_xy1[i].value.length == 0) {
                    jawaban_xy1[i].className = jawaban_xy1[i].className.replace('benar', '');
                    jawaban_xy1[i].className = jawaban_xy1[i].className.replace('salah', '');


                }



                if (jawaban_xy1[i].value.length != 1 && jawaban_xy1[i].value.length != 0) {
                    if (jawaban_xy1[i].className.indexOf('salah') == -1) {
                        if (jawaban_xy1[i].className.indexOf('benar') == -1) {
                            jawaban_xy1[i].className += ' salah';
                        } else {
                            jawaban_xy1[i].className = jawaban_xy1[i].className.replace('benar', 'salah');
                        }

                    }


                }


                if (jawaban_xy1[i].value.length == 1) {
                    if (jawaban_xy1[i].value == jawaban_xy1[1].value) {
                        if (jawaban_xy1[i].className.indexOf('benar') == -1) {
                            if (jawaban_xy1[i].className.indexOf('salah') == -1) {
                                jawaban_xy1[i].className += ' benar';
                            } else {
                                jawaban_xy1[i].className = jawaban_xy1[i].className.replace('salah', 'benar');
                            }
                        }
                    }


                }

            } else {
                if (jawaban_xy1[i].className.indexOf('salah') == -1) {
                    if (jawaban_xy1[i].className.indexOf('benar') == -1) {
                        jawaban_xy1[i].className += ' salah';
                    } else {
                        jawaban_xy1[i].className = jawaban_xy1[i].className.replace('benar', 'salah');
                    }

                }
            }
        }

        if (jawaban_xy1[2].value == jawaban_xy1[0].value && jawaban_xy1[3].value == jawaban_xy1[0].value) {
            if (jawaban_xy1[4].value == jawaban_xy1[1].value && jawaban_xy1[5].value == jawaban_xy1[1].value) {


                setTimeout(function () {
                    soalnya1[3].innerText = '\\[' + jawaban_xy1[0].value + ' \\times ' + jawaban_xy1[0].value + '+' + jawaban_xy1[1].value + ' \\times ' + jawaban_xy1[1].value + '\\]';

                    soalnya1[4].className += ' hilang1';
                    soalnya1[5].className += ' hilang1';

                    soalnya1[6].innerText = ' \\[' + jawaban_xy1[0].value + '^2 + ' + jawaban_xy1[1].value + '^2 \\]';
                    soalnya1[7].innerText = 'Jadi bentuk aljabar untuk menentukan jumlah luas kedua sasirangan adalah \\[' + jawaban_xy1[0].value + ' ^2 + ' + jawaban_xy1[1].value + ' ^ 2\\]';

                    soalnext1[3].className = soalnext1[3].className.replace('hilang1', '');
                    soalnext1[4].className = soalnext1[4].className.replace('hilang1', '');
                    soalnext1[5].className = soalnext1[5].className.replace('hilang1', '');

                    bgxy1[2].className += ' hilang1';
                    bgxy1[3].className += ' hilang1';
                    bgxy1[4].className += ' hilang1';
                    bgxy1[5].className += ' hilang1';
                    MathJax.typeset();
                }, 3000);
            }
        }



    })



}

// ulang2
let ulang2 = document.querySelector('.ulang1');
ulang2.addEventListener('click', function () {
    for (let i = 0; i < bgxy1.length; i++) {
        bgxy1[i].className = bgxy1[i].className.replace('hilang1', '');
        jawaban_xy1[i].value = '';
        jawaban_xy1[i].className = jawaban_xy1[i].className.replace('benar', '');
        jawaban_xy1[i].className = jawaban_xy1[i].className.replace('salah', '');
    }
    for (let j = 0; j < soalnext1.length; j++) {

        soalnext1[j].className += ' hilang1';

    }
    soalnya1[0].innerText = 'Misalkan panjang sisi kain sasirangan A adalah = ';
    soalnya1[1].innerText = 'Misalkan panjang sisi kain sasirangan B adalah = ';
    soalnya1[3].innerText = ' \\[ \\times \\] ';
    soalnya1[4].innerText = ' \\[ + \\] ';
    soalnya1[5].innerText = ' \\[ \\times \\] ';
    soalnya1[4].className = soalnya[4].className.replace('hilang1', '');
    soalnya1[5].className = soalnya[5].className.replace('hilang1', '');
})


// saat halaman dimuat

window.onload = function () {
    let jawaban_xy = document.querySelectorAll('.xy');
    for (let i = 0; i < jawaban_xy.length; i++) {
        jawaban_xy[i].value = "";
    }
    let jawaban_xy1 = document.querySelectorAll('.xy1');
    for (let i = 0; i < jawaban_xy1.length; i++) {
        jawaban_xy1[i].value = "";
    }
}