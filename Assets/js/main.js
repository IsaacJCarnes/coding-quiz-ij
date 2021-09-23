console.log("I'm connected");

var imgTag = document.createElement("img");

imgTag.setAttribute("src", "Assets/images/hoopla-is-dead.png");
imgTag.setAttribute("alt", "Start Test");

imgTag.addEventListener("click", function(){
    console.log("Maybe this will start");
});

document.body.appendChild(imgTag);