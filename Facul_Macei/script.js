function calcular(){
    let kml1 = document.getElementById('kmlitro')
    let kmp1 = document.getElementById('kmper')
    let kml = Number(kml1.value)
    let kmp = Number(kmp1.value)
    let res = document.getElementById('res')
    let custo1 = document.getElementById('custo') 
    let custo = Number(custo1.value)
    let calc = kmp / kml
    let result = calc * custo
    

    if(custo == 0 ){
        alert('Preencha o preço do combustível em sua cidade.')
    }
    else if(kml == 0 ){
        alert('Preencha quantos Km/L seu veículo consome.')
    }
    else if(kmp == 0 ){
        alert('Preencha quantos Km deseja percorrer.')

    }
    else{
        res.innerHTML = `Você irá gastar um total de R$${result.toFixed(2)} com combustível. ` 
    }
}