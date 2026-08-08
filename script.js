
// DOM Elements
const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");
const errorBox = document.getElementById("error");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumber = document.getElementById("pageNumber");

// API
const BASE_URL = "https://api.pexels.com/v1/search";

// Pagination
let currentPage = 1;
const perPage = 12;

// Default Search
let currentQuery = "nature";

/* ========================================
            Fetch Photos
======================================== */

async function fetchPhotos(query = currentQuery, page = currentPage) {

    showLoader();
    hideError();

    gallery.innerHTML = "";

    try {

        const response = await fetch(
            `${BASE_URL}?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`,
            {
                headers: {
                    Authorization: CONFIG.API_KEY
                }
            }
        );

        if (!response.ok) {
            throw new Error("Unable to fetch photos.");
        }

        const data = await response.json();

        displayPhotos(data.photos);

        pageNumber.textContent = `Page ${page}`;

        // Disable Previous Button on First Page
        prevBtn.disabled = page === 1;

        // Disable Next Button if no more photos
        nextBtn.disabled = data.photos.length < perPage;

    } catch (error) {

        console.error(error);

        showError("❌ Unable to load photos. Please try again.");

    } finally {

        hideLoader();

    }

}

/* ========================================
        Display Photos
======================================== */

function displayPhotos(photos) {

    gallery.innerHTML = "";

    if (photos.length === 0) {

        gallery.innerHTML = `
            <h2 style="text-align:center;width:100%;">
                No photos found.
            </h2>
        `;

        return;
    }

    photos.forEach(photo => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

            <img src="${photo.src.large}" alt="${photo.alt || "Photo"}">

            <div class="card-body">

                <h3>${photo.photographer}</h3>

                <p>${photo.alt || "Beautiful Pexels Image"}</p>

                <a href="${photo.url}" target="_blank">
                    View on Pexels
                </a>

            </div>

        `;

        gallery.appendChild(card);

    });

}

/* ========================================
            Loader
======================================== */

function showLoader() {

    loader.classList.remove("hidden");

}

function hideLoader() {

    loader.classList.add("hidden");

}

/* ========================================
            Error
======================================== */

function showError(message) {

    errorBox.textContent = message;
    errorBox.classList.remove("hidden");

}

function hideError() {

    errorBox.classList.add("hidden");

}

/* ========================================
        Search Button
======================================== */

searchBtn.addEventListener("click", () => {

    const query = searchInput.value.trim();

    if (query !== "") {

        currentQuery = query;
        currentPage = 1;

        fetchPhotos(currentQuery, currentPage);

    }

});

/* ========================================
        Search using Enter
======================================== */

searchInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        searchBtn.click();

    }

});

/* ========================================
        Pagination
======================================== */

nextBtn.addEventListener("click", () => {

    currentPage++;

    fetchPhotos(currentQuery, currentPage);

});

prevBtn.addEventListener("click", () => {

    if (currentPage > 1) {

        currentPage--;

        fetchPhotos(currentQuery, currentPage);

    }

});

/* ========================================
        Initial Load
======================================== */

window.addEventListener("DOMContentLoaded", () => {

    fetchPhotos();

});