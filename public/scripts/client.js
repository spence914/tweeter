
const renderTweets = function (tweets) {
  // loops through tweets
  for (const tweet of tweets) {
    // call createTweetElement for each tweet
    let newTweet = createTweetElement(tweet);
    // take return value and prepends it to the tweets container
    $('#tweets-container').prepend(newTweet);
  }

};

const createTweetElement = function (tweet) {

  //Escape function to prevent cross site scripting on tweet submission
  const escape = function (str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  let $tweet = $(`<article class="tweet">
  <header>
    <div class="left">
    <img src="${tweet.user.avatars}">
    <h5>${tweet.user.name}</h5>
  </div>
  <div class="right">
    <h5>${tweet.user.handle}</h5>
  </div>
  </header>

  <p id="tweet-text">${escape(tweet.content.text)}</p>

  <footer id="tweet-footer>
    <div class="left">
      <p>${timeago.format(tweet.created_at)}</p>
    </div>
    <div class="right">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>

</article>`);

  return $tweet;
};

$(document).ready(function () {

  const loadTweets = function() {
    $.get("/tweets/", function(response) {
      renderTweets(response);
    });
  };

  loadTweets();


});