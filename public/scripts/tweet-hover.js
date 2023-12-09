$(document).ready(function () {
  $(document).on({
    mouseenter: function () {
      // Code to run when mouse enters the element
      $(this).toggleClass('box-shadow', true);
    },
    mouseleave: function () {
      // Code to run when mouse leaves the element
      $(this).toggleClass('box-shadow', false);
    }
  }, "article");

  $(document).on({
    mouseenter: function () {
      // Code to run when mouse enters the element
      $(this).toggleClass('hover-color', true);
    },
    mouseleave: function () {
      // Code to run when mouse leaves the element
      $(this).toggleClass('hover-color', false);
    }
  }, "article i");


});