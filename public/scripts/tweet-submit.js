$(document).ready(function () {

  $("main section form").on("submit", function (event) {
    event.preventDefault();

    const tweetText = $(this).serialize();


    if (tweetText.length === 5) {
      return alert("Tweets cannot be empty");
    } else if (tweetText.length > 145) {
      return alert("Tweets cannot be longer than 140 characters");
    }

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
      });


  });
});