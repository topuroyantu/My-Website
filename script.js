
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



// Form Validation

let userName    = document.getElementById("Name")
let userEmail   = document.getElementById("Email")
let userMessage = document.getElementById("Message")
let flag = 1

function Validation(){

    if (userName.value == ""){
        document.getElementById("user").innerHTML= 'Name Required'
        flag= 0
    }
    else if(userName.value.length <3){
        document.getElementById("user").innerHTML= 'Min 3 Charecter Required'
        flag = 0
    }
    else{
        document.getElementById("user").innerHTML= '';
        flag=1
    }

    if (userEmail.value == ""){
        document.getElementById("email").innerHTML= 'Email Required'
        flag= 0
    }

    else{
        document.getElementById("email").innerHTML= '';
        flag=1
    }

    if (userMessage.value == ""){
        document.getElementById("message").innerHTML= 'Write Something'
        flag= 0
    }

    else{
        document.getElementById("message").innerHTML= '';
        flag=1
    }

    if(flag){
        return true
    }
    else{
        return false
    }
}

// Redirect To Home Page

let redirect = "#home" 

window.onload = function(){
    window.location.replace(redirect)
}

// Website Pre-Loader

let loader = document.getElementById("loader")

window.addEventListener("load", function(){
    loader.style.display="none"
})