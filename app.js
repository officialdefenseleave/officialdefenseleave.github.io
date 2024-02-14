var bar = document.querySelector(".bar");
var nav = document.querySelector(".rootNavMenu")

bar.addEventListener("click",function(){
    if(nav.classList.contains("open")){
        nav.classList.remove("open");
        nav.style.height="20px";
   }else{
    nav.classList.add("open")
    nav.style.height="350px";
   }
})