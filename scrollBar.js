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

const scrollLinks = document.querySelectorAll('.scroll');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("fixed-nav");

        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0;
    });
})