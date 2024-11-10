// Updated user data
const users = [
    { username: 'user', password: '1234' }
];

// Função de login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username); // Salva o usuário logado no localStorage
        alert('Login successful!');
        window.location.href = 'admin.html'; // Redireciona para admin.html
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
}

// Função para verificar autenticação
function checkAuth() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (!loggedInUser) {
        alert('Please log in first.');
        window.location.href = 'login.html'; // Redireciona para login.html se não estiver autenticado
    }
}

// Função de logout
function logout() {
    localStorage.removeItem('loggedInUser'); // Remove o usuário logado
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Redireciona para login.html
}

// Executa checkAuth automaticamente em admin.html
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('admin.html')) {
        checkAuth();
    }
});
