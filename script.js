const header = document.querySelector("#header");
const contenedor = document.querySelector("#comprasa");
const body = document.querySelector("body");
window.addEventListener("scroll", function(){
    if(comprasa.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})