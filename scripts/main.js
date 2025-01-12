/* 
Basic JavaScript code for website
*/

let button = document.getElementById("button")
let output = document.getElementById("buttonoutput");
let message = "Text generated using JavaScript";

function toggle_text() {
    curr_button_msg = button.innerHTML
    if (curr_button_msg === "Generate text") {
        button.innerHTML = "Erase text"
        output.innerHTML = message
    } else {
        button.innerHTML = "Generate text"
        output.innerHTML = ""
    }
}

button.addEventListener('click', toggle_text)