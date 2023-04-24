var numero = document.querySelector('#resultado')


function apagar(){
    numero.innerHTML = ''
}


function apagarUm(){
    var result = numero.innerHTML;
    numero.innerHTML = result.substring(0, result.length -1)
}



function insert(num1){
    
    numero.innerHTML += num1
}

function calcular(){
    var resultado = numero.innerHTML;
    if(resultado){
        numero.innerHTML = eval(resultado);
    }
   
}
