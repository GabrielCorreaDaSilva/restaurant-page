import contactData from "./contact-data";

function createContactItem(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("h2");
    name.classList.add("title");
    name.textContent = item.name;

    const job = document.createElement("p");
    job.classList.add("job");
    job.textContent = item.job;

    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.textContent = item.phone;

    const email = document.createElement("p");
    email.classList.add("email");
    email.textContent = "Email: " + item.email;

    card.append(name, job, phone, email);
    return card;
}

function createContactList() {
    const contacts = document.createElement("div");
    contacts.classList.add("contact-wrapper");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Contact Us";

    const division = document.createElement("hr");


    contactData.forEach(item => contacts.append(createContactItem(item)));

    return { title, division, contacts }
}

export function loadContactPage(content) {
    const { title, division, contacts } = createContactList();
    content.append(title, division, contacts);
}