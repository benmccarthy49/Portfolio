console.log("Page Loaded");

const navBar = document.getElementsByTagName("li");
for(let link of navBar){
    link.addEventListener("click", myFunction);
}

function myFunction(){
    console.log("Button Clicked");
}