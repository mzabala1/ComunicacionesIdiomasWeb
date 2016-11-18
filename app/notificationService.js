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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var NotificationService = (function () {
    function NotificationService(http) {
        this.http = http;
    }
    NotificationService.prototype.enviarNotificacion = function (notificacion) {
        /*var objetoNotificacion = `{
            "to" : "cT0eoao5R4w:APA91bGTlSeEXId056I2Yeu_RvKsUwMHzQe1B9CNHbxi-Xkahh5dgTDLJsTIVgwBDzwXBV58BdzZQlZa5lBtfUxsM81qsm-lnNcOFf5VrTkBQhSC94IS1fTPvfZhOtEIq0IVNXu2J0B5",
            "notification" : {
            "body" : "great match!",
            "title" : "",
            "icon" : "myicon"
            }
          }`;*/
        var objetoNotificacion = {};
        objetoNotificacion.to = "fxvqcw8CZP0:APA91bFUPbAYEshubDSNwSBlgEsrNXKj6oNqlRBMJzLzoIbfKE7ZBK_idyGHmlZMantXlrxwuEIzi2hVwjq_vr7dtargKvsynHfw162FDf1eZkLzwSTH6DrtOPM12KRWPPShCFLrEBrB";
        objetoNotificacion.notification = {};
        objetoNotificacion.notification.body = notificacion.nivel + " - " + notificacion.fecha + " - " + notificacion.hora +
            " - " + notificacion.hora + " - " + notificacion.dias + " - " + notificacion.salon;
        objetoNotificacion.notification.title = notificacion.curso;
        objetoNotificacion.notification.icon = "myicon";
        var json = JSON.stringify(objetoNotificacion);
        var headers = new http_1.Headers();
        headers.append('Authorization', 'key=AIzaSyA3HawNKvXJsr8l4MGZTbXUeLrltAqdiT0');
        headers.append('Content-Type', 'application/json');
        this.http
            .post('https://fcm.googleapis.com/fcm/send', json, { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            alert('Mensaje enviado exitosamente');
        }, function (error) {
            console.log(error);
        });
    };
    ;
    NotificationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=notificationService.js.map