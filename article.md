# Building a Modern LinkedIn Clone Using Only Vanilla JS, HTML, and CSS

*Why modern web development doesn't always need a framework.*

---

If you browse the modern web landscape, you’ll be quickly overwhelmed by the sheer number of JavaScript frameworks. React, Vue, Svelte, Angular, Next.js, Nuxt—the list goes on. While these tools are incredible for large-scale enterprise applications, they often create a barrier to entry for beginners and add unnecessary overhead to smaller projects.

To prove that you can build beautiful, dynamic, and component-based applications without touching a single `npm install` or configuring Webpack, I challenged myself to build a **fully responsive LinkedIn clone** using strictly pure HTML, CSS, and Vanilla JavaScript.

In this article, I'll walk you through the architecture, styling techniques, and JavaScript tricks used to build a professional-grade web application from scratch.

---

## 1. Component-Based Architecture Without a Build Step

One of the primary reasons developers reach for React or Vue is component reusability. Nobody wants to copy and paste the `<nav>` bar code across 15 different HTML pages. If you need to change a link, you'd have to update 15 files. 

So, how do we achieve component reusability in Vanilla JS? 

### The Solution: Dynamic HTML Injection
Instead of copying the navigation bar everywhere, I created a single `components.js` file that contains the HTML template for the Navbar. 

```javascript
const navbarHTML = `
<header class="navbar">
    <!-- Navbar HTML goes here -->
</header>
`;

function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = navbarHTML;
        
        // Bind event listeners after injection
        setupThemeToggle();
    }
}

document.addEventListener('DOMContentLoaded', loadComponents);
```

Every page in the application simply includes a `<div id="header-placeholder"></div>` and a script tag. The JavaScript file injects the navbar, binds the event listeners (like the Dark Mode toggle), and dynamically highlights the active navigation link based on `window.location.pathname`.

This gives us the maintainability of React components with zero build steps and zero dependencies!

---

## 2. Dynamic Content Rendering

A social network isn't very social without a feed. To mimic the behavior of a real application fetching data from a database, I structured my dummy data as JSON objects inside my JavaScript files.

When the dashboard loads, we first render **Skeleton Loaders**. Skeleton loaders significantly improve perceived performance and give the application a premium feel.

```javascript
// Show skeleton loaders immediately
postsContainer.innerHTML = Array(3).fill(`
    <div class="card skeleton-card">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-text"></div>
    </div>
`).join('');
```

After a simulated network delay using `setTimeout`, the application iterates over the JSON array and constructs the actual post elements using `document.createElement()` and template literals. 

---

## 3. The Power of CSS Variables (Custom Properties)

LinkedIn has a very distinct, clean corporate aesthetic. To ensure consistency across the application and make implementing Dark Mode a breeze, I relied heavily on CSS variables at the `:root` level.

```css
:root {
    /* Light Theme Tokens */
    --primary-color: #0a66c2;
    --bg-color: #f3f2ef;
    --card-bg: #ffffff;
    --text-primary: rgba(0, 0, 0, 0.9);
    --border-color: #e0e0e0;
}

[data-theme="dark"] {
    /* Dark Theme Tokens */
    --primary-color: #70b5f9;
    --bg-color: #000000;
    --card-bg: #1d2226;
    --text-primary: rgba(255, 255, 255, 0.9);
    --border-color: rgba(255, 255, 255, 0.1);
}
```

By applying styles using `background-color: var(--card-bg)`, switching to Dark Mode is as simple as adding `data-theme="dark"` to the `<html>` element via JavaScript.

```javascript
// Theme Toggle Logic
const currentTheme = document.documentElement.getAttribute('data-theme');
const newTheme = currentTheme === 'light' ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', newTheme);
localStorage.setItem('theme', newTheme); // Persist user choice!
```

---

## 4. Front-End Route Protection

While an actual application handles authentication on the server, I wanted to simulate the UX of being "logged out".

Using `localStorage`, I created a simple mock authentication system. When the user submits the login form, we set `localStorage.setItem('isAuthenticated', 'true')`. 

On every protected page (like the Dashboard or Profile), a global `auth.js` script runs immediately:

```javascript
const isPublicPage = window.location.pathname.endsWith('index.html');

if (!isPublicPage && localStorage.getItem('isAuthenticated') !== 'true') {
    // Redirect unauthenticated users back to the login screen
    window.location.href = '../index.html';
}
```

This prevents users from navigating to the dashboard unless they've "logged in", completing the application feel.

---

## Conclusion

Frameworks are amazing, and they exist for a reason. But taking a step back and building a complex UI with plain Vanilla JS, HTML, and CSS is a fantastic exercise. It forces you to understand the DOM, appreciate the power of modern CSS, and realize that the browser is an incredibly powerful platform out of the box.

If you are a beginner, try building your next project without a framework. You'll be surprised by how much you can achieve with just the fundamentals!

*Check out the full source code for this project on my GitHub.*
