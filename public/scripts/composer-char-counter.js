$(document).ready(function () {

  $(".new-tweet textarea").on("input", function() {

    const charCount = $(this).val().length;
    const maxChars = 140;

    const charsRemaining = maxChars - charCount;

    $(this).closest('.new-tweet').find('.counter').text(charsRemaining);

    
    $(this).closest('.new-tweet').find('.counter').toggleClass('red-text', charsRemaining < 0);
    
  });
});