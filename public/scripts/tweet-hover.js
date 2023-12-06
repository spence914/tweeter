$(document).ready(function () {
  $("article").on({
    mouseenter: function () {
      // Code to run when mouse enters the element
      $(this).toggleClass('box-shadow', true);
    },
    mouseleave: function () {
      // Code to run when mouse leaves the element
      $(this).toggleClass('box-shadow', false);
    }
  });

  $("article i").on({
    mouseenter: function () {
      // Code to run when mouse enters the element
      $(this).toggleClass('hover-color', true);
    },
    mouseleave: function () {
      // Code to run when mouse leaves the element
      $(this).toggleClass('hover-color', false);
    }
  });


});