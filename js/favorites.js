function loadFavorites() {
    const favorites = localStorage.getItem("favorites")
    const parsedFavorites = JSON.parse(favorites);

    if(!parsedFavorites) {
        return [];
    } else {
        return parsedFavorites;
    }
}

function saveFavorites(favorites) {
    const stringifiedFavorites = JSON.stringify(favorites)
    localStorage.setItem("favorites", stringifiedFavorites);
    console.log("Saved favorites:", favorites);
}
console.log("addFavorite running");
function addFavorite(anime) {
    const favorites = loadFavorites();
    
    const existingFavorites = favorites.find(function(favorite) {
        return favorite.mal_id === anime.mal_id;
    }) ;

    if (!existingFavorites) {
        favorites.push(anime);
    } ;
    
    saveFavorites(favorites);
    displayFavorites();
}

function displayFavorites() {
    const favorites = loadFavorites();
    
    console.log("displayFavorites called");
    console.log(favorites);
    
    
    const favoritesContainer = document.getElementById("favorites-container")

    favoritesContainer.innerHTML = "";

    if (!favorites || favorites.length === 0) {
        favoritesContainer.innerHTML = `
            <p>No favorites selected. Try adding new favorites</p>
        `;
       return;
    }

    for (const anime of favorites) {
        favoritesContainer.innerHTML += createFavoritesCard(anime);
    }

}



function createFavoritesCard(anime) {
    return `
        <div class="favorite-card">

            <img
                src="${anime.images.jpg.image_url}"
                alt="${anime.title}">
            <h3>${anime.title}</h3>

            <p>Episodes: ${anime.episodes ?? "Unknown"}</p>

            <p>Year: ${anime.year ?? "Unknown"}</p>

            <div class="favorite-card-button">
                <button 
                    class="remove-btn"
                    data-id="${anime.mal_id}">
                    Remove
                </button>
            </div>
        </div>
    `;
}


function removeFavorite(id) {
    const favorites = loadFavorites();
    
    const updatedFavorites = favorites.filter(function(favorite) {
        return favorite.mal_id !==  id
    });

    saveFavorites(updatedFavorites)
    displayFavorites()
}