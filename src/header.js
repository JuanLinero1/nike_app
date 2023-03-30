function header(SOURCE, COLOR) {
    const HeaderTitle = document.querySelector(".header--title")
    const capitalize = (s) => s[0].toUpperCase() + s.slice(1)
    HeaderTitle.textContent = `${SOURCE} ${capitalize(COLOR)}`
}

export default header