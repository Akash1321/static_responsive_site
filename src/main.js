const openBtn = document.querySelector(".bi-list");
const closeBtn = document.querySelector(".bi-x");
const navMenu = document.querySelector(".navbar__menu")


function openHandler(){
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    navMenu.classList.toggle("hidden");


    
}

function closeHandler(){

    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    navMenu.classList.toggle("hidden");


}

openBtn.addEventListener("click", openHandler);
closeBtn.addEventListener("click", closeHandler)