$(document).ready(function () {

  $("main section form").on("submit", function (event) {
    //Prevent page reload on submission
    event.preventDefault();

    // Store a reference to the form
    const tweetForm = $(this);

    //Encode form elements as a string for submission
    const tweetText = tweetForm.serialize();

    // Use actual value of form text for character counting
    const tweetTextFormatted = tweetForm.find('textarea[name="text"]').val();

    let throwTweetSubmitError = function (message) {
      $('.error-message').slideUp();
      $('.error-message').slideDown().css('display', 'flex').removeClass('hidden');
      $('#error-message-content').text(message);
    };

    if (tweetTextFormatted.length === 0) {
      throwTweetSubmitError("Tweets cannot be empty");
      return;
    } else if (tweetTextFormatted.length > 140) {
      throwTweetSubmitError("Tweets must have fewer than 140 characters");
      return;
    }

    $('.error-message').slideUp().addClass('hidden');

    const renderNewTweet = function (tweet) {
      // calls createTweetElement for new tweet
      let newTweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').prepend(newTweet);
    };

    const loadNewTweet = function () {
      $.get("/tweets/", function (response) {
        renderNewTweet(response[response.length - 1]);
      });
    };

    $.post("/tweets/", tweetText)
      .done(function () {
        loadNewTweet();
        // reset text in tweet form upon submission
        tweetForm[0].reset();
        // reset counter on submission
        $(".counter").text("140");
      });


  });
});