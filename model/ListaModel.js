import { listaLeiro } from "./lista.js";
import { szuloAdatok } from "./urlapleiro.js";
class ListaModel {
  #leiro = {};
  #minta = [];
  constructor() {
    this.#leiro = listaLeiro;
    this.#minta = szuloAdatok;
  }

  getleiro() {
    return { ...this.#leiro };
  }

  getSzulo() {
    return { ...this.#minta };
  }

}
export default ListaModel;
