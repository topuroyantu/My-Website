
// Sticky Menu

let nav = document.querySelector("nav")

window.addEventListener("scroll", function (){
    nav.classList.toggle("sticky", window.scrollY >0)
})


// Responsive Menu

let openBTN = document.getElementById("open")
let closeBTN = document.getElementById("close")
let menu = document.querySelector(".menu")

function openMenu(){
    menu.style.right="0"
}

function closeMenu(){
    menu.style.right="-170px"
}