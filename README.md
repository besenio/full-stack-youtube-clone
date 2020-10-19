<h1 align="center">ViewTube</h1>

<div align="center">
   <a href="https://kb-viewtube.herokuapp.com/">
      <img src="./app/assets/images/logo.png">
   </a>
</div>

<div align="center">
   <a href="https://kb-viewtube.herokuapp.com/">
      <img src="./app/assets/images/view-tube-splash-page-02.png">
   </a>
</div>

# Introduction
[ViewTube](https://kb-viewtube.herokuapp.com/) is a video sharing platform for users to express and share themselves. Whether it’s through uploading a video, liking content, or voicing their opinions through comments, ViewTube promotes individuality and user interactions.

# Technologies
-	Ruby on Rails
      - utilized as the backend framework
      - leveraged to create user, video, comment, and like models
      - employed to generate user, video, comment, like, and session controllers
-	React
   - utilized as the frontend framework
-	Redux
-	Amazon Web Services (S3)
-	Heroku

# Features
-	User sign up and log in authentication
-	Logged in user capabilities to upload, update, and delete videos
-  Logged in user capabilities to like or dislike videos
-  Logged in user capabilities to create comment or delete comment on videos
-  User capabilities to search the library of videos

# Challenges
-	The implementation of user authentication through React-Redux was quite cumbersome. There are a lot of moving parts to keep track of who is logged in to who can have access to certain routes on the website. To start off, we would need a couple of reducers, one to identify if the user is logged in or logged out and two others to keep track of user sign up or sign in errors. Then, we would need to have asynchronous and synchronous action creators, along with API functions that make the actual AJAX requests. Thunk middleware is involved to handle the asynchronous actions. Furthermore, “Protected” (renders components if a user is logged in) and “Auth” (renders components if a user is logged out) routes are implemented along with bootstrapping.

# Future Features
-	Ability to comment on a comment
-	Ability to like or dislike a comment
-	User profile page