# Frontend Mentor - Insure Landing Page Solution

This is my solution to the **Insure Landing Page** challenge on Frontend Mentor. This project focuses on building a modern, fully responsive landing page that adapts seamlessly across desktop, tablet, and mobile devices.

The challenge provided an excellent opportunity to practice semantic HTML, responsive design, Tailwind CSS v4 customization, DOM manipulation with JavaScript, and deploying a production-ready application using Vite and GitHub Pages.

---

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Design](#design)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)

---

## Overview

This project is a responsive marketing landing page for an insurance company. It features a clean and modern interface with a responsive navigation menu, a hero section, feature cards, and a call-to-action section.

The layout was built following a mobile-first approach using Tailwind CSS utility classes, ensuring an optimal experience across all screen sizes.

---

## The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.
- Open and close the mobile navigation menu.
- Close the mobile menu by clicking outside of it.
- Navigate through interactive elements using the keyboard.
- View hover and focus states for all interactive elements.
- Experience responsive layouts across desktop, tablet, and mobile devices.

---

## Design

### Desktop Design

<img src="./design/desktop-design.jpg" alt="Desktop design preview" width="700">

### Active states

<img src="./design/active-states.jpg" alt="Desktop design active states" width="700">

### Mobile Design

<img src="./design/mobile-design.jpg" alt="Mobile design preview" width="250">

### Mobile Design

<img src="./design/mobile-nav-design.jpg" alt="Mobile design nav" width="250">

---

## Links

- Solution URL: [GitHub Repository](https://github.com/mlopezl/Insure-Landing-Page)
- Live Site URL: [Live Demo](https://mlopezl.github.io/Insure-Landing-Page/)

---

## My process

- Structured the page using semantic HTML5 elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`.

- Followed a mobile-first workflow to ensure a responsive experience across different screen sizes.

- Built responsive layouts using Flexbox and Tailwind CSS utility classes.

- Implemented responsive breakpoints using:

  - `sm:`
  - `md:`
  - `lg:`
  - `xl:`

- Customized Tailwind CSS v4 using the `@theme` directive.

- Created a custom design system using CSS variables for:

  - Colors
  - Typography

- Imported and configured the **DM Serif Display** font from Google Fonts.

- Used SVG assets and optimized images for improved performance.

- Implemented a responsive navigation menu using JavaScript.

- Managed menu state through reusable functions.

- Added event listeners for:

  - `click`

- Selected DOM elements using:

  - `getElementById()`

- Used DOM methods such as:

  - `classList.add()`
  - `classList.remove()`
  - `contains()`

- Implemented click-outside detection to automatically close the mobile navigation.

- Added smooth hover and focus transitions for interactive elements.

- Built and optimized the project using Vite.

- Generated a production build with:

```bash
pnpm run build
```

- Deployed the production build to GitHub Pages.

---

## Built with

- HTML5
- Tailwind CSS v4
- JavaScript (ES6+)
- Flexbox
- CSS Custom Properties (Variables)
- Google Fonts
- Responsive Design Principles
- Mobile-first Workflow
- Semantic HTML
- DOM Manipulation
- Event Listeners
- Tailwind Theme Customization
- Vite
- PNPM
- GitHub Pages

---

## What I learned

- Building responsive layouts using semantic HTML5.
- Creating flexible interfaces with Flexbox and Tailwind CSS utility classes.
- Working with Tailwind CSS v4 and the new `@theme` configuration system.
- Creating reusable design tokens with CSS custom properties.
- Importing and configuring custom fonts from Google Fonts.
- Managing responsive navigation menus with JavaScript.
- Selecting and manipulating DOM elements using `getElementById()`.
- Handling user interactions through event listeners.
- Toggling UI states by adding and removing CSS classes dynamically.
- Detecting clicks outside of an element using the `contains()` method.
- Organizing JavaScript into reusable functions for better maintainability.
- Understanding the Vite development and production workflow.
- Building optimized production bundles with Vite.
- Deploying static frontend applications using GitHub Pages.