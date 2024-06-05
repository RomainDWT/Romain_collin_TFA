"use strict";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

        // CODE POUR HOVER PHOTOS PROJETS
        let hoverLinks = document.querySelectorAll(".projet__copia, .projet__readimade, .projet__helloworld, .projet__decembre, .projet__rux, .projet__dataplay");
        let imageContainer = document.querySelector(".projet__image-container");
        let image = document.querySelector(".projet__image");
        
        hoverLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                let imageUrl1x = link.getAttribute("data-image-1x");
                let imageUrl2x = link.getAttribute("data-image-2x");
        
                image.src = imageUrl1x;
                image.srcset = `${imageUrl1x} 1x, ${imageUrl2x} 2x`;
                image.loading = "lazy";
                image.decoding = "async";
                imageContainer.style.display = "block";
            });
        
            link.addEventListener('mouseout', () => {
                imageContainer.style.display = "none";
            });
        
            link.addEventListener('mousemove', (event) => {
                imageContainer.style.top = (event.pageY + 20) + 'px';
                imageContainer.style.left = (event.pageX + 20) + 'px';
            });
        });

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

        // Animation GSAP
        const up = document.querySelectorAll('.aftereffects__edit2, .photoshop__posterbox, .aftereffects__edit');
        up.forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 150,
                duration: 5,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 65%',
                    end: 'bottom 100%',
                    scrub: true
                }
            });
        });

        const right = document.querySelectorAll('.aftereffects__edit3');
        right.forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                x: 150,
                duration: 5,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 65%',
                    end: 'bottom 100%',
                    scrub: true
                }
            });
        });

        const left = document.querySelectorAll('.aftereffects__edit1, .aboutme__video2');
        left.forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                x: -150,
                duration: 5,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 65%',
                    end: 'bottom 100%',
                    scrub: true
                }
            });
        });
    });
