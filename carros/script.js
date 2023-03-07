function verCarro(){
    let valor1 = document.querySelector('#valor');
    let valor = Number(valor1.value);
    let res = document.querySelector('#res');
    let msg = document.querySelector(`#msg`)
    var valorformatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if(valor >= 50000 && valor <= 5000000){
       msg.innerHTML = `Com ${valorformatado} voce pode comprar um(a):`
    }   
    
    if(valor <= 49999 || valor >= 5000001){
      alert(`Digite um valor entre 50mil e 5 milhões.`)
    }
    else if(valor >= 50000 && valor <= 70000){
      document.getElementById('imagem').src='imagens/civic-2008.jpg'
      res.innerHTML = 'Honda Civic 2008'  
    }
    else if(valor >= 70001 && valor <= 79999){
      document.getElementById('imagem').src='imagens/fox-xtreme-2021.webp'
      res.innerHTML = 'VW Fox-Xtreme 2021'
    }
    else if(valor >= 80000 && valor <= 100000){
      document.getElementById('imagem').src='imagens/peugeot-208-2022.webp'
      res.innerHTML = 'Peogeot 208 2022'
    }
    else if(valor >= 100001 && valor <= 120000){
      document.getElementById('imagem').src='imagens/nivus-2021.webp'
      res.innerHTML = 'VW Nivus 2021'
    }
    else if(valor >= 120001 && valor <= 150000){
      document.getElementById('imagem').src='imagens/bmw-320i-2017.jpg'
      res.innerHTML = 'Bmw 320i 2017'
    }
    else if(valor >= 150001 && valor <= 237000){
      document.getElementById('imagem').src='imagens/tiguan-2022.jpg'
      res.innerHTML = 'Tiguan R-Line 2022'
    }
    else if(valor >= 237001 && valor <= 300000){
      document.getElementById('imagem').src='imagens/camaro-2014-ss.jpg'
      res.innerHTML = 'GM Camaro 2014'
    }
    else if(valor >= 300001 && valor <= 424000){
      document.getElementById('imagem').src='imagens/jaguar-fpace-2020.jpg'
      res.innerHTML = 'Jaguar F-Pace 2020'
    }
    else if(valor >= 424001 && valor <= 543000){
      document.getElementById('imagem').src='imagens/audi-ttrs-2023.webp'
      res.innerHTML = 'Audi TTrs 2023'
    }
    else if(valor >= 543001 && valor <= 600000){
      document.getElementById('imagem').src='imagens/mustang-2023.jpg'
      res.innerHTML = 'Ford Mustang 2023'
    }
    else if(valor >= 600001 && valor <= 700000){
      document.getElementById('imagem').src='imagens/jaguar-ftype-2023.webp'
      res.innerHTML = 'Jaguar F-Type 2023'
    }
    else if(valor >= 700001 && valor <= 900000){
      document.getElementById('imagem').src='imagens/porsche-718-2021.jpeg'
      res.innerHTML = 'Porsche 718 Boxter 2021'
    }
    else if(valor >= 900001 && valor <= 1200000){
      document.getElementById('imagem').src='imagens/audi-r8-2018.jpg'
      res.innerHTML = 'Audi R8 2018'
    }
    else if(valor >= 1200001 && valor <= 1600000){
      document.getElementById('imagem').src='imagens/audi-rs7-2022.jpg'
      res.innerHTML = 'Audi RS7 2022/23'
    }
    else if(valor >=  1600001 && valor <= 3000000){
      document.getElementById('imagem').src='imagens/porsche-911-turboS-2023.jpg'
      res.innerHTML = 'Porsche 911 Turbo S 2023'
    }
    else if(valor >= 3000001 && valor <= 4000000){
      document.getElementById('imagem').src='imagens/ferrari-458-spider-2013.jpg'
      res.innerHTML = 'Ferrari 358 Spider 2013'
    }
    else if(valor >= 4000001 && valor <= 5000000){
      document.getElementById('imagem').src='imagens/lamborghini-aventador-2016.webp'
      res.innerHTML = 'Lamborghini Aventador 2016'
    }
    
      
    
}

/*
ate 70k civic 2008
71k ate 79k foxXTREME 2021
80k a 100k peugeot 207 2022
100k - 120k  nivus 2021
120k - 150k bmw 320i 2017
150k - 237k - Tiguan R-Line 2022
237k - 300k camaro 2014
300k - 424k jaguar F-pace 2020
424k - 543k audi ttrs 2023
543k - 600k Ford mustang 2023 
600k - 700k Jaguar F-type 2023
700k - 900k  porsche 718 Boxter 2021
900k - 1.2kk Audi r8 2018
1.2kk - 1.5kk - audi RS7 2022
1,6kk - 3kk porsche 911 turbo S 2023
3kk - 4kk Ferrari 458 Spider 2013 
4kk - 5kk Lamborghini Aventador 2016 


*/