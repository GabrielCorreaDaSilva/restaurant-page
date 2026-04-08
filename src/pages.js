import { loadMenuPage } from "./menu";
import { loadHomePage } from "./home";

export function pagesController() {
    const content = document.querySelector("#content");
    const nav = document.querySelector("nav");
    let activePage = "Home";

    function handlePages(e) {
        const page = e.target.textContent;
        if (activePage === page) return;
        activePage = page;

        switch (page) {
            case "Home":
                content.textContent = "";
                loadHomePage();
                break;
            case "Menu":
                content.textContent = "";
                loadMenuPage(content);
                break;
        }
    }

    nav.addEventListener("click", handlePages);
    loadHomePage();
}
