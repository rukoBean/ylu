document.querySelectorAll(".accordion").forEach(accordion => {
    const items = accordion.querySelectorAll(".accordion-item");
    items.forEach(item => {
        const header = item.querySelector(".accordion-item-header");
        const body = item.querySelector(".accordion-item-body");

        body.classList.add("collapsed");
        header.classList.add("collapsed");

        header.addEventListener("click", () => {
            body.classList.toggle("collapsed");
            header.classList.toggle("collapsed");
            body.style.height = body.classList.contains("collapsed") ? "0" : body.scrollHeight + "px";
        });
    });
});
