let barra_navegacao = document.querySelector('.barra_navegacao');
let header = document.querySelector('header');

function open_menu(){
    barra_navegacao.style.left = '0vw';
    header.style.left = '70%';
};

function close_menu(){
    barra_navegacao.style.left = '-100vw';
    header.style.left = '0%';
};