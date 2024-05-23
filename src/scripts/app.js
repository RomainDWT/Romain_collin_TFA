"use strict";

let links = document.querySelectorAll(".projet__linktab");

for (let link of links) {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        if (link.classList.contains("projet__linktab--active")) {
            clearAll();
            link.classList.remove("projet__linktab--active");
            let contentId = link.getAttribute("href");
            let content = document.querySelector(contentId);
            content.classList.remove("projet__tabcontent--visible");
            setTimeout(() => {
                content.classList.add("projet__hidden");
            }, 300); // Attendez la fin de la transition avant de cacher le contenu
        } else {
            clearAll();
            link.classList.add("projet__linktab--active");
            let contentId = link.getAttribute("href");
            let content = document.querySelector(contentId);
            content.classList.remove("projet__hidden");
            setTimeout(() => {
                content.classList.add("projet__tabcontent--visible");
            }, 10); // Attendez un bref délai avant d'ajouter la classe visible pour déclencher la transition
        }
    });
}

function clearAll() {
    let activeLinks = document.querySelectorAll(".projet__linktab");
    for (let activeLink of activeLinks) {
        activeLink.classList.remove("projet__linktab--active");
    }

    let tabs = document.querySelectorAll(".projet__tabcontent");
    for (let tab of tabs) {
        tab.classList.add("projet__hidden");
        tab.classList.remove("projet__tabcontent--visible");
    }
}

//Scroll horizontal
const stickySections = [...document.querySelectorAll('.stage__sticky')];

window.addEventListener('scroll', () => {
    for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i]);
    }
});

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.stage__scroll');

    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 :  percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}


// GSAP

