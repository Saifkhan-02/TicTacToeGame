let  btn = document.createElement("button");
btn.innerText = "Click me";
console.log(btn);


let div1 = document.querySelector("div");
div1.prepend(btn);

let el = document.createElement("h1");
el.innerHTML= "<i>Hi, SAIF</i>";

document.querySelector("body").prepend(el);