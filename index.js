let hobbies = ["Machine Learning", "Ping-Pong", "Mathematics", "Profile", "Python", "C++", "Anime"]

let expand = false
let slider_idx = 0


let center_button = document.getElementsByClassName("treenode-box--center")[0]
let side_buttons = document.getElementsByClassName("treenode-box--side")
let treenode_buttons = document.getElementsByClassName("treenode-box")

let info_tree = document.getElementsByClassName("info-tree")[0]
let info = document.getElementsByClassName("info")[0]
let info_items = document.getElementsByClassName("info-item")

let slider_anchor = document.getElementsByClassName("info-slider-anchor")[0]
let sliding_circles = document.getElementsByClassName("sliding-circle")
let sliderbar_text = document.getElementsByClassName("sliderbar-text")[0]

init_slider()

center_button.addEventListener("click", function(){  
    if(!expand){
        expand = true
        info_tree.style.left = "0%"
        info.style.right = "0%"
        for(i = 0; i < side_buttons.length; i++){
            side_buttons[i].style.opacity = "1"
        }
        info.style.opacity = "1"
        expanding()
    }
})
function expanding(){
    for(let i = 0; i < treenode_buttons.length; i++){
        treenode_buttons[i].addEventListener("click", function(){
            updSlider(i)
        })
        treenode_buttons[i].style.cursor = "pointer"
    }
    for(let i = 0; i < sliding_circles.length; i++){
        sliding_circles[i].addEventListener("click", function(){
            updSlider(i)
        })
    }
}
function init_slider(){
    slider_idx = 3
    sliderbar_text.innerHTML = hobbies[slider_idx]
    slider_anchor.style.transform = "translateX(-300%)"
    sliding_circles[slider_idx].style.borderColor = "hsla(0,0%,100%,.7)"
}

function updSlider(idx){
    if(idx != slider_idx){
        sliderbar_text.innerHTML = hobbies[idx]
        slider_anchor.style.transform = "translateX(" +　(-100 * idx) + "%)"

        sliding_circles[slider_idx].style.borderColor = "white"
        sliding_circles[idx].style.borderColor = "hsla(0,0%,100%,.7)"
        slider_idx = idx
    }
}
