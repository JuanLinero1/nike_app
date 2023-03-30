import discountPrice from "./discountPrice"

function sizeButton(SOURCE) {
    const ContainerBtn = document.querySelector(".product__size .product__size--buttons")
    
    for(let index of SOURCE[0].Data.Size){
        ContainerBtn.innerHTML += `<button class="btn__size">UK ${index}</button>`
    }
    const BtnGroup = document.querySelectorAll(".btn__size")

    window.addEventListener("load", () => {
        BtnGroup[0].classList.toggle("btn__size-touch")
        discountPrice(SOURCE[0].Data.Cost[0], SOURCE)
    })

    for (let i = 0; i < BtnGroup.length; i++) {
        BtnGroup[i].addEventListener("touchend", () => {
            BtnGroup[i].classList.toggle("btn__size-touch")
            discountPrice(SOURCE[0].Data.Cost[i], SOURCE)
        })
        
    }


}

export default sizeButton