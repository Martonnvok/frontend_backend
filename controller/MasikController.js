import UrlapView from "../view/MasikUrlap/UrlapViews.js";
import UrlapModel from "../model/UrlapModel.js";
import MegjelenesView from "../view/DivesMegjelenes/MegjelenesView.js";
import ListaModel from "../model/ListaModel.js";

class MasikController {
    constructor() {
      const MODEL = new UrlapModel();
      const LMODEL = new ListaModel();

      new UrlapView($(".urlap"), MODEL.getLeiro());
      new MegjelenesView($(".divesLista"), LMODEL.getleiro(), LMODEL.getSzulo());
  
     
    }
  
  }
  export default MasikController;