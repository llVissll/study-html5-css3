let soma_acerto = 0;
let soma_erro = 0;
let botao_acerto = "";
let pergunta_index = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //---------vetor que seleciona as perguntas
let num = 0;
let qtd_perg = 0 
let total_perg = 10 //------------Sorteia o número de perguntas no intervalo.

function responder(prp){// -----------------Avaliação da resposta

    qtd_perg += 1;   
    document.getElementById('soma_acerto').innerText = qtd_perg + "/10"
    if (prp === botao_acerto){
       soma_acerto += 1 
        
   }
   
    if(qtd_perg < total_perg){
        initeste()
    }else{
       
        document.getElementById('resultado').innerText = "Você acertou " + soma_acerto + " perguntas de " + total_perg + ".";
        finalizarquestao()
    }
}
//================================================================================ início

function initeste(){
    
        let i = 0;
        do {
            let num = randomNumberInterval(1, 15);
        
            if(pergunta_index.indexOf(num) === -1){
                pergunta_index[num]=num
                
                i = 1
                
                pergunta(num);
                
            } 

        } while (i < 1) ;
}   
    
function montarquestao(resp){ //----------------------------(resp) é o vetor das respostas.
    let numresp = randomNumberInterval(1, 4);
    let controle = [0, 0, 0, 0, 0]; // ---------------------vetor seleciona a posição das respostas
    let contr_resp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  //----vetor om o indice das respostas
    let Nv = 0;
    let Nvr =0;
    
    document.getElementById('rp' + numresp).value = resp[0];
    botao_acerto = 'rp' + numresp;
    
    controle[numresp]=numresp;
    contr_resp[0]=numresp;
    
    do {
        let numresp =  randomNumberInterval(1, 4)

        if(controle.indexOf(numresp) === -1){
            do {
                let selresperrada = randomNumberInterval(1, 9);

                if(contr_resp.indexOf(selresperrada) === -1){
                    document.getElementById('rp' + numresp).value = resp[selresperrada];
                    controle[numresp] = numresp;
                    contr_resp[selresperrada] = selresperrada;
                    Nv += 1;
                    Nvr = 1;    

                }

            } while (Nvr < 1);
        }

    } while ( Nv < 3)

 
}

function randomNumberInterval(a, b) { //sorteia o número da resposta correta
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function finalizarquestao(){
    
    main.style.backgroundImage = "url('Imagens/foto-quiz.png')";
    main.style.backgroundSize = "contain"
    main.style.backgroundRepeat = "no-Repeat"
    main.style.backgroundColor = "#4C9696"
    main.style.boxShadow = "none"
    document.getElementById('rp1').style.display = "none";
    document.getElementById('rp2').style.display = "none";
    document.getElementById('rp3').style.display = "none";
    document.getElementById('rp4').style.display = "none";
    document.getElementById('perg').style.display = "none";
    document.getElementsByClassName('resposta').style.display = "none";

    

}
//====================================================================================================
  function pergunta(perg){ //----------------------Banco de perguntas
    let perg_sel = document.getElementById('perg')
    if(perg === 1){ perg_sel.innerHTML = "Quantos kilos tem 3000 gramas?" }
    if(perg === 2){ perg_sel.innerHTML = "Quantos planetas tem em nosso sistema solar?" }
    if(perg === 3){ perg_sel.innerHTML = "Como dizer SOL em inglês?" }
    if(perg === 4){ perg_sel.innerHTML = "Qual o primeiro nome do Tiradentes?" }
    if(perg === 5){ perg_sel.innerHTML = "Quantos mundiais o Brasil tem no futebol?" }
    if(perg === 6){ perg_sel.innerHTML = "Movimento da Terra em volta de si mesma?" }
    if(perg === 7){ perg_sel.innerHTML = "Movimento da Terra em volta do Sol?" }
    if(perg === 8){ perg_sel.innerHTML = "Qual é o maior país em extensão territorial?" }
    if(perg === 9){ perg_sel.innerHTML = "Qual é o maior rio do mundo em extensão?" }
    if(perg === 10){ perg_sel.innerHTML = "Qual é a maior ave do mundo?" }
    if(perg === 11){ perg_sel.innerHTML = "Quantos quilos tem uma arroba?" }
    if(perg === 12){ perg_sel.innerHTML = "Quantos satelites naturais tem a terra?" }
    if(perg === 13){ perg_sel.innerHTML = "Em quantos dias a lua dá uma volta na terra?" }
    if(perg === 14){ perg_sel.innerHTML = "Quem inventou a lâmpada?" }
    if(perg === 15){ perg_sel.innerHTML = "Qual o pais sede da copa de 2010?" }
    
    resposta(perg);
}

function resposta(perg){ //----------------------- Banco de respostas
    

    if(perg === 1){ resp = ['3 kilos', '1 kilo', '2 kilos', '10 kilos', '4 kilos', '5 kilos', '6 kilos', '7 kilos', '8 kilos', '9 kilos']; }
    if(perg === 2){ resp = ['8 planetas', '4 planetas', '5 planetas', '6 planetas', '7 planetas', '9 planetas', '10 planetas', '11 planetas', '12 planetas', '3 planetas']; }
    if(perg === 3){ resp = ['Sun', 'star', 'moon', 'Sole', 'Sonne', 'Sugth', 'Sunas', 'Solart', 'Solon', 'Soila']; }
    if(perg === 4){ resp = ['Joaquim', 'José', 'Silva', 'Xavier', 'Francisco', 'Pedro', 'Gerônimo', 'Bartolomeu', 'Dom Pedro', 'Severo']; }
    if(perg === 5){ resp = ['5 mundiais', '1 mundial', '2 mundiais', '3 mundiais', '4 mundiais', '6 mundiais', '7 mundiais', '8 mundiais', '9 mundiais', '10 mundiais']; }
    if(perg === 6){ resp = ['Rotação', 'Navegação', 'Evocação', 'Translação', 'Giro', 'Revolução', 'Volta terrena', 'Mil e uma noite', 'Noturno', 'Diurno']; }
    if(perg === 7){ resp = ['Translação', 'Navegação', 'Evocação', 'Rotação', 'Giro', 'Revolução', 'Volta terrena', 'Mil e uma noite', 'Noturno', 'Diurno']; }    
    if(perg === 8){ resp = ['Russia', 'Estados Unidos', 'Brasil', 'Canada', 'China', 'Australia', 'India', 'África', 'México', 'Reino Unido']; }
    if(perg === 9){ resp = ['Rio Nilo', 'Rio Amazonas', 'Rio Yangtzé ', 'Rio Mississippi ', 'Rio Ienissei', 'Rio Amarelo', 'Rio Ob', 'Rio da Prata', 'Rio Congo', 'Rio Amur']; }
    if(perg === 10){ resp = ['Avestruz', 'Casuar-do-Sul', 'Emu', 'Pingüi-Imperador', 'Ema', 'Abetarda-Gigante', 'Condor-dos-Andes', 'Pelicano-Crespo', 'Cisne-Branco', 'Albatroz-Errante']; }
    if(perg === 11){ resp = ['15 kilos', '10 kilos', '11 kilos', '12 kilos', '13 kilos', '14 kilos', '16 kilos', '17 kilos', '18 kilos', '19 kilos']; }
    if(perg === 12){ resp = ['1 Satelite', '2 Satelite', '3 Satelite', '4 Satelite', '5 Satelite', '6 Satelite', '7 Satelite', '8 Satelite', '9 Satelite', '10 Satelite']; }
    if(perg === 13){ resp = ['27 dias', '1 dias', '3 dias', '7 dias', '10 dias', '15 dias', '20 dias', '22 dias', '24 dias', '29 dias']; }
    if(perg === 14){ resp = ['Thomas Edson', 'Joseph Wilson Swan', 'James Bowman Lindsay', 'Alexander Lodiguin', 'Alessandro Cruto', 'Hiram Maxim', 'Thomas Lira', 'Edson Nascimento', 'Paulo Houco', 'Dom Pedro I']; }
    if(perg === 15){ resp = ['Africa do Sul', 'Coreia do Sul', 'Espanha', 'Catar', 'Brasil', 'México', 'Fraça', 'Estados Unidos', 'Urugai', 'Japão']; }
    
    montarquestao(resp);
}

