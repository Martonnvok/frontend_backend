import UrlapView from "../../view/Marci/MasikUrlap/UrlapViews.js";
import UrlapModel from "../../model/Marci/UrlapModel.js";
import MegjelenesView from "../../view/Marci/DivesMegjelenes/MegjelenesView.js";
import ListaModel from "../../model/Marci/ListaModel.js";

class MasikController {
    constructor() {
      const MODEL = new UrlapModel();
      const LMODEL = new ListaModel();

      new UrlapView($(".urlap"), MODEL.getLeiro());
      new MegjelenesView($(".divesLista"), LMODEL.getleiro(), LMODEL.geturlapLeiro());
  
     
    }
  
  }
  export default MasikController;