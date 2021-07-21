// CHOOSE PLAN

const planCards = document.querySelectorAll('.plan__card');

planCards.forEach((planCard) => {
  planCard.addEventListener('click', (event) => {
    removeActivePlan();
    planCard.classList.add('plan__card_active');
    event.preventDefault();
  });
});

function removeActivePlan() {
  planCards.forEach((planCard) => {
    planCard.classList.remove('plan__card_active');
  });
}

// COMMENT SLIDER
const commentSlider = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,

  pagination: {
    el: '.pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

const copyrightYear = document.querySelector('.copyright__year');
copyrightYear.innerHTML = new Date().getFullYear();
