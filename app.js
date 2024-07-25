let prev = document.getElementById ('previous-entry')
let countEl = document.getElementById("countel")
let passenger = 0


function addstr() {    
    passenger += 1
    countEl.textContent = passenger
}

function storestr() {
    prev.textContent += passenger + ' , '
    countEl.textContent = 0
    passenger = 0
}