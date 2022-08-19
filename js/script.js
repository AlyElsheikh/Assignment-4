let nav = document.getElementsByClassName('nav')[0];
let toggle = document.getElementById('toggle');
let ul = document.getElementById('ul');

window.onscroll = function () {
    if(scrollY > 0){
        nav.style.backgroundColor = "#333";
    }else{
        nav.style.backgroundColor = "transparent";
    }
}

toggle.onclick = function (){
    ul.classList.toggle("toggleClass");
}
