
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

// Image Pop-Up

let images = document.getElementById("view")
let popup = document.querySelector(".view")
let close = document.querySelector(".close")

function view(){
    popup.style.display = "block"
    images.src = "Diamond-Teeth-Logo.jpg"
}

function viewTwo(){
    popup.style.display = "block"
    images.src = "agency_website_design.png"
}

function viewThree(){
    popup.style.display = "block"
    images.src = "LOGO.png"
}

function viewfour(){
    popup.style.display = "block"
    images.src = "landing_page.jpg"
}

function viewfive(){
    popup.style.display = "block"
    images.src = "music.jpg"
}

function viewsix(){
    popup.style.display = "block"
    images.src = "artboard___1.png"
}

function viewseven(){
    popup.style.display = "block"
    images.src = "Softcent.png"
}

function vieweight(){
    popup.style.display = "block"
    images.src = "food-website.png"
}

function viewnine(){
    popup.style.display = "block"
    images.src = "w-Logo.jpg"
}


function closeView(){
    popup.style.display = "none"
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