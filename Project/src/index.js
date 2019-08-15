'use strict'; 

// чекбокс


const checkbox = document.getElementById('discount-checkbox');


checkbox.addEventListener('change', function () {
    console.log('test');
    });


   

// end чекбокс


var user1 = {
    name: 'Max'
};

var user2 = {
    name: 'Test'
};
var user = {name: 'Mttt'};

function sayTest() {
    console.log ('Hello' + user.name);
};

user.sayTest = sayTest;
user.sayTest ()