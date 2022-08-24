let books = [];
let selectedBooks = localStorage.getItem('selectedBooks') && JSON.parse(localStorage.getItem('selectedBooks')).length ? JSON.parse(localStorage.getItem('selectedBooks')) : [];

fetch('http://128.199.238.0:3000/books')
  .then(function (response) {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((data) => {
    printBuku(data);
  });

function printBuku(data) {
  const booksContainer = document.querySelector('#books-cat .books');
  let html = ``;
  data.forEach((element) => {
    html += cardBooks(element);
  });
  // console.log(html)
  booksContainer.innerHTML = html;
}

// SAYA TELAH MENCOBA MEMBUAT KODING MENAMBAH KE KERANJANG BELANJA
// NAMUN BANYAK EROR YANG BELUM BISA SAYA ATASI

function cardBooks(element) {
  return `
    <div class="book">
        <div class="img"><img src="${element.image}"></div>
        <div class="author">${element.author}</div>
        <div class="book-title">${element.title}</div>
        <div class="price">$ ${element.price_value}</div>
        <div class="add-to-cart">
            <button class="btnAdd"><i class="fas fa-cart-plus"></i></button>
            <button class="btn-plus"><i class="fas fa-plus"></i></button>
            <input class="masukan" type="text" value="1">
            <button class="btn-minus"><i class="fas fa-minus"></i></button>
        </div>
    </div>`;
}

document.querySelector('.shopping-cart-container').style.display = 'none';
