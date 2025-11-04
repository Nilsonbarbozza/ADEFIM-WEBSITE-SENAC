// ========================================
//       CAROUSEL / SLIDER - HERO SECTION
//       Autor: Nilson Barboza
//       Descrição: Controla navegação e 
//       transição automática dos slides
// ========================================

// Pega os elementos do carousel
const carouselInner = document.querySelector('.carousel_inner');
const carouselItems = document.querySelectorAll('.carousel_item');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');

// Variáveis de controle
let currentIndex = 0;
const totalSlides = carouselItems.length;
let autoPlayInterval;

// ========================================
//    FUNÇÃO: IR PARA UM SLIDE ESPECÍFICO
// ========================================
function goToSlide(index) {
  // Garante que o index fique dentro do range
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Move o carousel pro slide correto
  carouselInner.style.transform = `translateX(${-100 * currentIndex}%)`;

  // Atualiza os indicadores
  updateIndicators();
}

// ========================================
//    FUNÇÃO: ATUALIZAR INDICADORES
// ========================================
function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// ========================================
//    FUNÇÃO: PRÓXIMO SLIDE
// ========================================
function nextSlide() {
  goToSlide(currentIndex + 1);
}

// ========================================
//    FUNÇÃO: SLIDE ANTERIOR
// ========================================
function prevSlide() {
  goToSlide(currentIndex - 1);
}

// ========================================
//    EVENT LISTENERS: BOTÕES
// ========================================
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoPlay(); // Reinicia o timer quando clica manual
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoPlay(); // Reinicia o timer quando clica manual
});

// ========================================
//    EVENT LISTENERS: INDICADORES
// ========================================
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    goToSlide(index);
    resetAutoPlay(); // Reinicia o timer quando clica manual
  });
});

// ========================================
//    AUTO PLAY: TROCA AUTOMÁTICA
// ========================================
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 7000); // Troca a cada 7 segundos
}

// Para o autoplay e reinicia
function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// ========================================
//    TOUCH/SWIPE SUPPORT (Mobile)
// ========================================
let touchStartX = 0;
let touchEndX = 0;

carouselInner.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carouselInner.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  // Se swipe pra esquerda (próximo)
  if (touchStartX - touchEndX > 50) {
    nextSlide();
    resetAutoPlay();
  }
  // Se swipe pra direita (anterior)
  if (touchEndX - touchStartX > 50) {
    prevSlide();
    resetAutoPlay();
  }
}

// ========================================
//    INICIALIZAÇÃO
// ========================================
// Inicia o autoplay quando a página carregar
startAutoPlay();

// Para o autoplay quando o usuário sair da aba
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearInterval(autoPlayInterval);
  } else {
    startAutoPlay();
  }
});