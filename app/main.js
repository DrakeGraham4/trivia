import { TriviasController } from "./Controllers/TriviasController.js";

class App {
  triviasController = new TriviasController()
}

window["app"] = new App();
