'use strict'; 

// чекбокс
const checkbox = document.querySelectorAll('.filter-check_checkbox');
checkbox.forEach((elem) => {
elem.addEventListener('change', function () {
   if (this.checked === true){
      this.nextElementSibling.classList.add('checked'); 
    }  else{
        this.nextElementSibling.classList.remove('checked');
   }
    });
});
/*const checkbox = document.getElementById('discount-checkbox');

checkbox.addEventListener('change', function () {
    if (this.checked === true){
      this.nextElementSibling.classList.add('checked'); 
    }  else{
        this.nextElementSibling.classList.remove('checked');
    }
    });*/
 // end чекбокс
 // корзина
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');
btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    });
closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
    });
 // end корзина
 // работа с товаром
const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
cards.forEach((card) =>{
  const btn = card.querySelector('button');
  btn.addEventListener('click', () => {
    const cardClone = card.cloneNode(true);
    cartWrapper.appendChild(cardClone);
  })
})


 //end работа  с товаром
