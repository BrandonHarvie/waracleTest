const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbarLinks');
    const navbarLinks =document.querySelectorAll('.navbarLinks li');

    //toggle mobile navbar
    burger.addEventListener('click',()=>{
        nav.classList.toggle('navbar-active');

          //animate mobile navbar links
    navbarLinks.forEach((link, index) =>{
        if (link.style.animation){
            link.style.animation ='';
        } else {
         link.style.animation = `navbarLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
        }
     });

     //Animation for burger icon
     burger.classList.toggle('toggle');

    });

  

}

navSlide();