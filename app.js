let hamburIcon = document.querySelector(".hamburger-icon")
let links = document.querySelector(".links-list")
let link = document.querySelector(".header-link")
let closeMenu = document.querySelector(".close-menu")

hamburIcon.addEventListener("click",function(){
    if(hamburIcon.src == "http://127.0.0.1:5500/images/icons8-hamburger-menu-20.png"){ 
        hamburIcon.src = "./images/icons8-close-20.png"
        links.style.left = "0"
        closeMenu.style.display = "inline-block"
    }
    else{
        hamburIcon.src = "images/icons8-hamburger-menu-20.png"
        links.style.left = "-280px"
        closeMenu.style.display = "none"
    }

})

closeMenu.addEventListener("click",function(){
    hamburIcon.src = "images/icons8-hamburger-menu-20.png"
    links.style.left = "-280px"
})




// console.log(hamburIcon.src) >>http://127.0.0.1:5500/images/icons8-hamburger-menu-20.png
// url  داخلی
// url  خارجی(کامل)
// URL
// href
