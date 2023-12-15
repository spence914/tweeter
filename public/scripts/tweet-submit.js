$(document).ready(function () {

  $("main section form").on("submit", function (event) {
    event.preventDefault();

    const tweetForm = $(this); // Store a reference to the form

    const tweetText = tweetForm.serialize();
    const tweetTextFormatted = tweetForm.find('textarea[name="text"]').val();

    let throwTweetSubmitError = function (message) {
      $('.error-message').slideUp();
      $('.error-message').slideDown().css('display', 'flex').removeClass('hidden');
      $('#error-message-content').text(message);
    };

    if (tweetTextFormatted.length === 0) {
      throwTweetSubmitError("Tweets cannot be empty");
      return;
      // return alert("Tweets cannot be empty");
    } else if (tweetTextFormatted.length > 140) {
      throwTweetSubmitError("Tweets must have fewer than 140 characters");
      return;
    }

    $('.error-message').slideUp().addClass('hidden');

    const renderNewTweet = function (tweet) {
      // calls createTweetElement for  tweet
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
        tweetForm[0].reset();
      });


  });
});