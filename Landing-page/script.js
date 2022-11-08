let btn = document.getElementById('botao-mobile')

btn.addEventListener('click', abrirmenu)

let jogos = document.getElementById('jogos')

jogos.addEventListener('mouseenter', abrirmenu)


function abrirmenu(){
    let nav = document.getElementById('nav')
    nav.classList.toggle('active')
    jogos.classList.toggle('active')
}



