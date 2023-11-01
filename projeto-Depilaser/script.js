let btn_mobile = document.getElementById('btn-mobile');

btn_mobile.addEventListener('click', abrirmenu);
let nav = document.getElementById('nav');
function abrirmenu(){
    
    nav.classList.toggle('active');
}

