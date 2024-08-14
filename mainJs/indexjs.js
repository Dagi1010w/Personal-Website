const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.iconList');
const navLogo = document.querySelector('.name');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);


const highlightMenu = () =>{
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#homePage');
    const projectMenu = document.querySelector('#projectPage');
    const aboutMenu = document.querySelector('#aboutPage');
    const servicesMenu = document.querySelector('#servicesPage');
    let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 700){
            homeMenu.classList.add('highlight');
            projectMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
            return; 
    }else if(window.innerWidth > 960 && scrollPos < 1700){
            projectMenu.classList.add('highlight');
            homeMenu.classList.remove('highlight');
            aboutMenu.classList.remove('highlight');
            return;
    }else if(window.innerWidth > 960 && scrollPos < 2745){
            aboutMenu.classList.add('highlight');
            projectMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
            return;
    }else if(window.innerWidth > 960 && scrollPos < 3400){
            servicesMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            homeMenu.classList.remove('highlight');
            return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 700) || elem){
        elem.classList.remove('highlight');
    }
}



window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = ()=>{
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);