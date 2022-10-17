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
const slider = document.querySelector('.container');

let imgTags = '';

 for(i = 0; i < images.length; i++){
    imgTags += `<img src="img/${images[i]}" alt="${images[i]}" class="item">`;
 }

slider.innerHTML = imgTags;
