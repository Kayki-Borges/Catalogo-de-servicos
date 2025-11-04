        document.getElementById('CadForm').addEventListener('submit', function(e) {
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
            
            // Simular processo de cadastro
            setTimeout(() => {
                btnText.style.display = 'inline';
                loading.style.display = 'none';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                
                if(email.value && password.value) {
                    // Cadastro bem-sucedido
                    submitBtn.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
                    submitBtn.style.color = 'white';
                    btnText.textContent = 'Cadastro realizado!';
                    
                    setTimeout(() => {
                        window.location.href = 'princi-log.html';
                    }, 500);
                } else {
                    // Caso de erro
                    btnText.textContent = 'Tente novamente';
                    submitBtn.style.background = '#dc3545';
                    
                    setTimeout(() => {
                        btnText.textContent = 'Cadastrar';
                        submitBtn.style.background = '#007bff';
                        submitBtn.style.color = 'white';
                    }, 1000);
                }
            }, 1000);
        })