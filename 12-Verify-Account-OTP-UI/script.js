document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.otp-input');
    
    // Focus on first input on load
    inputs[0].focus();
    
    // Handle OTP input navigation
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const currentIndex = parseInt(input.dataset.index);
            const value = input.value;
            
            if (value.length === 1 && currentIndex < inputs.length - 1) {
                inputs[currentIndex + 1].focus();
            }
        });
        
        input.addEventListener('keydown', (e) => {
            const currentIndex = parseInt(input.dataset.index);
            
            if (e.key === "Backspace" && input.value === '' && currentIndex > 0) {
                inputs[currentIndex - 1].focus();
            }
        });
    });
    
    // Verify button click handler
    document.querySelector('.verify-btn').addEventListener('click', () => {
        let otp = '';
        inputs.forEach(input => otp += input.value);
        
        if (otp.length !== 4) {
            // Add error animation
            const container = document.querySelector('.otp-container');
            container.style.animation = 'shake 0.5s';
            setTimeout(() => container.style.animation = '', 500);
            return;
        }
        
        // Simulate verification
        document.querySelector('.container').innerHTML = `
            <div class="lock-icon" style="color:#4CAF50; animation: none;">
                <i class="fas fa-check-circle"></i>
            </div>
            <h1>Verified Successfully!</h1>
            <p class="subtitle">Your account has been verified</p>
            <div style="margin-top: 30px;">
                <button class="verify-btn" onclick="location.reload()">Verify Another</button>
            </div>
        `;
    });
    
    // Add shake animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-10px); }
            40% { transform: translateX(10px); }
            60% { transform: translateX(-10px); }
            80% { transform: translateX(10px); }
        }
    `;
    document.head.appendChild(style);
});