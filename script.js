import homeData from "./homeData.js";

document.addEventListener("DOMContentLoaded", function () {
    const displayItems = document.getElementById("posts");
    const loadMoreBtn = document.createElement("button"); // Create button
    loadMoreBtn.innerText = "Load More";
    loadMoreBtn.id = "load-more";

    let visibleCount = 6; // Initially show 6 items

    function renderItems() {
        displayItems.innerHTML = homeData
            .slice(0, visibleCount) // Show only up to `visibleCount`
            .map(
                (item) => `
            <div class="blog-post" data-id="${item.id}">
                <img src="${item.img}" alt="Post Image">
                <span>${item.date}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `
            )
            .join("");

        if (visibleCount >= homeData.length) {
            loadMoreBtn.style.display = "none"; // Hide button if all items are shown
        }
    }

    renderItems(); // Render first 6 items

    // Add "Load More" button below the posts
    displayItems.insertAdjacentElement("afterend", loadMoreBtn);

    // Event listener to show more items
    loadMoreBtn.addEventListener("click", function () {
        visibleCount += 6; // Show 6 more items
        renderItems();
    });

    console.log("DOM fully loaded and parsed!");
});
