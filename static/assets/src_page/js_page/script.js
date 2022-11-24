let opcoes_calendario = document.querySelector('.opcoes_calendario');
let caixa_upload = document.querySelector('.caixa_upload');
let container_opcoes = document.querySelector('.container_opcoes');

let visibility_bttn_desktop = document.querySelector('.visibility_bttn_desktop');
let visibility_bttn_mobile = document.querySelector('.visibility_bttn_mobile');
let visibility_off_icon = "../static/assets/src_page/images_page/visibility_off_icon.svg";
let visibility_icon = "../static/assets/src_page/images_page/visibility_icon.svg";

function abrir_calendario(){
    opcoes_calendario.classList.toggle('display_none');
    caixa_upload.classList.add('display_none');
    container_opcoes.classList.toggle('display_none');
};

function abrir_caixa_upload(){
    if(caixa_upload.classList.contains('display_none')){
        caixa_upload.classList.remove('display_none');
        container_opcoes.classList.remove('display_none');
    }
    else{
        caixa_upload.classList.add('display_none');
        container_opcoes.classList.add('display_none');
    };
    opcoes_calendario.classList.add('display_none');
};

function voltar_para_inicio(){
    caixa_upload.classList.add('display_none');
    opcoes_calendario.classList.add('display_none');
    container_opcoes.classList.add('display_none');
};

//====================== ESCONDER DADOS NOS GRÁFICOS DE RECEITA, DESPESA E SALDO ============================

let valor_receita = document.querySelector('.valor_receita');
let valor_despesa = document.querySelector('.valor_despesa');
let valor_saldo = document.querySelector('.valor_saldo');

let lista_valores = [valor_receita, valor_despesa, valor_saldo];

function esconder_dados(){
    if(valor_receita.style.backgroundColor != 'black'){
        for(i=0; i < lista_valores.length; i++){
            lista_valores[i].style.backgroundColor = 'black';
            lista_valores[i].style.height = '.8rem';
        };
        visibility_bttn_desktop.src = visibility_off_icon;
        visibility_bttn_mobile.src = visibility_off_icon;
    }
    else{
        for(i=0; i < lista_valores.length; i++){
            lista_valores[i].style.backgroundColor = 'white';
            lista_valores[i].style.height = 'initial';
        };
        visibility_bttn_desktop.src = visibility_icon;
        visibility_bttn_mobile.src = visibility_icon;
    };
};

//===========================================================================================================