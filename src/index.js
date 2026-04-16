import "./styles.css";
import tiktok from "./tiktok.png";
import instagram from "./instagram.png"
import facebook from "./facebook.png"
import { intropage } from "./intro-page.js";
import { menupage } from "./menu.js";
import { connect } from "./contact.js"

const content = document.getElementById("content")

intropage(content)

const tiktokImg = document.createElement("img")
tiktokImg.src = tiktok;
tiktokImg.alt = "tiktok logo"

const instagramImg = document.createElement("img")
instagramImg.src = instagram
instagramImg.alt = "instagram logo"

const facebookImg = document.createElement("img")
facebookImg.src = facebook
facebookImg.alt = "facebook logo"

const socialMedia = document.getElementById("socialMedia")

socialMedia.appendChild(tiktokImg)
socialMedia.appendChild(instagramImg)
socialMedia.appendChild(facebookImg)

const info = document.getElementById("info")
const menu = document.getElementById("menu")
const contact = document.getElementById("contact")

info.addEventListener("click", () => intropage(content))

menu.onclick = function() {
    menupage(content)
}

contact.onclick = function() {
    connect(content)
}