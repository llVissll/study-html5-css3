let menu = document.getElementById('menu-bar')

function abrirmenu(){
    

    if( menu.style.display =='block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
}
function tamanhotela(){

    if(window.innerWidth >= 1350){
        menu.style.display = 'block'
        
    }else{
        menu.style.display = 'none'
    }
}