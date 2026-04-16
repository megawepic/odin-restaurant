export function intropage(content){
    content.textContent = ""

    const baseinfo = document.createElement("div")
    baseinfo.classList.add("base-info")

    const texts = [
    "Welcome children of the vault",
    "You have entered the only place to satiate your hunger in Pandora's wasteland...",
    "Fuel up and prepare for the rest of your adventures Vault Hunter"
    ];

    texts.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    baseinfo.appendChild(p);
    })

    const openhours = document.createElement("div")
    openhours.classList.add("opening-hours")
    
    const operation = document.createElement("h3")
    operation.textContent = "Operating hours:"

    const ul = document.createElement("ul")

    const timing = [
    "Monday 10:00-21:00",
    "Tuesday 10:00-21:00",
    "Wednesday 10:00-21:00",
    "Thursday 10:00-21:00",
    "Friday 11:00-23:00",
    "Saturday 11:00-23:00",
    "Sunday 11:00-21:00"
    ]

    timing.forEach (time => {
        const li = document.createElement("li")
        li.textContent = time
        ul.appendChild(li)
    })
    openhours.appendChild(operation)
    openhours.appendChild(ul)
    content.appendChild(baseinfo)
    content.appendChild(openhours)
}