const NikeSneakers = [
  {
    Collection: "Hu NMD",
    SneakersImg: [

      "https://i.postimg.cc/RVtfHwSk/blue.png", //blue, yellow
      "https://i.postimg.cc/nryDWhkS/purple.png",  //purple, violet
      "https://i.postimg.cc/y6tcxLHh/yellow.png", //yello, black 
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
