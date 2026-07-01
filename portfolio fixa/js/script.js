/* ==========================================
   TYPING ANIMATION
========================================== */

const words = [
    "Full Stack Developer",
    "UI / UX Designer",
    "Frontend Developer",
    "PHP Developer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,5,5,.85)";

        navbar.style.boxShadow = "0 10px 35px rgba(0,255,102,.12)";

    } else {

        navbar.style.background = "rgba(8,8,8,.55)";

        navbar.style.boxShadow = "none";

    }

});


/* ==========================================
   SMOOTH REVEAL
========================================== */

const reveals = document.querySelectorAll(

".hero,.about,.skills,.projects,.contact"

);

function reveal() {

    reveals.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0px)";

        }

    });

}

reveals.forEach((item) => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = ".8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


/* ==========================================
   ACTIVE MENU
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   BUTTON RIPPLE
========================================== */

document.querySelectorAll(".buttons a").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-6px) scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});


/* ==========================================
   PRELOADER (Optional)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});