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

let data = document.getElementsByClassName("data")[0]

for(let i = 0; i < 4;i++){
    node = document.createElement("img")
    node.style.top = `${(4*i)}px`
    node.style.left = `${(4*i)}px`
    node.src = `./src/data${i + 1}.png`
    data.appendChild(node)
}