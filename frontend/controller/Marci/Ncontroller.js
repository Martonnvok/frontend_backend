import NavigacioView from "../../view/Marci/nav/NavigacioView.js";
import NavModel from "../../model/Marci/NavModel.js";

class Ncontroller {
  #nav
  constructor() {
    this.#nav = new NavModel();
    new NavigacioView($(".navigacio"), this.#nav.getleiro());
  }

  
}
export default Ncontroller;