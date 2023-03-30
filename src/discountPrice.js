function discountPrice(COST, SOURCE) {
    const ContainerPrice = document.querySelector(".product__price")

    const Data = SOURCE[0].Data

    let result = 0
    result = ((COST * 1000) - 10).toLocaleString()


    ContainerPrice.innerHTML = `
        <h2>$${result}</h2>
        <h5 style="">${Data.Discount}% off</h5>
    `
}

export default discountPrice