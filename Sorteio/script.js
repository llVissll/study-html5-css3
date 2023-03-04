 
function sortear(){
    let res = document.querySelector('#res')
    let res1 = document.querySelector('#res1')
    let numeroSorteado = document.querySelector("#res")
    numeroSorteado = Math.floor(Math.random() * 100) + 1;
    res.classList.add("lista")
    res1.innerHTML = "O número sorteado é:" 
    res.innerHTML = numeroSorteado
}


