const date = document.querySelector(".date");

date.innerHTML = new Date().getFullYear();

const toggleBtn = document.querySelector(".toggle-btn");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

toggleBtn.addEventListener('click', function(){

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if (containerHeight === 0) {
        
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        
        linksContainer.style.height = 0;
    }

});

const navBar = document.getElementById("navBar");
const topBtn = document.querySelector(".bottom-to-top-btn");

window.addEventListener('scroll', function(){

    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight) {

        navBar.classList.add("fixed-nav");
    }
    else {

        navBar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 400) {
        topBtn.classList.add("show-link");
    }
    else {
        topBtn.classList.remove("show-link");
    }
});

