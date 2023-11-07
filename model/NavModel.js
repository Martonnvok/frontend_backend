import { navLeiro } from "./navleiro.js";
class NavModel {
  #leiro = {};
  constructor() {
    this.#leiro = navLeiro;
  }

  get leiro() {
    return { ...this.#leiro };
  }

}
export default NavModel;
