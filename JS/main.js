// Getting HTML Elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const statusSection = document.getElementById("status-section");
const favoritesSection = document.getElementById("favorites-section");

// Listen for form submission
searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        statusSection.textContent = "Please enter an anime name.";
        return;
    }
    
    statusSection.textContent = "Loading...";

    const animeData = await fetchAnime(searchTerm)

    displayAnime(animeData)
    statusSection.textContent = "";
})