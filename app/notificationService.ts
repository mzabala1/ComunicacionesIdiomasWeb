import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NotificationService {
  constructor(private http: Http) { }

enviarNotificacion(notificacion) {

  var objetoNotificacion = `{
      "to" : "cT0eoao5R4w:APA91bGTlSeEXId056I2Yeu_RvKsUwMHzQe1B9CNHbxi-Xkahh5dgTDLJsTIVgwBDzwXBV58BdzZQlZa5lBtfUxsM81qsm-lnNcOFf5VrTkBQhSC94IS1fTPvfZhOtEIq0IVNXu2J0B5",
      "notification" : {
      "body" : "great match!",
      "title" : "",
      "icon" : "myicon"
      }
    }`;

    /*var objetoNotificacion = {};
    objetoNotificacion.to = "cT0eoao5R4w:APA91bGTlSeEXId056I2Yeu_RvKsUwMHzQe1B9CNHbxi-Xkahh5dgTDLJsTIVgwBDzwXBV58BdzZQlZa5lBtfUxsM81qsm-lnNcOFf5VrTkBQhSC94IS1fTPvfZhOtEIq0IVNXu2J0B5";
    objetoNotificacion.notification = {};
    objetoNotificacion.notification.body = notificacion.infoCurso;
    objetoNotificacion.notification.title = notificacion.nombreCurso;
    objetoNotificacion.notification.icon = "myicon";

    var json = JSON.stringify(objetoNotificacion);*/

  	var headers = new Headers();
  	headers.append('Authorization', 'key=AIzaSyA3HawNKvXJsr8l4MGZTbXUeLrltAqdiT0');
  	headers.append('Content-Type', 'application/json');

  this.http
    .post('https://fcm.googleapis.com/fcm/send', objetoNotificacion, { headers: headers })
    .map(response => response.json())
    .subscribe(data => {
      alert('Mensaje enviado exitosamente');
    }, error => {
      console.log(error);
    });
};
}
