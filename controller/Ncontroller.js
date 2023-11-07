import NavigacioView from "../view/nav/NavigacioView.js";
import NavModel from "../model/NavModel.js";

class Ncontroller {
  #nav
  constructor() {
    this.#nav = new NavModel();
    new NavigacioView($(".navigacio"), this.#nav.getleiro());
  }

  
}
export default Ncontroller;