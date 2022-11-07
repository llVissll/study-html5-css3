let botao = document.getElementById('btn')

botao.addEventListener('click', abrirmenu)

function abrirmenu(){
    
    let nav = document.getElementById('nav')
    nav.classList.toggle('active')
    let btn_logo = document.getElementById('btn-logo')
    btn_logo.classList.toggle('active')

}