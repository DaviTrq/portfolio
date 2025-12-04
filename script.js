// Menu mobile toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling para links de navegação
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Fechar menu mobile após clique
        navMenu.classList.remove('active');
    });
});

// Indicador de seção ativa
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Funcionalidade do botão CTA
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#projetos').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Funcionalidade do formulário de contato (Netlify)
document.querySelector('.form').addEventListener('submit', (e) => {
    // Feedback visual durante envio
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Enviando...</span>';
    submitBtn.disabled = true;
    
    // O Netlify processará o formulário automaticamente
    // Não precisamos de e.preventDefault() aqui
});

