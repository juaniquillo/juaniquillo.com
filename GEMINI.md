# Gemini CLI Documentation

This file is intended for documentation related to using the Gemini CLI within this project.

## Personal Website Requirements Fulfilled:

*   **Website Goal:** Created a simple but attractive home website.
*   **Title:** "Juaniquillo".
*   **Navigation:** Implemented a small navigation with two items: "Resume" and "Lists".
*   **Font:** Used an elegant but playful font ("Pacifico" from Google Fonts).
*   **Technology Stack:** Utilized simple HTML, CSS, and vanilla JavaScript (no frameworks or libraries).
*   **Color Palette:** Applied a new color palette: `#155263`, `#ff6f3c`, `#ff9a3c`, `#ffc93c`. Lighter versions of the body and header colors are used for the light theme.
*   **Dark Mode:** Added automatic dark mode support using CSS media queries.
*   **H1 Margin Fix:** Adjusted the margin for the `h1` element.
*   **Responsiveness:** Implemented responsive design for better viewing on various screen sizes.
*   **Build/Run:** Removed `bower.json` and consolidated project information into `package.json`. The project now uses Vite for development and building.
*   **Nav Button Design:** Added a linear gradient, a subtle box shadow, and hover/focus-visible states to the navigation buttons.
*   `npm run dev` (or `npm start`): Starts the development server with hot-reloading. Access the site at the local address provided in the console (e.g., `http://localhost:5173`).
*   `npm run build`: Compiles and minifies the project for production, outputting optimized static assets to the `dist` directory.
*   `npm run preview`: Serves the production build locally. This is useful for testing the optimized build before deployment.