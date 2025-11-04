// ========================================
//    HEADER NAVIGATION - INTERATIVIDADE
//    Autor: Nilson Barboza (ajustado)
//    Descrição: Controla menu mobile e mudança 
//    de cor da nav no scroll
// ========================================

// Pega os elementos que vamos usar
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const hamburgerBtn = document.querySelector('.hamburger-menu');

// ========================================
//    FUNCIONALIDADE 1: SCROLL DA NAV
//    Muda cor da nav ao rolar a página
// ========================================

function handleNavScroll() {
    const scrollPosition = window.scrollY;

    // Se o usuário rolou mais de 50px, adiciona a classe
    if (scrollPosition > 50) {
        header.classList.add('nav-scrolled');
    } else {
        // Se voltou pro topo, remove a classe
        header.classList.remove('nav-scrolled');
    }
}

// Fica ouvindo o scroll da página
window.addEventListener('scroll', handleNavScroll);

// ========================================
//    FUNCIONALIDADE 2: MENU MOBILE
//    Abre e fecha o menu hamburguer
// ========================================

function toggleMobileMenu() {
    // Alterna a classe 'active' no menu e no botão
    navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
    
    // Previne scroll do body quando menu tá aberto
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Quando clicar no hamburguer, abre/fecha o menu
hamburgerBtn.addEventListener('click', toggleMobileMenu);

// ========================================
//    FUNCIONALIDADE 3: FECHAR MENU
//    Fecha o menu quando clicar em um link
// ========================================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Só fecha se tiver em mobile (menu ativo)
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// ========================================
//    BONUS: FECHAR MENU AO REDIMENSIONAR
//    Fecha o menu se mudar de mobile pra desktop
// ========================================

window.addEventListener('resize', () => {
    // Se a tela ficar maior que 768px, fecha o menu
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});
