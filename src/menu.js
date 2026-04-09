import menu from "./menu-data";

function createMenuItem(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("h2");
    name.classList.add("title");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = item.description;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = "Price: " + "$" + item.price;

    card.append(name, description, price);
    return card;
}

function createMenu(content) {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-wrapper");

    menu.forEach(section => {
        const menuSection = document.createElement("div");
        menuSection.classList.add("section");

        const titleWrapper = document.createElement("div");

        const hr1 = document.createElement("hr");
        const title = document.createElement("h2");
        const hr2 = document.createElement("hr");

        title.classList.add("title");
        titleWrapper.classList.add("section-name");
        titleWrapper.append(hr1, title, hr2);

        title.textContent = section.name;

        menuSection.append(titleWrapper);

        section.items.forEach(item => menuSection.append(createMenuItem(item)));
        const sectionDivider = document.createElement("hr");
        menuDiv.append(sectionDivider, menuSection);
    });

    content.append(menuDiv);
}

export function loadMenuPage(content) {
    const title = document.createElement("h1");
    title.classList.add("title", "menu-title");
    title.textContent = "Menu";
    content.append(title);
    createMenu(content);
}
