function bookmark() {
    const bookmark = document.querySelector(".container__bookmark")

    bookmark.addEventListener("touchend", () => {
        bookmark.classList.toggle("container__bookmark-active")
    })
}

export default bookmark