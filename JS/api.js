const BASE_URL = "https://api.jikan.moe/v4/anime";

async function fetchAnime(searchTerm) {
    try {
        const response = await fetch(`${BASE_URL}?q=${searchTerm}`);
        
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error("Error fetching anime:", error);
    }
}