import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NotificationService } from './notificationService';
import { Injectable } from '@angular/core';

export class Notificacion {
  id: number;
  nombreCurso: string;
  infoCurso: string;
}

@Component({
  selector: 'my-app',
  providers: [NotificationService],
  template: `
  <header>
    <div class="container">

  <h1>Comunicaciones EAFIT</h1>

    </div>

  </header>
  Curso: <input [(ngModel)]="notificacion.nombreCurso" placeholder="Curso Inglés Adultos"><br><br>
  Información de curso: <input [(ngModel)]="notificacion.infoCurso" placeholder="Nivel 8 - Fecha inicio: 28/09/2016 - Hora: 10-12 L,W,V - Salón: 1-701" style = "width: 410px;"><br><br>
  <button class="btn btn-primary" (click)="enviarNotificacion(notificacion)">Enviar notificacion</button>
  `
})

export class AppComponent {

  notificacion: Notificacion = {
    id: 1,
    nombreCurso: '',
    infoCurso: ''
  };

  constructor(notificationService: NotificationService) {
  }

  enviarNotificacion : function(notificacion) {
     notificationService.enviarNotificacion(notificacion);
  }
}
