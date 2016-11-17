"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var notificationService_1 = require('./notificationService');
var Notificacion = (function () {
    function Notificacion() {
    }
    return Notificacion;
}());
exports.Notificacion = Notificacion;
var AppComponent = (function () {
    function AppComponent(notificationService) {
        this.notificacion = {
            id: 1,
            nombreCurso: '',
            infoCurso: ''
        };
        this.enviarNotificacion = function (notificacion) {
            notificationService.enviarNotificacion(notificacion);
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [notificationService_1.NotificationService],
            template: "\n  <header>\n    <div class=\"container\">\n      <h1>Comunicaciones EAFIT</h1>\n    </div>\n\n    <div class=\"container\">\n      <!-- Static navbar -->\n      <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Opciones</a>\n          </div>\n          <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"active\"><a href=\"#\">Home</a></li>\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Personas <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Registrar</a></li>\n                  <li><a href=\"#\">Modificar</a></li>\n                  <li><a href=\"#\">Eliminar</a></li>\n                </ul>\n              </li>\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Cursos <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">A\u00F1adir</a></li>\n                  <li><a href=\"#\">Modificar</a></li>\n                  <li><a href=\"#\">Eliminar</a></li>\n                </ul>\n              </li>\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Notificacion <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"/#\">Enviar</a></li>\n                  <li><a href=\"#\">Historial</a></li>\n                </ul>\n              </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"active\"><a href=\"login/login.html\">Salir</a></li>\n            </ul>\n          </div><!--/.nav-collapse -->\n        </div><!--/.container-fluid -->\n      </nav>\n    </div> <!-- /container -->\n    </header>\n    <div class=\"container\">\n        <section class=\"main row\">\n\n          <div class=\"col-md-12\">\n            Curso: <input [(ngModel)]=\"notificacion.nombreCurso\" placeholder=\"Curso Ingl\u00E9s Adultos\" style = \"width: 410px;\"><br><br>\n          </div>\n\n          <div class=\"col-md-12\">\n            Nivel: <input [(ngModel)]=\"notificacion.infoCurso\" placeholder=\"Nivel 8\" style = \"width: 410px;\"><br><br>\n          </div>\n\n          <div class=\"col-md-12\">\n            Fecha: <input [(ngModel)]=\"notificacion.infoCurso\" placeholder=\"Fecha inicio: 28/09/2016\" style = \"width: 410px;\"><br><br>\n          </div>\n\n          <div class=\"col-md-12\">\n            Hora: <input [(ngModel)]=\"notificacion.infoCurso\" placeholder=\"Hora: 10-12\" style = \"width: 410px;\"><br><br>\n          </div>\n\n          <div class=\"col-md-12\">\n            D\u00EDas: <input [(ngModel)]=\"notificacion.infoCurso\" placeholder=\"L,W,V\" style = \"width: 410px;\"><br><br>\n          </div>\n\n          <div class=\"col-md-12\">\n            Sal\u00F3n: <input [(ngModel)]=\"notificacion.infoCurso\" placeholder=\"Sal\u00F3n: 1-701\" style = \"width: 410px;\"><br><br>\n          </div>\n\n          <div class=\"col-md-12\">\n            <button class=\"btn btn-primary\" (click)=\"enviarNotificacion(notificacion)\">Enviar notificacion</button>\n          </div>\n        </section>\n    </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [notificationService_1.NotificationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map