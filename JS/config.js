// Alternar menu para dispositivos móveis
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript carregado - inicializando menu...');
    
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    const backButton = document.getElementById('back-button');

    // Função para abrir/fechar menu
    function toggleMenu() {
        console.log('Alternando menu...');
        sidebar.classList.toggle('active');
        
        // Criar ou remover overlay
        let overlay = document.querySelector('.sidebar-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            document.body.appendChild(overlay);
            
            // Fechar menu ao clicar no overlay
            overlay.addEventListener('click', closeMenu);
        }
        
        overlay.classList.toggle('active');
    }
    
    // Função para fechar menu
    function closeMenu() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (sidebar) sidebar.classList.remove('active');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }

    // Event listeners
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Hamburger clicado');
            toggleMenu();
        });
    } else {
        console.error('Botão hamburger não encontrado');
    }
    
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeMenu);
    }
    
    // Botão de voltar - ATUALIZADO para princi-log.html
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Botão voltar clicado - redirecionando para princi-log.html');
            
            // Fechar menu mobile se estiver aberto
            if (window.innerWidth <= 992) {
                closeMenu();
                // Pequeno delay para animação
                setTimeout(() => {
                    window.location.href = 'princi-log.html';
                }, 300);
            } else {
                // Redirecionamento imediato em desktop
                window.location.href = 'princi-log.html';
            }
        });
    } else {
        console.error('Botão de voltar não encontrado');
    }

    // Navegação entre seções
    const menuItems = document.querySelectorAll('.sidebar-menu a[data-section]');
    const sections = document.querySelectorAll('.settings-section');
    const sectionTitle = document.getElementById('section-title');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Atualizar item de menu ativo
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar seção correspondente
            const sectionId = this.getAttribute('data-section');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                    
                    // Atualizar título da seção
                    const text = this.textContent.trim();
                    sectionTitle.textContent = text;
                }
            });
            
            // Fechar barra lateral no mobile após seleção
            if (window.innerWidth <= 992) {
                closeMenu();
            }
        });
    });

    // Fechar menu ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Ajustar menu quando a tela for redimensionada
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            closeMenu();
        }
    });

    // Inicialização - garantir que a primeira seção esteja ativa
    const activeSection = document.querySelector('.settings-section.active');
    if (!activeSection && sections.length > 0) {
        sections[0].classList.add('active');
        if (menuItems.length > 0) {
            menuItems[0].classList.add('active');
        }
    }
});

// Opções de tema
const themeOptions = document.querySelectorAll('.theme-option');
themeOptions.forEach(option => {
    option.addEventListener('click', function() {
        themeOptions.forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        
        const color = this.getAttribute('data-color');
        document.documentElement.style.setProperty('--cor-primaria', getColorValue(color));
    });
});

function getColorValue(color) {
    switch(color) {
        case 'light': return '#66afbd';
        case 'dark': return '#343a40';
        case 'blue': return '#4a6ee0';
        case 'green': return '#28a745';
        default: return '#66afbd';
    }
}

// Botões de salvar
const saveButtons = document.querySelectorAll('.btn-success');
const toast = document.getElementById('toast');
        
saveButtons.forEach(button => {
    button.addEventListener('click', function() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    });
});

// Controle deslizante de tamanho de fonte
const fontSizeSlider = document.getElementById('font-size');
if (fontSizeSlider) {
    fontSizeSlider.addEventListener('input', function() {
        document.body.style.fontSize = this.value + 'px';
    });
}