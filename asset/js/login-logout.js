const token = window.localStorage.token
const loginBtnContainer = document.querySelector('.loginBtnContainer');

if (token) {
    loginBtnContainer.innerHTML ='<a href="./login.html"><button id="logout">Logout</button></a>';

    document.getElementById('logout').addEventListener('click', function(){
        localStorage.removeItem('token');
        window.location.href = './index.html';
    })
}

// if ('token'===true){
//     console.log ('benar')
// } else{
//     console.log('salah')
// }