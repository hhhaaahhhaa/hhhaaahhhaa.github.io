let menu = false
let body = document.getElementsByTagName("body")[0]
let dropdown = document.getElementsByClassName("dropdown")[0]
let dropdown_menu = document.getElementsByClassName("dropdown-menu")[0]

function init_menu(){
    dropdown_menu.style.display = "none"
    dropdown.addEventListener("click", function(){
        if(!menu){
            dropdown_menu.style.display = "flex"
            menu = true
        }
        else{
            dropdown_menu.style.display = "none"
            menu = false
        }
    })
    body.addEventListener("click", function(e){
        if(e.target != dropdown && menu){
            dropdown_menu.style.display = "none"
            menu = false
        }
    })
}

init_menu()

let titles = ["Begin Scene", "Settings", "Select Character", "Game"]
let slider_idx = 0

let slider_anchor = document.getElementsByClassName("info-slider-anchor")[0]
let sliding_circles = document.getElementsByClassName("sliding-circle")
let sliderbar_text = document.getElementsByClassName("sliderbar-text")[0]

init_slider()
function init_slider(){
    slider_idx = 0
    sliderbar_text.innerHTML = titles[slider_idx]
    sliding_circles[slider_idx].style.borderColor = "hsla(0,0%,100%,.7)"

    for(let i = 0; i < sliding_circles.length; i++){
        sliding_circles[i].addEventListener("click", function(){
            updSlider(i)
        })
    }
}

function updSlider(idx){
    if(idx != slider_idx){
        sliderbar_text.innerHTML = titles[idx]
        slider_anchor.style.transform = "translateX(" +　(-100 * idx) + "%)"

        sliding_circles[slider_idx].style.borderColor = "white"
        sliding_circles[idx].style.borderColor = "hsla(0,0%,100%,.7)"
        slider_idx = idx
    }
}