// const btnPlus = document.querySelector('.btn-plus');
// const btnMin = document.querySelector('.btn-minus');
// const input = document.querySelector('.masukan');
// let jumlah = parseInt(input.getAttribute('value'));

// btnPlus.addEventListener('click', function(){
//     jumlah = jumlah + 1;
//     input.setAttribute('value', jumlah);
// })
// btnMin.addEventListener('click', function(){
//     jumlah = jumlah - 1;
//     if (jumlah === -1) {
//         jumlah = 0
//     }
//     input.setAttribute('value', jumlah);
// })


const book = document.querySelectorAll('.books .buku');
const btnPlus = document.querySelectorAll('.btn-plus');
const btnMin = document.querySelectorAll('.btn-minus');
const input = document.querySelectorAll('.masukan');

book.forEach((el, i) => {
    let value = parseInt(input[i].getAttribute('value'));
    btnPlus[i].addEventListener('click',() => {
        value ++;
        input[i].setAttribute('value', value);
    })
    btnMin[i].addEventListener('click', () => {
        if (value > 0){
            value --;
            input[i].setAttribute('value', value);
        }
    })
})