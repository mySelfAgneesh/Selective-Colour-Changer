// console.log(color);

// function changeColor(){
//     let color = document.getElementById("textBox").value
//     document.body.style.backgroundColor = color
// }

let button = document.getElementById("changeButton")
button.addEventListener("click", function(e){
    let color = document.getElementById("textBox").value
    document.body.style.backgroundColor = color
    document.getElementById("textBox").value='';
}, false)
