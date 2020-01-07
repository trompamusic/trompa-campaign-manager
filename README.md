# Trompa campaign manager

## Introduction

This is the main repository for the Trompa campaign manager.

## Development rules

When working on this project, keep these in mind:

- Use yarn.
- Use the boards-cli to [generate uniform code](#Tasks).
- Follow the [commit guidelines](https://github.com/Videodock/about/blob/master/CONTRIBUTING.md) documented.
- Run the playbook through `yarn storybook`
- Run the tests through `yarn test`
- Lint through `yarn lint`

## Getting started

- Clone repo
- `yarn global add boards-cli`
- `yarn` to install dependencies
- `yarn start`

## Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the change log**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The subject line of the commit message cannot be longer 100 characters. This allows the message to be easier to read on GitHub as well as in various git tools.

### Type

Please use one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope

The scope could must be specifying the location of the commit change. For example `agenda` or `player`. We've split up all pages and added all scopes to the allowed `./.commitlintrc.js` file.

The allowed scopes are:

- landing page
- search
- campaign
- theme
- utils

### Subject

The subject contains a succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes".
* Don't capitalize the first letter.
* Do not add a dot (.) at the end.

### Body

The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

## Structure

This application uses ReactJS, Redux, Redux saga, Material UI, i18n, and GraphQL.

### Boards.js

Using the `boards` command you can quickly scaffold boilerplate code.
This project uses [the vd preset](https://github.com/Videodock/boards-preset-vd). You can find the available commands there.

#### Create a React Component

Create a Button.jsx component will all related files:

`$ boards vd:component button`

#### Create a React Container

Create a connected Cinema.jsx component will all related files:

`$ boards vd:container cinema`

#### Create a Screen

Essentially the same as a container, but separated and only used in `<Route />` components.

`$ boards vd:screen about`

#### Create a redux structure

`$ boards vd:redux about`

#### Create a redux action

Creates an action creator, reducer and type for a single action:

`$ boards vd:action about type:findRetweets`

#### Create a redux api

Creates multiple action creators, reducers and types for three  actions: findRetweets, findRetweetsSuccess, findRetweetsFailure. This is mostly used in combination with a fetch in sagas. This requires the `about` sagas to be created first.

`$ boards vd:api about type:findRetweets`

#### Create sagas

`$ boards vd:sagas about`

#### Create a saga

`$ boards vd:saga about type:findRetweets`

### .env files

The `.env` files are used to set environment variables for the application for your machine, production, dev and / or test.

[Read more.](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env)

### Services

The services directory is where you put arbitrary workers such as api calls and localstorage access.

## Frameworks, libraries and languages

### ReactJS

ReactJS is a JavaScript library that allows developers to create interactive elements for websites. Elements are commonly called "Components" and can be used for smaller elements like a button but also to encapsulate an entire page or screen.

### Material UI

The Material UI library is a collection of reusable React Components based on the [Material Design](https://material.io/design/) guidelines by Google.

In this project, we will always try to use existing components and its functionality to speed up development and to ensure that the UI and interaction are battle-tested by the Material UI community.

Another significant benefit of using Material UI is the ability to theme the application. With the theme settings (found in `./src/theme`) it is possible to change the appearance of all Material UI and custom components.

### GraphQL
GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

### React Redux

When building larger applications, it is common to use a state management library to help developers a lot.

It also comes with some overhead because, for even the most straightforward operation, we need to make a few changes to make it work with Redux. However, we've realized that early and came up with a boilerplate CLI tool (boards) to do all of the boilerplate for you.

### React Redux Saga

Redux Saga is a library that aims to make application side effects (i.e., asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

### React i18next

React i18next allows multilingual applications by defining all translations in separate files.

