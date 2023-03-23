const menuHamburguesa = document.querySelector("#menu-hamburguesa");
const closeHamburguesa = document.querySelector("#close-hamburguesa");
const aside = document.querySelector(".contenedor-aside");

menuHamburguesa.addEventListener("click", () => { 
    aside.classList.add("aside-visible");
})

closeHamburguesa.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})





