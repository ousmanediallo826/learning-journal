import homeData from "./homeData.js";
import booksData from "./datas/booksData.js";

document.addEventListener("DOMContentLoaded", function () {
    const displayItems = document.getElementById("posts");
    const loadMoreBtn = document.createElement("button"); 
    loadMoreBtn.innerText = "Load More";
    loadMoreBtn.id = "load-more";

    let visibleCount = 6; 

    function renderItems() {
        displayItems.innerHTML = homeData
            .slice(0, visibleCount)
            .map(
                (item) => `
            <div class="blog-post" data-id="${item.id}">
                <img src="${item.img}" alt="Post Image">
                <span>${item.date}</span>
                <a href="category.html?id=${item.id}">
                    <h3>${item.title}</h3>
                </a>
                <p class="second-paragraph">${item.description}</p>
            </div>
        `
            )
            .join("");

        if (visibleCount >= homeData.length) {
            loadMoreBtn.style.display = "none"; 
        }
    }

    renderItems();

    displayItems.insertAdjacentElement("afterend", loadMoreBtn);

    loadMoreBtn.addEventListener("click", function () {
        visibleCount += 6; 
        renderItems();
    });

    console.log("DOM fully loaded and parsed!");
});

// About Page Navigation
document.getElementById("about").addEventListener('click', function(){
    window.location.href = './About.html';
});

// Log Books Data (Debugging)
console.log(booksData);

booksData.forEach((item) => {
    console.log(item.lessons);
    item.lessons.forEach((lesson) => {
        lesson.lessons1.forEach((each) => {
            console.log(each.title);
            console.log(each.description);
            console.log(each.lastQuote);
        });
    });
});
