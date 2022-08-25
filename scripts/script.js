const INTERACTIVE_SEARCH_BREAKPOINT = 490

const menu = document.querySelector(".nav")
const burgerButton = document.querySelector(".burger-button")
const closeButton = document.querySelector(".close-button")

const searchField = document.querySelector(".search-field")
const searchButton = document.querySelector(".search-button")
const searchWrapper = document.querySelector(".search-wrapper")
const profileWrapper = document.querySelector(".profile-wrapper")

let searchIsOpen = false

burgerButton.addEventListener("click", () => {
    menu.classList.add("open")
})

closeButton.addEventListener("click", ()=> {
    menu.classList.remove("open")
})

searchButton.addEventListener("click", openSearchField)
document.defaultView.addEventListener("resize", () => {
    if (searchIsOpen) {
        vw = Math.max(document.documentElement.clientWidth || 0,
            window.innerWidth || 0)
        if (vw > INTERACTIVE_SEARCH_BREAKPOINT) {
            searchButton.click()
        }
    }
})

function openSearchField() {
    vw = Math.max(document.documentElement.clientWidth || 0,
         window.innerWidth || 0)

    if (vw <= INTERACTIVE_SEARCH_BREAKPOINT) {
        profileWrapper.setAttribute("style",
        "display: none")
        searchField.setAttribute("style",
         "display: block")
        searchWrapper.setAttribute("style", 
        "grid-area: 1 / 2 / 2 / 4;")
        searchIsOpen = true
        searchButton.addEventListener("click", closeSearchField, {once:true})
    }
}

function closeSearchField() {
    removeAttributes("style", profileWrapper, searchField, searchWrapper)
    searchIsOpen = false
}

function removeAttributes(attribute, ...targets) {
    targets.forEach(target => {
        target.removeAttribute(attribute)
    })
}