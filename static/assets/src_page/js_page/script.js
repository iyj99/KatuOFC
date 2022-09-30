let opcoes_calendario = document.querySelector('.opcoes_calendario');
let caixa_upload = document.querySelector('.caixa_upload');
let container_opcoes = document.querySelector('.container_opcoes');
let body = document.querySelector('body');

function abrir_calendario(){
    opcoes_calendario.classList.toggle('display_none');
    caixa_upload.classList.add('display_none');
    container_opcoes.classList.toggle('display_none');
    if(body.style.overflow == 'hidden'){
        body.style.overflow = 'auto';
    }
    else{
        body.style.overflow = 'hidden';
    };
};

function abrir_caixa_upload(){
    caixa_upload.classList.toggle('display_none');
    opcoes_calendario.classList.add('display_none');
    container_opcoes.classList.toggle('display_none');
    if(body.style.overflow == 'hidden'){
        body.style.overflow = 'auto';
    }
    else{
        body.style.overflow = 'hidden';
    };
};

function voltar_para_inicio(){
    caixa_upload.classList.add('display_none');
    opcoes_calendario.classList.add('display_none');
    container_opcoes.classList.add('display_none');
    if(body.style.overflow == 'hidden'){
        body.style.overflow = 'auto';
    }
    else{
        body.style.overflow = 'hidden';
    };
};