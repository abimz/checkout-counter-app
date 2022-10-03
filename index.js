//document.getElementById("count-el").innerText = 7

let countEl = document.getElementById("countItem-el")
let saveEl = document.getElementById("checkout-el")

let count = 0
let prevNumber = count
let resetCounter = 0

function addItem(){
    count += 1
    countEl.textContent = count
}

function checkout(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

    console.log(count)
}



