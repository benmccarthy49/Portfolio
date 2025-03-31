console.log("Page Loaded");


// const aboutMe = document.getElementById("about-me").addEventListener("click", myFunction);
// const social = document.getElementById("socials").addEventListener("click", myFunction);
// const experience = document.getElementById("experience").addEventListener("click", myFunction);
// const languages = document.getElementById("languages-link").addEventListener("click", myFunction);
// const projects = document.getElementById("project-link").addEventListener("click", myFunction);

const navBar = document.getElementsByTagName("li");
for(let link of navBar){
    link.addEventListener("click", myFunction);
}

function myFunction(){
    console.log("Button Clicked");
}