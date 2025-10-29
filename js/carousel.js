const inner = document.querySelector('.carousel_inner');
const items = document.querySelectorAll('.carousel_item');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
const total = items.length;

function goToSlide(index) {
  currentIndex = index;
  inner.style.transform = `translateX(${-100 * index}%)`;

  indicators.forEach(dot => dot.classList.remove('active'));
  indicators[index].classList.add('active');
}

document.querySelector('.next_btn').addEventListener('click', () => {
  goToSlide((currentIndex + 1) % total);
});
document.querySelector('.prev_btn').addEventListener('click', () => {
  goToSlide((currentIndex - 1 + total) % total);
});

indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

setInterval(() => {
  goToSlide((currentIndex + 1) % total);
}, 7000);
