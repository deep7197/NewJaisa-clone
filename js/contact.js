let inputname = document.getElementById("full-name")
let inputR = document.getElementById("remaning-1")
let maxinput = inputname.maxLength

function inputChanges(event) {
    let et = event.target.value;
    let etL = et.length;
    let rc = maxinput - etL;
    inputR.textContent = rc;
}

inputname.addEventListener("input",inputChanges)

let inputname2 = document.getElementById("email")
let inputR2 = document.getElementById("remaning-2")
let maxinput2 = inputname2.maxLength

function inputChanges2(event) {
    let et = event.target.value;
    let etL = et.length;
    let rc = maxinput2 - etL;
    inputR2.textContent = rc;
}

inputname2.addEventListener("input",inputChanges2)

let inputname3 = document.getElementById("mobile")
let inputR3 = document.getElementById("remaning-3")
let maxinput3 = inputname3.maxLength

function inputChanges3(event) {
    let et = event.target.value;
    let etL = et.length;
    let rc = maxinput3 - etL;
    inputR3.textContent = rc;
}

inputname3.addEventListener("input",inputChanges3)

let inputname4 = document.getElementById("massege")
let inputR4 = document.getElementById("remaning-4")
let maxinput4 = inputname4.maxLength

function inputChanges4(event) {
    let et = event.target.value;
    let etL = et.length;
    let rc = maxinput4 - etL;
    inputR4.textContent = rc;
}

inputname4.addEventListener("input",inputChanges4)