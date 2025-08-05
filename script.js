// /*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let allA = document.querySelectorAll(".navbar a");
menuIcon.addEventListener("click", () => {
  if (navbar.style.display == "none") {
    navbar.style.display = "flex";
    allA.forEach((a) => {
      a.addEventListener("click", () => {
        navbar.style.display = "none";
        menuIcon.classList.value = "fa-solid fa-bars";
      });
    });
    menuIcon.classList.value = "fa-solid fa-xmark";
    setTimeout(() => {
      navbar.style.display = "none";
      menuIcon.classList.value = "fa-solid fa-bars";
    }, 5000);
  } else {
    navbar.style.display = "none";
    menuIcon.classList.value = "fa-solid fa-bars";
  }
});

// /*==================== scroll reveal ====================*/
ScrollReveal({
  reset:true,
  distance:'80px',
  duration:2000,
  delay:200
})

ScrollReveal().reveal('.home-content, .heading',{origin:'top'})
ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact form',{origin:'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'})
// /*==================== typed js ====================*/
const typed=new Typed('.multiple-text',{
  strings:["Full Stack Developer", "Graphic Designer","Learner"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:500,
  loop:true
})