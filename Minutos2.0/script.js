

function calcular(){
    let res = document.getElementById("parag")
    let n2 = document.getElementById("min")
    let n1 = Number(n2.value)
    if(n1 > 60 || n1 < 0){
        alert(`Digite um número válido`)
    }else{
    let valor = n1 + 6
    if(valor >= 60){
        valor = valor - 60
    }
    let valor2 = n1 + 10
    if(valor2 >= 60){
        valor2 = valor2 - 60
    }
    let valor3 = n1 + 12
    if(valor3 >= 60){
        valor3 = valor3 - 60
    }
    let valor4 = n1 + 15
    if(valor4 >= 60){
        valor4 = valor4 - 60
    }
    let valor5 = n1 + 20
    if(valor5 >= 60){
        valor5 = valor5 - 60
    }
    let valor6 = n1 + 22
    if(valor6 >= 60){
        valor6 = valor6 - 60
    }

    //res.innerHTML = valor +" - "+ valor2 +" - "+ valor3 +" - "+ valor4 +" - "+ valor5 +" - "+ valor6 
    
    negrito()
    apagar(valor6)
    marcarS(valor, valor2, valor3, valor4, valor5, valor6)
    marcar(valor, valor2, valor3, valor4, valor5, valor6)
    
}
}

function marcar(a, b, c, d, e, f){
    let div1 = document.getElementById(`n` + a)
    let div2 = document.getElementById(`n` + b)
    let div3 = document.getElementById(`n` + c)
    let div4 = document.getElementById(`n` + d)
    let div5 = document.getElementById(`n` + e)
    let div6 = document.getElementById(`n` + f)

    if(div1 === null){}

    else{
        div1.style.backgroundColor = `green`
        div1.style.color = `white`, div1.style.fontWeight = `bolder`, div1.style.fontSize = `1.5em`
        div1 = document.getElementById(`n` + a).id = `s` + a; 
    }
    if(div2 === null){}
    else{
        div2.style.backgroundColor = `green`
        div2.style.color = `white`, div2.style.fontWeight = `bolder`, div2.style.fontSize = `1.5em`
        div2 = document.getElementById(`n` + b).id = `s` + b;
    }
    if(div3 === null){}
    else{
        div3.style.backgroundColor = `green`
        div3.style.color = `white`, div3.style.fontWeight = `bolder`, div3.style.fontSize = `1.5em`
        div3 = document.getElementById(`n` + c).id = `s` + c;
    }
    if(div4 === null){}
    else{
        div4.style.backgroundColor = `green`
        div4.style.color = `white`, div4.style.fontWeight = `bolder`, div4.style.fontSize = `1.5em`
        div4 = document.getElementById(`n` + d).id = `s` + d;
    }
    if(div5 === null){}
    else{
        div5.style.backgroundColor = `green`
        div5.style.color = `white`, div5.style.fontWeight = `bolder`, div5.style.fontSize = `1.5em`
        div5 = document.getElementById(`n` + e).id = `s` + e;
    }
    if(div6 === null){}
    else{
        div6.style.backgroundColor = `green`
        div6.style.color = `white`, div6.style.fontWeight = `bolder`, div6.style.fontSize = `1.5em`
        div6 = document.getElementById(`n` + f).id = `s` + f;
    }  
 
    
    
    
    
    
}

function apagar(a){

    for(i = 0; i < 37; i++){
        a++
        if(a > 60){a = 1}
        let minuto = document.getElementById(`s` + a)
        if(minuto === null){
        
        }else{
        minuto.style.backgroundColor = `white`;
        minuto.style.color = `black`, minuto.style.fontWeight = `100`, minuto.style.fontSize = `1em`;  
        minuto = document.getElementById(`s` + a).id = `n` + a;   
    }}
}


function negrito(){
    for(a = 0; a < 60; a++){
        let minuto = document.getElementById(`s` + a)
        if(minuto === null){

        }else{
            minuto.style.backgroundColor = `white`
            minuto.style.color = `black`, minuto.style.fontWeight = `bolder`, minuto.style.fontSize = `1.5em`     
        }
    }
}

function marcarS(a, b, c, d, e, f){
    let div1 = document.getElementById(`s` + a)
    let div2 = document.getElementById(`s` + b)
    let div3 = document.getElementById(`s` + c)
    let div4 = document.getElementById(`s` + d)
    let div5 = document.getElementById(`s` + e)
    let div6 = document.getElementById(`s` + f)

    if(div1 === null){}

    else{
    div1.style.backgroundColor = `skyblue`
    div1.style.color = `white`, div1.style.fontWeight = `bolder`, div1.style.fontSize = `1.5em`
    }
    if(div2 === null){}
    else{
    div2.style.backgroundColor = `skyblue`
    div2.style.color = `white`, div2.style.fontWeight = `bolder`, div2.style.fontSize = `1.5em`
    }
    if(div3 === null){}
    else{
    div3.style.backgroundColor = `skyblue`
    div3.style.color = `white`, div3.style.fontWeight = `bolder`, div3.style.fontSize = `1.5em`
    }
    if(div4 === null){}
    else{
    div4.style.backgroundColor = `skyblue`
    div4.style.color = `white`, div4.style.fontWeight = `bolder`, div4.style.fontSize = `1.5em`
    }
    if(div5 === null){}
    else{
    div5.style.backgroundColor = `skyblue`
    div5.style.color = `white`, div5.style.fontWeight = `bolder`, div5.style.fontSize = `1.5em`
    }
    if(div6 === null){}
    else{
    div6.style.backgroundColor = `skyblue`
    div6.style.color = `white`, div6.style.fontWeight = `bolder`, div6.style.fontSize = `1.5em`
    }
}