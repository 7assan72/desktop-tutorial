
var header = document.querySelector('header');
var scrollThreshold = 200;

function handleScroll() {

  if (window.scrollY > scrollThreshold) {
    header.classList.add('opaque');
  } else {

    header.classList.remove('opaque');
  }
}

window.addEventListener('scroll', handleScroll);
