document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const loading = document.getElementById('loading');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            
            // Simular loading
            btnText.style.display = 'none';
            loading.style.display = 'inline-block';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.8';
            
            // Simular processo de login
            setTimeout(() => {
                btnText.style.display = 'inline';
                loading.style.display = 'none';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                
                if(email.value && password.value) {
                    // Login bem-sucedido
                    submitBtn.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
                    submitBtn.style.color = 'white';
                    btnText.textContent = 'Login realizado!';
                    
                    // Redirecionar
                    setTimeout(() => {
                        window.location.href = 'princi-log.html';
                    }, 500);
                } else {
                    btnText.textContent = 'Tente novamente';
                    setTimeout(() => {
                        btnText.textContent = 'Acessar';
                        submitBtn.style.background = 'white';
                        submitBtn.style.color = '#667eea';
                    }, 1000);
                }
            }, 1000);
        });