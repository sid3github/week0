
function randomColor() {
    let letter = "123456789ABCDEF";
    let color = "#";
for (let i = 0; i < 6; i++){
    color += letter[Math.floor(Math.random()*16)];
}
    return color;
}

function colorGen() {
    let el = document.getElementById("box");
    el.style.backgroundColor = randomColor();
}