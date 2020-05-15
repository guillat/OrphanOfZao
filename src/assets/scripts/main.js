/**
 * Import dependencies from node_modules
 * see commented examples below
 */
require('bootstrap');

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-inner img');
const overlayClose = overlay.querySelector('.close');

function overlayEffect() {
  if (event.target.classList.contains('img-gallery')) {
    const src = event.target.src;
    overlayImage.src = src;
    console.log(overlayImage);
    overlay.classList.add('open');
  }
}

function close() {
  overlay.classList.remove('open');
}

gallery.addEventListener('click', overlayEffect);
overlayClose.addEventListener('click', close);

(function () {
  console.log('Hello, UOC!');
})();
