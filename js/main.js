// style navbar while scrolling
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var navbarToggleBtn = document.getElementById("navbarToggleBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("fixed-top-after-scroll");
      
    //   .navbar-toggler-icon{
    //     color: #999 !important;
    // }
      navbarToggleBtn.classList.add("black-toggle");
    } else {
      navbar.classList.remove("fixed-top-after-scroll");
      // navbarToggleBtn.classList.remove("black-toggle");
    }
  });
});


// features slider
document.addEventListener('DOMContentLoaded', function () {
  const flickity = new Flickity('.flickity-viewport-visible', {
    cellAlign: 'left',
    contain: true,
    imagesLoaded: true,
    pageDots: false,
  });

  // Previous button click event
  document.querySelector('.previous').addEventListener('click', function () {
    flickity.previous();
  });

  // Next button click event
  document.querySelector('.next').addEventListener('click', function () {
    flickity.next();
  });
});


baguetteBox.run('.gallery-images');

