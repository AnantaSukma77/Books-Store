const token = window.localStorage.token; //window get token in local storage
if (token) {
  //jiks token bernilaai true
  window.location.href = './index.html'; //window merujuk lokasi index
}
const loginBtn = document.getElementById('login-btn'); //get tombol login

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const username = document.getElementById('username'); //get element user name
  const password = document.getElementById('password'); //get element password
  const usernameValue = username.value; //get nilai input username
  const passwordValue = password.value; //get nilai input password

  fetch('http://128.199.238.0:3000/auth/login', {
    method: 'POST', //pilih methode POST
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: usernameValue,
      password: passwordValue,
    }),
  })
    .then((response) => {
      if (response.status === 403) {
        alert('Gagal Login');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      window.localStorage.setItem('token', data.token);
      window.location.href = './index.html';
    });
});
