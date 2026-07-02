const modal = document.getElementById("modal");

function openModal(anime) {
     
    modal.innerHTML = `
        <div class="modal-content">

            <button 
            id="close-modal-btn" 
            aria-label="Close">
            &times;     
            </button>

            <img
                src="${anime.images.jpg.image_url}"
                alt="${anime.title}"
            >

            <h2>${anime.title}</h2>
            
            <p><strong>Episodes:</strong> ${anime.episodes ?? "Unknown"}</p>
            <p><strong>Year:</strong> ${anime.year ?? "Unknown"}</p>
            <p><strong>Score:</strong> ${anime.score ?? "N/A"}</p>
            <p><strong>Synopsis:</strong></p>
            <p>${anime.synopsis ?? "No synopsis available."}</p>

        </div>
    `;
    
    const closeBtn = 
        document.getElementById("close-modal-btn");
    closeBtn.addEventListener("click", closeModal); 
    modal.classList.add("show");
}


function closeModal() {
    modal.classList.remove("show");
}

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});