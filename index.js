//document.getElementById("count-el").innerText = 7

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
let prevNumber = count
let resetCounter = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

    console.log(count)
}



