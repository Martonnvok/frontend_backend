import Controller from "./controller/Controller.js";
import MasikController from "./controller/Marci/MasikController.js";
import Ncontroller from "./controller/Marci/Ncontroller.js";
$(function () {
  new Controller();
  new Ncontroller();
  new MasikController();
});
