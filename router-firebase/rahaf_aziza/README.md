# Firebase and routing activity

Steps to follow to start the activity

- Fork and clone
- On your local machine make sure to run `yarn` in order to install the packages (Firebase and React Router is already installed)
- Run `yarn start` to start the development server

In this activity we will build a small website using Firebase and React router

This exercise will have 2 parts, we advice doing them in order(It will make things easier)

## Part 1: React Router

Looking at the components folder, for each component create a route in the App.js and a Link in the Nav.js :

- Home should be accesed using `/`
- About should be accesed using `/about`
- ContactUs should be accesed using `/contact-us`
- Users should be accesed using `/users`
- Nav should always be displayed at all the routes

## Part 2: Firebase

Setup the Firebase firestore and add your configs to the firebaseConfig.js file.
After you setup the Firestore, you will be able to use `db` inside the `Home.js` file in order to communicate with your database.

Inside the Home.js, create a form which takes 3 inputs (Make sure that all the inputs are controlled)

- Username
- Email
- Password

after the user submits this input, add new document to the "users" collection in the firestore.

Inside the Users.js,

- Fetch the "users" collection
- Save the data in a state
- iterate over the state and for each user render the User component
- User component should display all the info for the user

BONUS:

- Add a delete button inside User.js component: When this button is pressed delete the user's document from the database
- Add edit button inside User.js, this allows user to edit a certain user's details and then they can confirm the edit which edits the document in the database too

### Happy hacking :'D
