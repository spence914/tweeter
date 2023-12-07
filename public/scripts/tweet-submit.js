$(document).ready(function () {

  $("main section form").on("submit", function (event) {
    event.preventDefault();

    const tweetText = $(this).serialize();


    if (tweetText.length === 5) {
      return alert("Tweets cannot be empty");
    } else if (tweetText.length > 145) {
      return alert("Tweets cannot be longer than 140 characters");
    }

    $.post("/tweets/", tweetText);
  });
});