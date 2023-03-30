import Img from "./Img"
import header from "./header"

function colorChanger(SOURCE) {

    const container = document.querySelector(".container__color-changer")

    for(let index of SOURCE[0].ShoeType){
        container.innerHTML += `
        <button class="btn__changer">
        <div style="background:${index};" class="changer"></div>
        </button>
        `
    }
    
    const ButtonChanger = document.querySelectorAll(".btn__changer")
    
    window.addEventListener("load", () => {
        ButtonChanger[0].classList.add(`changer__active`)
        setTimeout(() => {
            ButtonChanger[0].classList.remove(`changer__active`)
        }, 500)

        header(SOURCE[0].Collection, SOURCE[0].ShoeType[0])
        Img(SOURCE[0].SneakersImg[0])
    })

    for(let i = 0; i < ButtonChanger.length; i++){
        ButtonChanger[i].addEventListener("touchend", () => {
                ButtonChanger[i].classList.add(`changer__active`)
                setTimeout(() => {
                    ButtonChanger[i].classList.remove(`changer__active`)
                }, 500)

                Img(SOURCE[0].SneakersImg[i])
                header(SOURCE[0].Collection, SOURCE[0].ShoeType[i])
        })
    }
    

}

export default colorChanger