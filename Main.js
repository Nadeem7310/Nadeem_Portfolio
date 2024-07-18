
//==============================Navigation======================

const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close');

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   })
}

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   })
};

const navLink = document.querySelectorAll('.nav_link');
function linkAction() {
   const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//=============================Skills===================================

const skillsContent = document.getElementsByClassName('skills_content'),
   skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
   let itemClass = this.parentNode.className;
   for (i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills_content skills_close'
   }

   if (itemClass === 'skills_content skills_close') {
      this.parentNode.className = 'skills_content skills_open'
   }
}

skillsHeader.forEach((el) => {
   el.addEventListener('click', toggleSkills);
})


//=====================Qualification=====================================

const tabs = document.querySelectorAll('[data-target]'),
   tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
   tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent => {
         tabContent.classList.remove('qualification_active')
      })

      target.classList.add('qualification_active')

      tabs.forEach(tab => {
         tab.classList.remove('qualification_active')
      })

      tab.classList.add('qualification_active')
   })
})



//========================= Services Modal=======================================

const modalViews = document.querySelectorAll('.services_modal'),
   modalBtns = document.querySelectorAll('.services_button'),
   modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function (modalClick) {
   modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
   modalBtn.addEventListener('click', () => {
      modal(i)
   })

})

modalCloses.forEach((modalClose) => {
   modalClose.addEventListener('click', () => {
      modalViews.forEach((modalView) => {
         modalView.classList.remove('active-modal')
      })
   })
})



//======================Theme_Change=============

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)

   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})

//=====================Portfolio Slider============================


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
   showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if (n > slides.length) { slideIndex = 1 }
   if (n < 1) { slideIndex = slides.length }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
}