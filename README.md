<!-- @format -->

# City Walks API

This is a REST **express** server designed to interact with a React client contained in the **client** directory.

## Getting Started

Clone the repo:

`gh repo clone mike1234-pixel/city-walks`

To install dependencies, cd into the root directory and run:

`yarn add`

To start the API run:

`yarn server`

## Database

This API uses a **MongoDB** database which is interacted with via **mongoose**.

Models and schemas are contained within the **models** directory.

## Authentication and Hashing

The API supports user registration and authentication using the **bcrypt** package to salt and hash the passwords, with **_10 salt rounds_** being applied.

Only hashed passwords are stored in the database.

## Security

The **helmet** package is used to add an extra layer of security.

## Cross-Origin Resource Sharing

**cors** is enabled on this application to serve requests from the client.

## Creating Administrator Login Credentials

Using the Admin Portal on the client you can add walks, add cities, set featured walks to display on the homepage, delete walks and delete cities.

Currently the only way to create administrator login credentials is to:

- Replace the code in the **/admin-login** post route with:

```javascript
bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
  const newAdmin = new Admin({ username: req.body.username, password: hash });

  newAdmin.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send(newAdmin);
    }
  });
});
```

- Run the client and enter your credentials into the Admin Login portal, a new Admin will be created. The admin portal can be found on the **/admin** route.

- Replace the code in the **/admin-login** route with the code that was there originally. The original code is:

```javascript
const username = req.body.username;
const password = req.body.password;

Admin.findOne({ username: username }, (err, foundAdmin) => {
  if (foundAdmin === null) {
    console.log("foundAdmin is null");
    res.send("unsuccessful login attempt");
  } else {
    bcrypt.compare(password, foundAdmin.password, (err, result) => {
      if (result === true) {
        res.send(foundAdmin);
      } else {
        res.send("unsuccessful login attempt");
      }
    });
  }
});
```

- You will now be able to login as an admin using your credentials, and your password will be hashed in the database.

## adminApi.js (Admin Login and Page Updates)

The admin portal on the client allows you to manage the website's contents. The adminApi.js file contains the following routes:

- **/admin-login**(post)
- **/add-walk** (post)
- **/delete-walk** (delete)
- **/add-city** (post)
- **/delete-city** (delete)
- **/set-featured-walk** (post) - sets the `featuredWalk` field on all `walks` in the database to false, then sets `featuredWalk` to true on the three walks submitted. These will be the three "featured walks" that appear on the homepage.

## userApi.js (User Registration and Login)

This app uses to `bcrypt` to hash user passwords and only hashed passwords are stored in the database.

User credentials are stored in the `users` collection. Each user has the following stored:

- \_id
- status {pending || active}
- fname
- lname
- email
- password (stored as a hash)

Passwords are hashed and salted, with 10 salt rounds applied which is the current recommend number of rounds.

The `status` field describes whether a user's account has been verified or not.

When the user registers, they are sent a verification email with a link to verify their email address and activate their account. The link includes the user's \_id and a secretCode that was generated and stored in the database when the user submitted their details on the **/register-user** route. These secret codes time out after 10 minutes.

Clicking the activation link sends a get request to **/verify-user/:userId/:secretCode** which checks whether the secret code is in the database. If this is the case, the user's `status` field is switched to "active" and the account is activated. The user can now log in.

If the secret code times out before the user has the opportunity to verify their account they can make a post request containing their email address to **/reverify-user** which will generate a new secret code and send the user a new email with an activation link.

The user also has the option to reset their password using their old password by sending a post request to **/reset-password** with their email, old password and new password.

Finally, if the user has forgotten their password they can reset their password without their old password by submitting their email to **/forgot-password**. They will be sent an email containing a link to an html view. Their password is confirmed to be there's and in the view **forgotpassword.html** they can submit their email and a new password. Their account will then be found and their password replaced.

## forumApi.js

The forum api contains all the following routes that relate to the forum on the client:

- **/boards** (get) - sends the boards data to the client
- **/add-board** (post) - add a new discussion board (when logged in as administrator)
- **/add-thread** (post) - add a new thread to a board when logged in as a user.
- **/delete-thread** (delete) - delete a thread that belongs to your account when logged in as a user. When threads are added a `userId` field is attached to the thread which contains the \_id of the current user. On the client this is checked against the userId of the current logged in user to determine whether to display the delete button.
- **/add-reply** (post) - add a new reply to a thread when logged in as a user.
- **/delete-reply** (delete) - delete a reply that belongs to your accout when logged in as a user. Delete buttons are only displayed on the client when the `userId` on the reply matches that of the current user.

## contactApi.js (Contact Form)

The contactApi handles contact form submissions. It contains a single post route to **/contact-form** which sends the administrator an email containing the form content, and sends the sender an email with the message "Thanks very much for getting in touch. We will get back to you with a response shortly."

## dataApi.js (Walks and Page data)

The dataApi contains get routes for **/walks** and **/cities** which send the respective collections to the client.
