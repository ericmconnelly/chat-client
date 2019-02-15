This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This is a simple chat messaging app. It will
  1. take in a username to allow someone to "login", and then 
  2. see a set of chat rooms with available messages. 
  3. when you click into a room, you can view past messages, as well as add new messages.

The first screen you should see is the "login" screen. A user can type a username they'll use

When you've submitted a username, the chat interface is loaded.

On the left, we have:
* user info
  * username
  * time that user has been online
* list of rooms available (only 2 available for demo purposes)

On the right, once you select a chat room, we show:

* room information
  * room name,
  * list of usernames of users in the room (current user's username is highlighted and appears first)
* messages
  * message text
  * username of the user that posted it
  * newest messages on the bottom, older on the top
  * scroll the view to see older messages

## Available Scripts

In the project directory, to start up the front end client app, run

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In the project directory and in separate tab, run the node server with command:

### `npm run api-server`


The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
# chat-client
