const checkOut = document.getElementById('checkout');
checkOut.addEventListener('click', function(){
    const token = localStorage.getItem('token');
    fetch('http://128.199.238.0:3000/books/buy', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status === 200) {
        alert('buku berhasil dibeli')}
        else {
            alert('buku gagal dbeli')
        }
    })
})