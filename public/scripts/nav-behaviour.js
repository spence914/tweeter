$(document).ready(function () {


  $(document).on('click','.navbar-right', function () {
    $('#new-tweet-form').slideToggle();
    $('#tweet-text').focus();
  });



});