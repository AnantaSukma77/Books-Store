const cartIcon = document.querySelector('.cart-belanja');
cartIcon.addEventListener('click', function(){
    const cartList = document.querySelector('.shopping-cart-container');
    if (cartList.style.display==='none'){
        cartList.style.display = 'block';
    } else {
        cartList.style.display = 'none';
    }
})