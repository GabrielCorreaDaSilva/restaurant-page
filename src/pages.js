import { loadMenuPage } from "./menu";
import { loadHomePage } from "./home";
import { loadContactPage } from "./contact";

export function pagesController() {
    const content = document.querySelector("#content");
    const nav = document.querySelector("nav");
    let activePagebtn = nav.querySelector("button:first-child");
    activePagebtn.classList.add("current");

    function handlePages(e) {
        const page = e.target;
        if (activePagebtn === page) return;

        const current = nav.querySelectorAll(".current");
        current.forEach(item => item.classList.remove("current"));

        activePagebtn = page;
        activePagebtn.classList.add("current");



        switch (activePagebtn.textContent) {
            case "Home":
                content.textContent = "";
                loadHomePage(content);
                break;
            case "Menu":
                content.textContent = "";
                loadMenuPage(content);
                break;
            case "Contact":
                content.textContent = "";
                loadContactPage(content);
                break;

        }
    }

    nav.addEventListener("click", handlePages);
    loadHomePage(content);
}
