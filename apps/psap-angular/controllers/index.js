import angular from "angular";
import { AppController } from "psap-angular/controllers/app.controller";

export const AppControllerModule = angular
  .module('app.controllers', [
  ])
  .controller('AppController', AppController)
  .name
