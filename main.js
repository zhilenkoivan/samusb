var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 1380){
    const slider = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1268: {
          slidesPerView: 3,
          spaceBetween: 30
        },

      }
    })
  }
})


const burger = document.querySelector(".burger");
const menu = document.querySelector(".sidebar");
const close = document.querySelector(".close");
const closelink = document.querySelector(".sidebar-menu__link");

burger.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    menu.classList.add("sidebar--active");
  }, 1)
  menu.style.display = "block";
})
close.addEventListener('click', (e) => {
  e.preventDefault();
    menu.classList.remove("sidebar--active");
    setTimeout(() => {
      menu.style.display = "none";
    }, 300)
})
for (let i = 0; i < closelink.length; i++) {
  closelink[i].addEventListener('click', (e) => {
  e.preventDefault();
    menu.classList.remove("sidebar--active");
    setTimeout(() => {
      menu.style.display = "none";
    }, 300)
  })
}


const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const modalBack = document.querySelector(".modal-close__back");
const openModal = document.querySelectorAll(".open-modal");

for (let i = 0; i < openModal.length; i++) {

  openModal[i].addEventListener("click", (e) => {
  e.preventDefault();

    modal.classList.add("modal--active");
    modalContent[0].style.display = "block";
    modalContent[2].style.display = "none";
    modalContent[1].style.display = "none";
    setTimeout(() => {
    openModal[1].scrollIntoView(false);
    }, 1);
  })
  
}
closeModal.addEventListener("click", (e) => {
  e.preventDefault();

  modal.classList.remove("modal--active");
})
modalBack.addEventListener("click", () => {
  modal.classList.remove("modal--active");
})

const okModal = document.querySelector(".modal-form__btn");
const modalContent = document.querySelectorAll(".modal-content");

okModal.addEventListener("click", (e) => {
  e.preventDefault();

  modalContent[0].style.display = "none";
  modalContent[1].style.display = "block";
  modalContent[2].style.display = "none";
  setTimeout(() => {
    openModal[1].scrollIntoView(false);
    }, 1);
})
const notModal = document.querySelector(".modal-ok__btn");

okModal.addEventListener("click", (e) => {
  e.preventDefault();

  modalContent[0].style.display = "none";
  modalContent[1].style.display = "none";
  modalContent[2].style.display = "block";
  setTimeout(() => {
    openModal[1].scrollIntoView(false);
    }, 1);
})





const swiperStatus = document.querySelector(".swiper-status");
const slides = document.querySelectorAll(".swiper-slide");
const next = document.querySelector(".swiper-button-next");
const prev = document.querySelector(".swiper-button-prev");

prev.addEventListener("click", () => {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("swiper-slide-active")) {
      if (i==1) {
        swiperStatus.innerHTML = "Листайте вправо"
        console.log(i);
      }
    }
  }
})
next.addEventListener("click", () => {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("swiper-slide-active")) {
      let j = slides.length-2; 
      console.log(i);
      if (i==j) {
        swiperStatus.innerHTML = "Листайте влево"
      }
    }
  }
})