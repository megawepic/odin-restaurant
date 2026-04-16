import map from "./moxxxi_location.png"

export function connect(content) {
    content.textContent = ""

    const container = document.createElement("div")
    container.classList.add("contact-grid")

    const location = document.createElement("div")
    location.classList.add("location")
 
    const locationHeader = document.createElement("h1")
    locationHeader.textContent = "Getting to the Bar"

    const img = document.createElement("img")
    img.src = map
    img.alt = "Location to get to Moxxi Bar"

    const address = document.createElement("p")
    address.textContent = "📌 Carcadia burns, Ruined Sumplands"

    location.appendChild(locationHeader)
    location.appendChild(img)
    location.appendChild(address)

    const form = document.createElement("form")
    form.classList.add("query")
    
    const formHeader = document.createElement("h2")
    formHeader.textContent= "How may we Assist?"

    const name = document.createElement("div")
    name.classList.add("name", "customer")

    const nameLabel =  document.createElement("label")
    nameLabel.htmlFor = "name"
    nameLabel.textContent = "Name:"

    const nameInput = document.createElement("input")
    nameInput.id = "name"
    nameInput.type = "text"
    nameInput.required = true

    const email = document.createElement("div")
    email.classList.add("email", "customer")

    const emailLabel = document.createElement("label")
    emailLabel.htmlFor = "userEmail"
    emailLabel.textContent = "Email Address:"

    const emailInput = document.createElement("input")
    emailInput.id = "userEmail"
    emailInput.type = "email"
    emailInput.required = true

    const question = document.createElement("div")
    question.classList.add("question", "customer")

    const questionLabel = document.createElement("label")
    questionLabel.htmlFor = "userQuestion"
    questionLabel.textContent = "Queries:"

    const questionInput = document.createElement("textarea")
    questionInput.id = "userQuestion"
    questionInput.required = true
    
    const btn = document.createElement("button")
    btn.classList.add("submit")
    btn.type = "submit"
    btn.textContent = "Submit"

    question.appendChild(questionLabel)
    question.appendChild(questionInput)

    email.appendChild(emailLabel)
    email.appendChild(emailInput)

    name.appendChild(nameLabel)
    name.appendChild(nameInput)

    form.appendChild(formHeader)
    form.appendChild(name)
    form.appendChild(email)
    form.appendChild(question)
    form.appendChild(btn)

    form.addEventListener("submit", (e) => {
        e.preventDefault();   // 🔥 stops page reload
    }); 

    container.appendChild(location)
    container.appendChild(form)

    content.appendChild(container)

    
}