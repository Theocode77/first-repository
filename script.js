const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

// Al hacer click, activamos el menu y la animación del ícono
hamburguer.addEventListener("click",()=> {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//Opcional: Cerrar el mení cuando se hace clic en un enlace
document.querySelectorAll(".nav-link").forEach(n=>
    n.addEventListener("click",()=>{
        hamburguer.classList.remove("active");
        navMenu.classList.remove("active");
    })
)