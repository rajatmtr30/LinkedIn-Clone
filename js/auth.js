document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                // Mock authentication
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('userEmail', email);
                
                // Redirect to dashboard
                window.location.href = 'pages/dashboard.html';
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('isAuthenticated', 'true');
            window.location.href = 'dashboard.html';
        });
    }

    // Check auth on protected pages
    const path = window.location.pathname;
    const isPublicPage = path.endsWith('index.html') || path.endsWith('signup.html') || path.endsWith('forgot-password.html') || path === '/';
    
    if (!isPublicPage && localStorage.getItem('isAuthenticated') !== 'true') {
        // Redirect to login if trying to access a protected page without auth
        const depth = path.split('/').length - 1;
        const prefix = depth > 1 ? '../' : '';
        window.location.href = prefix + 'index.html';
    }
});

// Logout functionality
function logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    const depth = window.location.pathname.split('/').length - 1;
    const prefix = depth > 1 ? '../' : '';
    window.location.href = prefix + 'index.html';
}
