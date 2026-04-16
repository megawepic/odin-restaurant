import skagMeat from "./skag-meat.jpg";
import fish from "./fish.jpg"
import moxxiDrink from "./Moxxi_drink.png"
import chocolateChip from "./chocolate_chips.png"

export function menupage(content){
    content.textContent = ""

    const container = document.createElement("div")
    container.classList.add("container")

    const section1 = document.createElement("h1")
    section1.textContent = "Mains"

    const card1 = document.createElement("div")
    card1.classList.add("menu", "card")

    const info1 = document.createElement("div")
    info1.classList.add("info")

    const header1 = document.createElement("h2")
    header1.textContent = "Skag in a Can"

    const img1 = document.createElement("img")
    img1.src = skagMeat
    img1.alt = "Picture of canned skag meat"

    const description1 = document.createElement("p")
    description1.textContent = "Finest Skag meat in all of pandora. Melts in your mouth faster than Tediore melts through the BADASSES"

    const price1 = document.createElement("p")
    price1.textContent = "$12"

    info1.appendChild(header1)
    info1.appendChild(description1)
    info1.appendChild(price1)

    card1.appendChild(img1)
    card1.appendChild(info1)

    const card2 = document.createElement("div")
    card2.classList.add("menu", "card")

    const info2 = document.createElement("div")
    info2.classList.add("info")

    const header2 = document.createElement("h2")
    header2.textContent = "BIG FISH"

    const img2 = document.createElement("img")
    img2.src = fish
    img2.alt = "Big fish caught in borderlands"
    
    const description2 = document.createElement("p")
    description2.textContent = "Biggest fish in all of Pandora."

    const price2 = document.createElement("p")
    price2.textContent = "$22"

    const section2 = document.createElement("h1")
    section2.textContent = "Drinks"

    info2.appendChild(header2)
    info2.appendChild(description2)
    info2.appendChild(price2)

    card2.appendChild(img2)
    card2.appendChild(info2)

    const card3 = document.createElement("div")
    card3.classList.add("card", "menu")

    const info3 = document.createElement("div")
    info3.classList.add("info")

    const header3 = document.createElement("h2")
    header3.textContent = "Tiny Tina's chocholate chips"

    const description3 = document.createElement("p")
    description3.textContent = "Hits you like KAPOW!!!!!"

    const price3 = document.createElement("p")
    price3.textContent = "$13"

    const img3 = document.createElement("img")
    img3.src = chocolateChip
    img3.alt = "Tina's chocolate chips"

    info3.appendChild(header3)
    info3.appendChild(description3)
    info3.appendChild(price3)
    card3.appendChild(img3)
    card3.appendChild(info3)

    const card4 = document.createElement("div")
    card4.classList.add("card", "menu")

    const info4 = document.createElement("div")
    info4.classList.add("info")

    const header4 = document.createElement("h2")
    header4.textContent = "Moxxi's homebrew"

    const description4 = document.createElement("p")
    description4.textContent = "Fall in love with Moxxi's Juices"

    const price4 = document.createElement("p")
    price4.textContent = "$6.90"

    const img4 = document.createElement("img")
    img4.src = moxxiDrink
    img4.alt = "Alcoholic drink from moxxi bar"

    info4.appendChild(header4)
    info4.appendChild(description4)
    info4.appendChild(price4)
    card4.appendChild(img4)
    card4.appendChild(info4)

    container.appendChild(section1)
    container.appendChild(card1)
    container.appendChild(card2)
    container.appendChild(card3)
    container.appendChild(section2)
    container.appendChild(card4)

    content.appendChild(container)
}