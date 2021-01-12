// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  if (links.classList.contains('show-links')) {
    links.classList.remove('show-links');
    navToggle.classList.remove('nav-rotate');
  } else {
    links.classList.add('show-links');
    navToggle.classList.add('nav-rotate');
  }
  // links.classList.toggle('show-links');
});
