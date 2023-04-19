var input1 = document.querySelector('#inp1')
var input2 = document.querySelector('#inp2')
var input3 = document.querySelector('#inp3')
var input4 = document.querySelector('#inp4')
var input5 = document.querySelector('#inp5')
var input6 = document.querySelector('#inp6')
var input7 = document.querySelector('#inp7')
var input8 = document.querySelector('#inp8')
var input9 = document.querySelector('#inp9')
var input10 = document.querySelector('#inp10')
var input11 = document.querySelector('#inp11')
var input12 = document.querySelector('#inp12')
var input13 = document.querySelector('#inp13')
var input14 = document.querySelector('#inp14')
var input15 = document.querySelector('#inp15')
var input16 = document.querySelector('#inp16')
var input17 = document.querySelector('#inp17')
var input18 = document.querySelector('#inp18')
var input19 = document.querySelector('#inp19')
var input20 = document.querySelector('#inp20')
var input21 = document.querySelector('#inp21')
var input22 = document.querySelector('#inp22')
var input23 = document.querySelector('#inp23')
var input24 = document.querySelector('#inp24')
var input25 = document.querySelector('#inp25')
var input26 = document.querySelector('#inp26')

var botao = document.querySelector('#btn')

botao.addEventListener('click', finalizar)

var soma = 0
function finalizar(){

    if(input1.value === 'falanges'){
        soma += 1
    }
    if(input2.value === 'metatarso'){
        soma += 1
    }
    if(input3.value === 'tarso'){
        soma += 1
    }
    if(input4.value === 'tibia'){
        soma += 1
    }
    if(input5.value === 'fibula'){
        soma += 1
    }
    if(input6.value === 'patela'){
        soma += 1
    }
    if(input7.value === 'femur'){
        soma += 1
    }
    if(input8.value === 'pelve'){
        soma += 1
    }
    if(input9.value === 'vertebras caudais'){
        soma += 1
    }
    if(input10.value === 'sacro'){
        soma += 1
    }
    if(input11.value === 'vertebras lombares'){
        soma += 1
    }
    if(input12.value === 'torax'){
        soma += 1
    }
     if(input13.value === 'vertebras toracicas'){
        soma += 1
    }
    if(input14.value === 'vertebras cervicais'){
        soma += 1
    }
     if(input15.value === 'cranio'){
        soma += 1
    }
     if(input16.value === 'maxilar'){
        soma += 1
    }
     if(input17.value === 'mandibula'){
        soma += 1
    }
     if(input18.value === 'escapula'){
        soma += 1
    }
     if(input19.value === 'umero'){
        soma += 1
    }
    if(input20.value === 'radio'){
        soma += 1
    }
     if(input21.value === 'ulna'){
        soma += 1
    }
   if(input22.value === 'carpo'){
        soma += 1
    }
     if(input23.value === 'metacarpo'){
        soma += 1
    }
     if(input24.value === 'falanges'){
        soma += 1
    }
     if(input25.value === 'esterno'){
        soma += 1
    }
    if(input26.value === 'costelas'){
        soma += 1
    }

    alert(`Você acertou ${soma}`)

    soma = 0
}
