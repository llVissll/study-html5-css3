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

    if(input1.value === 'falanges' || input1.value === 'Falanges'){
        soma += 1
    }
    if(input2.value === 'metatarso' || input2.value === 'Metatarso'){
        soma += 1
    }
    if(input3.value === 'tarso' || input3.value === 'Tarso'){
        soma += 1
    }
    if(input4.value === 'tibia' || input4.value === 'Tibia'){
        soma += 1
    }
    if(input5.value === 'fibula' || input5.value === 'Fibula'){
        soma += 1
    }
    if(input6.value === 'patela' || input6.value === 'Patela'){
        soma += 1
    }
    if(input7.value === 'femur' || input7.value === 'Femur'){
        soma += 1
    }
    if(input8.value === 'pelve' || input8.value === 'Pelve'){
        soma += 1
    }
    if(input9.value === 'vertebras caudais' || input9.value === 'Vertebras caudais'){
        soma += 1
    }
    if(input10.value === 'sacro' || input10.value === 'Sacro'){
        soma += 1
    }
    if(input11.value === 'vertebras lombares' || input11.value === 'Vertebras lombares'){
        soma += 1
    }
    if(input12.value === 'torax' || input12.value === 'Torax'){
        soma += 1
    }
     if(input13.value === 'vertebras toracicas' || input13.value === 'Vertebras toracicas'){
        soma += 1
    }
    if(input14.value === 'vertebras cervicais' || input14.value === 'Vertebras cervicais'){
        soma += 1
    }
     if(input15.value === 'cranio' || input15.value === 'Cranio'){
        soma += 1
    }
     if(input16.value === 'maxilar' || input16.value === 'Maxilar'){
        soma += 1
    }
     if(input17.value === 'mandibula' || input17.value === 'Mandibula'){
        soma += 1
    }
     if(input18.value === 'escapula' || input18.value === 'Escapula'){
        soma += 1
    }
     if(input19.value === 'umero' || input19.value === 'Umero'){
        soma += 1
    }
    if(input20.value === 'radio' || input20.value === 'Radio'){
        soma += 1
    }
     if(input21.value === 'ulna' || input21.value === 'Ulna'){
        soma += 1
    }
   if(input22.value === 'carpo' || input22.value === 'Carpo'){
        soma += 1
    }
     if(input23.value === 'metacarpo' || input23.value === 'Metacarpo'){
        soma += 1
    }
     if(input24.value === 'falanges' || input24.value === 'Falanges'){
        soma += 1
    }
     if(input25.value === 'esterno' || input25.value === 'Esterno'){
        soma += 1
    }
    if(input26.value === 'costelas' || input26.value === 'Costelas'){
        soma += 1
    }

    alert(`Você acertou ${soma}`)

    soma = 0
}
