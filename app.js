// Image Slider 

const carouselSlide = document.querySelector('.carousel-slide'); 
const carouselImages = document.querySelectorAll('.carousel-slide img'); 
//Buttons 
const prevBtn = document.querySelector('#prevBtn'); 
const nextBtn = document.querySelector('#nextBtn'); 
//Counter 
let counter = 1; 
const size = carouselImages[0].clientWidth; 


carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 

nextBtn.addEventListener('click', () => { 
    if(counter >= carouselImages.length -1) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
    counter++; 
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
    counter--; 
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
}); 

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition ="none"; 
        counter = carouselImages.length - 2; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none"; 
        counter = carouselImages.length - counter; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; }});

// Image slider

// Scroll animation 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hidden4');
hiddenElements2.forEach((el) => observer.observe(el));

const hiddenElements3 = document.querySelectorAll('.hidden5');
hiddenElements3.forEach((el) => observer.observe(el));

// Scroll animation 

// navbar 
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-div')[0]
const header = document.getElementsByClassName('header')[0]
const boop = document.getElementsByClassName('boop')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    header.classList.toggle('extend')
    boop.classList.toggle('down')
})

const about = document.getElementsByClassName('about')[0]
const hour = document.getElementsByClassName('hours')[0]
const contact = document.getElementsByClassName('contact')[0]
const reserve = document.getElementsByClassName('reserver')[0]

about.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
    header.classList.remove('extend')
    boop.classList.remove('down')
})

hour.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
    header.classList.remove('extend')
    boop.classList.remove('down')
})

contact.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
    header.classList.remove('extend')
    boop.classList.remove('down')
})

reserve.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
    header.classList.remove('extend')
    boop.classList.remove('down')
})


// navbar 