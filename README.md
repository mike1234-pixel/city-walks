# City Walks API

This is an **express** server designed to interact with a React client contained in the **client** directory.

## Getting Started

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
