document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("aiAssistantBtn");
    const overlay = document.createElement("div");
    overlay.id = "modalOverlay";

    overlay.innerHTML = `
        <div id="modalWindow">
            <h3>AI ассистент</h3>
            <p>Находится в разработке 🌙</p>
            <button id="closeModal">Закрыть</button>
        </div>
    `;

    document.body.appendChild(overlay);

    btn.addEventListener("click", () => {
        overlay.style.display = "flex";
    });

    document.body.addEventListener("click", e => {
        if (e.target.id === "closeModal" || e.target.id === "modalOverlay")
            overlay.style.display = "none";
    });

});
