let btn_mobile = document.getElementById('btn-mobile');

btn_mobile.addEventListener('click', abrirmenu);
let nav = document.getElementById('nav');
function abrirmenu(){
    
    nav.classList.toggle('active');
}


function enviar(nome, cod, valor, id){
    var link = `https://api.whatsapp.com/send?phone=5511983014966&text=Olá,%20vim%20pelo%20site%20Maviss%20🐼.%20Gostaria%20de%20saber%20mais%20sobre%20a%20pelúcia:%20` + nome +  '%20-%20Valor:%20' + valor + '%20Código%20' + cod
    var msg = document.querySelector('#meuLink' + id)
    msg.href = link
}