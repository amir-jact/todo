let inputElm = document.querySelector("input[type=text]") 
let formElm = document.querySelector(".add")
let ulElm = document.querySelector("ul")

function addNewTodo(val){
    let liElm = document.createElement("li")
    liElm.className = "list-group-item d-flex justify-content-between align-items-cente"
    let spanElm = document.createElement("span")
    spanElm.innerHTML = val
    let iElm = document.createElement("i")
    iElm.setAttribute("class", "fa fa-trash-o delete")
    iElm.addEventListener("click", function(event){
        event.target.parentElement.remove()
    })
    liElm.append(spanElm, iElm)
    ulElm.append(liElm)

}

formElm.addEventListener("submit", function(event){
    event.preventDefault()
})

inputElm.addEventListener("keyup", function(event){
    let val = event.target.value.trim()
    if(event.key === 'Enter'){
        if(val){
            inputElm.value = ''
            val = val[0].toUpperCase() + val.substring(1);
            addNewTodo(val)
        }
    }
})

