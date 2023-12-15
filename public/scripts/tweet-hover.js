$(document).ready(function () {
  $(document).on({
    mouseenter: function () {
      // Show box shadow when mouse enters the element
      $(this).toggleClass('box-shadow', true);
    },
    mouseleave: function () {
      // Hide box shadow when mouse leaves the element
      $(this).toggleClass('box-shadow', false);
    }
  }, "article");

  $(document).on({
    mouseenter: function () {
      // Change to hover color when mouse enters the element
      $(this).toggleClass('hover-color', true);
    },
    mouseleave: function () {
      // Change back to regular color when mouse leaves the element
      $(this).toggleClass('hover-color', false);
    }
  }, "article i");


});