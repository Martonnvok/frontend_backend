import DataService from "../../model/DataService.js";
import Megjelenit from "../../view/Table/Megjelenit.js";
import UrlapView from "../../view/Dives/Urlap/UrlapView.js";
import UrlapModel from "../../model/Urlap/UrlapModel.js";

class Controller {
  constructor() {
    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();

    this.dataService.getAxiosData(
      "http://localhost:8000/api/writers",
      this.megjelenit, this.urlapModel.getLeiro()
    );

    $(window).on("submit", (event) => {
      console.log(event.detail)
      this.dataService.postAxiosData("http://localhost:8000/api/writers", event.detail)
      
    })

    /*this.dataService.putAxiosData(
      "http://localhost:8000/api/writers", this.urlapModel.getLeiro()
    );*/

   $(window).on("torol", (event) => {
    console.log("Töröltem: ", event.detail);
      this.dataService.deleteAxiosData("http://localhost:8000/api/writers", event.detail);
    })


  }

  megjelenit(list, leiro) {
    new UrlapView($(".urlap"), leiro);
    new Megjelenit(list, $(".lista"), leiro);

  }
}
export default Controller;