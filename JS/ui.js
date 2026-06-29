const resultsSection = document.getElementById("results-section");


function displayAnime(data) {
    resultsSection.innerHTML = "";

    if (data.data.length === 0) {
        resultsSection.innerHTML = `
            <p>No anime found. Try another search.</p>
        `;
        return;
    }

    for (const anime of data.data ) {
        
        resultsSection.innerHTML += `
            <div class="anime-card">
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">

                <h3>${anime.title}</h3>

                <p><strong>Score:</strong> ${anime.score}</p>

                <p><strong>Episodes:</strong> ${anime.episodes}</p>
            </div>
        `;
    }
}