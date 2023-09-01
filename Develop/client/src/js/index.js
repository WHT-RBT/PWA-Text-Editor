import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
const spinnerElement = document.querySelector('.loading-spinner'); // this will directly select the spinner

// this function is to load the spinner dynamically 
const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div> 
  `;
  main.appendChild(spinner);
  return spinner;
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  const spinnerElement = loadSpinner();
  console.log('Before setting timeout to hide spinner');  // debug line
  setTimeout(() => {
    console.log('Inside timeout function, hiding spinner');  // debug line
    spinnerElement.style.display = 'none';  // this hides the spinner after 5 secs
  }, 5000);
  console.log('After hiding spinner');  // debug line
} else {
  if (editor.isFullyLoaded) {
    spinnerElement.style.display = 'none';  
  }
}

// this checks if the service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
