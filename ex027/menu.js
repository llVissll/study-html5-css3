let menu = document.getElementById('navega')

function clickmenu(){
    
    
    if( menu.style.display == 'block'){
        menu.style.display = 'none'
        
    }else{
        menu.style.display = 'block'
    }

}

function mudouTamanho(){

    if(innerWidth >= 768){
        menu.style.display = 'flex'
    }else{
        menu.style.display = 'none'
    }
}