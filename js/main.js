// By Adrian 'Dazulu' Payne @ https://twitter.com/dazulu; https://codepen.io/dazulu/pen/NmZVNP
(function () {
  'use strict';

  const container = document.getElementById('container');
  const fragment = document.createDocumentFragment(); // https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
  const minSize = 20;
  const maxSize = 120;
  const distance = 12; // How far elements can travel. Using REM in this pen.
  var amount = 50; // Num of elements to generate

  if (window.innerWidth < 1000) amount = 30;
  if (window.innerWidth > 2560) amount = 100;

  function begin() {
    for (let i = 0; i < amount; i++) {
      fragment.appendChild(createElement());
    }
    container.appendChild(fragment); // append all dynamically created elements at once
    generateAnimation(); // then build their animation
  }

  function createElement() {
    const element = document.createElement('div');
    const diameter = Math.floor(Math.random() * maxSize + minSize) - 1;

    element.style.width = diameter + "px";
    element.style.height = diameter + "px";
    element.style.top = Math.floor(Math.random() * 100) + "%";
    element.style.left = Math.floor(Math.random() * 100) + "%";

    return element;
  }

  function generateAnimation() {
    let collection = document.querySelectorAll('#container > div');
    collection = Array.prototype.slice.call(collection);

    collection.forEach(function (element) {
      element.animate([
      { transform: 'translate(0,0)' },
      { transform: 'translate(' + getDistance() + 'rem,' + getDistance() + 'rem)' }],
      {
        duration: (Math.random() + 1) * 10000,
        direction: 'alternate',
        easing: 'ease-in-out',
        fill: 'both',
        iterations: Infinity });

    });
  }

  // Generates a random +/- number
  function getDistance() {
    let num = Math.floor(Math.random() * distance) + 1;
    return num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  }

  begin();
})();

var inAnimation = 0;

$('#Slime').click(function (){
  if (inAnimation == 0) {
    if ($('#Slime').hasClass('ayaya')) {
      inAnimation = 1;
      $('#Slime').addClass('ayaya-fade-out');
      setTimeout(function (){$('#Slime').removeClass('ayaya');}, 500);
      setTimeout(function (){$('#Slime').removeClass('ayaya-fade-out'); inAnimation = 0;}, 1100);
    } else {
      inAnimation = 1;
      $('#Slime').addClass('ayaya-fade-in');
      setTimeout(function (){$('#Slime').addClass('ayaya');}, 500);
      setTimeout(function (){$('#Slime').removeClass('ayaya-fade-in'); inAnimation = 0;}, 1100);
  }
}
})
