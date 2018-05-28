var btn = document.querySelector('.search-button');
var input = document.querySelector('.search-input');

btn.addEventListener('click', function(el) {
  if (input.style.visibility == 'visible') {
    input.style.transform = 'scaleX(0)';
    input.style.visibility = 'hidden';
  } else {
    input.style.transform = 'scaleX(1)';
    input.style.visibility = 'visible';
  }
});
