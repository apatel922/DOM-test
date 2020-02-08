
// Element Variables
var header = document.createElement("header");
var h1 = document.createElement("h1");
var div1 = document.createElement("div");
var img1 = document.createElement("img");
var caption = document.createElement("p");
var caption2 = document.createElement("p");


// Img should inherit previous sibling width
// var inheritWidth = asdklfj;lsfkj;alsdfkj


// Checking Variables
console.log(header, h1, div1, img1, caption);


// Content & Styling
header.style.padding = "10px";
header.style.margin = "30px";
header.style.backgroundColor = "#3A3A3A";
header.style.borderRadius = "6px";

h1.textContent = "Scientology & You";
h1.style.fontFamily = "Impact,Charcoal,sans-serif;";
h1.style.fontSize = "60px";
h1.style.color = "#fff";
h1.style.textAlign = "center";



div1.style.textAlign = "center";

img1.setAttribute("src", "cruise.png");
img1.setAttribute("alt", "ADA Compliant Tom");
img1.style.height = "auto";
img1.style.width = "80%";
img1.style.borderRadius = "6px";

caption.textContent = "Hello, my name is Tom and I like irrational things. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
caption.style.fontSize = "20px";
caption.style.color = "#4D1212";
caption.style.textAlign = "justify";
caption.style.margin = "30px";

caption2.textContent = "Again, just a reminder, my name is Tom and I still like irrational things. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
caption2.style.fontSize = "20px";
caption2.style.color = "#4D1212";
caption2.style.textAlign = "justify";
caption2.style.margin = "30px";


// Fxns
// function breakpoint768 () {
//     if (document.body.style.width <= "768") {
//         header.style.padding = "20px";
//         header.style.margin = "30px";
//         header.style.backgroundColor = "#dddddd";

//         h1.textContent = "Tiny Scientology";
//         h1.style.fontFamily = "Impact,Charcoal,sans-serif;";
//         h1.style.fontSize = "30px";
//         h1.style.backgroundColor = "#ffffff";
//         h1.style.textAlign = "center";

//     } else {
//         header.style.padding = "30px";
//         header.style.margin = "45px";
//         header.style.backgroundColor = "#524040";
//         header.style.borderRadius = "6px";

//         h1.textContent = "Scientology";
//         h1.style.fontFamily = "Impact,Charcoal,sans-serif;";
//         h1.style.fontSize = "60px";
//         h1.style.backgroundColor = "#888888";
//         h1.style.textAlign = "center";
//     }
// }


// Append in body
document.body.appendChild(header);
header.appendChild(h1);

document.body.appendChild(div1);
div1.appendChild(img1);
div1.appendChild(caption);
div1.appendChild(caption2);

