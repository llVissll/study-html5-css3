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

var a1 = document.querySelector('#c1')
var a2 = document.querySelector('#c2')
var a3 = document.querySelector('#c3')
var a4 = document.querySelector('#c4')
var a5 = document.querySelector('#c5')
var a6 = document.querySelector('#c6')
var a7 = document.querySelector('#c7')
var a8 = document.querySelector('#c8')
var a9 = document.querySelector('#c9')
var a10 = document.querySelector('#c10')
var a11 = document.querySelector('#c11')
var a12 = document.querySelector('#c12')
var a13 = document.querySelector('#c13')
var a14 = document.querySelector('#c14')
var a15 = document.querySelector('#c15')
var a16 = document.querySelector('#c16')
var a17 = document.querySelector('#c17')
var a18 = document.querySelector('#c18')
var a19 = document.querySelector('#c19')
var a20 = document.querySelector('#c20')
var a21 = document.querySelector('#c21')
var a22 = document.querySelector('#c22')
var a23 = document.querySelector('#c23')
var a24 = document.querySelector('#c24')
var a25 = document.querySelector('#c25')
var a26 = document.querySelector('#c26')



var e1 = document.querySelector('#e1')
var e2 = document.querySelector('#e2')
var e3 = document.querySelector('#e3')
var e4 = document.querySelector('#e4')
var e5 = document.querySelector('#e5')
var e6 = document.querySelector('#e6')
var e7 = document.querySelector('#e7')
var e8 = document.querySelector('#e8')
var e9 = document.querySelector('#e9')
var e10 = document.querySelector('#e10')
var e11 = document.querySelector('#e11')
var e12 = document.querySelector('#e12')
var e13 = document.querySelector('#e13')
var e14 = document.querySelector('#e14')
var e15 = document.querySelector('#e15')
var e16 = document.querySelector('#e16')
var e17 = document.querySelector('#e17')
var e18 = document.querySelector('#e18')
var e19 = document.querySelector('#e19')
var e20 = document.querySelector('#e20')
var e21 = document.querySelector('#e21')
var e22 = document.querySelector('#e22')
var e23 = document.querySelector('#e23')
var e24 = document.querySelector('#e24')
var e25 = document.querySelector('#e25')
var e26 = document.querySelector('#e26')


var botao = document.querySelector('#btn')

botao.addEventListener('click', finalizar)

var soma = 0
function finalizar(){

    if(input1.value === 'falanges' || input1.value === 'Falanges'){
        soma += 1
        a1.style.display = 'block'
        e1.style.display = 'none'
        
    }else{
        e1.style.display = 'block'
        a1.style.display = 'none'
    }
    if(input2.value === 'metatarso' || input2.value === 'Metatarso'){
        soma += 1
        a2.style.display = 'block'
        e2.style.display = 'none'
        
    }else{
        e2.style.display = 'block'
        a2.style.display = 'none'
    }
    if(input3.value === 'tarso' || input3.value === 'Tarso'){
        soma += 1
        a3.style.display = 'block'
        e3.style.display = 'none'
        
    }else{
        e3.style.display = 'block'
        a3.style.display = 'none'
    }
    if(input4.value === 'tibia' || input4.value === 'Tibia' || input4.value === 'Tíbia' || input4.value === 'tíbia'){
        soma += 1
        a4.style.display = 'block'
        e4.style.display = 'none'
        
    }else{
        e4.style.display = 'block'
        a4.style.display = 'none'
    }
    if(input5.value === 'fibula' || input5.value === 'Fibula' || input5.value === 'Fíbula' || input5.value === 'fíbula'){
        soma += 1
        a5.style.display = 'block'
        e5.style.display = 'none'
        
    }else{
        e5.style.display = 'block'
        a5.style.display = 'none'
    }
    if(input6.value === 'patela' || input6.value === 'Patela'){
        soma += 1
        a6.style.display = 'block'
        e6.style.display = 'none'
        
    }else{
        e6.style.display = 'block'
        a6.style.display = 'none'
    }
    if(input7.value === 'femur' || input7.value === 'Femur' || input7.value === 'Fêmur' || input7.value === 'fêmur'){
        soma += 1
        a7.style.display = 'block'
        e7.style.display = 'none'
        
    }else{
        e7.style.display = 'block'
        a7.style.display = 'none'
    }
    if(input8.value === 'pelve' || input8.value === 'Pelve'){
        soma += 1
        a8.style.display = 'block'
        e8.style.display = 'none'
        
    }else{
        e8.style.display = 'block'
        a8.style.display = 'none'
    }
    if(input9.value === 'vertebras caudais' || input9.value === 'Vertebras caudais' || input9.value === 'Vértebras caudais' || input9.value === 'vértebras caudais'){
        soma += 1
        a9.style.display = 'block'
        e9.style.display = 'none'
        
    }else{
        e9.style.display = 'block'
        a9.style.display = 'none'
    }
    if(input10.value === 'sacro' || input10.value === 'Sacro'){
        soma += 1
        a10.style.display = 'block'
        e10.style.display = 'none'
        
    }else{
        e10.style.display = 'block'
        a10.style.display = 'none'
    }
    if(input11.value === 'vertebras lombares' || input11.value === 'Vertebras lombares' || input11.value === 'Vértebras lombares' || input11.value === 'vértebras lombares' || input11.value === 'Vertebras Lombares' || input11.value === 'Vértebras Lombares'){
        soma += 1
        a11.style.display = 'block'
        e11.style.display = 'none'
        
    }else{
        e11.style.display = 'block'
        a11.style.display = 'none'
    }
    if(input12.value === 'torax' || input12.value === 'Torax' || input12.value === 'Tórax' || input12.value === 'tórax'){
        soma += 1
        a12.style.display = 'block'
        e12.style.display = 'none'
        
    }else{
        e12.style.display = 'block'
        a12.style.display = 'none'
    }
     if(input13.value === 'vertebras toracicas' || input13.value === 'Vertebras toracicas' || input13.value === 'Vértebras torácicas' || input13.value === 'vértebras torácicas' || input13.value === 'Vértebras Torácicas' || input13.value === 'Vertebras Toracicas'){
        soma += 1
        a13.style.display = 'block'
        e13.style.display = 'none'
        
    }else{
        e13.style.display = 'block'
        a13.style.display = 'none'
    }
    if(input14.value === 'vertebras cervicais' || input14.value === 'Vertebras cervicais' || input14.value === 'Vértebras cervicais' || input14.value === 'vértebras cervicais' || input14.value === 'Vértebras Cervicais' || input14.value === 'Vertebras Cervicais'){
        soma += 1
        a14.style.display = 'block'
        e14.style.display = 'none'
        
    }else{
        e14.style.display = 'block'
        a14.style.display = 'none'
    }
     if(input15.value === 'cranio' || input15.value === 'Cranio' || input15.value === 'Cârnio' || input15.value === 'crânio'){
        soma += 1
        a15.style.display = 'block'
        e15.style.display = 'none'
        
    }else{
        e15.style.display = 'block'
        a15.style.display = 'none'
    }
     if(input16.value === 'maxilar' || input16.value === 'Maxilar'){
        soma += 1
        a16.style.display = 'block'
        e16.style.display = 'none'
        
    }else{
        e16.style.display = 'block'
        a16.style.display = 'none'
    }
     if(input17.value === 'mandibula' || input17.value === 'Mandibula' || input17.value === 'Mandíbula' || input17.value === 'mandíbula'){
        soma += 1
        a17.style.display = 'block'
        e17.style.display = 'none'
        
    }else{
        e17.style.display = 'block'
        a17.style.display = 'none'
    }
     if(input18.value === 'escapula' || input18.value === 'Escapula' || input18.value === 'Escápula' || input18.value === 'escápula'){
        soma += 1
        a18.style.display = 'block'
        e18.style.display = 'none'
        
    }else{
        e18.style.display = 'block'
        a18.style.display = 'none'
    }
     if(input19.value === 'umero' || input19.value === 'Umero' || input19.value === 'Úmero' || input19.value === 'úmero'){
        soma += 1
        a19.style.display = 'block'
        e19.style.display = 'none'
        
    }else{
        e19.style.display = 'block'
        a19.style.display = 'none'
    }
    if(input20.value === 'radio' || input20.value === 'Radio' || input20.value === 'Rádio' || input20.value === 'rádio'){
        soma += 1
        a20.style.display = 'block'
        e20.style.display = 'none'
        
    }else{
        e20.style.display = 'block'
        a20.style.display = 'none'
    }
     if(input21.value === 'ulna' || input21.value === 'Ulna'){
        soma += 1
        a21.style.display = 'block'
        e21.style.display = 'none'
        
    }else{
        e21.style.display = 'block'
        a21.style.display = 'none'
    }
   if(input22.value === 'carpo' || input22.value === 'Carpo'){
        soma += 1
        a22.style.display = 'block'
        e22.style.display = 'none'
        
    }else{
        e22.style.display = 'block'
        a22.style.display = 'none'
    }
     if(input23.value === 'metacarpo' || input23.value === 'Metacarpo'){
        soma += 1
        a23.style.display = 'block'
        e23.style.display = 'none'
        
    }else{
        e23.style.display = 'block'
        a23.style.display = 'none'
    }
     if(input24.value === 'falanges' || input24.value === 'Falanges'){
        soma += 1
        a24.style.display = 'block'
        e24.style.display = 'none'
        
    }else{
        e24.style.display = 'block'
        a24.style.display = 'none'
    }
     if(input25.value === 'esterno' || input25.value === 'Esterno'){
        soma += 1
        a25.style.display = 'block'
        e25.style.display = 'none'
        
    }else{
        e25.style.display = 'block'
        a25.style.display = 'none'
    }
    if(input26.value === 'costelas' || input26.value === 'Costelas'){
        soma += 1
        a26.style.display = 'block'
        e26.style.display = 'none'
        
    }else{
        e26.style.display = 'block'
        a26.style.display = 'none'
    }

    alert(`Você acertou ${soma}`)

    soma = 0
}
