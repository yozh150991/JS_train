'use strict'; 

// чекбокс


const checkbox = document.querySelectorAll('.filter-check_checkbox');
checkbox.forEach((elem) => {

});
for (let i = 0; i < checkbox.length; i++) {
checkbox[i].addEventListener('change', function () {
   if (this.checked === true){
      this.nextElementSibling.classList.add('checked'); 
    }  else{
        this.nextElementSibling.classList.remove('checked');
   }
    });
}


/*const checkbox = document.getElementById('discount-checkbox');

checkbox.addEventListener('change', function () {
    if (this.checked === true){
      this.nextElementSibling.classList.add('checked'); 
    }  else{
        this.nextElementSibling.classList.remove('checked');
    }
    });*/
 // end чекбокс
