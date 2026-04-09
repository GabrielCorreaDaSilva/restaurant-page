import "../styles/homepage.css";

const createSitation = () => {
    const section = document.createElement("section");
    section.classList.add("card");

    const article = document.createElement("article");
    article.textContent = `
        The best restaurant ever! Meats? They got it! Vegan... they still got! They even got pasta it's just amazing! 
        I'm not sure I want to even leave this place. 
        I'm pretty sure some of the staff are cartoon characters, but I don't even care the food is that good!
    `;
    const autor = document.createElement("h3");
    autor.textContent = "Bob";
    autor.classList.add("autor");

    section.append(article);
    section.append(autor);

    return section;
};

const createOpeningHours = () => {
    const section = document.createElement("section");
    section.classList.add("card");

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
};

const createLocation = () => {
    const section = document.createElement("section");
    section.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Location";

    const address = document.createElement("p");
    address.textContent = "123 Main Street, Townsville, Maine";

    section.append(title);
    section.append(address);

    return section;
};

export function loadHomePage(content) {
    const title = document.createElement("h1");
    title.classList.add("title", "page-title");
    title.textContent = "All-in-One Restaurant";

    const homePage = document.createElement("div");
    homePage.classList.add("homepage");

    homePage.append(title, createSitation(), createOpeningHours(), createLocation());
    content.append(homePage);
}

