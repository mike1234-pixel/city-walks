# City Walks API

This is an **express** server designed to interact with a React client contained in the **client** directory.

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

## Authentication and Encryption

The API supports user registration and authentication using the **bcrypt** package to salt and hash the passwords, with **_10 salt rounds_** being applied.

Only encrypted passwords are stored in the database.

## Security

The **helmet** package is used to add an extra layer of security.

## Cross-Origin Resource Sharing

**cors** is enabled on this application to serve requests from the client.

## Creating Administrator Login Credentials

Currently the only way to create administrator login credentials is:

- Replace the code in the **/admin-login** post route with:

`bcrypt.hash(req.body.password, saltRounds, (err, hash) => { const newAdmin = new Admin({ username: req.body.username, password: hash }); newAdmin.save((err) => { if (err) { console.log(err); } else { res.send(newAdmin) } }) })`

- Run the client and enter your credentials into the Admin Login portal, a new Admin will be created. The admin portal can be found on the **/admin** route.

- Replace the code in the **/admin-login** route with the code that was there originally. The original code is:

`const username = req.body.username;
const password = req.body.password;

Admin.findOne({ username: username}, (err, foundAdmin) => {
if (foundAdmin === null) {
console.log("foundAdmin is null")
res.send("unsuccessful login attempt")
} else {
bcrypt.compare(password, foundAdmin.password, (err, result) => {
if (result === true) {
res.send(foundAdmin);
} else {
res.send("unsuccessful login attempt")
}
});
}
})`

- You will now be able to login as an admin using your credentials.
