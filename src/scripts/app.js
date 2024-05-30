"use strict";

// SYSTEM TABS
document.addEventListener('DOMContentLoaded', function() {
    let links = document.querySelectorAll(".projet__linktab");

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            if (link.classList.contains("projet__linktab--active")) {
                clearAll();
                link.classList.remove("projet__linktab--active");
                let contentId = link.getAttribute("href");
                let content = document.querySelector(contentId);
                content.classList.add("projet__hidden");
            } else {
                clearAll();
                link.classList.add("projet__linktab--active");
                let contentId = link.getAttribute("href");
                let content = document.querySelector(contentId);
                content.classList.remove("projet__hidden");
            }
        });
    });

    function clearAll() {
        let activeLinks = document.querySelectorAll(".projet__linktab");
        activeLinks.forEach(activeLink => {
            activeLink.classList.remove("projet__linktab--active");
        });

        let tabs = document.querySelectorAll(".projet__tabcontent");
        tabs.forEach(tab => {
            tab.classList.add("projet__hidden");
        });
    }

    // Scroll horizontal
    const stickySections = [...document.querySelectorAll('.stage__sticky')];

    window.addEventListener('scroll', () => {
        stickySections.forEach(section => {
            transform(section);
        });
    });

    function transform(section) {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.stage__scroll');

        let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = Math.max(0, Math.min(400, percentage));
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    }

    // CODE POUR HOVER PHOTOS PROJETS
    let hoverLinks = document.querySelectorAll(".projet__copia, .projet__readimade, .projet__helloworld, .projet__decembre, .projet__rux, .projet__dataplay");
    let imageContainer = document.querySelector(".projet__image-container");
    let image = document.querySelector(".projet__image");

    hoverLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            let imageUrl = link.getAttribute("data-image");
            image.src = imageUrl;
            imageContainer.style.display = "block";
        });

        link.addEventListener('mouseout', () => {
            imageContainer.style.display = "none";
        });

        link.addEventListener('mousemove', (event) => {
            imageContainer.style.top = (event.pageY + 20) + 'px'; // Adjust position as needed
            imageContainer.style.left = (event.pageX + 20) + 'px'; // Adjust position as needed
        });
    });
});