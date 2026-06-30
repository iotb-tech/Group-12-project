const resultsSection = document.getElementById("results-section");

function createAnimeCard(anime) {
    return `
        <div class="anime-card">
            <img
                src="${anime.images.jpg.image_url}"
                alt="${anime.title} cover image"
            >

            <h3>${anime.title}</h3>

            <p>Episodes: ${anime.episodes ?? "Unknown"}</p>

            <p>Year: ${anime.year ?? "Unknown"}</p>

            <div class="card-buttons">
                <button
                    class="details-btn"
                    data-id="${anime.mal_id}">
                    View Details
                </button>

                <button
                    class="favorite-btn"
                    data-id="${anime.mal_id}">
                    Favorite
                </button>
            </div>
        </div>
    `;
}


function displayAnime(data) {
    const resultsContainer =
        document.getElementById("results-container");

    resultsContainer.innerHTML = "";


    if (!data || data.data.length === 0) {
        resultsContainer.innerHTML = `
            <p>No anime found. Try another search.</p>
        `;
        return;
    }

    for (const anime of data.data ) {
        
        resultsContainer.innerHTML += createAnimeCard(anime);

    }
}