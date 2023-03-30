const NikeSneakers = [
  {
    Collection: "Hu NMD",
    SneakersImg: [
      "./public/assets/product/blue.png", //blue, yellow
      "./public/assets/product/purple.png",  //purple, violet
      "./public/assets/product/yellow.png", //yello, black 
    ],
    ShoeType: ["blue", "purple", "yellow"],
    Data: {
      Size: [6, 7, 8, 9],
      Cost: [30, 35, 40, 45],
      Discount: 12
    }
  }
]

import colorChanger from "./src/colorChanger"
import sizeButton from "./src/sizeButton"
import bookmark from "./src/bookmark"
// ---------------MAIN----------------
//if time a class shall be done or somethin idk think ill work
sizeButton(NikeSneakers)
colorChanger(NikeSneakers) 
bookmark()
