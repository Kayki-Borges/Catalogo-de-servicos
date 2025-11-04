 // Menu Toggle otimizado
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            const navLinks = document.querySelectorAll('.nav-link');
            
            // Função para alternar menu
            function toggleMenu() {
                const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
                hamburger.setAttribute('aria-expanded', !isExpanded);
                navMenu.classList.toggle('active');
                
                // Alternar ícone
                const icon = hamburger.querySelector('i');
                icon.classList.toggle('bi-list');
                icon.classList.toggle('bi-x');
            }
            
            // Event listeners
            hamburger.addEventListener('click', toggleMenu);
            
            // Fechar menu ao clicar em um link
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                    
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('bi-x');
                    icon.classList.add('bi-list');
                    
                    // Atualizar link ativo
                    navLinks.forEach(item => item.classList.remove('active'));
                    link.classList.add('active');
                });
            });
            
            // Atualizar link ativo ao rolar (com throttling)
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                if (!scrollTimeout) {
                    scrollTimeout = setTimeout(() => {
                        scrollTimeout = null;
                        
                        const sections = document.querySelectorAll('section');
                        const navLinks = document.querySelectorAll('.nav-link');
                        
                        let current = '';
                        sections.forEach(section => {
                            const sectionTop = section.offsetTop;
                            const sectionHeight = section.clientHeight;
                            if (window.scrollY >= (sectionTop - 100)) {
                                current = section.getAttribute('id');
                            }
                        });
                        
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${current}`) {
                                link.classList.add('active');
                            }
                        });
                    }, 100);
                }
            });
            
            // Fechar menu ao pressionar ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
        
        // Classe para elementos visualmente ocultos mas acessíveis
        const style = document.createElement('style');
        style.textContent = `
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `;
        document.head.appendChild(style);