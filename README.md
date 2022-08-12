# intro-component-with-sign-up-form

This is my third project using JS on Frontendmentor

I had a hard time making the validation form using JS but it was worth it i leared alot from this challenge

## Table of contents

- [Overview](#overview)
  - [The Project](#the-project)
  - [Screenshots](#screenshots)
    -[Large screen](#large-screen)
    -[Small Screen](#small-screen)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Challenges](#challenges)
- [Author](#author)

## Overview

### The Project

Intro Component With Sign Up Form is a Challenge on [Frontendmentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1)

Users should be able to:

- View the optimal layout for the section depending on their device's screen size
- Validation form, Show an client side error if the input value is empty or if its invalid value depends on the input type

### Screenshots

#### Large Screen

![screencapture-redouaneajgagal-github-io-intro-component-with-sign-up-form-2022-08-12-20_05_24](https://user-images.githubusercontent.com/98456832/184417710-eb733035-33d6-4fd5-aafb-f5376be6878c.png)


#### Small Screen

![screencapture-redouaneajgagal-github-io-intro-component-with-sign-up-form-2022-08-12-20_07_08](https://user-images.githubusercontent.com/98456832/184418366-871f6dab-3517-448d-9fe9-2e97e4db9456.png)


### Links

- Sign Up Form Source: [GitHub Repository](https://github.com/RedouaneAjgagal/intro-component-with-sign-up-form)
- Sign Up Form Live: [Live Site](https://redouaneajgagal.github.io/intro-component-with-sign-up-form)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Media Queries
- Vanilla JS

### Challenges

- `The form Validation:` i had no idea how to do it using JS the first problem i faced was, doesnt matter if the form valid or not it will always submit. After some research online i found that i can make an empty error array and whenever there is invdalid input value the error array will push an error inside the array, and if the error array > 0 then dont submit the form using `preventDefault()` This way the form will not validate only if there is no error inside the array.
- `Add the Error Message:` At first i used the `createElement('p')` but this way it caused me a problem that will always create another one whenever there is an invalide input value, so i decided to use an empty `div` inside HTML and give it a class, so i target that class inside JS and change the `inner.HTML`

## Author

- GitHub - [@RedouaneAjgagal](https://github.com/RedouaneAjgagal)
- Frontend Mentor - [@RedouaneAjgagal](https://www.frontendmentor.io/profile/RedouaneAjgagal)
