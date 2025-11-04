// ========================================
//    HEADER NAVIGATION - INTERATIVIDADE
//    Autor: Nilson Barboza
//    Descrição: Controla menu mobile e mudança 
//    de cor da nav no scroll
// ========================================

// Pega os elementos que vamos usar
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const hamburgerBtn = document.querySelector('.hamburger-menu');
const causasSection = document.getElementById('causas-campanhas');

// ========================================
//    FUNCIONALIDADE 1: SCROLL DA NAV
//    Muda cor da nav quando chega na section
// ========================================

function handleNavScroll() {
    // Pega a posição da section causas-campanhas
    const causasPosition = causasSection.offsetTop;
    // Pega quanto o usuário já scrollou
    const scrollPosition = window.scrollY;
    
    // Se passou da section, adiciona a classe com background branco
    if (scrollPosition >= causasPosition - 100) {
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