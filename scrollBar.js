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