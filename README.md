# Tweeter Project

Tweeter is a simple, single-page Twitter clone, using Express, jQuery, and Ajax.

On this app users can submit tweets provided they are within the character limit, they are then dynamically rendered 
and displayed above the older tweets.

The page features responsive design elements and is desigend to look good on both mobile and desktop.

I have also implemented several strech features including a toggle for displaying and hiding the tweet submission form,
a 'scroll-to-top' button that only appears once the tweet submission form has been scrolled past, and SASS driven CSS.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. If you would like to make changes to the styling and see updates live, run command `npm run sass-watch` and then edit
.scss files in /sass.

## Dependencies

- Express
- Node 5.10.x or above
- Chance
- Body Parser
- md5

## Screenshots

! ["Screenshot of desktop view of tweeter"](https://github.com/spence914/tweeter/blob/main/docs/tweeter-desktop-view.png?raw=true)
! ["Screenshot of mobile view of tweeter"](https://github.com/spence914/tweeter/blob/main/docs/tweeter-mobile-view.png?raw=true)
! ["Screenshot of tweet submission form"](https://github.com/spence914/tweeter/blob/main/docs/tweet-submission-form.png?raw=true)