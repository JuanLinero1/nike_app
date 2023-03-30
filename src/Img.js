function Img(source) {
    const img = document.querySelector(".product__img")

    img.style = `
        background: url(${source}); 
        background-size: contain;
        background-repeat: no-repeat;
    `
}

export default Img