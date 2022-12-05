function calcularHerança(){

let herança1 = document.getElementById('totalh')
let herança = Number(herança1.value)
let amelia_h = herança / 3 / 2;
let reina_h = herança / 3 / 2 / 6 / 3;
let chico_h = herança / 3 / 2 / 6;
let joao_h = herança / 3;
let jamil_h = (herança / 3 / 2 / 4) + (herança / 3 / 2 / 5);
let sheila_h = herança / 3 / 2 / 5;

let amelia = document.getElementById('amelia')

let reina = document.querySelector('#reina')
let reina1 = document.querySelector('#reina2')
let reina2 = document.querySelector('#reina3')
let reina3 = document.querySelector('#reina4')
let reina4 = document.querySelector('#reina5')
let reina5 = document.querySelector('#reina6')

let chico = document.querySelector('#chico')
let chico1 = document.querySelector('#chico1')
let chico2 = document.querySelector('#chico2')
let chico3 = document.querySelector('#chico3')

let jamil = document.querySelector('#jamil')
let jamil1 = document.querySelector('#jamil1')
let jamil2 = document.querySelector('#jamil2')
let jamil3 = document.querySelector('#jamil3')

let joao = document.getElementById('joao')

let sheila = document.getElementById('sheila')

amelia.innerHTML = 'R$ ' + amelia_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
reina.innerHTML = 'R$ ' + reina_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
reina1.innerHTML = 'R$ ' + reina_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
reina2.innerHTML = 'R$ ' + reina_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
reina3.innerHTML = 'R$ ' + reina_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
reina4.innerHTML = 'R$ ' + reina_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
reina5.innerHTML = 'R$ ' + reina_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
chico.innerHTML = 'R$ ' + chico_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
chico1.innerHTML = 'R$ ' + chico_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
chico2.innerHTML = 'R$ ' + chico_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
chico3.innerHTML = 'R$ ' + chico_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
joao.innerHTML = 'R$ ' + joao_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
jamil.innerHTML = 'R$ ' + jamil_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
jamil1.innerHTML = 'R$ ' + jamil_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
jamil2.innerHTML = 'R$ ' + jamil_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
jamil3.innerHTML = 'R$ ' + jamil_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});
sheila.innerHTML = 'R$ ' + sheila_h.toLocaleString('pt-BR' , {style: 'decimal', maximumFractionDigits: 2});



}