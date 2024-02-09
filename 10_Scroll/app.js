//Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
//pageYOffset = pageYOffset is a read - only window property that returns the number of pixel the document has been scrolled vertically.
//slice extracts a section of a string without modifying original string.
//offsetTop :- A Number, representing the top position of the element , in pixels. 


//**********Set Date*********** */
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


//***********Close Links********** */
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;

    }
    else {
        linksContainer.style.height = '0';
    }
});
//***********Fixed NavBar********** */
const navbar = document.getElementById('nav');
const topLinks = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLinks.classList.add('show-link');
    }
    else {
        topLinks.classList.remove('show-link');
    }
});



//***********Smooth Scroll********** */


// Select Links
const scrollLinks = document.querySelector('.scroll-link');
scrollLinks.forEach(() => {
    scrollLinks.addEventListener('click', (e) => {
        //prevent default
        e.preventDefault();
        //Navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);

        const element = getElementById(id);
        //Calculate the heights 
        const navHeight = navbar.getBoundingClientRect().height;
        const container = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');

        let position = element.offSetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position += containerHeight;
        }
        window.scrollTo(
            {
                left: 0,
                top: position,
                behavior: 'smooth'
            });
        linksContainer.style.height = 0;

    });
});

