# React Workshop
This codebase was developed as a support for a mid-level complexity how-to workshop with React, aimed at addressing the following aspects:
* React project folder structure
* Redux integration
* React router
* Server side rendering
* Forms
* Authentication
* Side effects

## Installation

After you have cloned this repo, you need to install all the dependencies
```
npm i
```

## Usage

This codebase relies on `webpack` and `babel` to compile the JavaScript code and on `nodemon` to run the local server with a watch, so you can run these two tasks in parallel
```
npm run compile
npm start
```
or, for UNIX users you can run the tasks in parallel in the same terminal with
```
npm run development
```
Then you can open http://localhost:1234 and start the app.

To check the `eslint` rules run
```
npm run linter
```

## Workshop

The workshop has 2 separate tasks, each having multiple subtasks

Part 1: implementing a product details page with server side rendering
* create route with product id as param
* implement duck & product page
* link product page from product list
* set meta tags for details page
* implement server side render with prefetch for the details page

Part 2: implementing a shopping cart, which is available only for logged users and is stored on the local storage
* create a route for the cart (available for logged users only)
* add the "add to cart" button on product detail with the corresponding action
* create a cart page (with ability to remove item)
* push a notification when an item is added and/or removed
* create a custom middleware for storing the cart to localStorage
* bonus: move cookie token read logic to server side render

There are 3 tags part of this repo:
* initial
* intermediate
* final

The first tag is the starting point of the workshop and provides the initial project structure and a few pages implemented.
The `intermediate` tag contains the code after the product details page has been fully implemented.
The last tag contains the final code, as it should look with the basic shopping cart implemented.
