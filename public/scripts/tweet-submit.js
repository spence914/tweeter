$(document).ready(function () {

  $("main section form").on("submit", function (event) {
    event.preventDefault();

    const tweetForm = $(this); // Store a reference to the form

    const tweetText = tweetForm.serialize();


    if (tweetText.length === 5) {
      $('#error-message-content').text("Tweets cannot be empty");
      $('.error-message').slideDown().css('display', 'flex').removeClass('hidden');
      return;
      // return alert("Tweets cannot be empty");
    } else if (tweetText.length > 145) {
      $('#error-message-content').text("Tweets cannot be more than 140 characters");
      $('.error-message').slideDown().css('display', 'flex').removeClass('hidden');
      return;
    }

    $('.error-message').slideUp().addClass('hidden');

    const renderNewTweet = function (tweet) {
      // calls createTweetElement for  tweet
      let newTweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').prepend(newTweet);
    };

    const loadTweets = function () {
      $.get("/tweets/", function (response) {
        renderNewTweet(response[response.length - 1]);
      });
    };

    $.post("/tweets/", tweetText)
      .done(function () {
        loadTweets();
        tweetForm[0].reset();
      });


  });
});