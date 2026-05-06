# LinkedIn Clone - Frontend Educational Project

![LinkedIn Clone Preview](https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

A fully responsive, professional social networking website inspired by LinkedIn. This project is built entirely with **pure HTML, CSS, and Vanilla JavaScript**, without relying on any external frameworks like React, Vue, or Tailwind. It demonstrates advanced DOM manipulation, component-based architecture without a build step, CSS variables for theming, and responsive web design.

## ✨ Features

- **Component-Based Architecture**: Reusable UI components (like the Navbar) injected dynamically via Vanilla JS.
- **Dynamic Content Rendering**: Feed posts and job listings are dynamically rendered from mock JSON objects.
- **Dark Mode Support**: Seamless toggle between light and dark themes with user preference saved in `localStorage`.
- **Responsive Design**: Fluid and responsive grid/flexbox layouts tailored for Desktop, Tablet, and Mobile views.
- **Authentication Mocking**: Front-end routing protection that restricts dashboard access until a simulated login via `localStorage` is performed.
- **Skeleton Loaders**: Beautiful shimmering placeholders during data loading states.
- **Rich Interactive UI**: Hover states, micro-animations, drop-downs, and interactive buttons mimicking a professional corporate application.

## 📂 Project Structure

```text
/
├── index.html                  # Login Page (Entry Point)
├── README.md                   # Project Documentation
├── css/
│   └── style.css               # Global stylesheet with CSS Variables and Dark Mode
├── js/
│   ├── auth.js                 # Authentication logic and route protection
│   ├── components.js           # Navbar injection and active state logic
│   ├── feed.js                 # Dynamic post rendering logic
│   ├── jobs.js                 # Dynamic job list rendering logic
│   └── main.js                 # Global utilities
├── components/
│   └── navbar.html             # Reusable Navbar HTML layout
├── data/
│   ├── posts.json              # Mock JSON data for feed (Deprecated for inline file:// support)
│   └── jobs.json               # Mock JSON data for jobs (Deprecated for inline file:// support)
└── pages/
    ├── dashboard.html          # Main Feed
    ├── profile.html            # User Profile 
    ├── network.html            # Connections Page
    ├── jobs.html               # Job Listings
    ├── job-details.html        # Job Description View
    ├── messaging.html          # Chat/Inbox UI
    ├── notifications.html      # User Notifications
    ├── search.html             # Search Results
    ├── company.html            # Company Page
    ├── post-details.html       # Individual Post View
    ├── saved-posts.html        # Bookmarked Posts
    ├── settings.html           # User Settings
    ├── help.html               # Help Center
    ├── about.html              # About Page
    ├── contact.html            # Contact Page
    ├── signup.html             # Registration Page
    ├── forgot-password.html    # Password Reset Page
    └── 404.html                # Not Found Page
```

## 🚀 How to Run

Because this project uses inline JavaScript for its components and mock data instead of `fetch`, **it is completely functional directly from the file system!**

1. Clone or download the repository to your local machine.
2. Double click on `index.html` to open it in your browser.
3. Enter any email and password on the Login screen and click **"Sign in"**.
4. You will be redirected to the Dashboard, where you can navigate freely, toggle Dark Mode, and interact with the UI.

*(Note: If you plan to modify the code to use the `fetch()` API for JSON data, you will need to serve the files using a local web server to avoid CORS restrictions).*

## 🛠 Technologies Used

- **HTML5**: Semantic tags, accessible layout structure.
- **CSS3**: Custom properties (Variables), Flexbox, CSS Grid, Media Queries, Transitions.
- **Vanilla JavaScript (ES6+)**: Arrow functions, template literals, DOM manipulation, LocalStorage API.

## 📝 License

This project is open-source and available for educational purposes. Feel free to fork, modify, and use it to learn frontend development!
