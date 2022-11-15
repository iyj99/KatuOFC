let opcoes_menu = document.querySelector('.opcoes_menu');
let botao_voltar_para_topo = document.querySelector('.botao_voltar_para_topo');
let navigation_bar = document.querySelector('.navigation_bar');
let header = document.querySelector('header');

function menu_opcoes_on(){
    let opcoes_menu_left = opcoes_menu.style.left != '0rem';
    if(opcoes_menu_left){
        opcoes_menu.style.left = '0rem';
    }
    else{
        opcoes_menu.style.left = '-100vw';
    };
};

function back_to_up(){
    let window_scrolly = window.scrollY != 0;
    if(window_scrolly){
        window.scrollTo(0,0);
        botao_voltar_para_topo.style.right = '-10.5rem';
        navigation_bar.style.position = 'static';
        navigation_bar.style.bottom = '45rem';
        header.style.paddingTop = '1rem';
    };
};

function show_button_to_go_up(){
    let scroll_position = window.scrollY >= 600;
    if(scroll_position){
        botao_voltar_para_topo.style.right = '1.5rem';
    }
    else{
        botao_voltar_para_topo.style.right = '-10.5rem';
    };
};

function show_navigation_bar(){
    let scroll_position = window.scrollY >= 100;
    if(scroll_position){
        navigation_bar.style.position = 'fixed';
        navigation_bar.style.top = '0rem';
        header.style.paddingTop = '7rem';
    }
    else{
        navigation_bar.style.position = 'static';
        navigation_bar.style.top = '-6rem';
        header.style.paddingTop = '1rem';
    };
};