var btn1 = document.querySelector(`#btn-open`)
var btn2 = document.querySelector(`#btn-close`)

btn1.addEventListener(`click`, abrirMenu)
btn2.addEventListener(`click`, abrirMenu)


function abrirMenu(){
    var nav = document.querySelector(`#nav`);
    nav.classList.toggle(`active`)
}