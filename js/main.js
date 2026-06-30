// Getting HTML Elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const statusSection = document.getElementById("status-section");
const favoritesSection = document.getElementById("favorites-section");
const resultsContainer = document.getElementById("results-container");

// Global variables
let currentAnimeList = [];


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

    if(!animeData) {
        statusSection.textContent = "Unable to fetch anime. Please try again.";
        return;
    }

    currentAnimeList = animeData.data;

    displayAnime(animeData)
    statusSection.textContent = "";
})

resultsContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains("details-btn")) {
       
    const clickedId = Number(event.target.dataset.id);
        
    console.log(clickedId);
    
    const selectedAnime = currentAnimeList.find(function(anime) {
        return anime.mal_id === clickedId;

    });
     console.log(selectedAnime);
    openModal(selectedAnime);
    }
});