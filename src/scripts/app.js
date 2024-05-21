"use strict";

let links = document.querySelectorAll(".projet__linktab");
for (let link of links) {
   link.addEventListener("click", linkTrigger);
}

function linkTrigger(event) {
   event.preventDefault(); // Empêche le comportement par défaut du lien

   // Désactive tous les liens actifs
   let list = event.currentTarget.closest("a");
   let activeLinks = list.querySelectorAll(".projet__linktab--active");
   for (let activeLink of activeLinks) {
       activeLink.classList.remove("projet__linktab--active");
   }

   let tabs = document.querySelectorAll(".projet__tabcontent");
   for (let tab of tabs) {
       tab.classList.add("projet__hidden");
   }

   // Marque le lien cliqué comme actif
   let clickedLink = event.currentTarget;
   clickedLink.classList.add("projet__linktab--active");

   // Affiche le contenu lié au lien cliqué
   let contentId = clickedLink.getAttribute("href");
   let content = document.querySelector(contentId);
   content.classList.remove("projet__hidden");
}

//Scroll horizontal
const stickySections = [...document.querySelectorAll('.section4__sticky')];

window.addEventListener('scroll', () => {
    for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i]);
    }
});

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.section4__scroll');

    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 :  percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}


// GSAP

