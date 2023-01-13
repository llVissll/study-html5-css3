

function calcular(){
    let res = document.getElementById("res")
    let result = document.getElementById("res")
    let n2 = document.getElementById("num")
    let n1 = Number(n2.value)
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

    res.innerHTML = valor +" - "+ valor2 +" - "+ valor3 +" - "+ valor4 +" - "+ valor5 +" - "+ valor6 


}