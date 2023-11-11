let menuopened = false;
function menu(){
    let menu = document.getElementsByClassName('menu')[0];
    if(!menuopened){
        menu.style.width = '175px';
        menuopened = true;
    } else {
        menu.style.width = '0px';
        menuopened = false;
    }
}