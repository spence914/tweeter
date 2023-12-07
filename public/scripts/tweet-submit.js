$(document).ready(function () {

  $("main section form").on("submit", function(event) {
    event.preventDefault();

    const tweetText = $(this).serialize();

    console.log(tweetText);

    $.post("/tweets/", tweetText);
  });
});