//////slider ////////
let slider1 = document.getElementById("forX");
let slider2 = document.getElementById("forY");
let slider3 = document.getElementById("forBlur");
let slider4 = document.getElementById("forRange");
//////outPut ////////
let output1 = document.getElementById("slider1");
let output2 = document.getElementById("slider2");
let output3 = document.getElementById("slider3");
let output4 = document.getElementById("slider4");
////// COLOR /////////
let AColor = document.getElementById("outBox");
let BColor = document.getElementById("inBox");

let styleValue = slider1.value+"px "+slider2.value+"px "+slider3.value+"px "+slider4.value+"px "+BColor.value;
////// BOX //////
let box = document.getElementById('BOX');
box.style.boxShadow = styleValue;

console.log(slider2.value);
console.log(slider3.value);
document.getElementById('input').value = styleValue;

slider1.oninput = function() {
    styleValue = this.value+"px "+slider2.value+"px "+slider3.value+"px "+slider4.value+"px "+BColor.value;
    output1.innerHTML = this.value+"px";
    changeValue(styleValue);
}
slider2.oninput = function() {
    styleValue = slider1.value+"px "+this.value+"px "+slider3.value+"px "+slider4.value+"px "+BColor.value;
    output2.innerHTML = this.value+"px";
    changeValue(styleValue);
}
slider3.oninput = function() {
    styleValue = slider1.value+"px "+slider2.value+"px "+this.value+"px "+slider4.value+"px "+BColor.value;
    output3.innerHTML = this.value+"px";
    changeValue(styleValue);
}
slider4.oninput = function() {
    styleValue = slider1.value+"px "+slider2.value+"px "+slider3.value+"px "+this.value+"px "+BColor.value;
    output4.innerHTML = this.value+"px";
    changeValue(styleValue);
}

function changeValue(styleValue)
{
    document.getElementById('input').value = styleValue;
    box.style.boxShadow = styleValue;
}
BColor.oninput = function(){
    styleValue = slider1.value+"px "+slider2.value+"px "+slider3.value+"px "+slider4.value+"px "+this.value;
    box.style.boxShadow = styleValue;
    document.getElementById('input').value = styleValue;
}
AColor.oninput = function(){
    console.log("yep");
    box.style.backgroundColor = this.value;
}