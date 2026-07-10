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
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent = currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent = currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);

}

document.addEventListener("DOMContentLoaded", () => {

    if (typingText) {

        typeEffect();

    }

});