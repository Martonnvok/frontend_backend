

import NavigacioView from "../view/nav/NavigacioView.js";
import NavModel from "../model/NavModel.js";

class Ncontroller {
  constructor() {
    const nav = new NavModel();
    new NavigacioView($(".navigacio", nav.leiro));
  }

  
}
export default Ncontroller;