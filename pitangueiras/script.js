/*https://api.whatsapp.com/send?phone=5511983014966&text=Olá,%20gostaria%20de%20pedir%20um%20Bife%20acebolado."*/

function mandarMsg(prato){
    var qtd1 = document.getElementById('n1')
    var qtd = Number(qtd1.value)
    
    if(qtd === 0 ){
            qtd = 1
        }else if(qtd < 0){
            qtd = qtd * -1
        } 

    var msg = document.querySelector('.meuLink')
    var link = 'https://api.whatsapp.com/send?phone=5511983014966&text=Olá,%20gostaria%20de%20pedir%20' + prato +  '%20-%20Quantidade:%20' + qtd
    msg.href = link

        
    
}

function mandarMsgF(prato){
    var qtd1 = document.getElementById('n1')
    var qtd = Number(qtd1.value)
    
    if(qtd === 0 ){
            qtd = 1
        }else if(qtd < 0){
            qtd = qtd * -1
        }
    


    
    var opcaoTexto = select.options[select.selectedIndex].text;   
         
    var msg = document.querySelector('.meuLink')
    var link = 'https://api.whatsapp.com/send?phone=5511983014966&text=Olá,%20gostaria%20de%20pedir%20' + prato +  '%20-%20Quantidade:%20' + qtd + '%20' + opcaoTexto
    msg.href = link
    alert(opcaonum)
        
    
}

function calcularPreço(valor){
    var preço = document.getElementById('preço')
    var qtd1 = document.getElementById('n1')
    var qtd = Number(qtd1.value)

    if(qtd === 0 ){
        qtd = 1
    }else if(qtd < 0){
        qtd = qtd * -1
    }
    
    var calc = qtd * valor
    preço.innerHTML = 'R$' + calc + ',00'
}

function calcularPreçoF(valor){
    var preço = document.getElementById('preço')
    var qtd1 = document.getElementById('n1')
    var qtd = Number(qtd1.value)
    var select = document.getElementById('seletor')
    if(qtd === 0 ){
        qtd = 1
    }else if(qtd < 0){
        qtd = qtd * -1
    }
    var opcaonum = select.options[select.selectedIndex].value;
    if(valor != 1 ){
        opcaonum = 1
    }
    var calc = qtd * valor * opcaonum
    preço.innerHTML = 'R$' + calc + ',00'
}