
### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly - Software Engineering Immersive
# Cocktail Party

This was the second project for the General Assembly Software Engineering Immersive course. It is a React app that consumes a public API. In a team of three, we chose to use a cocktail API. 

We implemented a few features such as a broad selection of cocktails based on base alcohol (Gim, Rum, Tequila and Vodka) on the homepage,  a randomised “roulette” wheel that picks a base alcohol for a user to help them choose which cocktail to make with some confetti and modal videos that were inspired by the base alcohol.



## Deployment Link
https://cocktailspartyapp.netlify.app

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662829423/Screenshot_2022-09-03_at_17.11.19_atkwvz.png)

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662829422/Screenshot_2022-09-03_at_18.09.19_n2ruxu.png)









    
## Timeframe & Team

In a team of three we had 48hours over a week to complete this project. We worked on the evenings and weekends as most of us were working full-time.
## Tech Stack

•HTML5

•JavaScript (ES6)

•Node.js

•GitHub

•React

•SASS

•Bulma

•coolors.co

•Excalidraw

•Miro

**React Libraries:**

•React-Router-DOM

•VideoModal - https://www.npmjs.com/package/react-modal-video

•Roulette - https://www.npmjs.com/package/react-custom-roulette

•Confetti - https://www.npmjs.com/package/react-confetti





## Project Brief

•Consume a public API – this could be anything but it must make sense for your project

•The app should include a router - with several "pages"

•Include wireframes - that you designed before building the app

•Have semantically clean HTML - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS

•Be deployed online and accessible to the public

•A link to your hosted working app in the URL section of your Github repo

•A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project

•A readme.md file

## Planning

We initially wanted to make an app on Movies. We spent  30mins trying to find an API that would work easily with what we wanted to produce. 
All the movie APIs seemed to have drawbacks that we weren’t comfortable with, so we decided to be more open-minded and look to any “topic” as such which had an API we could see would be easy to implement. 

When we found the cocktail API we were all in agreement that it was great, and we could produce something really fun with it within the limited time we had been given.

As a team we mainly communicated through our Zoom calls and Slack messages. We organised a few calls outside of class hours on Zoom to agree on individual tasks and work on bugs together. We mapped all tasks out on Miro, which we also used for our wireframes.

We worked in Miro to create our wireframes:

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662829722/Screenshot_2022-09-03_at_17.41.35_abpm29.png)

**Our chosen public API**

Get cocktails

API: https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka

 GET /api/i=name

Get more details of chosen cocktail

API: www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

 GET /api/i=${id}
 
 
**Linking Music videos to moods**

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662829791/Screenshot_2022-09-03_at_19.51.37_yrtmij.png)


## Build Process

I was responsible for implementing the “Roulette” wheel page. From the start we had wanted to have a feature that could provide the user with a randomised cocktail, so I looked to React libraries to see what would help us with that. I was able to find the React Custom Roulette library. Initially I was a bit nervous to use it as I had no experience with libraries (like this at least). I worked on it and was able to iterate a few times to get it to work. 

My first go with it:

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662829851/Screenshot_2022-09-03_at_19.28.21_ou7tmv.png)

**The end result:**

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662829896/Screenshot_2022-09-03_at_19.29.29_zcy40x.png)

Implementing the library was in the code was fairly simple through following the documentation and adding the names and colours (a palette we followed on the styling from coolors.co) 

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662829936/Screenshot_2022-09-03_at_19.32.58_pnlerj.png)

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662829968/Screenshot_2022-09-03_at_19.34.22_x4wspr.png)

Adding the functionality of when the wheel starts spinning, adding the confetti we worked on together by using useState to set the mustSpin, prizeNumber and initialState:

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662830008/Screenshot_2022-09-03_at_19.38.33_mad0he.png)

We could then use ternaries to change all those states once the user clicked on the “Spin Me” button which triggered the handleSpinClick function. In this function you can see that we used a randomizer formula and changed the states to ensure that wheel spun (setMustSpin(true)), setPrizeNumber to the newPrizeNumber which was the result from the randomizer formula and setInitialState to false. 

This meant that we could implement simple ternaries in our return:

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662831258/Screenshot_2022-09-03_at_19.43.11_spjfcy.png)

This line (32) controls that if the page is not in its initial state and not spinning or popping confetti then it should do nothing. This was super helpful as it was easy to change once the “spin Me” button had been clicked by the user. It controlled so much of what the Roulette page did in a few lines of code. I really enjoyed learning this more from our lecturers and was happy to implement it on our project.  

I also took responsibility for styling the app. Although we all implemented some styling when adding our different bits using Bulma, I asked to take responsibility for the overall look and polishing at the end. Bulma made a few things like the cards, really simple.

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662831302/Screenshot_2022-09-03_at_19.49.54_rqjyoj.png)

I found myself getting a bit nit-picky on smaller details such as underlining on Links so researched how to change this and was able to remove some default styling in the components returns: 

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662831350/Screenshot_2022-09-03_at_19.58.31_rfpqif.png)

 This method was effective and helped with a few of our Links. 
 
## Challenges

We had a few challenges with implementing a React Carousel for the cards of the cocktails on the homepage.
The idea was to have a click through carousel feature instead of a button to see all Gin Cocktails etc. We felt this would be a nice interaction for the user, especially with swipe ability on mobile, however we just couldn’t get the library to work with the endpoints and ran out of time trying to get the implementation correct. We moved this to our future improvement pile. I believe the only reason we couldn’t work it out was due to the time pressure, and think we would definitely have been able to implement it if we had a few additional hours.




## Wins

•Fun visual design - the pink palette and the confetti really gives it the feeling of a party app

•Fully working website - there really aren’t any significant bugs 

•Great features with “Roulette” and the confetti - implementing these was great fun and add an edge to our project 

•Modal videos - another React library that was a pleasure to work with and again added a feature that gave the app more of an edge

•Local storage “loves” - this was the first time we had learnt about local storage, so we were happy to have implemented it in the project

•Mobile responsive - the app is fully responsive which means you can take your cocktail party on-the-go





## Key Learnings

I loved this project. It was such a different experience from my first one, I felt confident presenting it to our class when the time came. Working in a team was really great. We all approached the project with the same level of dedication and all did our best to deliver a great end result. 
The biggest takeaway I had with this project was firstly the ability to be flexible. If we had stuck to our original idea of a movie app, we might have spent a lot of time trying to code around a difficult API. I really enjoyed that once we had found a simple API, that we ran with that. We set ourselves really strict timelines on how long to look into things, this helped us finish on time.
I became comfortable with Insomnia in this project, as well as learnt to really love React. 

## Bugs

There is unfortunately a bug with the roulette wheel when it is used in Safari mobile. When the user clicks on “Spin me”, the base alcohol that it lands on is not the same as the one it displays.

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662831539/IMG_4C419E5E2849-1_mdg999.jpg)

Unfortunately we did not have time to debug this and took it as a win that it was not happening on Chrome or Safari web browser and only the Safari app. We all learnt that we needed to make time for proper debugging especially on mobile.



## Future Improvements 

•Register and Login functionality, so that users can access all their ‘loved’ cocktails on one page

•A new page with all the cocktails with a filter box on the side so the user can select different base alcohols, different moods etc that will render the appropriate cocktails

•A search bar at the top of the all cocktails page that allows users to search for specific cocktails

•Spotify widget with cocktail specific playlists


## Authors

- [@Robsness23] (https://github.com/Robsness23)
- [@tjmcodes] (https://github.com/tjmcodes) 
- [@wodnjsd] (https://github.com/wodnjsd)


