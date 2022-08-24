const token = window.localStorage.token
if (token) {
    window.location.href = './index.html'
}
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameValue = username.value;
    const passwordValue = password.value;

    fetch('http://128.199.238.0:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            identifier: usernameValue,
            password: passwordValue
        })
    })
    .then(response => {
        if (response.status === 403){
            alert('Gagal Login')
        } else {
        return response.json() }
    })
    .then(data => {
        window.localStorage.setItem('token', data.token)
        window.location.href = './index.html'
    })
})