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
    price.textContent = "$" + item.price;

    card.append(name, description, price);
    return card;
}

function createMenu(menu, content) {
    const title = document.createElement("h1");
    title.classList.add("title","menu-title");
    title.textContent = "Menu";
    content.append(title);
    
    menu.forEach(item => content.append(createMenuItem(item)));
}

export function loadMenuPage(menu, content) {
    const title = document.createElement("h1");
    title.classList.add("title");
    content.append(title);

    createMenu(menu, content);
}
