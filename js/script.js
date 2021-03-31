window.onscroll = function() {scrollFunction()};

window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-end');
});

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.height = "80px";
    document.querySelector(".navimage").width = "75";
    document.querySelector(".navimage").height = "60";
  } else {
    document.querySelector(".navbar").style.height = "100px";
    document.querySelector(".navimage").width = "87";
    document.querySelector(".navimage").height = "70";
  }
}