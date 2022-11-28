
let div = document.querySelector('.perg1')
let div1 = document.querySelector('.perg2')
let div2 = document.querySelector('.perg3')
let div3 = document.querySelector('.perg4')


function quiz(certo, num, correta){
        div.style.backgroundColor = 'red'
        div1.style.backgroundColor = 'red'
        div2.style.backgroundColor = 'red'
        div3.style.backgroundColor = 'red' 
       
    if (num === 1){
        div.style.boxShadow = '10px 10px 20px black'
    }else if(num === 2){
        div1.style.boxShadow = '10px 10px 20px black'
    }else if(num === 3){
        div2.style.boxShadow = '10px 10px 20px black'
    }else if(num === 4){
        div3.style.boxShadow = '10px 10px 20px black'
    }


    if(num === 1 && certo === 1){

        div.style.backgroundColor = 'green'
        somarAcerto()
        
    }else{
        if(correta === 1){
            div.style.backgroundColor = 'green'
        }else if(correta === 2){
            div1.style.backgroundColor = 'green'
        }else if(correta === 3){
            div2.style.backgroundColor = 'green'
        }else if(correta === 4){
            div3.style.backgroundColor = 'green'
        }
        
    }
    

    if(num === 2 && certo === 1){

        div1.style.backgroundColor = 'green'
        somarAcerto()
    }else{
        if(correta === 1){
            div.style.backgroundColor = 'green'
        }else if(correta === 2){
            div1.style.backgroundColor = 'green'
        }else if(correta === 3){
            div2.style.backgroundColor = 'green'
        }else if(correta === 4){
            div3.style.backgroundColor = 'green'
        }
    }

    if(num === 3 && certo === 1){

        div2.style.backgroundColor = 'green'
        somarAcerto()
    }else{
        if(correta === 1){
            div.style.backgroundColor = 'green'
        }else if(correta === 2){
            div1.style.backgroundColor = 'green'
        }else if(correta === 3){
            div2.style.backgroundColor = 'green'
        }else if(correta === 4){
            div3.style.backgroundColor = 'green'
        }
    }

    if(num === 4 && certo === 1){

        div3.style.backgroundColor = 'green'
        somarAcerto()
    }else{
        if(correta === 1){
            div.style.backgroundColor = 'green'
        }else if(correta === 2){
            div1.style.backgroundColor = 'green'
        }else if(correta === 3){
            div2.style.backgroundColor = 'green'
        }else if(correta === 4){
            div3.style.backgroundColor = 'green'
        }
    }
}



function somarAcerto(){
    var pontos1 = document.querySelector('.n1')
    var pontos = Number(pontos1.value)
    
   
    var calc = pontos + 1

     pontos1.value = calc
}   




/*
function darius(){
    div.style.backgroundColor =  'red'    
    div1.style.backgroundColor = 'red'
    div2.style.backgroundColor = 'rgb(45, 189, 9)'
    div3.style.backgroundColor = 'red'
    div.style.boxShadow = '15px 15px 50px black'
    
    
}
function rengar(){
    div.style.backgroundColor = 'red'
    div1.style.backgroundColor = 'red'
    div2.style.backgroundColor = 'rgb(45, 189, 9)'
    div3.style.backgroundColor = 'red'
    div1.style.boxShadow = '15px 15px 50px black'

}
function renekton(){
    div.style.backgroundColor = 'red'
    div1.style.backgroundColor = 'red'
    div2.style.backgroundColor = 'rgb(45, 189, 9)'
    div3.style.backgroundColor = 'red'
    div2.style.boxShadow = '15px 15px 50px black'

}
function aatrox(){
    div.style.backgroundColor = 'red'
    div1.style.backgroundColor = 'red'
    div2.style.backgroundColor = 'rgb(45, 189, 9)'
    div3.style.backgroundColor = 'red'
    div3.style.boxShadow = '15px 15px 50px black'

}*/




