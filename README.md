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

After you have cloned this repo, you need to install the following global packages for `node`
```
npm i webpack -g
npm i nodemon -g
npm i eslint -g
```
then run
```
npm i
```
to install the project dependencies

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