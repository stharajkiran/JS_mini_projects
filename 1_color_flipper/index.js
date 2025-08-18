const body = document.getElementsByTagName("body")[0];

function changeColor(color) {
    body.style.backgroundColor = color;
}

function changeColorRandom() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color= `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color; 

    const rand_button = document.getElementById("random");
    rand_button.style.backgroundColor = color;
    rand_button.style.color = "white";
}

function resetColor() {
    body.style.backgroundColor = "white";
    const rand_button = document.getElementById("random");
    rand_button.style.color = "black";
    rand_button.style.backgroundColor = "#f4f4f4";

}