// Your code goes here

// mouseover
let h1 = document.querySelector("h1");
h1.addEventListener("mouseover", function( event ) {   
  event.target.style.color = "green";
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

// keydown
function backgroundChange(event){
    if (event.key === 'Escape') {
        event.target.style.backgroundColor = 'lightblue'
    }
}
document.addEventListener('keydown', backgroundChange)

// wheel
let divHome = document.querySelector('.footer')
function scroll(event){
    event.target.style.backgroundColor = 'gray'
}
divHome.addEventListener('wheel', scroll)

// drag / drop
document.addEventListener("dragstart", function(event) {
  dragged = event.target;
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("drop", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

// load
window.addEventListener('load', (event) => {
    h1.textContent = 'The Page has Loaded'
  });

// focus
const form = document.querySelector('form');
form.addEventListener('focus', (event) => {
  event.target.style.background = 'blue';    
}, true);
form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);

// resize
let midSection = document.querySelector('.content-destination p')
function changeFont() {
    midSection.style.color = 'red'    
}
window.addEventListener('resize', changeFont)

// scroll
let navBar = document.querySelector('.main-navigation')
let bigPic = document.querySelector('.main-img')
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navBar.style.top = "0";
    } else {
      navBar.style.top = "-110px";
    }
  }
window.addEventListener('scroll', scrollFunction)

// select
let log = document.querySelector('.intro p');
let input = document.querySelector('.intro input');
function logSelection(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = selection;
  }
  console.log("input", input)
  input.addEventListener('select', logSelection);
  
//   dblclick
let mapPic = document.querySelector('.img-content img')
mapPic.addEventListener('dblclick', () => {
    mapPic.classList.toggle('large')
})