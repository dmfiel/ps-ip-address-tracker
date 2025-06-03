# Per Scholas - Module 6 - SBA - eCommerce System

This project uses TypeScript and advanced JavaScript to build a functional, real-world application. It employs object-oriented programming (OOP) principles, asynchronous operations, error handling, and API interaction.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Create an eCommerce product management system using TypeScript. The system should pull product information from the DummyJSON product API.

### Screenshot

![](./screenshot.png)

## My process

### Built with

- TypeScript API fetching, asynchronous operations, event handling, data manipulation, and DOM updates.
- Webpack / TSC transpiling and bundling
- Semantic HTML5 markup
- CSS custom properties

### What I learned

There was a bit of difficulty with typing on the timedFetch function that I adapted from an earlier JavaScript course. It uses a timer in order to exit gracefully from an API call that isn't returned quickly. The problem is that the timer would still continue to run, even when the API call returned successfully. This was noticeable when the code was executed by ts-node. So, I decided to save the handle to setTimeout in order to call cancelTimeout when the API returned successfully. The handle required a type of 'NodeJS.Timeout | undefined' which took a bit of time to setup correctly.

In addition, getting webpack configured correctly took some time. But after some setup, I was able to get the webpack dev server running so that changed to the TypeScript and HTML/CSS files were reflected in the development display automatically. Avoiding manual runs of tsc and/or copying files was a great boon to the coding cycle.

## Author

David Fiel

- Website - [David Fiel](https://fiel.us)

## Acknowledgments

Thanks to Per Scholas!
