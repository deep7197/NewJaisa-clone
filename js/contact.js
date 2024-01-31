let inputname = document.getElementById("full-name")
let inputR = document.getElementById("remaning-1")
let maxinput = inputname.maxLength

function inputChanges(event) {
    let et = event.target.value;
    let etL = et.length;
    let rc = maxinput - etL;
    inputR.textContent = rc;
    if (rc === 0){
        inputR.classList.add("error")
        inputname.classList.add("error")
    } else if ( rc <= 10) {
        inputR.classList.add("warning")
        inputname.classList.add("warning")
        inputR.classList.remove("error")
        inputname.classList.remove("error")
    } else {
        inputR.classList.remove("warning")
        inputname.classList.remove("warning")
    }
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

let inputname4 = document.getElementById("messege")
let inputR4 = document.getElementById("remaning-4")
let maxinput4 = inputname4.maxLength

function inputChanges4(event) {
    let et = event.target.value;
    let etL = et.length;
    let rc = maxinput4 - etL;
    inputR4.textContent = rc;
}

inputname4.addEventListener("input",inputChanges4)



//form validation

submitform = document.querySelector(".form-contaner form")
function dataf() {
    let fullName = document.getElementById("full-name").value;
let email = document.getElementById("email").value;
let mobile = document.getElementById("mobile").value;
let messege = document.getElementById("messege").value;

/* if( fullName=="" || email=="" || mobile=="" || messege=="") {
    document.getElementById("topcontent").innerHTML= "All fields are Mendatory *"

    return false
} */

if(fullName=="") {
    document.getElementById("fullnameT").innerHTML= "Please fill Your Name *"
    return false
}
if (fullName.length <= 2 ) {
    document.getElementById("fullnameT").innerHTML= "Please fill correct Name *"
    return false
}
if (!isNaN(fullName)) {
    document.getElementById("fullnameT").innerHTML= "only cracter are allowed *"
    return false
}

if(email=="") {
    document.getElementById("emailT").innerHTML= "Please fill Your E-mail *"
    return false
}

if (email.indexOf("@") <= 0) {
    document.getElementById("emailT").innerHTML= "invaled E-mail"
    return false
}
if ((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")) {
    document.getElementById("emailT").innerHTML= "invaled E-mail"
    return false
}

if(mobile=="") {
    document.getElementById("mobileT").innerHTML= "Please fill Your Mobile Number *"
    return false
}

if (messege.length <= 10) {
    document.getElementById("mobileT").innerHTML= "Numbers Must be 10 Digits*"
    return false
}

if (isNaN(mobile)) {
    document.getElementById("mobileT").innerHTML= "Numbers only*"
    return false
}

if (mobile.length!=10) {
    document.getElementById("mobileT").innerHTML= "Numbers Must be 10 Digits only*"
    return false
}

if(messege=="") {
    document.getElementById("messegeT").innerHTML= "Please Enter Your Messege *"
    return false
}

if (messege.length <= 30) {
    document.getElementById("messegeT").innerHTML= "Please Enter Minimum 30 Words*"
    return false
}
}