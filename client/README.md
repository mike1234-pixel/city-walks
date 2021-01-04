# City Walks Client

This is a React client built to interact with the express server contained in this repository.

## Getting Started

Clone the repo:

`gh repo clone mike1234-pixel/city-walks`

### 1) Server

To install dependencies, cd into the root directory and run:

`yarn add`

To start the API run:

`yarn server`

### 2) Client

To install dependencies, cd into the **client** directory and run:

`npm install`

To start the development server cd into the **client** directory and run:

`npm start`

## State Management

Global state is managed by the **React Context API**. The context files can be found in the **context** folder in the **src** directory.

The App component is wrapped in context providers in **index.js** in the **src** directory.

State is managed locally to components in cases where state is only required locally, such as in **./src/components/pages/Admin/Admin.jsx**

## Ajax

All ajax requests are made using the **axios** and **qs** packages.

## Routing

**react-router** is used for routing the frontend.

Routes are generated dymically from data by the `createRoutes()` function in **./src/container/Router/Router.jsx** which creates a route for each `Walk` on the initial loading of the website, passing down the relevant data as props to each `Walk` component generated.

## Testing

Test files are kept in the same folders as the components they test.

The client contains:

- **jest** snapshot tests.
- **react-testing-library** integration tests.

To run the tests run:

`npm test`
