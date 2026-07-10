// ===============================
// Typing Animation
// ===============================

const roles = [
    "Full Stack Developer",
    "Java Developer",
    "AI and ML Enthusiast",
    "Problem Solver"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const current = roles[roleIndex];

    if(!deleting){

        typingText.textContent = current.substring(0,charIndex+1);

        charIndex++;

        if(charIndex===current.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingText.textContent=current.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            roleIndex=(roleIndex+1)%roles.length;

        }

    }

    setTimeout(typeEffect,deleting?60:100);

}

typeEffect();


// ===============================
// Fade Animation
// ===============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((section)=>{

section.classList.add("hidden");

observer.observe(section);

});