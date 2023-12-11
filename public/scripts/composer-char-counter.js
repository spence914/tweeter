$(document).ready(function () {

  $(".new-tweet textarea").on("input", function () {
    // .val() used to get or set value of form elements (input fields, select boxes, texareas)
    const charCount = $(this).val().length;
    const maxChars = 140;

    const charsRemaining = maxChars - charCount;

    // .closest() traverses up dom until it finds specified class or element
    // .find() traverses back down until it finds specified class or element
    $(this).closest('.new-tweet').find('.counter').text(charsRemaining);

    // toggelClass takes two arguments, a class to toggle on/off, and an expression or boolean value that equates
    // to truthy or falsy, if truthy the specified class toggles on, and if false it toggles off
    // here the class is toggled on when there are no characters remaining

    // note the same effect could have been established with an if statement checking whether remainingChars was
    // over 0 and if not using .css('color', 'red') method on the counter element however then we have js
    // doing styling tasks. In this case the styling is still being done by the CSS so the separation of
    // responsibilities is maintained
    $(this).closest('.new-tweet').find('.counter').toggleClass('red-text', charsRemaining < 0);

  });

  let pageAmountScrolled = 520;

  $(window).resize(function () {
    // Get the current viewport width
    const viewportWidth = $(window).width();

    // Update the threshold based on the viewport width
    if (viewportWidth < 1024) {
      pageAmountScrolled = 520;
    } else {
      pageAmountScrolled = 256;
    }
  });

  $(window).resize();


  $(window).scroll(function () {
    if ($(window).scrollTop() > pageAmountScrolled) {
      $(".scroll-top").fadeIn().toggleClass('hidden');
      $(".navbar-right").fadeOut().toggleClass('hidden');
    } else {
      $(".scroll-top").fadeOut().toggleClass('hidden');
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