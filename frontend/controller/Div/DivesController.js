import UrlapView from "../../view/Dives/DivesUrlap/UrlapViews.js";
import UrlapModel from "../../model/Urlap/UrlapModel.js";
import MegjelenesView from "../../view/Dives/DivesMegjelenes/MegjelenesView.js";
import ListaModel from "../../model/List/ListaModel.js";
import DataService from "../../model/DataService.js";
class MasikController {
    constructor() {
      /*const MODEL = new UrlapModel();
      const LMODEL = new ListaModel();*/

      /*new UrlapView($(".urlap"), MODEL.getLeiro());
      new MegjelenesView($(".divesLista"), LMODEL.getleiro(), LMODEL.geturlapLeiro());*/
      
      this.urlapModel= new UrlapModel();
      this.dataService = new DataService();
      this.dataService.getAxiosData(
        "http://localhost:8000/api/writers",
        this.megjelenit, this.urlapModel.getLeiro()
      );

      $(window).on("click", (event)=>{
        
        this.dataService.postAxiosData("http://localhost:8000/api/writers", 
          event.detail
        );
      });
      
      
      
      
  
    }
    megjelenit(list, leiro) {
      new UrlapView($(".urlap"), leiro);
      new MegjelenesView($(".divesLista"), list, leiro);
      
    }
  }
  export default MasikController;