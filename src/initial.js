const firstSection = (() => {
    const section = document.createElement("section");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Restaurant";

    const article = document.createElement("article");
    article.textContent = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium libero provident dignissimos
        laborum inventore natus vitae facilis incidunt nam. Veniam, impedit? Delectus ratione voluptatibus
        tempora quam est, neque rem!
    `;

    section.append(title);
    section.append(article);

    return section;
})();

const secondSection = (() => {
    const section = document.createElement("section");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Opening Hours";

    const weekdays = document.createElement("p");
    weekdays.textContent = "Mon - Fri: 6am - 9pm";

    const weekends = document.createElement("p");
    weekends.textContent = "Sat & Sun: 8am - 10pm";

    section.append(title);
    section.append(weekdays);
    section.append(weekends);

    return section;
})();

const thirdSection = (() => {
    const section = document.createElement("section");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Location";

    const address = document.createElement("p");
    address.textContent = "123 Main Street, Townsville, Maine";

    section.append(title);
    section.append(address);

    return section;
})();

export function loadHomePage() {
    const content = document.querySelector("#content");

    content.append(firstSection);
    content.append(secondSection);
    content.append(thirdSection);
}

