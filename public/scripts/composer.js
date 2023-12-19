$(document).ready(function () {

  $(".new-tweet textarea").on("input", function () {
    // .val() used to get or set value of form elements (input fields, select boxes, texareas)
    const charCount = $(this).val().length;
    const maxChars = 140;

    const charsRemaining = maxChars - charCount;

    // .closest() traverses up dom until it finds specified class or element
    // .find() traverses back down until it finds specified class or element
    $(this).closest('.new-tweet').find('.counter').text(charsRemaining);


    $(this).closest('.new-tweet').find('.counter').toggleClass('red-text', charsRemaining < 0);

  });

  let showScrollTopAt = 520;


  //Function to determine what threshold to show scroll to top button
  // 520px down for mobile view, 256px down for desktop view
  $(window).resize(function () {
    const viewportWidth = $(window).width();

    if (viewportWidth < 1024) {
      showScrollTopAt = 400;
    } else {
      showScrollTopAt = 240;
    }
  });

  $(window).resize();


  //Hides and shows scroll to top button, and navbar 'write a new tweet' button when scroll threshold is met
  $(window).scroll(function () {
    if ($(window).scrollTop() > showScrollTopAt) {
      $(".scroll-top").fadeIn();
      $(".navbar-right").fadeOut().toggleClass('hidden');
    } else {
      $(".scroll-top").fadeOut();
      $(".navbar-right").fadeIn().toggleClass('hidden');
    }
  });



  $("button.scroll-top").on('click', function () {
    // Animate scrolling to the top of the page
    $('html, body').animate({ scrollTop: 0 }, function () {
      // After scrolling, focus on the textarea
      $('.new-tweet').slideDown(function () {
        $('.new-tweet').toggleClass('hidden', false);
        $('#tweet-text').focus();
      });
    });
  });
});