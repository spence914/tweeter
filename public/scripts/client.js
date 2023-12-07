/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function (tweet) {
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

  <p>${tweet.content.text}</p>

  <footer>
    <div class="left">
      <p>${tweet.created_at}</p>
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

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

const $tweet = createTweetElement(tweetData);
console.log($tweet);

$(document).ready(function () {

  $('#tweets-container').append($tweet);

});