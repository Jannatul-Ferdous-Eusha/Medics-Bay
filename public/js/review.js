let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

if (document.body.clientWidth < 800) {
    elementsToShow = 1;
} else if (document.body.clientWidth < 1100) {
    elementsToShow = 2;
} else {
    elementsToShow = 3;
}

let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + 'px';
slider.style.transition = 'margin';
slider.style.transitionDuration = '0.8s';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth + 'px';
}

function prev() {
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
}

function next() {
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';
}