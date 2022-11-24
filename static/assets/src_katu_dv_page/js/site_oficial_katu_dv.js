let barra_navegacao = document.querySelector('.barra_navegacao');
let header = document.querySelector('header');
let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');
let img_logo_facilitamei = 'url(/static/assets/src_katu_dv_page/images/logo_facilitaMEI.png)';
let img_logo_katudv = 'url(/static/assets/src_katu_dv_page/images/logo_katu_dv.png)';

function open_menu(){
    barra_navegacao.style.left = '0vw';
    header.style.left = '70%';
};

function close_menu(){
    barra_navegacao.style.left = '-100vw';
    header.style.left = '0%';
};

function slide_1_active(){
    slide1.style.opacity = '1';
    slide1.style.zIndex = 2;
    slide2.style.opacity = '0';
    slide2.style.zIndex = 1;

    header.style.backgroundImage = img_logo_katudv;
    header.style.backgroundSize = '40rem';

    reset_slide_interval();
};

function slide_2_active(){
    slide1.style.opacity = '0';
    slide1.style.zIndex = 1;
    slide2.style.opacity = '1';
    slide2.style.zIndex = 2;

    header.style.backgroundImage = img_logo_facilitamei;
    header.style.backgroundSize = '25rem';

    reset_slide_interval();
};

let time_interval = 7000;
let slide_interval = setInterval(slide_change, time_interval);

function slide_change(){
    if(slide1.style.opacity == '1'){
        slide1.style.opacity = '0';
        slide1.style.zIndex = 1;
        slide2.style.opacity = '1';
        slide2.style.zIndex = 2;

        header.style.backgroundImage = img_logo_facilitamei;
        header.style.backgroundSize = '25rem';
    }
    else{
        slide1.style.opacity = '1';
        slide1.style.zIndex = 2;
        slide2.style.opacity = '0';
        slide2.style.zIndex = 1;

        header.style.backgroundImage = img_logo_katudv;
        header.style.backgroundSize = '40rem';
    };
};

function reset_slide_interval(){
    clearInterval(slide_interval);
    slide_interval = setInterval(slide_change, time_interval);
};