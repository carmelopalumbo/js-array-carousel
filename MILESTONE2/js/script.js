// js

//creo un array con le immagini
const images = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
];

// inserisco le immagini nell html
const slider = document.querySelector('.slides');

let imgTags = '';

 for(i = 0; i < images.length; i++){
    imgTags += `<img src="img/${images[i]}" alt="${images[i]}" class="item hide">`;
 }

slider.innerHTML = imgTags;

//console.log(slider);

//salvo in una collection tutti gli elementi html che hanno la classe 'item'

const items = document.getElementsByClassName('item');

//rimuovo d-none al primo elemento dell array

let counterImages = 0;
items[counterImages].classList.remove('hide');

