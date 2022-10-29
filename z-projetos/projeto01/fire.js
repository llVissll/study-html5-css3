let menu = document.getElementById('navegar')

function clickmenu(){
    
    
    if( menu.style.display == 'none'){
        menu.style.display = 'block'
        
    }
    else{
            menu.style.display = 'block'
        }
    
    }

function fecharmenu(){
    
    
    if( menu.style.display == 'block'){
        menu.style.display = 'none'
        
    }
    else{
            menu.style.display = 'none'
        }
    
}

function tela(){
    if(window.innerWidth >= 769){
        menu.style.display = 'grid'
    }else{
        menu.style.display = 'none'
    }
}

