<div>
   <img src="./app/assets/images/logo.png">
</div>

# ViewTube
[ViewTube](https://kb-viewtube.herokuapp.com/) is a video sharing platform for users to express and share themselves. Whether it’s through uploading a video, liking content, or voicing their opinions through comments, ViewTube promotes individuality and user interactions.

# Technologies
-	Ruby on Rails – backend application, utilizing models and controllers
-	React – frontend application, creating interactive user interfaces
-	Redux – state management application, complementing React
-	Amazon Web Services (S3) – cloud service platform for hosting videos
-	Heroku – cloud service platform for deploying and running the application

# Features
-	User authentication, both on the backend and frontend
-	Logged in user capabilities to upload, update, and delete videos

# Challenges
-	The implementation of user authentication through React-Redux was quite cumbersome. There are a lot of moving parts to keep track of who is logged in to who can have access to certain routes on the website. To start off, we would need a couple of reducers, one to identify if the user is logged in or logged out and two others to keep track of user sign up or sign in errors. Then, we would need to have asynchronous and synchronous action creators, along with API functions that make the actual AJAX requests. Thunk middleware is involved to handle the asynchronous actions. Furthermore, “Protected” (renders components if a user is logged in) and “Auth” (renders components if a user is logged out) routes are implemented along with bootstrapping.

# Pending Features
-	Likes – ability to like or dislike a video
-	Comments – ability to comment on a video
-	Search – ability to search the video library using keywords