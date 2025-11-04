// Função para alternar o menu de perfil
document.getElementById('perf').addEventListener('click', function(e) {
    e.stopPropagation();
    const menu = document.getElementById('profile-menu');
    menu.classList.toggle('active');
});

// Fechar menu ao clicar fora
document.addEventListener('click', function(e) {
    const menu = document.getElementById('profile-menu');
    const profileImg = document.getElementById('perf');
    
    if (!menu.contains(e.target) && e.target !== profileImg) {
        menu.classList.remove('active');
    }
});

// Fechar menu ao pressionar ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.getElementById('profile-menu').classList.remove('active');
    }
});

// Funcionalidade das opções do menu
document.querySelector('.config-option').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'config.html';
});

document.querySelector('.logout').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'index.html';
});