
// Updated user data
const users = [
    { username: 'user', password: '1234' }
];

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username);
        alert('Login successful!');
        window.location.href = 'admin.html'; // Redirect to admin page
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
}

// Logout function (called automatically on exiting admin.html)
function logout() {
    localStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Redirect to login
}

function checkAuth() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (!loggedInUser) {
        alert('Please log in first.');
        window.location.href = 'login.html'; // Redireciona para login
    }
}

// Chame essa função assim que a página admin.html for carregada
document.addEventListener('DOMContentLoaded', checkAuth);