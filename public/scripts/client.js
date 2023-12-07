/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const createTweetElement = function (tweet) {
//   let $tweet = $(`<article class="tweet">
//   <header>
//     <div class="left">
//     <img src="${tweet.user.avatars}">
//     <h5>${tweet.user.name}</h5>
//   </div>
//   <div class="right">
//     <h5>${tweet.user.handle}</h5>
//   </div>
//   </header>

//   <p>${tweet.content.text}</p>

//   <footer>
//     <div class="left">
//       <p>${tweet.created_at}</p>
//     </div>
//     <div class="right">
//       <i class="fa-solid fa-flag"></i>
//       <i class="fa-solid fa-retweet"></i>
//       <i class="fa-solid fa-heart"></i>
//     </div>
//   </footer>

// </article>`);

//   return $tweet;
// };

// Fake data taken from initial-tweets.json
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

const renderTweets = function (tweets) {
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    let newTweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('#tweets-container').append(newTweet);
  }

};

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

$(document).ready(function () {

  const loadTweets = function() {
    $.get("/tweets/", function(response) {
      renderTweets(response);
    });
  };

  loadTweets();



  //renderTweets(data);
});