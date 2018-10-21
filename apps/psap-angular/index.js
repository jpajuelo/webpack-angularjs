import "psap-angular/favicon.ico";
import "psap-angular/theme.css";

import "psap-angular/templates/test.pug";

import angular from "angular";
import angularMaterial from "angular-material";
import { AppControllerModule } from "psap-angular/controllers";

angular
  .module('app', [
    angularMaterial,
    AppControllerModule
  ])
