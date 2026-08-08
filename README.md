# Pexels Photo Gallery

A responsive photo gallery web application built with **HTML, CSS, and JavaScript** that integrates the **Pexels REST API** to fetch, search, and display high-quality images dynamically.

## Project Overview

The Pexels Photo Gallery demonstrates how to consume a third-party REST API using JavaScript and dynamically render API data in a responsive user interface.

Users can search for images by keyword, browse photos through pagination, and view individual images directly on Pexels.

## Features

* REST API integration using the **Pexels API**
* API requests using JavaScript `fetch()`
* Asynchronous programming with **async/await**
* API key management through a separate `config.js` file
* Dynamic DOM manipulation and content rendering
* Search functionality for image keywords
* Previous and Next pagination
* Loading spinner during API requests
* User-friendly API error handling
* Responsive photo card layout
* Mobile-friendly design using **CSS Grid and Flexbox**
* External image links to Pexels
* Keyboard support using the **Enter** key for search
* Semantic HTML structure
* Clean and modular JavaScript code

## Technologies Used

* **HTML5** – Semantic webpage structure
* **CSS3** – Responsive layout, Grid, Flexbox, animations, and styling
* **JavaScript (ES6+)** – API integration, async/await, DOM manipulation, event handling, and pagination
* **Pexels REST API** – Image data and photo search
* **Git & GitHub** – Version control and project hosting

## API Integration

The project uses the Pexels REST API to retrieve image data.

The JavaScript application:

1. Sends a GET request to the Pexels API.
2. Includes the API key in the request authorization header.
3. Parses the JSON response.
4. Extracts photo information from the API response.
5. Dynamically generates photo cards.
6. Updates the gallery based on the user's search query and page number.

## Project Structure

```text
pexels-photo-gallery/
│
├── index.html
├── style.css
├── script.js
├── config.js
│
└── assets/
```

## How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pexels-photo-gallery.git
```

### 2. Open the Project

```bash
cd pexels-photo-gallery
```

### 3. Add Your Pexels API Key

Open `config.js` and add your API key:

```javascript
const CONFIG = {
    API_KEY: "YOUR_PEXELS_API_KEY"
};
```

### 4. Run the Application

Open the project using **VS Code Live Server** or another local development server.

Then open the provided local URL in your browser.

## Security Note

The API key is stored separately in `config.js` rather than directly inside `script.js`.

For a production application, API keys should **not be exposed in client-side JavaScript**. A backend server or environment-based configuration should be used to protect sensitive credentials.

If `config.js` contains a real API key, do not commit it to a public GitHub repository.

Add it to `.gitignore`:

```text
config.js
```

You can provide a `config.example.js` file instead:

```javascript
const CONFIG = {
    API_KEY: "YOUR_PEXELS_API_KEY"
};
```

## Search and Pagination

The application supports keyword-based image search.

When a user searches for a keyword:

* The search query is sent to the Pexels API.
* The current page resets to page 1.
* Matching images are displayed dynamically.
* Users can navigate through results using Previous and Next buttons.

## Error Handling

The application handles failed API requests using JavaScript `try...catch...finally`.

If the API request fails, a user-friendly error message is displayed instead of leaving the page blank.

## Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

CSS Grid is used for the photo gallery, while Flexbox is used for navigation and search components.

## Learning Outcomes

This project demonstrates practical experience with:

* REST API consumption
* API authentication
* JavaScript Fetch API
* Async/await
* JSON data parsing
* DOM manipulation
* Event listeners
* Search functionality
* Pagination logic
* Error handling
* Responsive web design
* CSS Grid and Flexbox
* Modular frontend development
* Git and GitHub workflow

## Future Improvements

* Add category filters
* Add image download functionality
* Add favorites/bookmarks
* Add infinite scrolling
* Add dark mode
* Add image modal/lightbox
* Improve accessibility
* Move API requests to a backend service for improved API key security

## Author

**Maryam Firdous**

Aspiring **Web Developer / Python Developer / AI & Machine Learning Enthusiast**

## License

This project is created for educational and portfolio purposes.
